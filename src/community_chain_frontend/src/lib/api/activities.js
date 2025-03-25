import { get } from 'svelte/store';
import { actorStore, ensureInitialized } from './auth';

// 活動一覧の取得
export const getActivities = async () => {
  try {
    console.log("getActivities: 関数が呼び出されました");
    // 確実に初期化されたアクターを取得
    const actor = await ensureInitialized();
    console.log("getActivities: アクター取得成功", actor);
    
    if (!actor) {
      console.error("getActivities: アクターがnullです");
      throw new Error('Actor not initialized');
    }
    
    console.log("getActivities: listActivities 呼び出し前");
    const result = await actor.listActivities();
    console.log("getActivities: 結果を取得", result);
    return result;
  } catch (error) {
    console.error('Failed to fetch activities:', error);
    throw error;
  }
};

// 活動詳細の取得
export const getActivity = async (id) => {
  try {
    console.log(`getActivity: ID ${id} の詳細を取得中`);
    const actor = await ensureInitialized();
    
    if (!actor) {
      console.error(`getActivity: アクターがnullです (ID: ${id})`);
      throw new Error('Actor not initialized');
    }
    
    console.log(`getActivity: getActivity 呼び出し前 (ID: ${id})`);
    const result = await actor.getActivity(id);
    console.log(`getActivity: 結果を取得 (ID: ${id})`, result);
    return result;
  } catch (error) {
    console.error(`Failed to fetch activity ${id}:`, error);
    throw error;
  }
};

// 新規活動の作成
export const createActivity = async (title, description, location, reward) => {
  try {
    console.log("createActivity: 新規活動作成開始", { title, description, location, reward });
    const actor = await ensureInitialized();
    
    if (!actor) {
      console.error("createActivity: アクターがnullです");
      throw new Error('Actor not initialized');
    }
    
    console.log("createActivity: createActivity 呼び出し前");
    const result = await actor.createActivity(title, description, location, Number(reward));
    console.log("createActivity: 活動作成成功", result);
    return result;
  } catch (error) {
    console.error('Failed to create activity:', error);
    throw error;
  }
};

// 活動への参加申請
export const applyForActivity = async (id) => {
  try {
    console.log(`applyForActivity: ID ${id} の活動に参加申請`);
    const actor = await ensureInitialized();
    
    if (!actor) {
      console.error(`applyForActivity: アクターがnullです (ID: ${id})`);
      throw new Error('Actor not initialized');
    }
    
    console.log(`applyForActivity: applyForActivity 呼び出し前 (ID: ${id})`);
    const result = await actor.applyForActivity(id);
    console.log(`applyForActivity: 参加申請結果 (ID: ${id})`, result);
    return result;
  } catch (error) {
    console.error(`Failed to apply for activity ${id}:`, error);
    throw error;
  }
};

// 活動完了の報告
export const completeActivity = async (id) => {
  try {
    console.log(`completeActivity: ID ${id} の活動完了報告`);
    const actor = await ensureInitialized();
    
    if (!actor) {
      console.error(`completeActivity: アクターがnullです (ID: ${id})`);
      throw new Error('Actor not initialized');
    }
    
    console.log(`completeActivity: completeActivity 呼び出し前 (ID: ${id})`);
    const result = await actor.completeActivity(id);
    console.log(`completeActivity: 完了報告結果 (ID: ${id})`, result);
    return result;
  } catch (error) {
    console.error(`Failed to complete activity ${id}:`, error);
    throw error;
  }
};

// 自分が作成した活動の取得
export const getMyCreatedActivities = async () => {
  try {
    console.log("getMyCreatedActivities: 自分が作成した活動を取得");
    const actor = await ensureInitialized();
    
    if (!actor) {
      console.error("getMyCreatedActivities: アクターがnullです");
      throw new Error('Actor not initialized');
    }
    
    console.log("getMyCreatedActivities: getMyCreatedActivities 呼び出し前");
    const result = await actor.getMyCreatedActivities();
    console.log("getMyCreatedActivities: 結果を取得", result);
    return result;
  } catch (error) {
    console.error('Failed to fetch created activities:', error);
    throw error;
  }
};

// 自分が参加している活動の取得
export const getMyAssignedActivities = async () => {
  try {
    console.log("getMyAssignedActivities: 自分が参加している活動を取得");
    const actor = await ensureInitialized();
    
    if (!actor) {
      console.error("getMyAssignedActivities: アクターがnullです");
      throw new Error('Actor not initialized');
    }
    
    console.log("getMyAssignedActivities: getMyAssignedActivities 呼び出し前");
    const result = await actor.getMyAssignedActivities();
    console.log("getMyAssignedActivities: 結果を取得", result);
    return result;
  } catch (error) {
    console.error('Failed to fetch assigned activities:', error);
    throw error;
  }
};
