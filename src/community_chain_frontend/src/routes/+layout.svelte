<script>
  import { onMount } from 'svelte';
  import { initAuth } from '$lib/api/auth';
  import Navbar from '$lib/components/Navbar.svelte';
  import '../app.css';
  
  // 認証初期化
  onMount(async () => {
    await initAuth();
  });
</script>

<Navbar />

<main>
  <slot />
</main>

<footer>
  <div class="container">
    <p>© 2025 コミュニティチェーン - ICP Hackathon Wave 4</p>
  </div>
</footer>

<style>
  /* スタイル省略 */
</style>
