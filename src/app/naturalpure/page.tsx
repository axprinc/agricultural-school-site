'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Leaf, Droplet, Heart, Zap, ArrowRight, Sun, Layers, Check, Star, ShoppingCart } from 'lucide-react'

// --- CONFIGURATION ---
const ACCENT_COLOR_CLASS = 'text-[#228B22]' // Forest Green
const HERO_HEIGHT_CLASS = 'min-h-[80vh]'
const MAX_WIDTH_CLASS = 'max-w-7xl'

// --- UTILITY: SCROLL FADE-IN HOOK ---
const useInView = (threshold = 0.1): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  
  const callback = useCallback((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      setInView(true)
      observer.unobserve(entry.target)
    }
  }, [])

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return
    const observer = new IntersectionObserver(callback, { threshold })
    observer.observe(currentRef)
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [callback, threshold])

  return [ref, inView]
}

// --- COMPONENTS ---
const FadeInSection = ({ children, delay = 'delay-0', className = '' }) => {
  const [ref, inView] = useInView(0.1)
  const baseClasses = 'transition-all duration-1200 ease-out transform'
  const visibilityClasses = inView
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-12'

  return (
    <div
      ref={ref}
      className={`${baseClasses} ${visibilityClasses} ${delay} ${className}`}
    >
      {children}
    </div>
  )
}

// --- PRODUCT DATA ---
const PRODUCT_DATA = {
  name: 'ナチュラル・ピュア ライフスタイルウォーター',
  subtitle: '肌が、呼吸を忘れていたことを知る。',
  description: '自然の力を、最も純粋な形で。肌本来の美しさを静かに呼び覚ます、スイス発のミニマルなスキンケア。',
  price: 1980,
  originalPrice: 3300,
  capacity: '200ml',
  features: [
    {
      icon: Leaf,
      title: 'もう、成分表を疑わなくていい。',
      description: 'オーガニック認証成分のみを使用。不要な添加物を一切排除した、究極にクリーンな処方です。',
    },
    {
      icon: Droplet,
      title: 'ルーティンから「複雑さ」を消す。',
      description: '多段階のケアは不要です。厳選された数ステップで、肌に必要な全てを届け、時間を節約します。',
    },
    {
      icon: Heart,
      title: '未来の肌と地球に、責任を持つ。',
      description: 'サステナブルな方法で調達された原料と、生分解性パッケージ。環境負荷を最小限に抑えます。',
    },
    {
      icon: Sun,
      title: '内側から湧き出る、穏やかな輝き。',
      description: '合成香料を使わず、エッセンシャルオイルで心の安らぎも追求。肌と心の調和が美しさを導きます。',
    },
  ],
  ingredients: [
    'アルガンオイル',
    'ローズヒップオイル',
    'ヒアルロン酸',
    'グリセリン',
    'アロエベラエキス',
    'カモミールエキス',
  ],
  howToUse: [
    '洗顔後、清潔な手で適量を手に取ります',
    '顔全体にやさしく馴染ませます',
    '軽くパッティングして浸透させます',
    '朝晩のスキンケアにご使用ください',
  ],
  testimonials: [
    {
      name: 'Aさん（30代）',
      rating: 5,
      comment: '敏感肌でも全く刺激がなく、肌がふっくらと潤うようになりました。香りも自然で心地よく、毎日のスキンケアが楽しみです。',
    },
    {
      name: 'Bさん（40代）',
      rating: 5,
      comment: '成分表を見て安心して購入しました。使ってみると、肌の調子が明らかに良くなり、化粧のノリも格段にアップしました。',
    },
    {
      name: 'Cさん（20代）',
      rating: 4,
      comment: 'シンプルなケアで肌が整うようになりました。忙しい朝でも手早く使えるのが嬉しいです。',
    },
  ],
}

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center mb-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

// --- MAIN PRODUCT PAGE ---
export default function TonerProductPage() {
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="font-sans antialiased bg-[#FAFAFA] text-gray-900">
      {/* Header */}
      <header className={`sticky top-0 z-20 bg-white/80 border-b border-gray-100 backdrop-blur-sm`}>
        <div className={`mx-auto px-8 py-4 flex justify-between items-center ${MAX_WIDTH_CLASS}`}>
          <Link href="/" className="text-xl font-bold text-gray-900">
            <span className={ACCENT_COLOR_CLASS}>NATURAL</span> PURE
          </Link>
          <Link href="/" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
            ホームへ戻る
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className={`flex items-center justify-center ${HERO_HEIGHT_CLASS} bg-gradient-to-br from-green-50 to-white border-b border-gray-100`}>
          <div className={`p-8 mx-auto ${MAX_WIDTH_CLASS}`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <FadeInSection>
                <div className="relative aspect-square bg-white rounded-3xl shadow-2xl p-8">
                  <Image
                    src="/images/products/ナチュラルピュア_商品画像.png"
                    alt={PRODUCT_DATA.name}
                    fill
                    className="object-contain rounded-2xl"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </FadeInSection>

              {/* Product Info */}
              <div>
                <FadeInSection>
                  <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-gray-900 mb-6">
                    <span className="block">ナチュラル・ピュア</span>
                    <span className="block">化粧水</span>
                  </h1>
                </FadeInSection>
                <FadeInSection delay="delay-200">
                  <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                    {PRODUCT_DATA.subtitle}
                  </p>
                </FadeInSection>
                <FadeInSection delay="delay-400">
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {PRODUCT_DATA.description}
                  </p>
                </FadeInSection>

                {/* Price */}
                <FadeInSection delay="delay-600">
                  <div className="mb-8">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="text-4xl font-extrabold text-gray-900">
                        ¥{PRODUCT_DATA.price.toLocaleString()}
                      </span>
                      <span className="text-xl text-gray-400 line-through">
                        ¥{PRODUCT_DATA.originalPrice.toLocaleString()}
                      </span>
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                        セール中
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">容量: {PRODUCT_DATA.capacity}</p>
                    <p className="text-xs text-gray-500 mt-1">※表示価格に送料は含まれておりません（送料別）。</p>
                  </div>
                </FadeInSection>

                {/* Quantity & Add to Cart */}
                <FadeInSection delay="delay-800">
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      数量
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        −
                      </button>
                      <span className="text-xl font-bold w-12 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <a
                    href="https://order.awaji-smilefarm.com/products/pd_2zs1guqpebsmqs3p/purchases/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-8 text-lg font-bold text-white bg-gray-900 hover:bg-gray-700 transition-colors border border-gray-900 rounded-lg flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    今すぐ購入する
                  </a>
                </FadeInSection>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className={`mx-auto px-8 ${MAX_WIDTH_CLASS}`}>
            <FadeInSection className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                ピュアであることの意味
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                自然の力を、最も純粋な形で肌に届けます
              </p>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-6 auto-rows-fr">
              {PRODUCT_DATA.features.map((feature, index) => (
                <FadeInSection
                  key={index}
                  delay={`delay-${index * 150}`}
                  className="p-10 border border-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
                >
                  <feature.icon className={`w-10 h-10 mb-4 ${ACCENT_COLOR_CLASS}`} />
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* Fermentation & Microbiome Section */}
        <section className="py-24 bg-[#FAFAFA]">
          <div className={`mx-auto px-8 ${MAX_WIDTH_CLASS}`}>
            <FadeInSection className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                発酵が育てる、肌の小さな生態系 ― 皮膚常在菌との共生という美しさ
              </h2>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-white rounded-3xl p-10 shadow-lg space-y-6 text-gray-700 leading-relaxed">
                <p>肌は、ただの表面ではありません。そこには、無数の“小さな命”が息づいています。表皮ブドウ球菌、アクネ菌、黄色ブドウ球菌… そのひとつひとつが、あなたの肌を守るために働いている。 それが 皮膚常在菌という存在です。</p>
                <p>常在菌は、肌を弱酸性に整え、潤いを抱え込み、外からの刺激から守り、あなたの肌を毎日、静かに支え続けています。 しかしそのバランスは、洗浄しすぎ・乾燥・ストレス・生活習慣… ほんの少しの乱れで崩れてしまいます。 菌たちが不安定になれば、肌もまた敏感に揺らぐ。</p>
                <p>そこで私たちが注目したのが、発酵です。</p>

                <div className="my-8 h-px bg-gray-200" />

                <h3 className="text-2xl font-bold text-gray-900">発酵は“菌がつくる、菌のための恵み”</h3>
                <p>発酵とは、微生物が素材を分解し、変化させ、新しい価値を生みだす生命の働き。乳酸菌、酵母、麹菌。彼らがつくり出すアミノ酸、ペプチド、糖類、ビタミンは、肌の常在菌にとって理想的な栄養源になります。</p>
                <p>発酵の力で生まれた成分は、常在菌が育つ“土壌”を整え、肌の上に健全でしなやかな生態系を作り出します。それはまるで、小さな菌たちに向けた「ごちそう」のように。発酵は、肌を外側から飾るのではなく、内側で働く菌たちを活かす美容なのです。</p>

                <div className="my-8 h-px bg-gray-200" />

                <h3 className="text-2xl font-bold text-gray-900">発酵 × 常在菌＝肌が自ら整う力</h3>
                <p>発酵エキスが常在菌環境を豊かにすると、肌は本来の力を取り戻しはじめます。</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>バリア機能が整い、揺らぎにくくなる</li>
                  <li>潤いが長く留まり、乾燥しにくい</li>
                  <li>肌荒れしにくく、穏やかな透明感が生まれる</li>
                  <li>刺激に負けない、しなやかな肌へ</li>
                </ul>
                <p>これは化粧品が肌を“変える”のではなく、肌自身が、自らを整えていくという現象。発酵が、あなたの肌に宿る菌たちの力を引き出し、肌の自然な美しさが息を吹き返すのです。</p>

                <div className="my-8 h-px bg-gray-200" />

                <h3 className="text-2xl font-bold text-gray-900">発酵が未来の美容にもたらすもの</h3>
                <p>私たちは、肌と常在菌と発酵を「ひとつの生態系」として捉えています。人の手ではつくれない豊かな栄養を生み、肌を守る菌たちを整え、その結果として肌が美しくなる。この循環こそが、自然と寄り添い、肌自身を尊重する新しいスキンケアの形だと考えています。</p>

                <p className="text-center font-semibold text-gray-900 mt-8">― 発酵がつくる美しさは、 肌と菌が生きていることへの讃歌です。 ―</p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="py-24 bg-white">
          <div className={`mx-auto px-8 ${MAX_WIDTH_CLASS}`}>
            <FadeInSection className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                ご使用方法
              </h2>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-10 shadow-lg">
                <ol className="space-y-6">
                  {PRODUCT_DATA.howToUse.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#228B22] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-lg text-gray-700 pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-[#FAFAFA]">
          <div className={`mx-auto px-8 ${MAX_WIDTH_CLASS}`}>
            <FadeInSection className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                お客様の声
              </h2>
            </FadeInSection>

            <div className="grid md:grid-cols-3 gap-6">
              {PRODUCT_DATA.testimonials.map((testimonial, index) => (
                <FadeInSection
                  key={index}
                  delay={`delay-${index * 150}`}
                  className="bg-white rounded-3xl p-8 shadow-lg"
                >
                  <StarRating rating={testimonial.rating} />
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {testimonial.comment}
                  </p>
                  <p className="text-sm font-semibold text-gray-600">
                    — {testimonial.name}
                  </p>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className={`mx-auto px-8 ${MAX_WIDTH_CLASS} text-center`}>
            <FadeInSection>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                本質的な調和こそが、時代を超えて残る真の輝き。
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                未来のために。あなたの肌のために。
              </p>
            </FadeInSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-10">
        <div className={`flex flex-col md:flex-row justify-between items-center mx-auto px-8 ${MAX_WIDTH_CLASS}`}>
          <p className="text-base font-bold text-gray-900 mb-4 md:mb-0">
            NATURAL PURE
          </p>
          <nav className="space-x-6">
            <Link href="/" className="text-sm font-extrabold text-gray-600 hover:text-gray-900 transition-colors">
              ホーム
            </Link>
            <Link href="/naturalpure" className="text-sm font-extrabold text-gray-600 hover:text-gray-900 transition-colors">
              製品
            </Link>
            <Link href="/faq" className="text-sm font-extrabold text-gray-600 hover:text-gray-900 transition-colors">
              お問い合わせ
            </Link>
          </nav>
        </div>
      </footer>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background-color: #FAFAFA;
        }
      `}</style>
    </div>
  )
}

