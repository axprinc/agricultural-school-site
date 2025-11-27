"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Image from 'next/image'

export default function FAQ() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setScrollProgress(Math.min(Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100), 100))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  interface FAQLink {
    href: string
    text: string
  }

  interface FAQ {
    question: string
    answer: string
    links?: FAQLink[]
  }

  const faqs: FAQ[] = [
    {
      question: "初心者でも大丈夫ですか？",
      answer: "はい、もちろんです！当スクールは初心者の方でも安心して始められるよう、基礎から丁寧に指導いたします。必要な道具や知識は全てスクールで提供・説明いたしますので、ご安心ください。"
    },
    {
      question: "小さなベランダでも野菜は育てられますか？",
      answer: "はい、可能です！ベランダ菜園に適した野菜やハーブの育て方を詳しくご指導いたします。限られたスペースでも効率的に収穫できる方法や、コンテナ栽培のコツなども学べます。"
    },
    {
      question: "必要な道具は全て揃っていますか？",
      answer: "基本的な道具（シャベル、じょうろ、手袋など）はスクールで用意しております。ご自宅で栽培を始める際に必要な道具の選び方や、おすすめの道具についても詳しくご説明いたします。"
    },
    {
      question: "季節によって育てられる野菜は変わりますか？",
      answer: "はい、野菜にはそれぞれ適した栽培時期があります。当スクールでは、季節ごとの栽培カレンダーに基づいて、その時期に最適な野菜の育て方をご指導いたします。春夏秋冬、それぞれの季節で楽しめる野菜栽培を学べます。"
    },
    {
      question: "スクールの開催時間は？",
      answer: "基本的な開催時間は平日10:00-16:00、土日祝日9:00-17:00となっております。また、季節や天候に応じて、早朝や夕方の特別クラスも開催しております。詳細なスケジュールはお問い合わせください。"
    },
    {
      question: "駐車場はありますか？",
      answer: "はい、スクール敷地内に無料駐車場を完備しております。お車でのご来校も可能です。駐車場のご利用方法については、お申し込み時にご案内いたします。"
    },
    {
      question: "家族で参加できますか？",
      answer: "はい、家族でのご参加を大歓迎いたします！お子様連れの方も安心してご参加いただけるよう、キッズスペースも用意しております。家族で一緒に野菜づくりを楽しみながら学べます。"
    },
    {
      question: "雨天の場合はどうなりますか？",
      answer: "雨天の場合は、屋内の実習スペースで栽培の基礎知識や技術を学んでいただきます。また、天候に左右されない栽培方法（水耕栽培など）についても学べる機会となります。"
    },
    {
      question: "Nパワープラスの希釈水はどのくらいの期間で使い切ったらいいですか？",
      answer: "１ヶ月は常温保存で使えます。"
    },
    {
      question: "N パワープラスの畑に撒く以外の使い方はありますか？",
      answer: "1,000 倍の希釈水にして、家の拭き掃除にもご利用いただけます。Ｎパワープラスを使ってお掃除をすると空気中の菌層が整いいやな匂いが軽減される、湿気を調整してくれる、シロアリ等の害虫が寄ってこなくなる、などの効果があります。"
    },
    {
      question: "Nパワープラスのにおいが強くなった気がします。まだ使えますか？",
      answer: "Nパワープラスは生きている肥料なのでにおいが強くなったり逆にまったくにおわなくなったりしますが、そのままお使いいただけます。"
    },
    {
      question: "Nパワープラスは観葉植物にも効果はありますか？",
      answer: "はい。あります。"
    },
    {
      question: "Nパワーの希釈水はどのように撒いたらいいですか？",
      answer: "お水をあたえるのと同じように撒いてください。（霧吹、じょうろ、噴射機など）霧吹等で葉っぱの両面に撒く（両面散布する）と、より効果的です。"
    },
    {
      question: "雨が降りそうです。雨が降る前と振った後、どちらのタイミングで撒いたらいいですか？",
      answer: "雨が降る前に撒くのがいいです。Nパワープラスを撒いた後に雨が降ることでより土にNパワープラスが浸透します。しばらく雨が降りそうにないときは、Nパワープラスを撒いた後に水を撒いてもOKです。"
    },
    {
      question: "雨が降ったら、Nパワープラスは薄まりますか？",
      answer: "雨が降っても薄まることはありません。"
    },
    {
      question: "Nパワーの成分が入った化粧水ありますか？",
      answer: "はい、ございます！Nパワーの成分を配合した化粧水をご用意しております。自然の力を、最も純粋な形で肌に届けるスキンケア製品です。詳しくは製品ページや特設LPをご覧ください。",
      links: [
        { href: "/naturalpure", text: "化粧水の詳細を見る" },
        { href: "/naturalpure-lp", text: "化粧水LPを見る" }
      ]
    }
  ]

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-farm-green-50 via-white to-harvest-orange-50 relative overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 左上の装飾 */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-farm-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-20 left-20 w-16 h-16 bg-harvest-orange-200 rounded-full opacity-30 animate-bounce"></div>
        
        {/* 右上の装飾 */}
        <div className="absolute top-16 right-16 w-24 h-24 bg-farm-green-300 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute top-8 right-8 w-12 h-12 bg-harvest-orange-300 rounded-full opacity-25 animate-bounce"></div>
        
        {/* 左下の装飾 */}
        <div className="absolute bottom-20 left-16 w-20 h-20 bg-farm-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 left-8 w-10 h-10 bg-harvest-orange-200 rounded-full opacity-30 animate-bounce"></div>
        
        {/* 右下の装飾 */}
        <div className="absolute bottom-16 right-12 w-28 h-28 bg-farm-green-300 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-8 right-20 w-14 h-14 bg-harvest-orange-300 rounded-full opacity-25 animate-bounce"></div>
        
        {/* 中央の小さな装飾 */}
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-farm-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-harvest-orange-200 rounded-full opacity-30 animate-bounce"></div>
        
        {/* 葉っぱの装飾 */}
        <div className="absolute top-1/4 right-1/3 text-4xl text-farm-green-300 opacity-20 animate-pulse">🌱</div>
        <div className="absolute bottom-1/4 left-1/3 text-3xl text-harvest-orange-300 opacity-25 animate-bounce">🌿</div>
        <div className="absolute top-1/2 left-1/6 text-2xl text-farm-green-400 opacity-20 animate-pulse">🍃</div>
      </div>

      {/* スクロール進捗バー */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-farm-green-500 to-harvest-orange-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* ヘッダー */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-40 border-b border-farm-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* ロゴ */}
            <div className="flex-shrink-0 flex items-center">
              <svg className="w-8 h-8 mr-3 text-farm-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z"/>
              </svg>
              <Link href="/" className="text-xl font-bold text-farm-green-800 font-elegant">優しい家庭菜園の学校</Link>
            </div>

            {/* デスクトップナビゲーション */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/#home" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  ホーム
                </Link>
                <Link href="/#programs" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  入会特典
                </Link>
                <Link href="/#gallery" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  ギャラリー
                </Link>
                <Link href="/faq" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  よくあるご質問
                </Link>
                <Link href="/home-garden" className="text-harvest-orange-600 hover:text-harvest-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors font-semibold flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                  家庭菜園講座
                </Link>
                <Link href="/#access" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  アクセス
                </Link>
                <a href="https://line.me/R/ti/p/@650hmqnu" target="_blank" rel="noopener noreferrer" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                  LINE相談
                </a>
              </div>
            </div>

            {/* モバイルメニューボタン */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg focus:outline-none"
              aria-label="メニュー"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-farm-green-800 transition-all duration-300 ${
                  isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''
                }`} />
                <span className={`w-full h-0.5 bg-farm-green-800 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`w-full h-0.5 bg-farm-green-800 transition-all duration-300 ${
                  isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-lg">
              <Link href="/#home" onClick={() => setIsMobileMenuOpen(false)} className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                ホーム
              </Link>
              <Link href="/#programs" onClick={() => setIsMobileMenuOpen(false)} className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                入会特典
              </Link>
              <Link href="/#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                ギャラリー
              </Link>
              <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                よくあるご質問
              </Link>
              <Link href="/home-garden" onClick={() => setIsMobileMenuOpen(false)} className="text-harvest-orange-600 hover:text-harvest-orange-800 block px-3 py-2 rounded-md text-base font-medium font-semibold flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
                家庭菜園講座
              </Link>
              <Link href="/#access" onClick={() => setIsMobileMenuOpen(false)} className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                アクセス
              </Link>
              <a href="https://line.me/R/ti/p/@650hmqnu" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                LINE相談
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* メインコンテンツ */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* ヘッダー */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-farm-green-800 mb-4">
              よくあるご質問
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              家庭菜園スクールについて、よくいただくご質問と回答をご紹介いたします。
            </p>
          </div>

          {/* FAQカード */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-farm-green-100 p-8 md:p-12">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-farm-green-100 hover:shadow-lg transition-all duration-300"
                  initial={false}
                  animate={{ height: "auto" }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-farm-green-500 focus:ring-opacity-50 hover:bg-farm-green-50/50 transition-colors duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-farm-green-900">{faq.question}</h3>
                      {expandedFaq === index ? (
                        <FaChevronUp className="text-farm-green-600 transition-transform duration-200" />
                      ) : (
                        <FaChevronDown className="text-farm-green-600 transition-transform duration-200" />
                      )}
                    </div>
                  </button>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 bg-farm-green-50/30"
                    >
                      <p className="text-gray-700 leading-relaxed mb-4">{faq.answer}</p>
                      {faq.links && (
                        <div className="flex flex-wrap gap-3">
                          {faq.links.map((link, linkIndex) => (
                            <Link
                              key={`${link.href}-${linkIndex}`}
                              href={link.href}
                              className="inline-flex items-center px-4 py-2 bg-farm-green-600 text-white font-semibold rounded-lg hover:bg-farm-green-700 transition-colors duration-200 text-sm"
                            >
                              {link.text}
                              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* お問い合わせセクション */}
            <div className="text-center mt-12 pt-8 border-t border-farm-green-200">
              <p className="text-gray-600 mb-6">その他のご質問がございましたら、お気軽にLINE相談ください。</p>
              <Link
                href="/line-qr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-farm-green-500 to-farm-green-600 text-white font-semibold rounded-xl hover:from-farm-green-600 hover:to-farm-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                LINE相談ページへ
              </Link>
            </div>
          </div>

          {/* ホームに戻るボタン */}
          <div className="text-center mt-12">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-farm-green-500 to-farm-green-600 text-white font-semibold rounded-lg hover:from-farm-green-600 hover:to-farm-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              ホームに戻る
            </Link>
          </div>
        </div>
      </div>

      {/* フッター */}
      <footer className="bg-farm-green-900 text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-harvest-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z"/>
                </svg>
                優しい家庭菜園の学校
              </h3>
              <p className="text-gray-300">自然と触れ合い、農業の楽しさを体験できるスクールです。</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-harvest-orange-300">リンク</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/#home" className="hover:text-harvest-orange-300 transition-colors duration-200">ホーム</Link></li>
                  <li><Link href="/#programs" className="hover:text-harvest-orange-300 transition-colors duration-200">入会特典</Link></li>
                  <li><Link href="/faq" className="hover:text-harvest-orange-300 transition-colors duration-200">よくあるご質問</Link></li>
                  <li><Link href="/#access" className="hover:text-harvest-orange-300 transition-colors duration-200">アクセス</Link></li>
                </ul>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/tokuteishyou" className="hover:text-harvest-orange-300 transition-colors duration-200">特定商取引法に基づく表示</Link></li>
                  <li><Link href="/privacy" className="hover:text-harvest-orange-300 transition-colors duration-200">プライバシーポリシー</Link></li>
                  <li><Link href="/terms" className="hover:text-harvest-orange-300 transition-colors duration-200">利用規約</Link></li>
                </ul>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-harvest-orange-300">お問い合わせ</h4>
              <div className="text-gray-300 space-y-2">
                <p className="flex items-start hover:text-harvest-orange-300 transition-colors duration-200">
                  <svg className="w-4 h-4 mr-2 mt-1 text-harvest-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  兵庫県洲本市五色町鮎原小山田1065番地
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 優しい家庭菜園の学校. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 