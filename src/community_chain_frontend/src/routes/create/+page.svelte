<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { createActivity } from '$lib/api/activities';
  import { isAuthenticated } from '$lib/api/auth';
  
  let title = '';
  let description = '';
  let location = '';
  let reward = '';
  let loading = false;
  let error = null;
  
  // バリデーション
  $: isValid = title.trim() && description.trim() && location.trim() && 
               reward && !isNaN(reward) && Number(reward) > 0;
  
  // 認証チェック
  onMount(() => {
    if (!$isAuthenticated) {
      goto('/');
      alert('活動を作成するにはログインが必要です。');
    }
  });
  
  // 活動作成処理
  async function handleSubmit() {
    if (!isValid) return;
    
    loading = true;
    error = null;
    
    try {
      const id = await createActivity(title, description, location, Number(reward));
      if (id) {
        goto(`/activity/${id}`);
      } else {
        error = '活動の作成に失敗しました。';
      }
    } catch (err) {
      error = '活動作成処理中にエラーが発生しました。';
      console.error(err);
    } finally {
      loading = false;
    }
  }
</script>

<!-- フォーム実装部分は省略 -->
