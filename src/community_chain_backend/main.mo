import Array "mo:base/Array";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";
import Option "mo:base/Option";

actor {
  // 活動のデータ型
  public type Activity = {
    id: Text;
    title: Text;
    description: Text;
    location: Text;
    reward: Nat;
    creator: Principal;
    assignee: ?Principal;
    status: Text; // "open", "assigned", "completed"
    created_at: Int;
  };

  // データの永続化のための安定変数
  private stable var nextActivityId : Nat = 1;
  private stable var activitiesEntries : [(Text, Activity)] = [];

  // 実行時のデータ構造
  private var activities = HashMap.HashMap<Text, Activity>(10, Text.equal, Text.hash);

  // システム初期化（アップグレード時に呼び出される）
  system func preupgrade() {
    activitiesEntries := Iter.toArray(activities.entries());
  };

  system func postupgrade() {
    activities := HashMap.fromIter<Text, Activity>(Iter.fromArray(activitiesEntries), 10, Text.equal, Text.hash);
    activitiesEntries := [];
  };

  // 新規活動の作成
  public shared(msg) func createActivity(title: Text, description: Text, location: Text, reward: Nat) : async Text {
    let id = Nat.toText(nextActivityId);
    let activity : Activity = {
      id = id;
      title = title;
      description = description;
      location = location;
      reward = reward;
      creator = msg.caller;
      assignee = null;
      status = "open";
      created_at = Time.now();
    };

    activities.put(id, activity);
    nextActivityId += 1;
    return id;
  };

  // 活動一覧の取得
  public query func listActivities() : async [Activity] {
    var result : [Activity] = [];
    for ((_, activity) in activities.entries()) {
      result := Array.append<Activity>(result, [activity]);
    };
    return result;
  };

  // 活動詳細の取得
  public query func getActivity(id: Text) : async ?Activity {
    return activities.get(id);
  };

  // 活動への参加申請
  public shared(msg) func applyForActivity(id: Text) : async Bool {
    switch (activities.get(id)) {
      case (null) { return false; };
      case (?activity) {
        if (activity.status != "open") { return false; };

        let updatedActivity : Activity = {
          id = activity.id;
          title = activity.title;
          description = activity.description;
          location = activity.location;
          reward = activity.reward;
          creator = activity.creator;
          assignee = ?msg.caller;
          status = "assigned";
          created_at = activity.created_at;
        };

        activities.put(id, updatedActivity);
        return true;
      };
    };
  };

  // 活動完了の報告（参加者が実行）
  public shared(msg) func completeActivity(id: Text) : async Bool {
    switch (activities.get(id)) {
      case (null) { return false; };
      case (?activity) {
        if (activity.status != "assigned") { return false; };
        if (Option.isNull(activity.assignee) or Option.unwrap(activity.assignee) != msg.caller) { return false; };

        let updatedActivity : Activity = {
          id = activity.id;
          title = activity.title;
          description = activity.description;
          location = activity.location;
          reward = activity.reward;
          creator = activity.creator;
          assignee = activity.assignee;
          status = "completed";
          created_at = activity.created_at;
        };

        activities.put(id, updatedActivity);
        // ここに報酬トークンの送信ロジックが入る（後で実装）
        return true;
      };
    };
  };

  // 自分が作成した活動の一覧取得
  public shared query(msg) func getMyCreatedActivities() : async [Activity] {
    var result : [Activity] = [];
    for ((_, activity) in activities.entries()) {
      if (activity.creator == msg.caller) {
        result := Array.append<Activity>(result, [activity]);
      };
    };
    return result;
  };
// 自分が参加している活動の一覧取得
  public shared query(msg) func getMyAssignedActivities() : async [Activity] {
    var result : [Activity] = [];
    for ((_, activity) in activities.entries()) {
      switch (activity.assignee) {
        case (null) {};
        case (?assignee) {
          if (assignee == msg.caller) {
            result := Array.append<Activity>(result, [activity]);
          };
        };
      };
    };
    return result;
  };
};
