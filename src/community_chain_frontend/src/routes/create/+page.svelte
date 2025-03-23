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

<svelte:head>
  <title>活動作成 - コミュニティチェーン</title>
</svelte:head>

<section class="container">
  <div class="header">
    <h1>新しい活動を作成</h1>
    <p>地域に役立つ活動を募集しましょう</p>
  </div>
  
  {#if error}
    <div class="alert alert-danger">
      <p>{error}</p>
    </div>
  {/if}
  
  <div class="card">
    <div class="card-body">
      <form on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
          <label for="title" class="form-label">タイトル</label>
          <input 
            type="text" 
            id="title" 
            class="form-control" 
            bind:value={title} 
            placeholder="例：公園の清掃活動" 
            required 
          />
        </div>
        
        <div class="form-group">
          <label for="description" class="form-label">活動内容</label>
          <textarea 
            id="description" 
            class="form-control" 
            bind:value={description} 
            placeholder="活動の詳細な説明を記入してください" 
            rows="4" 
            required 
          ></textarea>
        </div>
        
        <div class="form-group">
          <label for="location" class="form-label">場所</label>
          <input 
            type="text" 
            id="location" 
            class="form-control" 
            bind:value={location} 
            placeholder="例：中央公園" 
            required 
          />
        </div>
        
        <div class="form-group">
          <label for="reward" class="form-label">報酬（ポイント）</label>
          <input 
            type="number" 
            id="reward" 
            class="form-control" 
            bind:value={reward} 
            placeholder="例：100" 
            min="1" 
            required 
          />
        </div>
        
        <div class="form-actions">
          <button 
            type="submit" 
            class="btn btn-primary" 
            disabled={!isValid || loading}
          >
            {loading ? '作成中...' : '活動を作成する'}
          </button>
          
          <a href="/" class="btn btn-outline">キャンセル</a>
        </div>
      </form>
    </div>
  </div>
</section>

<style>
  .form-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
  }
  
  textarea.form-control {
    resize: vertical;
    min-height: 100px;
  }
</style>
