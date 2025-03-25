import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: '../../dist/community_chain_frontend',
      assets: '../../dist/community_chain_frontend',
      fallback: 'index.html', // SPAとしてfallbackを有効に
      precompress: false
    }),
    paths: {
      base: '',
    }
  }
};

export default config;
