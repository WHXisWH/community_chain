# コミュニティチェーン - 地域活動管理プラットフォーム

コミュニティチェーンは、Internet Computer Protocol (ICP)を活用した分散型地域活動管理プラットフォームです。地域の貢献活動を簡単に作成・参加・管理でき、貢献者への報酬提供を透明に実現します。

バックエンド：　https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=ficb4-4iaaa-aaaag-at7rq-cai

フロントエンド：　https://f5fqr-5aaaa-aaaag-at7sa-cai.icp0.io/

## サービスコンセプト

コミュニティチェーンは「地域活動の見える化と貢献の価値化」をコンセプトにしています。従来、ボランティア活動やコミュニティサービスは組織化が難しく、参加者の貢献が適切に評価・報酬化されにくい課題がありました。

このプラットフォームでは、誰でも簡単に：
- 地域に必要な活動を登録できる
- 興味のある活動に参加申請できる
- 活動完了後に報告と報酬を受け取れる

すべての情報が分散型台帳に記録され、透明性が保たれるとともに、中央管理者なしでコミュニティ活動のエコシステムを実現します。

## 利用ユーザ想定（ターゲット）

### 活動作成者
- **地域団体・NPO**: 定期的な清掃活動やイベントを企画する団体
- **自治体担当者**: 住民参加型の地域課題解決に取り組む行政職員
- **店舗・企業**: 地域貢献活動を通じた認知向上を目指す事業者

### 活動参加者
- **地域貢献に関心のある市民**: 空き時間を活用して社会に貢献したい方
- **学生・若者**: 社会経験とポイント獲得を両立させたい若年層
- **シニア層**: 専門知識や経験を活かして地域に貢献したい方
- **新規転入者**: 地域コミュニティとの繋がりを作りたい方

## メリットや特徴

### 活動作成者にとって
- **簡単な活動登録**: 数分で活動内容を登録し、参加者を募集開始
- **進捗管理**: 参加者の申請状況や活動完了状況をリアルタイムで確認
- **コスト削減**: 活動管理のための専用システム構築が不要

### 活動参加者にとって
- **シームレスな参加**: Internet Identityによる簡単ログインと参加申請
- **報酬の透明性**: 活動完了時にどれだけの報酬が得られるか事前に確認可能
- **貢献履歴**: 過去の参加活動がすべて記録され、自身の貢献を可視化

### プラットフォーム全体として
- **透明性**: すべての活動と参加状況が分散型台帳に記録され改ざん不可能
- **低コスト運用**: 中央サーバー不要で、メンテナンスコストを最小化
- **拡張性**: コミュニティの成長に応じて柔軟にスケール可能

## ICPの仕組みをどの部分で使っているか

1. **分散型ID認証**
   - Internet Identityを活用したユーザー認証
   - Principalを用いた活動作成者/参加者の識別

2. **Canisterスマートコントラクト**
   - Motoko言語による安全なバックエンド実装
   - 活動データの保存と状態管理

3. **分散型ホスティング**
   - フロントエンド（SvelteKit）とバックエンド（Motoko）の両方をICPネットワーク上で実行
   - サーバーレスなWeb3アプリケーションの実現

4. **オンチェーンデータ管理**
   - 活動情報や参加状況をすべてチェーン上に保存
   - データの永続性と不変性の確保

## なぜICPの仕組みを活用して開発したか、その優位性や理由

### Web2とWeb3の自然な統合
従来のブロックチェーンでは、ユーザー体験の複雑さが普及の障壁となっていました。ICPの特長である「Internet Identity」と直感的なUIを組み合わせることで、一般ユーザーがブロックチェーン技術を意識せずに利用できるプラットフォームを実現しています。

### 開発効率とスケーラビリティ
Motokoという型安全な言語とCanisterモデルにより、安全性の高いコードを効率的に開発できます。また、ICPのサブネットアーキテクチャにより、ユーザー数が増加しても性能が低下しにくい特性を活かしています。

### コスト効率の良い運用
ICPのリバースガスモデルにより、従来のブロックチェーンと比較して、トランザクションコストを低く抑えつつ高速な処理を実現。これにより、小規模なコミュニティ活動でも経済的に持続可能なシステムとなっています。

### 真の分散化によるセキュリティと持続可能性
フロントエンドからバックエンドまで完全に分散化されたアーキテクチャにより、単一障害点がなく、長期的な持続可能性を確保。従来のクラウドサービスのように突然のサービス終了やコスト増加のリスクがありません。

## 開発進捗状況と今後の計画

### 現在の進捗（2025年3月時点）
- ✅ バックエンド: 活動の作成・参加・完了のコア機能実装完了
- ✅ データモデル: 活動とユーザー関係のデータ構造設計完了
- 🔄 フロントエンド: UI設計完了、実装進行中
- 🔄 認証: Internet Identity統合を準備中

### 短期目標（1ヶ月以内）
- フロントエンドの完全実装
- ICPメインネットへのデプロイ
- 基本的なユーザーテストの実施

### 中長期目標（3〜6ヶ月）
- 活動評価・レビュー機能の追加
- 報酬ポイントの交換・利用システムの実装
- 地域別・カテゴリ別の活動検索機能
- モバイル最適化とオフライン対応

## 利用シナリオ

### シナリオ1: 地域清掃活動の主催（田中さん/地域団体代表）
1. 田中さんはInternet Identityでログインし「活動作成」を選択
2. 「春の河川清掃プロジェクト」のタイトル、詳細、場所、報酬（100ポイント）を入力
3. 活動が公開され、参加者からの申請を待つ
4. 山田さんから参加申請があり、自動的に「進行中」ステータスに変更
5. 活動完了後、山田さんが完了報告を提出
6. 田中さんは活動の成果を確認し、システムが自動的に山田さんに報酬を付与

### シナリオ2: 学生ボランティア（佐藤さん/大学生）
1. 佐藤さんは大学の地域貢献活動の一環として、アプリに登録
2. 「活動一覧」から地域の「高齢者向けスマホ教室」を発見
3. 参加申請ボタンをクリックして申請
4. 申請が承認され、活動日時と場所を確認
5. 活動完了後、アプリで完了報告を提出
6. 活動報酬の50ポイントが付与され、大学の単位認定にも活用

### シナリオ3: 新規転入者の地域参加（鈴木さん/転勤族）
1. 新しい街に引っ越してきた鈴木さんがアプリをインストール
2. 「マイページ」で自分のスキルや興味（子育て支援、語学等）を登録
3. 近隣の「外国人向け日本語教室サポート」活動を発見
4. 参加申請から活動完了までスムーズに実施
5. 活動を通じて地域の人々と知り合い、新たなコミュニティに参加
6. 獲得したポイントを地域商店街で使用できるクーポンと交換

## 技術スタック

- **バックエンド**: Motoko (ICP Canister)
- **フロントエンド**: SvelteKit
- **認証**: Internet Identity
- **ホスティング**: ICP Network

## インストールと開発環境セットアップ

```bash
# リポジトリのクローン
git clone https://github.com/yourusername/community_chain.git
cd community_chain

# 依存関係のインストール
npm install

# ローカル開発サーバーの起動
dfx start --clean --background
npm run dev

# ローカルへのデプロイ
dfx deploy
```
