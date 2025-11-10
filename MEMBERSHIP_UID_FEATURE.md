# メンバーシップUID Cookie機能

## 概要
この機能により、`membership_uid`クエリパラメータに基づいて動的なメンバーシップ登録URLを生成できます。

## 仕組み

### 1. クエリパラメータの検出
ユーザーがURLに`?membership_uid=xxx`を含むページにアクセスすると、その値が自動的にブラウザのCookieに30日間保存されます。

**例：**
```
https://your-site.com/?membership_uid=ms_abc123
https://your-site.com/home-garden?membership_uid=ms_abc123
```

### 2. Cookie保存
- **Cookie名：** `membership_uid`
- **有効期限：** 設定から30日間
- **使用ライブラリ：** `js-cookie` (v3.x)

### 3. 動的リンク生成
すべての「今すぐ申し込む」ボタンは、以下のルールに基づいて動的にURLを生成します：
- Cookieが存在する場合：`https://order.awaji-smilefarm.com/memberships/{membership_uid}/subscriptions/new`
- Cookieが存在しない場合：`https://order.awaji-smilefarm.com/memberships/ms_smashkovmdwhladc/subscriptions/new`（デフォルト）

### 4. 初回読み込み時の動作
クエリパラメータが存在する場合でも、**ページ読み込み時にすぐに**Cookieがチェックされ、URLが更新されます。これにより、最初のインタラクションから正しいメンバーシップリンクが使用されます。

## 変更・作成されたファイル

### 新規ファイル
- `src/lib/membership.ts` - Cookie管理とURL生成のユーティリティ関数
- `src/components/MembershipHandler.tsx` - URLパラメータを監視するクライアントコンポーネント

### 変更されたファイル
- `src/app/page.tsx` - メインページを動的メンバーシップURLに対応
- `src/app/home-garden/page.tsx` - 家庭菜園ページを動的メンバーシップURLに対応
- `tsconfig.json` - `@/*`インポートのパスマッピングを追加
- `package.json` - `js-cookie`と`@types/js-cookie`の依存関係を追加

## 使用方法

### メンバーシップUIDの設定
`membership_uid`パラメータを含むURLを共有するだけです：
```
https://your-site.com/?membership_uid=ms_newmember123
```

### テスト方法
1. `?membership_uid=test123`を付けてサイトにアクセス
2. ブラウザのDevTools > Application > Cookiesを開く
3. `membership_uid` Cookieが値"test123"で設定されていることを確認
4. 「今すぐ申し込む」ボタンをクリック
5. URLに`/memberships/test123/subscriptions/new`が含まれていることを確認

### Cookieのクリア
デフォルトのメンバーシップIDにリセットするには：
1. DevTools > Application > Cookiesを開く
2. `membership_uid` Cookieを削除
3. ページを更新

## 技術的な詳細

### Cookie設定
```typescript
Cookies.set(MEMBERSHIP_COOKIE_NAME, uid, { expires: 30 });
```

### デフォルトメンバーシップID
```typescript
const DEFAULT_MEMBERSHIP_ID = 'ms_smashkovmdwhladc';
```

Cookieが存在しない場合に使用されます。

## 注意事項
- この機能は、ReactフックとブラウザCookieを使用して完全にクライアントサイドで動作します
- クエリパラメータの検出にはNext.js 14の`useSearchParams`フックを使用
- サーバーサイドレンダリングの問題を防ぐため`Suspense`でラップされています
- Cookieはサイト内のページ遷移をまたいで永続化されます
