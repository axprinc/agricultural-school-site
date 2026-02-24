'use client'

import Link from 'next/link'
import './naturalpure-tokuteishyou.css'

export default function NaturalPureTokuteishyouPage() {
  return (
    <div className="np-tokusho">
      <header className="np-tokusho-header">
        <Link href="/naturalpure-lp" className="np-tokusho-logo">NATURAL PURE</Link>
      </header>

      <main className="np-tokusho-main">
        <div className="np-tokusho-container">
          <div className="np-tokusho-heading">
            <h1>特定商取引法に基づく表示</h1>
            <p>ナチュラル・ピュア ライフスタイル・ウォーター</p>
          </div>

          <div className="np-tokusho-card">
            <div className="np-tokusho-items">

              <div className="np-tokusho-item">
                <div className="np-tokusho-label">
                  <span className="np-tokusho-num">1</span>
                  販売業者名
                </div>
                <div className="np-tokusho-value">株式会社グリーンハーベスト</div>
              </div>

              <div className="np-tokusho-item">
                <div className="np-tokusho-label">
                  <span className="np-tokusho-num">2</span>
                  運営責任者
                </div>
                <div className="np-tokusho-value">石川 貴子</div>
              </div>

              <div className="np-tokusho-item">
                <div className="np-tokusho-label">
                  <span className="np-tokusho-num">3</span>
                  所在地
                </div>
                <div className="np-tokusho-value">東京都渋谷区代々木２丁目１０番１２号ＪＡ東京南新宿ビル８階</div>
              </div>

              <div className="np-tokusho-item">
                <div className="np-tokusho-label">
                  <span className="np-tokusho-num">4</span>
                  電話番号
                </div>
                <div className="np-tokusho-value">
                  お問い合わせはメールにて承ります。
                  <br />
                  <span className="np-tokusho-note">※電話番号は開示請求があった場合、遅滞なく開示いたします。</span>
                </div>
              </div>

              <div className="np-tokusho-item">
                <div className="np-tokusho-label">
                  <span className="np-tokusho-num">5</span>
                  メールアドレス
                </div>
                <div className="np-tokusho-value">support@awaji-smilefarm.com</div>
              </div>

              <div className="np-tokusho-item">
                <div className="np-tokusho-label">
                  <span className="np-tokusho-num">6</span>
                  商品名・販売価格
                </div>
                <div className="np-tokusho-value">
                  <p>・ナチュラル・ピュア ライフスタイル・ウォーター（200ml）　3,800円（税込）</p>
                  <p>・ナチュラル・ピュア ライフスタイル・ウォーター 10本入りセット（200ml×10本）　35,000円（税込）</p>
                  <p>・ナチュラル・ピュア ライフスタイル・ウォーター 詰め替え3本セット（500ml×3本）　15,000円（税込）</p>
                  <p className="np-tokusho-note">※「優しい家庭菜園の学校」会員の方は会員特別価格にてご購入いただけます。</p>
                </div>
              </div>

              <div className="np-tokusho-item">
                <div className="np-tokusho-label">
                  <span className="np-tokusho-num">7</span>
                  商品代金以外の費用（送料）
                </div>
                <div className="np-tokusho-value">
                  <p>・1本（200ml）：着払いにてお届けします。送料はお受け取り時にお支払いください。</p>
                  <p>・10本入りセット：送料無料</p>
                  <p>・詰め替え3本セット（500ml×3本）：通常1,000円、離島2,000円</p>
                  <p className="np-tokusho-note">※インターネット接続料金・通信料金はお客様のご負担となります。</p>
                </div>
              </div>

              <div className="np-tokusho-item">
                <div className="np-tokusho-label">
                  <span className="np-tokusho-num">8</span>
                  支払方法
                </div>
                <div className="np-tokusho-value">クレジットカード決済（外部決済サービスを利用）</div>
              </div>

              <div className="np-tokusho-item">
                <div className="np-tokusho-label">
                  <span className="np-tokusho-num">9</span>
                  支払時期
                </div>
                <div className="np-tokusho-value">ご注文時にお支払いが確定します。クレジットカードの引き落とし日は、ご利用のカード会社の規定によります。</div>
              </div>

              <div className="np-tokusho-item">
                <div className="np-tokusho-label">
                  <span className="np-tokusho-num">10</span>
                  商品の引き渡し時期
                </div>
                <div className="np-tokusho-value">ご注文後、3日〜1週間以内に発送いたします。</div>
              </div>

              <div className="np-tokusho-item">
                <div className="np-tokusho-label">
                  <span className="np-tokusho-num">11</span>
                  返品・交換について
                </div>
                <div className="np-tokusho-value">
                  <div className="np-tokusho-sub">
                    <p className="np-tokusho-sub-title">● お客様都合による返品</p>
                    <p>商品の性質上、お客様都合による返品・交換はお受けできません。ご了承ください。</p>
                  </div>
                  <div className="np-tokusho-sub">
                    <p className="np-tokusho-sub-title">● 不良品・誤送品の場合</p>
                    <p>商品到着後7日以内にご連絡ください。着払いにて返送いただき、良品と交換いたします。</p>
                  </div>
                  <div className="np-tokusho-sub">
                    <p className="np-tokusho-sub-title">● クーリングオフについて</p>
                    <p>本商品は通信販売であるため、特定商取引法のクーリングオフ制度の対象外となります。</p>
                  </div>
                </div>
              </div>

              <div className="np-tokusho-item np-tokusho-item-last">
                <div className="np-tokusho-label">
                  <span className="np-tokusho-num">12</span>
                  商品説明
                </div>
                <div className="np-tokusho-value">
                  <p>発酵エキス（オーガニック玄米・オーガニック大豆由来）配合のライフスタイル・ウォーターです。食品由来成分100%使用。皮膚常在菌バランスを整え、肌本来のバリア機能をサポートします。</p>
                  <p>原材料：湧水、オーガニック玄米、オーガニック大豆</p>
                  <p>区分：雑貨</p>
                </div>
              </div>

            </div>
          </div>

          <div className="np-tokusho-back">
            <Link href="/naturalpure-lp" className="np-tokusho-back-link">
              ← 商品ページに戻る
            </Link>
          </div>
        </div>
      </main>

      <footer className="np-tokusho-footer">
        <nav className="np-tokusho-footer-nav">
          <Link href="/naturalpure-tokuteishyou" className="np-tokusho-footer-link">特定商取引法に基づく表示</Link>
          <span className="np-tokusho-footer-divider">|</span>
          <Link href="/naturalpure-privacy" className="np-tokusho-footer-link">プライバシーポリシー</Link>
        </nav>
        <p className="np-tokusho-footer-copy">© {new Date().getFullYear()} Natural Pure. All rights reserved.</p>
      </footer>
    </div>
  )
}
