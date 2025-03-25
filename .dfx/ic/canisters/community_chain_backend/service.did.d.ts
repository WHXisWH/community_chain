import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Activity {
  'id' : string,
  'status' : string,
  'reward' : bigint,
  'assignee' : [] | [Principal],
  'title' : string,
  'creator' : Principal,
  'description' : string,
  'created_at' : bigint,
  'location' : string,
}
export interface _SERVICE {
  'applyForActivity' : ActorMethod<[string], boolean>,
  'completeActivity' : ActorMethod<[string], boolean>,
  'createActivity' : ActorMethod<[string, string, string, bigint], string>,
  'getActivity' : ActorMethod<[string], [] | [Activity]>,
  'getMyAssignedActivities' : ActorMethod<[], Array<Activity>>,
  'getMyCreatedActivities' : ActorMethod<[], Array<Activity>>,
  'listActivities' : ActorMethod<[], Array<Activity>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
