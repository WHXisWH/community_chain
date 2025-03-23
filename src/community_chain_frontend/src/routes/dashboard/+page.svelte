<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { getMyCreatedActivities, getMyAssignedActivities } from '$lib/api/activities';
  import { isAuthenticated } from '$lib/api/auth';
  import ActivityCard from '$lib/components/ActivityCard.svelte';
  import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
  
  let createdActivities = [];
  let assignedActivities = [];
  let loading = true;
  let error = null;
  let activeTab = 'created';
  
  // 認証チェックとデータ取得
  onMount(async () => {
    if (!$isAuthenticated) {
      goto('/');
      alert('マイページを表示するにはログインが必要です。');
      return;
    }
    
    try {
      // 並行してデータを取得
      const [created, assigned] = await Promise.all([
        getMyCreatedActivities(),
        getMyAssignedActivities()
      ]);
      
      createdActivities = created;
      assignedActivities = assigned;
    } catch (err) {
      error = 'データの読み込みに失敗しました。';
      console.error(err);
    } finally {
      loading = false;
    }
  });
  
  // タブ切り替え
  function setActiveTab(tab) {
    activeTab = tab;
  }
</script>

<svelte:head>
  <title>マイページ - コミュニティチェーン</title>
</svelte:head>

<section class="container">
  <div class="header">
    <h1>マイページ</h1>
    <p>あなたの活動を管理します</p>
  </div>
  
  {#if loading}
    <div class="loading">
      <LoadingSpinner />
      <p>データを読み込み中...</p>
    </div>
  {:else if error}
    <div class="alert alert-danger">
      <p>{error}</p>
      <button class="btn btn-primary" on:click={() => window.location.reload()}>再読み込み</button>
    </div>
  {:else}
    <div class="tabs">
      <div 
        class={`tab ${activeTab === 'created' ? 'active' : ''}`} 
        on:click={() => setActiveTab('created')}
      >
        作成した活動 ({createdActivities.length})
      </div>
      <div 
        class={`tab ${activeTab === 'assigned' ? 'active' : ''}`} 
        on:click={() => setActiveTab('assigned')}
      >
        参加中の活動 ({assignedActivities.length})
      </div>
    </div>
    
    {#if activeTab === 'created'}
      {#if createdActivities.length === 0}
        <div class="empty">
          <p>作成した活動はありません。</p>
          <a href="/create" class="btn btn-primary">活動を作成する</a>
        </div>
      {:else}
        <div class="grid grid-cols-1 grid-cols-2 grid-cols-3">
          {#each createdActivities as activity (activity.id)}
            <ActivityCard {activity} />
          {/each}
        </div>
      {/if}
    {:else if activeTab === 'assigned'}
      {#if assignedActivities.length === 0}
        <div class="empty">
          <p>参加中の活動はありません。</p>
          <a href="/" class="btn btn-primary">活動を探す</a>
        </div>
      {:else}
        <div class="grid grid-cols-1 grid-cols-2 grid-cols-3">
          {#each assignedActivities as activity (activity.id)}
            <ActivityCard {activity} />
          {/each}
        </div>
      {/if}
    {/if}
  {/if}
</section>
