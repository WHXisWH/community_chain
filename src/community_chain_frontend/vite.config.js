import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    minify: true,
  },
  define: {
    // 環境変数
    'process.env.DFX_NETWORK': JSON.stringify(process.env.DFX_NETWORK || 'local'),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.env.COMMUNITY_CHAIN_BACKEND_CANISTER_ID': JSON.stringify(process.env.COMMUNITY_CHAIN_BACKEND_CANISTER_ID || 'community_chain_backend'),
    'process.env.INTERNET_IDENTITY_CANISTER_ID': JSON.stringify(process.env.INTERNET_IDENTITY_CANISTER_ID || 'internet_identity')
  }
});
