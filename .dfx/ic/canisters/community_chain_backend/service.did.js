export const idlFactory = ({ IDL }) => {
  const Activity = IDL.Record({
    'id' : IDL.Text,
    'status' : IDL.Text,
    'reward' : IDL.Nat,
    'assignee' : IDL.Opt(IDL.Principal),
    'title' : IDL.Text,
    'creator' : IDL.Principal,
    'description' : IDL.Text,
    'created_at' : IDL.Int,
    'location' : IDL.Text,
  });
  return IDL.Service({
    'applyForActivity' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'completeActivity' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'createActivity' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Nat],
        [IDL.Text],
        [],
      ),
    'getActivity' : IDL.Func([IDL.Text], [IDL.Opt(Activity)], ['query']),
    'getMyAssignedActivities' : IDL.Func([], [IDL.Vec(Activity)], ['query']),
    'getMyCreatedActivities' : IDL.Func([], [IDL.Vec(Activity)], ['query']),
    'listActivities' : IDL.Func([], [IDL.Vec(Activity)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
