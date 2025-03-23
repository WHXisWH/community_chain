<script>
  export let activity; // プロパティとして活動データを受け取る
  
  // 日付のフォーマット
  const formatDate = (timestamp) => {
    const date = new Date(Number(timestamp) / 1000000); // ナノ秒→ミリ秒変換
    return date.toLocaleDateString('ja-JP');
  };
  
  // ステータスに応じたスタイル
  const getStatusClass = (status) => {
    switch (status) {
      case 'open': return 'status-open';
      case 'assigned': return 'status-assigned';
      case 'completed': return 'status-completed';
      default: return '';
    }
  };
  
  // ステータスの日本語表示
  const getStatusText = (status) => {
    switch (status) {
      case 'open': return '募集中';
      case 'assigned': return '進行中';
      case 'completed': return '完了';
      default: return status;
    }
  };
</script>

<a href="/activity/{activity.id}" class="activity-card">
  <h3 class="title">{activity.title}</h3>
  
  <div class="meta">
    <span class="location">📍 {activity.location}</span>
    <span class="reward">💰 {activity.reward} ポイント</span>
  </div>
  
  <p class="description">{activity.description}</p>
  
  <div class="footer">
    <span class="date">作成日: {formatDate(activity.created_at)}</span>
    <span class={`status ${getStatusClass(activity.status)}`}>
      {getStatusText(activity.status)}
    </span>
  </div>
</a>

<style>
  /* スタイル省略 - 実際の実装ではここに適切なCSSを記述 */
</style>
