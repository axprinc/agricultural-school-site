'use client'

import Image from 'next/image'
import './naturalpure-lp.css'

const CONCEPT_IMAGE = '/images/publicimagesnaturalpure-lp/feature-2.webp'
const INGREDIENTS_BG_IMAGE = '/images/publicimagesnaturalpure-lp/feature-11.webp'

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
                src="/images/publicimagesnaturalpure-lp/hero.webp"
                alt="ナチュラル・ピュア ライフスタイル・ウォーター"
                width={1200}
                height={900}
                className="main-visual"
                sizes="100vw"
                priority
              />
            </div>
          </section>

          <section className="section-padding concept-section">
            <div className="container concept-grid">
              <div className="concept-copy">
                <h2 className="section-title">
                  <span className="concept-title-pc">発酵の力で&quot;水光肌&quot;へ。<br />自然由来の成分が肌を整えます。</span>
                  <span className="concept-title-mobile">発酵の力で、水光肌へ。</span>
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
                <Image src={CONCEPT_IMAGE} alt="皮膚常在菌のイメージ" width={640} height={640} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </section>

          <section className="mechanism-section">
            <div className="mechanism-overlay" />
            <div className="container mechanism-content">
              <h2 className="section-title section-title-white">
                発酵は菌がつくる
                <br className="mobile-break" />
                自然の恵み
              </h2>
              <p className="mechanism-lead">発酵とは、微生物が素材を分解し、<br className="mobile-break" />新しい価値を生みだす生命の営み。</p>
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
                <span className="benefits-title-pc">肌本来の力を引き出す、<br className="mobile-break" />発酵と常在菌のバランス設計</span>
                <span className="benefits-title-mobile">発酵×常在菌バランス設計</span>
                <span className="section-subtitle">
                  発酵エキスが常在菌環境を整え、肌本来の力を引き出します。
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
                これは化粧品が肌を“変える”のではなく、<br className="mobile-break" />肌自身が自らを整えるという現象。
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
                <p className="conclusion-message">発酵がつくる美しさは、<br className="mobile-break" />肌と菌が生きていることへの讃歌です。</p>
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
                  自然由来の、やさしさ。
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
                <Image src={INGREDIENTS_BG_IMAGE} alt="原材料のイメージ" width={900} height={580} sizes="(max-width: 768px) 100vw, 50vw" />
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
                <p className="cta-final-note">内容量：500ml × 3本 ／<br />送料 通常1,000円、離島2,000円</p>
                <div className="cta-final-price">
                  <span className="price-current">¥15,000（税込）</span>
                </div>
                <div className="cta-product-image">
                  <Image
                    src="/images/publicimagesnaturalpure-lp/naturalpure3.webp"
                    alt="ナチュラル・ピュア 3本入りセット"
                    width={300}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="cta-product-img"
                  />
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
                <p className="cta-final-warning">
                  ※「優しい家庭菜園の学校」のメンバーは、メンバー価格9,900円でお求め頂けます。
                </p>
              </div>
            </div>
            <div className="container">
              <div className="cta-member-banner">
                <p className="cta-member-text">
                  「優しい家庭菜園の学校」のメンバーになると、
                  <br className="cta-member-break" />
                  会員特別価格で
                  <span className="cta-member-discount">約30〜40％OFF</span>
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


