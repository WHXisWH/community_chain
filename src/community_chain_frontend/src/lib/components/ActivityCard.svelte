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
  .activity-card {
    display: block;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease-in-out;
  }

  .activity-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .title {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    color: var(--text-color);
  }

  .meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    color: var(--text-muted);
    font-size: 0.875rem;
  }

  .description {
    margin-bottom: 1rem;
    color: var(--text-color);
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
  }

  .date {
    color: var(--text-muted);
  }

  .status {
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
    font-weight: 500;
    font-size: 0.75rem;
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
</style>
