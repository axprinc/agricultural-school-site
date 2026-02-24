'use client'

import Link from 'next/link'
import '../naturalpure-tokuteishyou/naturalpure-tokuteishyou.css'
import './naturalpure-privacy.css'

export default function NaturalPurePrivacyPage() {
  return (
    <div className="np-tokusho">
      <header className="np-tokusho-header">
        <Link href="/naturalpure-lp" className="np-tokusho-logo">NATURAL PURE</Link>
      </header>

      <main className="np-tokusho-main">
        <div className="np-tokusho-container">
          <div className="np-tokusho-heading">
            <h1>プライバシーポリシー</h1>
            <p>ナチュラル・ピュア ライフスタイル・ウォーター</p>
          </div>

          <div className="np-privacy-card">
            <p className="np-privacy-intro">
              本プライバシーポリシー（以下「本ポリシー」といいます）は、<strong>株式会社グリーンハーベスト</strong>（以下「当社」といいます）が運営するナチュラル・ピュア ライフスタイル・ウォーターの通信販売（以下「本サービス」といいます）における、お客様の個人情報の取扱い指針を定めるものです。
            </p>

            <section className="np-privacy-section">
              <h2 className="np-privacy-h2">1. 基本方針</h2>
              <p>当社は、個人情報の重要性を認識し、個人情報保護法その他の関連法令・ガイドラインを遵守します。取得した個人情報は、本ポリシーに定める利用目的の範囲内で適切に取り扱い、安全かつ最新の状態で管理します。</p>
            </section>

            <section className="np-privacy-section">
              <h2 className="np-privacy-h2">2. 取得する個人情報と利用目的</h2>

              <h3 className="np-privacy-h3">(1) 取得する情報</h3>
              <p className="np-privacy-p">商品のご購入・お問い合わせ等の際に、以下の個人情報を取得します。</p>
              <ul className="np-privacy-list">
                <li>氏名、住所、電話番号、メールアドレス等の連絡先情報</li>
                <li>商品の配送先住所・配送希望情報</li>
                <li>クレジットカード情報等の決済関連情報（外部決済サービスを経由して取得）</li>
                <li>商品の購入履歴・利用履歴</li>
                <li>お問い合わせ・ご相談の内容</li>
                <li>Cookie・アクセスログ・端末識別情報等</li>
              </ul>

              <h3 className="np-privacy-h3">(2) 利用目的</h3>
              <p className="np-privacy-p">取得した個人情報は、以下の目的で利用します。</p>
              <ol className="np-privacy-list np-privacy-list-ol">
                <li>ご注文の処理・本人確認</li>
                <li>商品の配送手配および配送状況のご連絡</li>
                <li>商品代金の決済・請求・領収書発行</li>
                <li>お問い合わせ対応・アフターサービス（返品・交換・不良品対応等）</li>
                <li>商品の品質・安全に関するご連絡（成分・使用上の注意等）</li>
                <li>購入履歴の管理および関連商品・サービスのご案内</li>
                <li>マーケティングデータ分析（属性情報・行動履歴等）</li>
                <li>不正利用・規約違反の調査および対応</li>
                <li>契約・利用規約等に基づく権利行使・義務履行</li>
              </ol>

              <h3 className="np-privacy-h3">(3) 利用制限</h3>
              <p>法令で認められる場合を除き、ご本人の同意なく上記利用目的を超えて個人情報を取り扱いません。</p>
            </section>

            <section className="np-privacy-section">
              <h2 className="np-privacy-h2">3. 個人データの第三者提供</h2>
              <p className="np-privacy-p">当社は、次の場合を除き、ご本人の同意なく個人データを第三者に提供しません。</p>
              <ol className="np-privacy-list np-privacy-list-ol">
                <li>法令に基づく場合</li>
                <li>人命・身体・財産の保護に必要で同意取得が困難な場合</li>
                <li>公衆衛生の向上・児童の健全育成推進に特に必要で同意取得が困難な場合</li>
                <li>国・地方公共団体等の法令事務協力で同意取得により支障を及ぼすおそれがある場合</li>
                <li>利用目的達成に必要な範囲で業務を委託する場合（配送業者等）</li>
                <li>広告効果測定のため第三者提供が必要な場合（個人関連情報の取得を含む）</li>
              </ol>
            </section>

            <section className="np-privacy-section">
              <h2 className="np-privacy-h2">4. 安全管理措置</h2>
              <ol className="np-privacy-list np-privacy-list-ol">
                <li><strong>情報の正確性確保</strong>：最新かつ正確な内容を保持</li>
                <li><strong>技術的安全対策</strong>：SSL/TLS、アクセス制限、ウイルス対策等</li>
                <li><strong>委託先管理</strong>：委託契約締結、監督・監査</li>
                <li><strong>廃棄</strong>：不要となった個人情報は速やかかつ安全に廃棄</li>
              </ol>
            </section>

            <section className="np-privacy-section">
              <h2 className="np-privacy-h2">5. Cookie 等の利用</h2>
              <h3 className="np-privacy-h3">(1) Cookie とは</h3>
              <p className="np-privacy-p">ウェブサイト利用履歴や入力内容をお客様の端末に保存する技術です。</p>

              <h3 className="np-privacy-h3">(2) 利用目的</h3>
              <ul className="np-privacy-list">
                <li>ウェブサイトの利便性向上</li>
                <li>アクセス解析によるサービス改善</li>
                <li>お客様の興味・関心に基づく最適なコンテンツ提供</li>
              </ul>

              <h3 className="np-privacy-h3">(3) 拒否方法</h3>
              <p>Cookie の無効化はブラウザ設定から可能ですが、本サービスの一部機能がご利用いただけない場合があります。</p>
            </section>

            <section className="np-privacy-section">
              <h2 className="np-privacy-h2">6. 開示・訂正・利用停止等の請求</h2>
              <p>当社が保有する個人データの開示等をご希望の場合は、下記お問い合わせ窓口までご連絡ください。ご本人確認後、法令に基づき速やかに対応します。</p>
            </section>

            <section className="np-privacy-section">
              <h2 className="np-privacy-h2">7. お問い合わせ窓口</h2>
              <div className="np-privacy-contact">
                <p className="np-privacy-contact-name">ナチュラル・ピュア（株式会社グリーンハーベスト）</p>
                <p>〒656-0021 兵庫県洲本市五色町鮎原小山田1065番地</p>
                <p>メール：<a href="mailto:support@awaji-smilefarm.com" className="np-privacy-mail">support@awaji-smilefarm.com</a></p>
                <p>運営責任者：石川 貴子</p>
              </div>
            </section>

            <section className="np-privacy-section">
              <h2 className="np-privacy-h2">8. プライバシーポリシーの変更</h2>
              <p>当社は本ポリシーを適宜見直し、改定します。改定後は当社ウェブサイト上に掲示した時点で効力を生じます。</p>
            </section>

            <p className="np-privacy-closing">以上</p>
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
