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
  main {
    min-height: calc(100vh - 130px);
    padding: 2rem 0;
  }

  footer {
    text-align: center;
    padding: 1.5rem 0;
    color: var(--text-muted);
    font-size: 0.875rem;
    background-color: white;
    border-top: 1px solid var(--border-color);
  }
</style>
