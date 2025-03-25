import { AuthClient } from '@dfinity/auth-client';
import { createActor } from '../../../../declarations/community_chain_backend';
import { writable, derived, get } from 'svelte/store';

// 認証状態管理
export const authStore = writable({
  isAuthenticated: false,
  identity: null,
  principal: null,
  isInitialized: false // Add initialization flag
});

// バックエンド接続
export const actorStore = writable(null);

// 認証状態の取得
export const isAuthenticated = derived(
  authStore,
  ($authStore) => $authStore.isAuthenticated
);

// 初期化状態の取得
export const isInitialized = derived(
  authStore,
  ($authStore) => $authStore.isInitialized
);

// canisterIdを取得する関数（環境変数またはハードコードされた値から）
const getCanisterId = () => {
  // 環境変数が利用できる場合はそれを使用
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_COMMUNITY_CHAIN_BACKEND_CANISTER_ID) {
    return import.meta.env.VITE_COMMUNITY_CHAIN_BACKEND_CANISTER_ID;
  }
  // 環境変数が利用できない場合は直接canisterIdを指定
  return "ficb4-4iaaa-aaaag-at7rq-cai"; // 本番環境のcanisterIdをハードコード
};

// 初期化処理の修正
export const initAuth = async () => {
  try {
    console.log("Starting auth initialization...");
    const authClient = await AuthClient.create();
    const canisterId = getCanisterId();

    console.log('Debug Canister ID:', canisterId);

    // 初期化済みフラグを設定
    let actor;

    if (await authClient.isAuthenticated()) {
      const identity = authClient.getIdentity();
      const principal = identity.getPrincipal();

      actor = createActor(canisterId, {
        agentOptions: { identity },
      });

      authStore.update(state => ({
        ...state,
        isAuthenticated: true,
        identity,
        principal: principal.toString(),
        isInitialized: true
      }));
      
      console.log("Auth initialized with identity");
    } else {
      // 未認証時も anonymous identity でアクターを作成
      const identity = authClient.getIdentity();
      actor = createActor(canisterId, {
        agentOptions: { identity },
      });

      authStore.update(state => ({
        ...state,
        isAuthenticated: false,
        isInitialized: true
      }));

      console.log("Auth initialized anonymously");
    }

    actorStore.set(actor);
    return true;
  } catch (error) {
    console.error("Auth initialization failed:", error);
    // エラーでも初期化完了フラグを設定
    authStore.update(state => ({
      ...state,
      isInitialized: true
    }));
    return false;
  }
};

// ログイン処理の修正
export const login = async () => {
  try {
    const authClient = await AuthClient.create();
    const canisterId = getCanisterId();
    const identityProvider = 'https://identity.ic0.app';

    return new Promise((resolve) => {
      authClient.login({
        identityProvider,
        onSuccess: async () => {
          const identity = authClient.getIdentity();
          const principal = identity.getPrincipal();

          const actor = createActor(canisterId, {
            agentOptions: { identity },
          });

          authStore.update(state => ({
            ...state,
            isAuthenticated: true,
            identity,
            principal: principal.toString(),
            isInitialized: true
          }));

          actorStore.set(actor);
          resolve(true);
        },
        onError: (error) => {
          console.error('Login failed:', error);
          resolve(false);
        },
      });
    });
  } catch (error) {
    console.error("Login process failed:", error);
    return false;
  }
};

// ログアウト処理の修正
export const logout = async () => {
  try {
    const authClient = await AuthClient.create();
    await authClient.logout();

    const canisterId = getCanisterId();
    const identity = authClient.getIdentity(); // anonymous identity
    const actor = createActor(canisterId, {
      agentOptions: { identity }
    });

    authStore.update(state => ({
      ...state,
      isAuthenticated: false,
      identity: null,
      principal: null
    }));

    actorStore.set(actor);
    return true;
  } catch (error) {
    console.error("Logout failed:", error);
    return false;
  }
};

// 初期化を確実に行う関数
export const ensureInitialized = async () => {
  const state = get(authStore);
  if (!state.isInitialized) {
    await initAuth();
  }
  return get(actorStore);
};

// 初期化を実行（アプリケーション起動時に）
initAuth().catch(error => {
  console.error("Failed to initialize auth on startup:", error);
});
