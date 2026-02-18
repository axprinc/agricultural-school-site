'use client'

import Image from 'next/image'

const CONCEPT_IMAGE = '/images/publicimagesnaturalpure-lp/feature-2.jpg'
const MECHANISM_BG_IMAGE = '/images/publicimagesnaturalpure-lp/feature-6.png'
const CTA_FINAL_IMAGE = '/images/publicimagesnaturalpure-lp/feature-7.png'
const BENEFITS_BG_IMAGE = '/images/publicimagesnaturalpure-lp/feature-3.jpg'
const INGREDIENTS_BG_IMAGE = '/images/publicimagesnaturalpure-lp/feature-11.png'

type Benefit =
  | {
      title: string
      lines?: undefined
    }
  | {
    title?: string
    lines: string[]
  }

const BENEFITS: Benefit[] = [
  {
    title: 'バリア機能が整い、揺らぎにくくなる',
  },
  {
    title: '潤いが長く留まり、乾燥しにくい肌へ',
  },
  {
    lines: ['肌荒れを起こしにくく、', '穏やかな透明感が宿る'],
  },
  {
    title: '外的刺激に負けない、しなやかな肌質へ',
  },
]

type Review = {
  text: string
  profile: string
}

const REVIEWS: Review[] = [
  {
    text: '使用して3日で肌が柔らかくなったのを感じました。香りも自然で癒やされます。',
    profile: '30代 乾燥肌',
  },
  {
    text: '子供がいるので成分が気になっていましたが、これなら安心して使えます。',
    profile: '40代 敏感肌',
  },
  {
    text: 'ベタつかないのに保湿力がすごい。メイクの上からも使っています。',
    profile: '20代 混合肌',
  },
]

const SAFETY_FREE_ITEMS: string[] = [
  'パラベンフリー',
  'アルコールフリー',
  '合成香料不使用',
  '合成着色料不使用',
  '鉱物油フリー',
  '石油系界面活性剤フリー',
]

type HowToStep = {
  title: string
  description: string
}

const HOW_TO_STEPS: HowToStep[] = [
  {
    title: '洗顔後すぐに、導入化粧水として',
    description: 'いつものスキンケアの最初に、たっぷりと顔全体になじませてください。',
  },
  {
    title: '日中の乾燥対策に、メイクの上から',
    description: '乾燥やつっぱりを感じたら、顔から少し離してミストのようにやさしくオン。',
  },
  {
    title: 'お風呂上がりのボディケアに',
    description: '首もとやデコルテ、二の腕など、かさつきが気になる部分にもお使いいただけます。',
  },
]

type QAItem = {
  question: string
  answer: string
  linkHref?: string
  linkText?: string
}

const QA_ITEMS: QAItem[] = [
  {
    question: '敏感肌でも使えますか？',
    answer: 'はい。食品由来のやさしい成分のみで作られており、敏感な肌の方にもお使いいただけるよう配慮しています。ご心配な場合は、腕の内側などでパッチテストを行ってからご使用ください。',
  },
  {
    question: '1本でどれくらい持ちますか？',
    answer: '朝晩のご使用で、約1.5ヶ月を目安にお使いいただけます。ご使用量や使用部位によって前後する場合があります。',
  },
]

export default function NaturalPureLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-farm-green-50 to-white">
      <div className="naturalpure-lp">
        <header className="site-header">
          <p className="logo">NATURAL PURE</p>
          <p className="serif-font">肌が、呼吸を忘れていたことを知る。</p>
        </header>

        <main>
          <section className="fv-section">
            <div className="fv-image-container">
              <Image
                src="/images/publicimagesnaturalpure-lp/hero.png"
                alt="ナチュラル・ピュア ライフスタイル・ウォーター"
                width={1200}
                height={900}
                className="main-visual"
                priority
              />
            </div>
          </section>

          <section className="section-padding concept-section">
            <div className="container concept-grid">
              <div className="concept-copy">
                <h2 className="section-title">
                  発酵の力で、夕方まで乾かない&quot;水光肌&quot;へ。自然由来の成分が肌を整えます。
                  <span className="section-subtitle">皮膚常在菌との共生という美しさ</span>
                </h2>
                <div className="concept-body">
                  <p>
                    肌は、ただの表面ではありません。そこには無数の“小さな命”が息づいています。表皮ブドウ球菌、アクネ菌、黄色ブドウ球菌…それぞれが、あなたの肌を守るために働く大切な存在。それが「皮膚常在菌」です。
                  </p>
                  <p>
                    常在菌は、肌を弱酸性に整え、潤いを抱え込み、外的刺激から守り、あなたの肌を静かに支え続けています。しかし、このバランスは洗浄のしすぎ・乾燥・ストレス・生活習慣など、ほんの些細なきっかけで崩れてしまいます。
                  </p>
                  <p className="concept-highlight">だからこそ、私たちは“発酵”の力に着目しました。</p>
                </div>
                <div className="concept-cta">
                  <a
                    href="https://order.awaji-smilefarm.com/products/pd_2zs1guqpebsmqs3p/purchases/new"
                    className="cta-final-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    今すぐ試してみる
                  </a>
                </div>
              </div>
              <div className="concept-image">
                <Image src={CONCEPT_IMAGE} alt="皮膚常在菌のイメージ" width={640} height={640} />
              </div>
            </div>
          </section>

          <section className="mechanism-section">
            <div className="mechanism-overlay" />
            <div className="container mechanism-content">
              <h2 className="section-title section-title-white">
                発酵は“菌がつくる、
                <br className="mobile-break" />
                自然の恵み”
              </h2>
              <p className="mechanism-lead">発酵とは、微生物が素材を分解し、新しい価値を生みだす生命の営み。</p>
              <div className="mechanism-body">
                <p>
                  乳酸菌、酵母、麹菌がつくり出す
                  <span className="nutrient-pill nutrient-amino">アミノ酸</span>
                  、<span className="nutrient-pill nutrient-peptide">ペプチド</span>
                  、<span className="nutrient-pill nutrient-sugar">糖類</span>
                  、<span className="nutrient-pill nutrient-vitamin">ビタミン</span>
                  は、肌の常在菌にとって理想的な栄養源となります。
                </p>
                <p>発酵の力で生まれた成分は、常在菌が健やかに育つ“土壌”を整え、肌の上にしなやかな生態系を築きます。</p>
                <p className="mechanism-highlight">それはまるで、小さな菌たちのための「ごちそう」のよう。</p>
              </div>
            </div>
          </section>

          <section className="section-padding benefits-section">
            <div className="container">
              <h2 className="section-title">
                肌本来の力を引き出す、発酵と常在菌のバランス設計
                <span className="section-subtitle">
                  発酵エキスが常在菌環境を豊かにすると、肌は本来の力を取り戻し始めます。
                </span>
              </h2>
              <div className="benefits-grid">
                {BENEFITS.map((benefit, index) => (
                  <div key={(benefit.title ?? benefit.lines?.join('-')) ?? index} className="benefits-item">
                    <div className="benefits-icon">{String(index + 1).padStart(2, '0')}</div>
                    {benefit.lines ? (
                      <h3 className="benefits-heading">
                        {benefit.lines.map((line, lineIndex) => (
                          <span
                            key={`${line}-${lineIndex}`}
                            className={lineIndex > 0 ? 'benefits-heading-line' : undefined}
                          >
                            {line}
                          </span>
                        ))}
                      </h3>
                    ) : (
                      <h3
                        className="benefits-heading"
                        dangerouslySetInnerHTML={{ __html: benefit.title.replace(/、/g, '、<br />') }}
                      />
                    )}
                  </div>
                ))}
              </div>
              <p className="benefits-footer">
                これは化粧品が肌を“変える”のではなく、肌自身が自らを整えるという現象。
              </p>
              <p className="benefits-footer">
                発酵が、あなたの肌に宿る菌たちの力を引き出し、自然な美しさが息を吹き返します。
              </p>
            </div>
          </section>

          <section className="conclusion-section">
            <div className="conclusion-overlay" />
            <div className="container conclusion-content">
              <div className="conclusion-text-box">
                <h2 className="section-title">
                  発酵が未来の美容に
                  <br className="mobile-break" />
                  もたらすもの
                </h2>
                <p>
                  私たちは、肌と常在菌と発酵を「ひとつの生態系」として捉えています。微生物が生み出す豊かな栄養が常在菌を整え、その結果として肌が美しくなる。この循環こそが、自然と寄り添い、肌自身を尊重する新しいスキンケアの形だと考えています。
                </p>
                <p className="conclusion-message">― 発酵がつくる美しさは、肌と菌が生きていることへの讃歌です。 ―</p>
              </div>
            </div>
          </section>

          <section className="section-padding reviews-section">
            <div className="container">
              <h2 className="section-title">
                お客様の声
                <span className="section-subtitle">実際にご利用いただいた方のご感想</span>
              </h2>
              <div className="reviews-grid">
                {REVIEWS.map((review, index) => (
                  <article key={review.text + index} className="review-card">
                    <p className="review-text">{review.text}</p>
                    <p className="review-profile">{review.profile}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section-padding ingredients-section">
            <div className="container ingredients-grid">
              <div className="ingredients-box">
                <h2 className="section-title">
                  原材料と、からだへの
                  <br />
                  やさしさ
                </h2>
                <p className="ingredients-line">
                  原材料：湧水、オーガニック玄米、オーガニック大豆
                </p>
                <p>
                  原料はすべて、口に含めるほどの食品由来成分。万が一お口に入ってしまっても、心配ありません。
                </p>
                <p>小さなお子様と暮らす毎日に、心からの安心をお届けします。</p>
              </div>
              <div className="ingredients-visual">
                <Image src={INGREDIENTS_BG_IMAGE} alt="原材料のイメージ" width={900} height={580} />
              </div>
            </div>
          </section>

          <section className="section-padding safety-section">
            <div className="container">
                <h2 className="section-title">
                  6つのフリーと、
                  <br className="mobile-break" />
                  安全へのこだわり
                  <span className="section-subtitle">大切な人と一緒に使えるスキンケアのために</span>
                </h2>
              <p className="section-text">
                100%食品由来成分の、ピュアな処方。赤ちゃんが触れても気にならない優しさで、家族みんなの空間を整えます。
              </p>
              <div className="safety-grid">
                {SAFETY_FREE_ITEMS.map((item) => (
                  <div key={item} className="safety-pill">
                    {item}
                  </div>
                ))}
              </div>
              <p className="safety-note">※本品は食品ではありません。</p>
            </div>
          </section>

          <section className="section-padding howto-section">
            <div className="container">
              <h2 className="section-title">
                使い方
                <span className="section-subtitle">ライフスタイルに合わせて、自由にプラス</span>
              </h2>
              <div className="howto-grid">
                {HOW_TO_STEPS.map((step, index) => (
                  <div key={step.title} className="howto-card">
                    <div className="howto-icon">{String(index + 1).padStart(2, '0')}</div>
                    <h3 className="howto-title">{step.title}</h3>
                    <p className="howto-description">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-padding qa-section">
            <div className="container">
              <h2 className="section-title">
                よくあるご質問
                <span className="section-subtitle">
                  初めての方にも、安心して
                  <br className="mobile-break" />
                  お使いいただくために
                </span>
              </h2>
              <dl className="qa-list">
                {QA_ITEMS.map((item, index) => (
                  <div key={item.question} className="qa-item">
                    <dt className="qa-question">
                      <span className="qa-label">Q{index + 1}</span>
                      {item.question}
                    </dt>
                    <dd className="qa-answer">
                      {item.answer}
                      {item.linkHref && (
                        <>
                          <br />
                          <a
                            href={item.linkHref}
                            className="qa-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.linkText ?? '▶ メンバー募集ページはこちら'}
                          </a>
                        </>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className="cta-final-section">
            <div className="container cta-final-content">
              <div className="cta-final-text">
                <p className="cta-final-eyebrow">
                  あなたの肌で、ピュアな
                  <br className="eyebrow-mobile-break" />
                  透明感を感じてください。
                </p>
                <h3 className="cta-final-title">
                  ナチュラル・ピュア
                  <br />
                  ライフスタイル・ウォーター
                </h3>
                <p className="cta-final-note">内容量：200ml</p>
                <div className="cta-final-price">
                <span className="price-current">¥3,800（税込）</span>
                </div>
              <p className="cta-final-note cta-member-note">
                <span className="cta-member-highlight">会員登録でいつでも 40％OFF</span>
                <br />
                通常3,800円が → <strong>2,280円（税込）</strong>
              </p>
                <a
                  href="https://order.awaji-smilefarm.com/products/pd_2zs1guqpebsmqs3p/purchases/new"
                  className="cta-final-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  今すぐ購入する
                </a>
                <p className="cta-final-warning">
                  ※送料はお客様負担となります。着払いでお送りしますので、受け取り時に、お支払いをお願いします。ご注文後、3日から1週間以内にお届けします。
                </p>
              </div>
              <div className="cta-final-text">
                <p className="cta-final-eyebrow">
                  ご家族やご友人と一緒に、
                  <br className="eyebrow-mobile-break" />
                  お得に続けたい方へ。
                </p>
                <h3 className="cta-final-title">
                  ナチュラル・ピュア
                  <br />
                  10本入りセット
                </h3>
                <p className="cta-final-note">内容量：200ml × 10本 ／ 送料無料</p>
                <div className="cta-final-price">
                <span className="price-current">¥35,000（税込）</span>
                  <span className="price-badge">10本入り・送料無料</span>
                </div>
                <a
                  href="https://order.awaji-smilefarm.com/products/pd_k6ncmxbmbpcnzfu5/purchases/new"
                  className="cta-final-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  10本入りを購入する
                </a>
                <p className="cta-final-warning">
                  ※こちらの10本入りセットは送料無料です。ご注文後、3日から1週間以内にお届けします。
                </p>
              </div>
              <div className="cta-final-text">
                <p className="cta-final-eyebrow">
                  詰め替え用を買って、エコでお得に
                  <br className="eyebrow-mobile-break" />
                  続けたい方へ。
                </p>
                <h3 className="cta-final-title">
                  ナチュラル・ピュア
                  <br />
                  3本入りセット
                </h3>
                <p className="cta-final-note">内容量：500ml × 3本 ／ 送料 通常1,000円、離島2,000円</p>
                <div className="cta-final-price">
                  <span className="price-current">¥15,000（税込）</span>
                </div>
                <a
                  href="https://order.awaji-smilefarm.com/products/pd_kfm9b5rowqdcugwy/purchases/new"
                  className="cta-final-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  詰め替え3本セットを購入する
                </a>
                <p className="cta-final-warning">
                  ※送料は通常1,000円、離島2,000円となります。ご注文後、3日から1週間以内にお届けします。
                </p>
              </div>
            </div>
            <div className="container">
              <div className="cta-member-banner">
                <p className="cta-member-text">
                  「優しい家庭菜園の学校」のメンバーになると、
                  <br className="cta-member-break" />
                  会員特別価格で
                  <span className="cta-member-discount">約25％OFF</span>
                  でご購入いただけます。
                </p>
                <a
                  href="https://school.awaji-smilefarm.com/"
                  className="cta-member-banner-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  詳細はこちら
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <div className="footer-logo">Natural Pure</div>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Natural Pure. All rights reserved.</p>
        </footer>

        <style jsx global>{`
        .naturalpure-lp {
          --primary-green: #568c6a;
          --secondary-green: #7fb092;
          --text-color: #333333;
          --light-bg: #f7faf8;
          --deep-green: #1f3b2c;
          --white: #ffffff;
          --gold: #c7b299;
          /* 本番と同じ Zen Maru 系フォントに統一 */
          font-family: var(--font-zen-maru), 'Zen Maru Gothic', 'Hiragino Mincho ProN W6', 'Yu Mincho', '游明朝', serif;
          line-height: 1.7;
          color: var(--text-color);
          background-color: var(--white);
          -webkit-font-smoothing: antialiased;
        }

        .naturalpure-lp *,
        .naturalpure-lp *::before,
        .naturalpure-lp *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .naturalpure-lp .mobile-break {
          display: none;
        }

        .naturalpure-lp .serif-font,
        .naturalpure-lp h2.section-title {
          font-family: inherit;
        }

        .naturalpure-lp img {
          max-width: 100%;
          height: auto;
          vertical-align: bottom;
        }

        .naturalpure-lp a {
          text-decoration: none;
          transition: opacity 0.3s;
        }

        .naturalpure-lp a:hover {
          opacity: 0.8;
        }

        .naturalpure-lp .container {
          width: 90%;
          max-width: 1000px;
          margin: 0 auto;
        }

        .naturalpure-lp .section-padding {
          padding: 80px 0;
        }

        .naturalpure-lp .site-header {
          padding: 20px;
          text-align: center;
          background: var(--white);
          border-bottom: 1px solid #eee;
        }

        .naturalpure-lp .logo {
          font-size: 1.5rem;
          color: var(--primary-green);
          letter-spacing: 0.1em;
        }

        .naturalpure-lp .fv-section {
          position: relative;
          width: 100%;
          padding: 40px 0 60px;
          background-color: #f5f7f8;
        }

        .naturalpure-lp .fv-image-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          z-index: 1;
        }

        .naturalpure-lp .main-visual {
          width: 100%;
          display: block;
          border-radius: 0;
          box-shadow: none;
        }

        .naturalpure-lp h2.section-title {
          font-size: 2rem;
          color: var(--primary-green);
          margin-bottom: 1.5rem;
          line-height: 1.4;
        }

        .naturalpure-lp .section-subtitle {
          display: block;
          font-size: 1rem;
          letter-spacing: 0.1em;
          color: #6d7a74;
          margin-top: 0.75rem;
        }

        .naturalpure-lp .section-text {
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }

        .naturalpure-lp .cta-button {
          display: inline-block;
          background-color: #2f5f40;
          color: var(--white);
          padding: 15px 42px;
          border-radius: 999px;
          font-size: 1.1rem;
          font-weight: bold;
          letter-spacing: 0.05em;
          box-shadow: 0 12px 26px rgba(47, 95, 64, 0.36);
          transition: all 0.3s ease;
        }

        .naturalpure-lp .cta-button:hover {
          background-color: #3d8158;
          box-shadow: 0 16px 34px rgba(61, 129, 88, 0.42);
          transform: translateY(-2px);
          opacity: 1;
        }

        .naturalpure-lp .cta-button.large {
          padding: 20px 60px;
          font-size: 1.3rem;
        }

        .naturalpure-lp .concept-section {
          background: #fff;
        }

        .naturalpure-lp .concept-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          align-items: center;
        }

        .naturalpure-lp .concept-body p {
          margin-bottom: 1rem;
        }

        .naturalpure-lp .concept-highlight {
          font-weight: 600;
          color: var(--primary-green);
        }

        .naturalpure-lp .concept-cta {
          margin-top: 2rem;
          text-align: center;
        }

        .naturalpure-lp .concept-cta .cta-final-button {
          margin-bottom: 0;
        }

        .naturalpure-lp .concept-image img {
          border-radius: 24px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
        }

        .naturalpure-lp .empathy-section {
          background: #f7faf8;
        }

        .naturalpure-lp .empathy-body {
          max-width: 720px;
          margin-top: 1.5rem;
          font-size: 1rem;
          color: #4a5550;
        }

        .naturalpure-lp .empathy-body p + p {
          margin-top: 0.75rem;
        }

        .naturalpure-lp .ingredients-section {
          position: relative;
          background: linear-gradient(180deg, #e7f8f2 0%, #f2fbf7 60%, #ffffff 100%);
          overflow: hidden;
        }

        .naturalpure-lp .ingredients-box {
          background: #ffffff;
          border-radius: 24px;
          padding: 32px 28px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
          border: 1px solid #edf2ef;
          max-width: 520px;
          margin-left: 0;
          margin-right: auto;
        }

        .naturalpure-lp .ingredients-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 36px;
          align-items: center;
        }

        .naturalpure-lp .ingredients-visual img {
          width: 100%;
          height: 100%;
          max-height: 520px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        }

        .naturalpure-lp .ingredients-box .section-title {
          margin-bottom: 1rem;
        }

        .naturalpure-lp .ingredients-line {
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: var(--primary-green);
        }

        .naturalpure-lp .ingredients-box p + p {
          margin-top: 0.75rem;
        }

        .naturalpure-lp .mechanism-section {
          position: relative;
          background: #000;
          color: var(--white);
          padding: 100px 0;
          overflow: hidden;
        }

        .naturalpure-lp .mechanism-overlay {
          position: absolute;
          inset: 0;
          background: url('${MECHANISM_BG_IMAGE}') center / cover no-repeat;
          opacity: 1;
          z-index: 0;
        }

        .naturalpure-lp .mechanism-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .naturalpure-lp .mechanism-section .section-title,
        .naturalpure-lp .mechanism-section .mechanism-lead,
        .naturalpure-lp .mechanism-section .mechanism-body {
          text-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }

        .naturalpure-lp .section-title.section-title-white {
          color: var(--white);
        }

        .naturalpure-lp .mechanism-lead {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .naturalpure-lp .mechanism-body {
          max-width: 680px;
          margin: 0 auto;
          font-size: 1.05rem;
          line-height: 1.9;
        }

        .naturalpure-lp .gold-text {
          color: var(--gold);
          font-weight: 600;
        }

        .naturalpure-lp .nutrient-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.1rem 0.75rem;
          margin: 0 0.15rem;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.95rem;
          color: #1f2a24;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }

        .naturalpure-lp .nutrient-amino {
          background: rgba(255, 236, 202, 0.95);
          color: #8a5d14;
        }

        .naturalpure-lp .nutrient-peptide {
          background: rgba(209, 237, 242, 0.95);
          color: #0b5a6a;
        }

        .naturalpure-lp .nutrient-sugar {
          background: rgba(233, 219, 255, 0.95);
          color: #5c2b96;
        }

        .naturalpure-lp .nutrient-vitamin {
          background: rgba(221, 245, 210, 0.95);
          color: #2d6a1e;
        }

        .naturalpure-lp .mechanism-highlight {
          margin-top: 1rem;
          font-weight: 600;
        }

        .naturalpure-lp .benefits-section {
          position: relative;
          padding: 90px 0;
          background-image: url('${BENEFITS_BG_IMAGE}');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          overflow: hidden;
          border-top: 1px solid rgba(86, 140, 106, 0.1);
          border-bottom: 1px solid rgba(86, 140, 106, 0.08);
        }

        .naturalpure-lp .benefits-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.55) 65%, rgba(255, 255, 255, 0.82) 100%),
            radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.65), transparent 60%),
            radial-gradient(circle at 75% 0%, rgba(255, 255, 255, 0.5), transparent 55%);
          opacity: 0.8;
          pointer-events: none;
        }

        .naturalpure-lp .benefits-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.55) 1px, transparent 1px),
            radial-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px);
          background-size: 120px 120px, 80px 80px;
          background-position: 0 0, 40px 40px;
          opacity: 0.4;
          pointer-events: none;
        }

        .naturalpure-lp .benefits-section .container {
          position: relative;
          z-index: 1;
        }

        .naturalpure-lp .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          margin-top: 40px;
        }

        .naturalpure-lp .benefits-item {
          background: var(--white);
          border-radius: 20px;
          padding: 24px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid #eef2ef;
        }

        .naturalpure-lp .benefits-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 1px solid rgba(86, 140, 106, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
          font-weight: 700;
          color: var(--primary-green);
        }

        .naturalpure-lp .benefits-heading {
          font-size: 1.05rem;
          color: var(--primary-green);
          line-height: 1.6;
          word-break: keep-all;
        }

        .naturalpure-lp .benefits-heading span {
          white-space: nowrap;
        }

        .naturalpure-lp .benefits-heading-line {
          display: block;
          margin-top: 0.5rem;
        }

        .naturalpure-lp .benefits-footer {
          margin-top: 32px;
          text-align: center;
          color: #4a5550;
          font-size: 1rem;
          display: inline-block;
          padding: 10px 18px;
          background: rgba(255, 255, 255, 0.85);
          border-radius: 999px;
        }

        .naturalpure-lp .benefits-section .container {
          text-align: center;
        }

        .naturalpure-lp .benefits-section .section-title {
          display: inline-block;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 999px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        }

        .naturalpure-lp .reviews-section {
          background: #f7faf8;
        }

        .naturalpure-lp .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          margin-top: 32px;
        }

        .naturalpure-lp .review-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.06);
          border: 1px solid #edf2ef;
        }

        .naturalpure-lp .review-text {
          font-size: 0.95rem;
          margin-bottom: 1rem;
        }

        .naturalpure-lp .review-profile {
          font-size: 0.85rem;
          color: #6c7a74;
          text-align: right;
        }

        .naturalpure-lp .safety-section {
          background: #ffffff;
        }

        .naturalpure-lp .safety-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .naturalpure-lp .safety-pill {
          padding: 8px 16px;
          border-radius: 999px;
          background: #f2f7f4;
          color: #365746;
          font-size: 0.9rem;
          border: 1px solid rgba(86, 140, 106, 0.35);
        }

        .naturalpure-lp .safety-note {
          margin-top: 12px;
          font-size: 0.8rem;
          color: #8a9490;
        }

        .naturalpure-lp .howto-section {
          position: relative;
          background: #f7faf8;
          overflow: hidden;
        }

        .naturalpure-lp .howto-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url('/images/publicimagesnaturalpure-lp/feature-12.png') center / cover no-repeat;
          opacity: 0.45;
          z-index: 0;
        }

        .naturalpure-lp .howto-section .container {
          position: relative;
          z-index: 1;
        }

        .naturalpure-lp .howto-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          margin-top: 32px;
        }

        .naturalpure-lp .howto-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 22px 20px;
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.05);
          border: 1px solid #eef2ef;
        }

        .naturalpure-lp .howto-icon {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(86, 140, 106, 0.1);
          color: var(--primary-green);
          font-weight: 700;
          font-size: 0.95rem;
          margin-bottom: 10px;
        }

        .naturalpure-lp .howto-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.4rem;
          color: var(--primary-green);
        }

        .naturalpure-lp .howto-description {
          font-size: 0.95rem;
          color: #4f5a55;
        }

        .naturalpure-lp .qa-section {
          background: #ffffff;
        }

        .naturalpure-lp .qa-list {
          margin-top: 28px;
        }

        .naturalpure-lp .qa-item + .qa-item {
          margin-top: 18px;
          padding-top: 18px;
          border-top: 1px solid #e2e8e4;
        }

        .naturalpure-lp .qa-question {
          display: flex;
          align-items: baseline;
          gap: 10px;
          font-weight: 600;
          color: var(--primary-green);
          margin-bottom: 6px;
        }

        .naturalpure-lp .qa-label {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 26px;
          height: 26px;
          border-radius: 999px;
          background: rgba(86, 140, 106, 0.1);
          font-size: 0.8rem;
        }

        .naturalpure-lp .qa-answer {
          font-size: 0.95rem;
          color: #4a5550;
          padding-left: 36px;
        }

        .naturalpure-lp .qa-link {
          color: var(--primary-green);
          font-weight: 600;
          text-decoration: underline;
        }

        .naturalpure-lp .conclusion-section {
          position: relative;
          padding: 110px 0;
          background: linear-gradient(180deg, #e7f8f2 0%, #dff0ff 55%, #e5f7ff 100%);
          overflow: hidden;
        }

        .naturalpure-lp .conclusion-section::before {
          content: '';
          position: absolute;
          inset: -30% -5% auto -5%;
          height: 70%;
          background: radial-gradient(circle at 20% 25%, rgba(255, 255, 255, 0.85), transparent 55%),
            radial-gradient(circle at 80% 10%, rgba(255, 255, 255, 0.65), transparent 60%);
          opacity: 0.95;
          pointer-events: none;
        }

        .naturalpure-lp .conclusion-section::after {
          content: '';
          position: absolute;
          inset: auto 0 0 0;
          height: 45%;
          background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
          pointer-events: none;
        }

        .naturalpure-lp .conclusion-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px);
          background-size: 120px 120px;
          opacity: 0.5;
        }

        .naturalpure-lp .conclusion-content {
          position: relative;
        }

        .naturalpure-lp .conclusion-text-box {
          background: var(--white);
          border-radius: 32px;
          padding: 40px;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.08);
        }

        .naturalpure-lp .conclusion-text-box p {
          margin-bottom: 1rem;
        }

        .naturalpure-lp .conclusion-message {
          text-align: center;
          font-weight: 600;
          color: var(--primary-green);
          margin-top: 1.5rem;
        }

        .naturalpure-lp .cta-final-section {
          position: relative;
          padding: 120px 0;
          color: #1e2a21;
          overflow: hidden;
        }

        .naturalpure-lp .cta-member-banner {
          position: relative;
          z-index: 2;
          background: linear-gradient(90deg, #7fb092, #568c6a);
          color: #ffffff;
          padding: 20px;
          border-radius: 16px;
          text-align: center;
          font-weight: 700;
          margin-top: 28px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          letter-spacing: 0.01em;
          display: grid;
          gap: 12px;
          justify-items: center;
        }

        .naturalpure-lp .cta-member-text {
          font-size: 1rem;
          line-height: 1.6;
        }

        .naturalpure-lp .cta-member-banner a {
          color: #ffffff;
          text-decoration: underline;
          font-weight: 800;
          margin-left: 4px;
        }

        .naturalpure-lp .cta-member-banner-break {
          display: none;
        }

        .naturalpure-lp .cta-member-discount {
          display: inline-block;
          margin-left: 4px;
          padding: 2px 10px;
          border-radius: 999px;
          background: #fff4d4;
          color: #8a5a22;
          font-weight: 800;
        }

        .naturalpure-lp .cta-member-banner-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #2f5f40 !important;
          border-radius: 999px;
          padding: 9px 16px;
          font-weight: 800;
          font-size: 0.9rem;
          text-decoration: none !important;
          border: 1px solid #e0ebdf;
          white-space: nowrap;
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.14);
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
          width: auto;
          max-width: 200px;
        }

        .naturalpure-lp .cta-member-banner-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.16);
          opacity: 0.95;
        }

        .naturalpure-lp .cta-final-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url('${CTA_FINAL_IMAGE}') center/cover no-repeat;
          transform: scale(1.02);
          z-index: 0;
        }

        .naturalpure-lp .cta-final-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.65) 55%, rgba(255, 255, 255, 0.15) 100%);
          z-index: 1;
        }

        .naturalpure-lp .cta-final-content {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          gap: 24px;
        }

        .naturalpure-lp .cta-final-text {
          max-width: 440px;
          background: rgba(255, 255, 255, 0.96);
          padding: 32px;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
        }

        .naturalpure-lp .cta-final-meta {
          position: relative;
          z-index: 2;
          margin-top: 28px;
          padding: 18px 20px;
          max-width: 720px;
          background: rgba(255, 255, 255, 0.96);
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
          font-size: 0.9rem;
          color: #4c5a55;
        }

        .naturalpure-lp .cta-final-meta-line + .cta-final-meta-line {
          margin-top: 0.45rem;
        }

        .naturalpure-lp .cta-final-meta-line:first-child {
          font-weight: 600;
        }

        .naturalpure-lp .cta-final-eyebrow {
          font-size: clamp(0.95rem, 2.4vw, 1.05rem);
          line-height: 1.35;
          font-weight: 600;
          color: var(--primary-green);
          margin-bottom: 0.65rem;
          white-space: nowrap;
        }

        .naturalpure-lp .eyebrow-mobile-break {
          display: none;
        }

        .naturalpure-lp .cta-final-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .naturalpure-lp .cta-final-note {
          color: #5c6d66;
          margin-bottom: 1.5rem;
        }

        .naturalpure-lp .cta-member-note {
          display: none;
        }

        .naturalpure-lp .cta-member-highlight {
          display: inline-block;
          padding: 4px 14px;
          border-radius: 999px;
          background: #f7e1c4;
          color: #8a5a22;
          font-weight: 700;
          letter-spacing: 0.04em;
          font-size: 1rem;
        }

        .naturalpure-lp .cta-final-price {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 1.25rem;
        }

        .naturalpure-lp .price-original {
          font-size: 1.1rem;
          color: #7a857f;
          text-decoration: line-through;
        }

        .naturalpure-lp .price-arrow {
          font-size: 1.2rem;
          color: #5d6a63;
        }

        .naturalpure-lp .price-current {
          font-size: 2rem;
          font-weight: 700;
          color: #2f6b48;
        }

        .naturalpure-lp .price-badge {
          background: #f7e1c4;
          color: #8a5a22;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 999px;
        }

        .naturalpure-lp .cta-final-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #2f5f40;
          color: #fff;
          padding: 18px 52px;
          border-radius: 999px;
          font-weight: 700;
          letter-spacing: 0.05em;
          box-shadow: 0 14px 28px rgba(47, 95, 64, 0.38);
          margin-bottom: 0.75rem;
          font-size: 1.05rem;
        }

        .naturalpure-lp .cta-final-button:hover {
          background: #3d8158;
          box-shadow: 0 18px 34px rgba(61, 129, 88, 0.45);
          transform: translateY(-2px);
          opacity: 1;
        }

        .naturalpure-lp .cta-final-warning {
          font-size: 0.85rem;
          color: #6c7a74;
        }

        @media (max-width: 640px) {
          .naturalpure-lp .mobile-break {
            display: block;
          }

          .naturalpure-lp .eyebrow-mobile-break {
            display: block;
          }

          .naturalpure-lp .cta-final-eyebrow {
            font-size: 0.95rem;
            line-height: 1.4;
            white-space: normal;
          }

          .naturalpure-lp .cta-member-text {
            font-size: 0.88rem;
            line-height: 1.45;
          }

          .naturalpure-lp .cta-member-break {
            display: block;
          }

          .naturalpure-lp .ingredients-visual img {
            max-height: 360px;
            object-position: center;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .naturalpure-lp .animate-pulse {
          animation: pulse 2s infinite;
        }

        .naturalpure-lp .site-footer {
          background: var(--deep-green);
          color: rgba(255, 255, 255, 0.9);
          padding: 40px 0 20px 0;
        }

        .naturalpure-lp .footer-inner {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 20px;
          text-align: center;
        }

        .naturalpure-lp .footer-logo {
          font-family: 'Noto Serif JP', serif;
          font-size: 1.3rem;
          letter-spacing: 0.2em;
        }

        .naturalpure-lp .footer-copy {
          text-align: center;
          margin-top: 20px;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 768px) {
          .naturalpure-lp h2.section-title {
            font-size: 1.6rem;
          }

          .naturalpure-lp .section-padding {
            padding: 60px 0;
          }

          .naturalpure-lp .ingredients-box {
            margin-left: 0;
            margin-right: auto;
          }

          .naturalpure-lp .cta-button {
            width: 90%;
            padding: 15px 20px;
          }

          .naturalpure-lp .benefits-heading br {
            display: none;
          }

          .naturalpure-lp .conclusion-text-box {
            padding: 28px;
          }

          .naturalpure-lp .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 1024px) {
          .naturalpure-lp .cta-final-content {
            justify-content: center;
          }

          .naturalpure-lp .cta-final-text {
            max-width: 100%;
          }

          .naturalpure-lp .cta-member-banner {
            margin-bottom: 20px;
            font-size: 15px;
            line-height: 1.6;
            padding: 18px;
          }
        }
        `}</style>
      </div>
    </div>
  )
}

/*
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ナチュラル・ピュア | 発酵が育てる、肌の小さな生態系</title>
    <link rel="stylesheet" href="style.css">
    </head>
<body>
    <header class="first-view">
        <div class="first-view__bg">
            </div>
        <div class="first-view__content">
            <h1 class="first-view__title">
                発酵が育てる、肌の小さな生態系。
                <span class="first-view__subtitle">皮膚常在菌との共生という美しさ</span>
            </h1>
            </div>
    </header>
    <main>
        <section class="section concept">
            <div class="container">
                <h2 class="section__title">
                    発酵が育てる、肌の小さな生態系
                    <span class="section__subtitle">皮膚常在菌との共生という美しさ</span>
                </h2>
                <div class="concept__body">
                    <p>肌は、ただの表面ではありません。そこには無数の“小さな命”が息づいています。表皮ブドウ球菌、アクネ菌、黄色ブドウ球菌…それぞれが、あなたの肌を守るために働く大切な存在。それが「皮膚常在菌」です。</p>
                    <p>常在菌は、肌を弱酸性に整え、潤いを抱え込み、外的刺激から守り、あなたの肌を静かに支え続けています。しかし、このバランスは洗浄のしすぎ・乾燥・ストレス・生活習慣など、ほんの些細なきっかけで崩れてしまいます。</p>
                    <p class="concept__highlight">だからこそ、私たちは“発酵”の力に着目しました。</p>
                </div>
                <div class="concept__image">
                    <img src="images/concept-illustration.png" alt="皮膚常在菌のイラスト">
                </div>
            </div>
        </section>
        <section class="section mechanism">
            <div class="mechanism__bg">
                </div>
            <div class="container">
                <h2 class="section__title section__title--white">
                    発酵は“菌がつくる、自然の恵み”
                </h2>
                <p class="mechanism__lead">発酵とは、微生物が素材を分解し、新しい価値を生みだす生命の営み。</p>
                <div class="mechanism__content">
                    <p>乳酸菌、酵母、麹菌がつくり出す<span class="gold-text">アミノ酸</span>、<span class="gold-text">ペプチド</span>、<span class="gold-text">糖類</span>、<span class="gold-text">ビタミン</span>は、肌の常在菌にとって理想的な栄養源となります。</p>
                    <p>発酵の力で生まれた成分は、常在菌が健やかに育つ“土壌”を整え、肌の上にしなやかな生態系を築きます。</p>
                    <p class="mechanism__highlight">それはまるで、小さな菌たちのための「ごちそう」のよう。</p>
                </div>
                </div>
        </section>
        <section class="section benefits">
            <div class="container">
                <h2 class="section__title">
                    発酵 × 常在菌＝肌が自ら整う力
                    <span class="section__subtitle">発酵エキスが常在菌環境を豊かにすると、肌は本来の力を取り戻し始めます。</span>
                </h2>
                <ul class="benefits__list">
                    <li class="benefits__item">
                        <div class="benefits__icon"><img src="images/icon-barrier.png" alt=""></div>
                        <h3 class="benefits__heading">バリア機能が整い、<br>揺らぎにくくなる</h3>
                    </li>
                    <li class="benefits__item">
                        <div class="benefits__icon"><img src="images/icon-moisture.png" alt=""></div>
                        <h3 class="benefits__heading">潤いが長く留まり、<br>乾燥しにくい肌へ</h3>
                    </li>
                    <li class="benefits__item">
                        <div class="benefits__icon"><img src="images/icon-clear.png" alt=""></div>
                        <h3 class="benefits__heading">肌荒れを起こしにくく、<br>穏やかな透明感が宿る</h3>
                    </li>
                    <li class="benefits__item">
                        <div class="benefits__icon"><img src="images/icon-resilience.png" alt=""></div>
                        <h3 class="benefits__heading">外的刺激に負けない、<br>しなやかな肌質へ</h3>
                    </li>
                </ul>
                <p class="benefits__footer">
                    これは化粧品が肌を“変える”のではなく、肌自身が自らを整えるという現象。<br>
                    発酵が、あなたの肌に宿る菌たちの力を引き出し、自然な美しさが息を吹き返します。
                </p>
            </div>
        </section>
        <section class="section conclusion">
            <div class="conclusion__bg">
                </div>
            <div class="container conclusion__content">
                <div class="conclusion__text-box">
                    <h2 class="section__title">発酵が未来の美容にもたらすもの</h2>
                    <p>私たちは、肌と常在菌と発酵を「ひとつの生態系」として捉えています。微生物が生み出す豊かな栄養が常在菌を整え、その結果として肌が美しくなる。この循環こそが、自然と寄り添い、肌自身を尊重する新しいスキンケアの形だと考えています。</p>
                    <p class="conclusion__message">
                        ― 発酵がつくる美しさは、肌と菌が生きていることへの讃歌です。 ―
                    </p>
                </div>
            </div>
        </section>
    </main>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <div class="footer__logo">Natural Pure</div>
                <nav class="footer__nav">
                    <ul>
                        <li><a href="#">商品一覧</a></li>
                        <li><a href="#">ブランドについて</a></li>
                        <li><a href="#">お問い合わせ</a></li>
                    </ul>
                </nav>
                <div class="footer__sns">
                    SKS <a href="#">IG</a> <a href="#">YT</a>
                </div>
            </div>
            <p class="footer__copyright"><small>© 2022 Natural Pure. All rights reserved.</small></p>
        </div>
    </footer>
</body>
</html>
*/


