<script>
  import { isAuthenticated } from '$lib/api/auth';
  import { login, logout } from '$lib/api/auth';
  import { page } from '$app/stores';
  
  // アクティブページの判定
  $: isActive = (path) => $page.url.pathname === path ? 'active' : '';
</script>

<nav class="navbar">
  <div class="container">
    <a href="/" class="logo">コミュニティチェーン</a>
    
    <div class="nav-links">
      <a href="/" class={isActive('/')}>活動一覧</a>
      
      {#if $isAuthenticated}
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
  /* スタイル省略 - 実際の実装ではここに適切なCSSを記述 */
</style>
