# 🌱 農業体験サイト - 画像の使用方法ガイド

## 📁 フォルダ構造

```
public/
└── images/
    ├── hero/          # ヒーロー画像（メインビジュアル）
    ├── programs/      # 体験プログラム画像
    ├── testimonials/  # お客様の写真
    └── gallery/       # ギャラリー画像
```

## 🖼️ 画像の追加手順

### 1. 画像ファイルの配置
以下のフォルダに適切な画像ファイルを配置してください：

**推奨画像サイズ:**
- **ヒーロー画像**: 1920x1080px以上（横長）
- **プログラム画像**: 800x500px以上
- **お客様写真**: 400x400px（正方形）
- **ギャラリー画像**: 600x400px以上

**推奨ファイル形式:**
- `.jpg` または `.jpeg`（写真に最適）
- `.png`（透明度が必要な場合）
- `.webp`（軽量化が必要な場合）

### 2. 画像ファイル名の例
```
/public/images/hero/
├── farm-landscape.jpg      # メイン農場風景
├── rice-field-sunset.jpg  # 夕暮れの田んぼ
└── harvest-festival.jpg   # 収穫祭の様子

/public/images/programs/
├── spring-harvest.jpg      # 春の収穫体験
├── rice-planting.jpg       # 田植え体験
├── vegetable-growing.jpg   # 野菜栽培
└── herb-garden.jpg         # ハーブ栽培

/public/images/testimonials/
├── tanaka-family.jpg       # 田中ファミリー様
├── sato-san.jpg           # 佐藤様
└── yamada-couple.jpg      # 山田カップル様
```

## 💻 コードでの使用方法

### 基本的な使用方法

```jsx
import Image from 'next/image'

// 基本的な画像表示
<Image
  src="/images/hero/farm-landscape.jpg"
  alt="綾町の美しい農場風景"
  width={800}
  height={600}
  priority  // 重要な画像の場合
/>
```

### ヒーローセクションの背景画像

```jsx
{/* 現在のコード（26行目周辺）*/}
{/* コメントを外して実際の画像を使用 */}
<Image
  src="/images/hero/farm-landscape.jpg"
  alt="綾町の美しい農場風景"
  fill
  className="object-cover"
  priority
/>
```

### 体験プログラムの画像

```jsx
{/* 現在のコード（136行目周辺）*/}
{/* コメントを外して実際の画像を使用 */}
<Image
  src="/images/programs/spring-harvest.jpg"
  alt="春の収穫祭の様子"
  width={800}
  height={500}
  className="object-cover w-full h-64 lg:h-80"
/>
```

### お客様の声セクションの写真

```jsx
{/* お客様の写真を追加する場合 */}
<div className="flex items-center mb-4">
  <Image
    src="/images/testimonials/tanaka-family.jpg"
    alt="田中ファミリー様"
    width={60}
    height={60}
    className="rounded-full mr-4"
  />
  <div>
    <p className="font-semibold">田中ファミリー様</p>
    <p className="text-sm text-gray-500">東京都・お子様2人</p>
  </div>
</div>
```

## 🎨 画像最適化のコツ

### 1. Next.js Image コンポーネントの利点
- **自動最適化**: ファイルサイズを自動で圧縮
- **遅延読み込み**: 画面に表示される時に読み込み
- **レスポンシブ対応**: デバイスに応じて最適なサイズを配信

### 2. 重要な属性

```jsx
<Image
  src="/images/hero/farm-landscape.jpg"
  alt="綾町の美しい農場風景"        // SEO対策で必須
  width={800}                      // 画像の幅
  height={600}                     // 画像の高さ
  priority                         // 最初に表示される画像の場合
  className="object-cover"         // CSS クラス
  placeholder="blur"               // 読み込み中のぼかし効果
  blurDataURL="data:image/jpeg..." // ぼかし用のデータURL
/>
```

### 3. レスポンシブ画像の設定

```jsx
<Image
  src="/images/programs/vegetable-growing.jpg"
  alt="野菜栽培体験"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  fill
  className="object-cover"
/>
```

## 🔄 実際に画像を適用する手順

### 1. 画像ファイルを準備
- 農場の風景写真
- 体験プログラムの様子
- 参加者の写真（許可を得たもの）

### 2. ファイルを適切なフォルダに配置
```
public/images/hero/farm-landscape.jpg
```

### 3. コードのコメントを外す
```jsx
{/* この部分のコメントを外す */}
<Image
  src="/images/hero/farm-landscape.jpg"
  alt="綾町の美しい農場風景"
  fill
  className="object-cover"
  priority
/>
```

### 4. グラデーション背景を削除またはコメントアウト
```jsx
{/* グラデーション背景は画像使用時はコメントアウト */}
{/* <div className="absolute inset-0 bg-gradient-to-r from-farm-green-400/90 to-farm-green-600/90"></div> */}
```

## 📝 注意事項

1. **著作権**: 使用する画像の著作権を確認してください
2. **プライバシー**: 人物写真は本人の許可を得てください
3. **ファイルサイズ**: 大きすぎる画像はサイトの読み込み速度を遅くします
4. **alt属性**: SEO対策のため、適切な説明文を必ず入力してください

## 🎬 ヒーロー画像スライドショー機能

### 複数画像でのスライドショー設定
ヒーローセクションでは**3枚の画像**を自動スライドできます：

**設定済みの画像パス:**
```
/public/images/hero/
├── farm-landscape.jpg      # メイン農場風景
├── rice-field-sunset.jpg  # 夕暮れの田んぼ  
└── harvest-festival.jpg   # 収穫祭の様子
```

### スライドショーの特徴
✅ **自動切り替え**: 5秒ごとに自動で次の画像に切り替え  
✅ **手動操作**: 左右の矢印ボタンでユーザーが操作可能  
✅ **インジケーター**: 下部の点で現在のスライドを表示  
✅ **スムーズな切り替え**: フェードイン・フェードアウト効果  
✅ **レスポンシブ対応**: モバイルでも快適に操作可能

### 画像を実際に適用する方法

1. **3枚の画像をアップロード**
```
public/images/hero/farm-landscape.jpg
public/images/hero/rice-field-sunset.jpg  
public/images/hero/harvest-festival.jpg
```

2. **コードのコメントを外す** (page.tsx 48行目周辺)
```jsx
{/* コメントを外す */}
<Image
  src={image.src}
  alt={image.alt}
  fill
  className="object-cover"
  priority={index === 0}
/>
```

3. **グラデーション背景をコメントアウト** (page.tsx 56-61行目)
```jsx
{/* 画像使用時はコメントアウト */}
{/* <div className={`absolute inset-0 ${...}`}></div> */}
```

### スライド内容のカスタマイズ
各スライドのタイトルも変更できます：
```jsx
const heroImages = [
  {
    src: '/images/hero/farm-landscape.jpg',
    alt: '綾町の美しい農場風景',
    title: '自然と触れ合う',           // ← 変更可能
    subtitle: '農業体験スクール'        // ← 変更可能
  },
  // 他のスライドも同様...
]
```

## 🚀 さらなる改善案

- **画像ギャラリー**: 農場の様子をスライドショーで表示
- **季節別写真**: 季節ごとの農場の変化を表示
- **Before/After**: 体験前後の比較写真
- **動画**: 農業体験の様子を動画で紹介
- **パララックス効果**: スクロールに応じた視覚効果
- **画像の遅延読み込み**: サイト表示速度の最適化

このガイドに従って画像を追加することで、より魅力的で説得力のある農業体験サイトを作成できます！🌾 