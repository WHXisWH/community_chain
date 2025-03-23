import { AuthClient } from '@dfinity/auth-client';
import { createActor } from '../../../../declarations/community_chain_backend';
import { writable, derived } from 'svelte/store';

// 認証状態管理
export const authStore = writable({
  isAuthenticated: false,
  identity: null,
  principal: null,
});

// バックエンド接続
export const actorStore = writable(null);

// 認証状態の取得
export const isAuthenticated = derived(
  authStore,
  ($authStore) => $authStore.isAuthenticated
);

// 初期化
export const initAuth = async () => {
  const authClient = await AuthClient.create();
  
  if (await authClient.isAuthenticated()) {
    const identity = authClient.getIdentity();
    const principal = identity.getPrincipal();
    
    const actor = createActor(process.env.COMMUNITY_CHAIN_BACKEND_CANISTER_ID, {
      agentOptions: { identity },
    });
    
    authStore.set({
      isAuthenticated: true,
      identity,
      principal: principal.toString(),
    });
    
    actorStore.set(actor);
    return true;
  }
  
  const actor = createActor(process.env.COMMUNITY_CHAIN_BACKEND_CANISTER_ID, {});
  actorStore.set(actor);
  return false;
};

// ログイン
export const login = async () => {
  const authClient = await AuthClient.create();
  
  return new Promise((resolve) => {
    authClient.login({
      identityProvider: process.env.II_URL || 'https://identity.ic0.app',
      onSuccess: async () => {
        // ログイン成功時の処理
        const identity = authClient.getIdentity();
        const principal = identity.getPrincipal();
        
        const actor = createActor(process.env.COMMUNITY_CHAIN_BACKEND_CANISTER_ID, {
          agentOptions: { identity },
        });
        
        authStore.set({
          isAuthenticated: true,
          identity,
          principal: principal.toString(),
        });
        
        actorStore.set(actor);
        resolve(true);
      },
      onError: (error) => {
        console.error('Login failed:', error);
        resolve(false);
      },
    });
  });
};

// ログアウト
export const logout = async () => {
  const authClient = await AuthClient.create();
  await authClient.logout();
  
  const actor = createActor(process.env.COMMUNITY_CHAIN_BACKEND_CANISTER_ID, {});
  
  authStore.set({
    isAuthenticated: false,
    identity: null,
    principal: null,
  });
  
  actorStore.set(actor);
};
