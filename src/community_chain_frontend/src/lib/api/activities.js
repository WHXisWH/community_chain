import { get } from 'svelte/store';
import { actorStore } from './auth';

// 活動一覧の取得
export const getActivities = async () => {
  const actor = get(actorStore);
  if (!actor) throw new Error('Actor not initialized');
  
  try {
    return await actor.listActivities();
  } catch (error) {
    console.error('Failed to fetch activities:', error);
    throw error;
  }
};

// 活動詳細の取得
export const getActivity = async (id) => {
  const actor = get(actorStore);
  if (!actor) throw new Error('Actor not initialized');
  
  try {
    return await actor.getActivity(id);
  } catch (error) {
    console.error(`Failed to fetch activity ${id}:`, error);
    throw error;
  }
};

// 新規活動の作成
export const createActivity = async (title, description, location, reward) => {
  const actor = get(actorStore);
  if (!actor) throw new Error('Actor not initialized');
  
  try {
    return await actor.createActivity(title, description, location, Number(reward));
  } catch (error) {
    console.error('Failed to create activity:', error);
    throw error;
  }
};

// 活動への参加申請
export const applyForActivity = async (id) => {
  const actor = get(actorStore);
  if (!actor) throw new Error('Actor not initialized');
  
  try {
    return await actor.applyForActivity(id);
  } catch (error) {
    console.error(`Failed to apply for activity ${id}:`, error);
    throw error;
  }
};

// 活動完了の報告
export const completeActivity = async (id) => {
  const actor = get(actorStore);
  if (!actor) throw new Error('Actor not initialized');
  
  try {
    return await actor.completeActivity(id);
  } catch (error) {
    console.error(`Failed to complete activity ${id}:`, error);
    throw error;
  }
};

// 自分が作成した活動の取得
export const getMyCreatedActivities = async () => {
  const actor = get(actorStore);
  if (!actor) throw new Error('Actor not initialized');
  
  try {
    return await actor.getMyCreatedActivities();
  } catch (error) {
    console.error('Failed to fetch created activities:', error);
    throw error;
  }
};

// 自分が参加している活動の取得
export const getMyAssignedActivities = async () => {
  const actor = get(actorStore);
  if (!actor) throw new Error('Actor not initialized');
  
  try {
    return await actor.getMyAssignedActivities();
  } catch (error) {
    console.error('Failed to fetch assigned activities:', error);
    throw error;
  }
};
