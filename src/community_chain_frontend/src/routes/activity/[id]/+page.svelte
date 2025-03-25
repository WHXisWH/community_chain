<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { getActivity, applyForActivity, completeActivity } from '$lib/api/activities';
  import { isAuthenticated, authStore } from '$lib/api/auth';
  import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';
  
  // URLからIDを取得
  const id = $page.params.id;
  
  let activity = null;
  let loading = true;
  let error = null;
  let actionInProgress = false;
  let successMessage = null;
  
  // 権限チェック（より安全な実装）
  $: isCreator = activity && $authStore.principal && activity.creator && 
                activity.creator.toString() === $authStore.principal;
  $: isAssignee = activity && activity.assignee && $authStore.principal && 
                activity.assignee.toString() === $authStore.principal;
  $: canApply = $isAuthenticated && activity && activity.status === 'open' && !isCreator;
  $: canComplete = $isAuthenticated && activity && activity.status === 'assigned' && isAssignee;
  
  // 日付フォーマット関数（エラーハンドリング追加）
  const formatDate = (timestamp) => {
    try {
      if (!timestamp) return '日付情報なし';
      const date = new Date(Number(timestamp) / 1000000);
      return date.toLocaleString('ja-JP');
    } catch (err) {
      console.error('日付変換エラー:', err);
      return '日付変換エラー';
    }
  };
  
  // ステータス表示関数
  const getStatusText = (status) => {
    if (!status) return '不明';
    switch (status) {
      case 'open': return '募集中';
      case 'assigned': return '進行中';
      case 'completed': return '完了';
      default: return status;
    }
  };
  
  // データ読み込み
  onMount(async () => {
    try {
      console.log(`活動詳細を取得中: ID=${id}`);
      const result = await getActivity(id);
      console.log('活動データ取得結果:', result);
      
      if (result) {
        // 配列の場合は最初の要素を取得
        activity = Array.isArray(result) ? result[0] : result;
        console.log('活動データをセット:', activity);
      } else {
        error = '指定された活動が見つかりません。';
      }
    } catch (err) {
      error = '活動データの読み込みに失敗しました。';
      console.error('活動データ取得エラー:', err);
    } finally {
      loading = false;
    }
  });
  
  // 参加申請処理
  async function handleApply() {
    if (!$isAuthenticated) {
      alert('参加するにはログインが必要です。');
      return;
    }
    
    actionInProgress = true;
    try {
      const result = await applyForActivity(id);
      if (result) {
        successMessage = '参加申請が受理されました！';
        const updatedData = await getActivity(id);
        // 配列の場合は最初の要素を取得
        activity = Array.isArray(updatedData) ? updatedData[0] : updatedData;
      } else {
        error = '参加申請に失敗しました。';
      }
    } catch (err) {
      error = '参加申請処理中にエラーが発生しました。';
      console.error('参加申請エラー:', err);
    } finally {
      actionInProgress = false;
    }
  }
  
  // 活動完了報告
  async function handleComplete() {
    if (!$isAuthenticated) {
      alert('活動を完了するにはログインが必要です。');
      return;
    }
    
    actionInProgress = true;
    try {
      const result = await completeActivity(id);
      if (result) {
        successMessage = '活動完了の報告が受理されました！';
        const updatedData = await getActivity(id);
        // 配列の場合は最初の要素を取得
        activity = Array.isArray(updatedData) ? updatedData[0] : updatedData;
      } else {
        error = '活動完了の報告に失敗しました。';
      }
    } catch (err) {
      error = '活動完了処理中にエラーが発生しました。';
      console.error('活動完了エラー:', err);
    } finally {
      actionInProgress = false;
    }
  }
</script>

<svelte:head>
  <title>{activity ? `${activity.title || '無題の活動'} - コミュニティチェーン` : 'コミュニティチェーン'}</title>
</svelte:head>

<section class="container">
  {#if loading}
    <div class="loading">
      <LoadingSpinner />
      <p>活動データを読み込み中...</p>
    </div>
  {:else if error}
    <div class="alert alert-danger">
      <p>{error}</p>
      <a href="/" class="btn btn-primary">一覧に戻る</a>
    </div>
  {:else if activity}
    <!-- 成功メッセージ -->
    {#if successMessage}
      <div class="alert alert-success">
        <p>{successMessage}</p>
      </div>
    {/if}
    
    <!-- 活動詳細カード -->
    <div class="card">
      <div class="card-header">
        <div class="flex-between">
          <h1 class="activity-title">{activity.title || '無題の活動'}</h1>
          <span class={`status status-${activity.status || 'unknown'}`}>
            {getStatusText(activity.status)}
          </span>
        </div>
      </div>
      
      <div class="card-body">
        <div class="meta-info">
          <div class="meta-item">
            <span class="meta-label">場所:</span>
            <span class="meta-value">{activity.location || '未設定'}</span>
          </div>
          
          <div class="meta-item">
            <span class="meta-label">報酬:</span>
            <span class="meta-value">{activity.reward || 0} ポイント</span>
          </div>
          
          <div class="meta-item">
            <span class="meta-label">作成日:</span>
            <span class="meta-value">{formatDate(activity.created_at)}</span>
          </div>
        </div>
        
        <div class="description">
          <h3>活動内容</h3>
          <p>{activity.description || '説明はありません'}</p>
        </div>
        
        <!-- 参加者情報 (ある場合) -->
        {#if activity.assignee}
          <div class="assignee">
            <h3>参加者</h3>
            <p class="principal-id">{String(activity.assignee)}</p>
          </div>
        {/if}
      </div>
      
      <div class="card-footer">
        <!-- 活動に応じたアクション -->
        {#if canApply}
          <button 
            class="btn btn-primary" 
            on:click={handleApply} 
            disabled={actionInProgress}
          >
            {actionInProgress ? '処理中...' : 'この活動に参加する'}
          </button>
        {:else if canComplete}
          <button 
            class="btn btn-success" 
            on:click={handleComplete} 
            disabled={actionInProgress}
          >
            {actionInProgress ? '処理中...' : '活動完了を報告する'}
          </button>
        {:else if isCreator}
          <div class="creator-badge">
            <span>あなたが作成した活動です</span>
          </div>
        {/if}
        
        <a href="/" class="btn btn-outline">一覧に戻る</a>
      </div>
    </div>
  {/if}
</section>

<style>
  .activity-title {
    font-size: 2rem;
    margin: 0;
  }
  
  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .meta-info {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1.5rem;
  }
  
  .meta-item {
    display: flex;
    flex-direction: column;
  }
  
  .meta-label {
    font-size: 0.875rem;
    color: var(--text-muted);
    margin-bottom: 0.25rem;
  }
  
  .meta-value {
    font-size: 1.1rem;
    font-weight: 500;
  }
  
  .description {
    margin-bottom: 2rem;
  }
  
  .description h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
  
  .assignee {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border-color);
  }
  
  .assignee h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
  
  .principal-id {
    font-family: monospace;
    background-color: #f3f4f6;
    padding: 0.5rem;
    border-radius: 0.25rem;
    overflow-wrap: break-word;
  }
  
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .creator-badge {
    background-color: #f3f4f6;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    color: var(--text-muted);
  }
  
  .status {
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
    font-weight: 500;
    font-size: 0.875rem;
  }
  
  .status-open {
    background-color: #dbeafe;
    color: #1e40af;
  }
  
  .status-assigned {
    background-color: #fef3c7;
    color: #92400e;
  }
  
  .status-completed {
    background-color: #d1fae5;
    color: #065f46;
  }
  
  .status-unknown {
    background-color: #e5e7eb;
    color: #4b5563;
  }
  
  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;
    gap: 1rem;
  }
  
  .alert {
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .alert-danger {
    background-color: #fee2e2;
    border: 1px solid #fecaca;
    color: #b91c1c;
  }
  
  .alert-success {
    background-color: #d1fae5;
    border: 1px solid #a7f3d0;
    color: #047857;
  }
</style>
