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

// 初期化処理の修正
export const initAuth = async () => {
  const authClient = await AuthClient.create();
  const canisterId = import.meta.env.VITE_COMMUNITY_CHAIN_BACKEND_CANISTER_ID;

  console.log('Debug Canister ID:', canisterId);

  if (await authClient.isAuthenticated()) {
    const identity = authClient.getIdentity();
    const principal = identity.getPrincipal();

    const actor = createActor(canisterId, {
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

  // 🔧 修正：未認証時も identity を明示的に取得・使用
  const identity = authClient.getIdentity();
  const actor = createActor(canisterId, {
    agentOptions: { identity },
  });

  actorStore.set(actor);
  return false;
};

// ログイン処理の修正
export const login = async () => {
  const authClient = await AuthClient.create();
  const canisterId = import.meta.env.VITE_COMMUNITY_CHAIN_BACKEND_CANISTER_ID;
  const identityProvider = import.meta.env.VITE_II_URL || 'https://identity.ic0.app';

  return new Promise((resolve) => {
    authClient.login({
      identityProvider,
      onSuccess: async () => {
        const identity = authClient.getIdentity();
        const principal = identity.getPrincipal();

        const actor = createActor(canisterId, {
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

// ログアウト処理の修正
export const logout = async () => {
  const authClient = await AuthClient.create();
  await authClient.logout();

  const canisterId = import.meta.env.VITE_COMMUNITY_CHAIN_BACKEND_CANISTER_ID;
  const actor = createActor(canisterId, {});

  authStore.set({
    isAuthenticated: false,
    identity: null,
    principal: null,
  });

  actorStore.set(actor);
};
