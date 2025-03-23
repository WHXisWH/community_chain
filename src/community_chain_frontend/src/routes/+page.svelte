<script>
  import { onMount } from 'svelte';
  import { getActivities } from '$lib/api/activities';
  import ActivityCard from '$lib/components/ActivityCard.svelte';
  import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
  
  let activities = [];
  let loading = true;
  let error = null;
  
  onMount(async () => {
    try {
      activities = await getActivities();
      loading = false;
    } catch (err) {
      error = '活動データの読み込みに失敗しました。';
      loading = false;
      console.error(err);
    }
  });
</script>

<svelte:head>
  <title>コミュニティチェーン - 活動一覧</title>
</svelte:head>

<section>
  <div class="container">
    <div class="header">
      <h1>コミュニティ活動一覧</h1>
      <p>地域社会に貢献し、報酬を得よう</p>
    </div>
    
    {#if loading}
      <div class="loading">
        <LoadingSpinner />
        <p>活動データを読み込み中...</p>
      </div>
    {:else if error}
      <div class="alert alert-danger">
        <p>{error}</p>
        <button class="btn btn-primary" on:click={() => window.location.reload()}>再読み込み</button>
      </div>
    {:else if activities.length === 0}
      <div class="empty">
        <p>現在募集中の活動はありません。</p>
        <a href="/create" class="btn btn-primary">活動を作成する</a>
      </div>
    {:else}
      <div class="grid grid-cols-1 grid-cols-2 grid-cols-3">
        {#each activities as activity (activity.id)}
          <ActivityCard {activity} />
        {/each}
      </div>
    {/if}
  </div>
</section>
