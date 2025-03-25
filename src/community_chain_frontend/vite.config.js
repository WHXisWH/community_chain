import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [sveltekit()],
  build: {
    outDir: '../../dist/community_chain_frontend',
    minify: true,
  },
  resolve: {
    alias: {
      $declarations: fileURLToPath(new URL('./declarations', import.meta.url)),
    },
  }
});
