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
  
  // 権限チェック
  $: isCreator = activity && $authStore.principal && 
                activity.creator.toString() === $authStore.principal;
  $: isAssignee = activity && activity.assignee && $authStore.principal && 
                 activity.assignee.toString() === $authStore.principal;
  $: canApply = $isAuthenticated && activity && activity.status === 'open' && !isCreator;
  $: canComplete = $isAuthenticated && activity && activity.status === 'assigned' && isAssignee;
  
  // 日付フォーマット関数
  const formatDate = (timestamp) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleString('ja-JP');
  };
  
  // ステータス表示関数
  const getStatusText = (status) => {
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
      const result = await getActivity(id);
      if (result) {
        activity = result;
      } else {
        error = '指定された活動が見つかりません。';
      }
    } catch (err) {
      error = '活動データの読み込みに失敗しました。';
      console.error(err);
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
        activity = await getActivity(id);
      } else {
        error = '参加申請に失敗しました。';
      }
    } catch (err) {
      error = '参加申請処理中にエラーが発生しました。';
      console.error(err);
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
        activity = await getActivity(id);
      } else {
        error = '活動完了の報告に失敗しました。';
      }
    } catch (err) {
      error = '活動完了処理中にエラーが発生しました。';
      console.error(err);
    } finally {
      actionInProgress = false;
    }
  }
</script>

<!-- UI実装部分は省略 -->
