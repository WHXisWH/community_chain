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
      console.log("ホームページ: onMount内でgetActivities呼び出し");
      activities = await getActivities();
      console.log("ホームページ: 活動一覧取得成功", activities);
      loading = false;
    } catch (err) {
      console.error("ホームページ: 活動一覧取得エラー", err);
      error = '活動データの読み込みに失敗しました。';
      loading = false;
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
      <!-- グリッドクラスを修正 -->
      <div class="activities-grid">
        {#each activities as activity (activity.id)}
          <ActivityCard {activity} />
        {/each}
      </div>
    {/if}
  </div>
</section>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .header h1 {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    gap: 1rem;
  }

  .alert {
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .alert-danger {
    background-color: #fff3f3;
    border: 1px solid #ffcccb;
    color: #d32f2f;
  }

  .empty {
    text-align: center;
    padding: 3rem;
    background-color: #f9f9f9;
    border-radius: 0.5rem;
  }

  .activities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    .activities-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
</style>
