<script>
  import { onMount } from 'svelte';
  import { initAuth, isInitialized } from '$lib/api/auth';
  import Navbar from '$lib/components/Navbar.svelte';
  import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
  import '../app.css';

  let initializing = true;

  onMount(async () => {
    try {
      await initAuth();
    } catch (error) {
      console.error('Failed to initialize auth:', error);
    } finally {
      initializing = false;
    }
  });
</script>

<div class="app">
  <Navbar />
  
  <main class="container">
    {#if initializing && !$isInitialized}
      <div class="loading-container">
        <LoadingSpinner size="3rem" />
        <p>アプリケーションを読み込み中...</p>
      </div>
    {:else}
      <slot />
    {/if}
  </main>
  
  <footer>
    <div class="container">
      <p>© 2025 コミュニティチェーン - Internet Computer Protocol 上に構築</p>
    </div>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    padding: 2rem 0;
  }

  footer {
    background-color: var(--bg-muted);
    padding: 1.5rem 0;
    text-align: center;
    color: var(--text-muted);
  }

  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    gap: 1rem;
  }
</style>
