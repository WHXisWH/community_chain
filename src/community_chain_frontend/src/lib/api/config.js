// 環境変数の管理と代替値を提供するモジュール

// バックエンドのCanister ID
export const BACKEND_CANISTER_ID = 
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_COMMUNITY_CHAIN_BACKEND_CANISTER_ID) 
    ? import.meta.env.VITE_COMMUNITY_CHAIN_BACKEND_CANISTER_ID 
    : "ficb4-4iaaa-aaaag-at7rq-cai"; // 本番環境のIDをフォールバックとして

// Internet Identity Canister ID  
export const II_CANISTER_ID = 
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_INTERNET_IDENTITY_CANISTER_ID) 
    ? import.meta.env.VITE_INTERNET_IDENTITY_CANISTER_ID 
    : "rdmx6-jaaaa-aaaaa-aaadq-cai"; // IC のメインネット II ID

// II URL
export const II_URL = 
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_II_URL) 
    ? import.meta.env.VITE_II_URL 
    : "https://identity.ic0.app";

// 開発環境かどうかの判定
export const isDevelopment = 
  typeof import.meta !== 'undefined' && import.meta.env?.DEV === true;

// ホスト（ローカルかICネットワークか）
export const host = isDevelopment 
  ? "http://localhost:4943" 
  : "https://ic0.app";
