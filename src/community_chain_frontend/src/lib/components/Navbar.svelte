<script>
  import { isAuthenticated, isInitialized, login, logout } from '$lib/api/auth';
  import { page } from '$app/stores';
  import LoadingSpinner from './LoadingSpinner.svelte';
  
  // アクティブページの判定
  $: isActive = (path) => $page.url.pathname === path ? 'active' : '';
</script>

<nav class="navbar">
  <div class="container">
    <a href="/" class="logo">コミュニティチェーン</a>
    
    <div class="nav-links">
      <a href="/" class={isActive('/')}>活動一覧</a>
      
      {#if !$isInitialized}
        <!-- 初期化中の表示 -->
        <div class="loading-container">
          <LoadingSpinner size="1.5rem" />
        </div>
      {:else if $isAuthenticated}
        <a href="/create" class={isActive('/create')}>活動を作成</a>
        <a href="/dashboard" class={isActive('/dashboard')}>マイページ</a>
        <button on:click={logout} class="btn btn-outline">ログアウト</button>
      {:else}
        <button on:click={login} class="btn btn-primary">ログイン</button>
      {/if}
    </div>
  </div>
</nav>

<style>
  .navbar {
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .nav-links a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: 500;
  }

  .nav-links a:hover, .nav-links a.active {
    color: var(--primary-color);
  }

  .loading-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
  }
</style>
