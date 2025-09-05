"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // モバイルメニューの状態管理
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // ヒーロー画像のスライド管理
  const heroImages = [
    {
      src: '/images/hero/LINE_ALBUM_2025.7.27 _250728_1.jpg',
      alt: 'オープンファーム - 農業体験の様子',
      title: '小さなスペースで',
      subtitle: '大きな収穫を'
    },
    {
      src: '/images/hero/LINE_ALBUM_2025.7.27250728_2.jpg', 
      alt: 'オープンファーム - 家庭菜園指導',
      title: '毎日の食卓に',
      subtitle: '自家製野菜を届ける'
    },
    {
      src: '/images/hero/LINE_ALBUM_2025.7.27 _250728_3.jpg',
      alt: 'オープンファーム - 参加者との交流',
      title: '家族みんなで',
      subtitle: '収穫の喜びを分かち合う'
    },
    {
      src: '/images/hero/LINE_ALBUM_2025.7.27_250728_4.jpg',
      alt: 'オープンファーム - 農場での実習',
      title: '土に触れ',
      subtitle: '自然とのつながりを感じる'
    },
    {
      src: '/images/hero/LINE_ALBUM_2025.7.27_250728_17.jpg',
      alt: 'オープンファーム - イベントの様子',
      title: 'みんなで学び',
      subtitle: '一緒に成長する'
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  // 自動スライド機能
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000) // 5秒ごとに切り替え

    return () => clearInterval(timer)
  }, [heroImages.length])

  // スクロール位置の監視
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const [isApplying, setIsApplying] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
      
      // スクロール進捗を計算
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
      
      // 現在のセクションを判定
      const sections = ['home', 'programs', 'gallery', 'access']
      let currentSection = 'home'
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section
            break
          }
        }
      }
      setActiveSection(currentSection)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer')
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleApply = () => {
    setIsApplying(true)
    // 実際のAPIコールのシミュレーション
    setTimeout(() => {
      setIsApplying(false)
      alert('お申し込みを受け付けました！詳細をメールでお送りいたします。')
    }, 2000)
  }

  // 星評価コンポーネント
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-600">({rating}.0)</span>
      </div>
    )
  }

  // FAQ データ
  const faqData = [
    {
      question: "農業経験がまったくありませんが、大丈夫でしょうか？",
      answer: "はい、全く問題ありません。参加者の約80%が農業未経験者です。基礎的な知識から丁寧に指導いたしますので、安心してご参加ください。"
    },
    {
      question: "ベランダが狭いのですが、本当に野菜が育てられますか？",
      answer: "1畳程度のスペースがあれば十分です。私たちの「狭小スペース集約栽培法」なら、限られたスペースでも効率的に野菜を栽培できます。実際に1畳で家族4人分の野菜を育てている会員様もいらっしゃいます。"
    },
    {
      question: "入会後のサポート体制はどうなっていますか？",
      answer: "月替わりのオンライン講座、会員専用コミュニティでの質問受付、緊急時の専門家サポート（月2回まで）など、充実したサポート体制をご用意しています。困ったときはいつでもご相談いただけます。"
    },
    {
      question: "Nパワープラス®は安全ですか？",
      answer: "はい、完全に安全です。大豆、米糠、糖蜜などすべて天然原料から作られており、化学合成物質は一切使用していません。お子様やペットのいるご家庭でも安心してお使いいただけます。"
    },
    {
      question: "退会したい場合はどうすればよいですか？",
      answer: "退会をご希望の場合は、いつでもお手続きいただけます。また、入会から3ヶ月以内であれば、満足いただけない場合の全額返金保証もございますので、安心してお試しください。"
    },
    {
      question: "月会費以外に追加料金はかかりますか？",
      answer: "基本的に月会費（980円）以外の追加料金はかかりません。ただし、追加の種子セットや特別講座をご希望の場合は、別途費用が発生することがあります。事前にご案内いたします。"
    }
  ]

  // メインページ用ギャラリー画像（厳選8枚）
  const galleryImages = [
    {
      src: '/images/gallery-preview/LINE_ALBUM_2025.7.27_250728_1.jpg',
      alt: 'オープンファーム - 野菜栽培の様子',
      title: '野菜栽培',
      bgColor: 'bg-farm-green-400'
    },
    {
      src: '/images/gallery-preview/LINE_ALBUM_2025.7.27 _250728_3.jpg',
      alt: 'オープンファーム - 農場風景',
      title: '農場風景',
      bgColor: 'bg-earth-brown-300'
    },
    {
      src: '/images/gallery-preview/LINE_ALBUM_2025.7.27_250728_5.jpg',
      alt: 'オープンファーム - 農業体験',
      title: '農業体験',
      bgColor: 'bg-harvest-orange-500'
    },
    {
      src: '/images/gallery-preview/LINE_ALBUM_2025.7.27 _250728_7.jpg',
      alt: 'オープンファーム - 野菜の成長',
      title: '野菜の成長',
      bgColor: 'bg-earth-brown-400'
    },
    {
      src: '/images/gallery-preview/LINE_ALBUM_2025.7.27 _250728_9.jpg',
      alt: 'オープンファーム - 収穫の喜び',
      title: '収穫の喜び',
      bgColor: 'bg-farm-green-600'
    },
    {
      src: '/images/gallery-preview/LINE_ALBUM_2025.7.27 _250728_11.jpg',
      alt: 'オープンファーム - 家族での参加',
      title: '家族での参加',
      bgColor: 'bg-earth-brown-600'
    },
    {
      src: '/images/gallery-preview/LINE_ALBUM_2025.7.27 _250728_13.jpg',
      alt: 'オープンファーム - 講師による指導',
      title: '講師による指導',
      bgColor: 'bg-harvest-orange-700'
    },
    {
      src: '/images/gallery-preview/LINE_ALBUM_2025.7.27 _250728_15.jpg',
      alt: 'オープンファーム - 農作業実践',
      title: '農作業実践',
      bgColor: 'bg-farm-green-800'
    }
  ]

  const [currentGallerySlide, setCurrentGallerySlide] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-farm-green-50 to-white">
      {/* スクロール進捗バー */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-farm-green-500 to-harvest-orange-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* ナビゲーション */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <svg className="w-8 h-8 mr-3 text-farm-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z"/>
              </svg>
              <h1 className="text-xl font-bold text-farm-green-800 font-elegant">優しい家庭菜園の学校</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors scroll-smooth ${
                  activeSection === 'home' 
                    ? 'bg-farm-green-100 text-farm-green-900 font-semibold' 
                    : 'text-farm-green-700 hover:text-farm-green-900'
                }`}>ホーム</a>
                <a href="#programs" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors scroll-smooth ${
                  activeSection === 'programs' 
                    ? 'bg-farm-green-100 text-farm-green-900 font-semibold' 
                    : 'text-farm-green-700 hover:text-farm-green-900'
                }`}>入会特典</a>
                <Link href="/gallery" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">ギャラリー</Link>
                <a href="/home-garden" className="text-harvest-orange-600 hover:text-harvest-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors font-semibold flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                  家庭菜園講座
                </a>
                <a href="#access" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors scroll-smooth ${
                  activeSection === 'access' 
                    ? 'bg-farm-green-100 text-farm-green-900 font-semibold' 
                    : 'text-farm-green-700 hover:text-farm-green-900'
                }`}>アクセス</a>
                <Link href="/faq" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  よくあるご質問
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
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-farm-green-700 hover:text-farm-green-900 inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">メニューを開く</span>
                {!isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* モバイルメニュー */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-lg">
              <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors">ホーム</a>
              <a href="#programs" onClick={() => setIsMobileMenuOpen(false)} className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors">入会特典</a>
                              <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors">ギャラリー</Link>
              <a href="/home-garden" onClick={() => setIsMobileMenuOpen(false)} className="text-harvest-orange-600 hover:text-harvest-orange-800 block px-3 py-2 rounded-md text-base font-medium font-semibold flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
                家庭菜園講座
              </a>
              <a href="#access" onClick={() => setIsMobileMenuOpen(false)} className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors">アクセス</a>
              <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors">よくあるご質問</Link>
              <a href="https://line.me/R/ti/p/@650hmqnu" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                LINE相談
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ヒーローセクション - スライドショー対応 */}
      <section id="home" className="relative h-screen overflow-hidden">
        {/* スライド画像 */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* 実際の画像を使用 */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transform scale-105 hover:scale-110 transition-transform duration-[8000ms] ease-in-out animate-ken-burns"
              priority={index === 0}
            />
            
            {/* オーバーレイ */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
        
        {/* コンテンツ */}
        <div className="relative h-full flex items-center justify-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">

            
            {/* タイトルはスライドに応じて変更 */}
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-500 font-elegant animate-fade-in-up">
              {heroImages[currentSlide].title}
              <span className="block text-harvest-orange-200 font-light animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                {heroImages[currentSlide].subtitle}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-farm-green-50 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              狭いベランダでも大丈夫<br />
              1畳のスペースで家族4人分の野菜を育てる<br />
              新しい家庭菜園のスタイルを学びませんか
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.9s'}}>
              <button 
                onClick={scrollToOffer}
                disabled={isApplying}
                className={`py-4 px-10 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center group ${
                  isApplying 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-harvest-orange-500 hover:bg-harvest-orange-600 text-white font-semibold'
                }`}
              >
                {isApplying ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    申し込み中...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                    今すぐ申し込む
                  </>
                )}
              </button>
              <a href="/home-garden" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300 border border-white/30 hover:border-white/50 flex items-center justify-center group transform hover:-translate-y-1 hover:scale-105">
                <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                詳細を見る
              </a>
            </div>
          </div>
        </div>
        
        {/* スライドナビゲーション（左右の矢印） */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="前のスライド"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="次のスライド"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* スライドインジケーター */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`スライド ${index + 1}へ`}
            />
          ))}
        </div>
        
        {/* スクロール矢印 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-farm-green-800 mb-12 font-elegant">
              「優しい家庭菜園の学校」が選ばれる理由
            </h2>
            
            <div className="max-w-4xl mx-auto text-left space-y-8">
              <div className="bg-gradient-to-r from-gray-50 to-farm-green-50 rounded-2xl p-8">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  家庭菜園というと、「広い庭が必要」「力仕事が多い」「うまく育たない」というイメージがありませんか？
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed font-semibold">
                  でも、「優しい家庭菜園の学校」なら違います。
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  私たちが開発した<span className="font-bold text-farm-green-800 bg-farm-green-100 px-2 py-1 rounded">《狭小スペース集約栽培法》</span>は、たった<span className="font-bold text-harvest-orange-600">"1畳ほど"</span>のベランダスペースがあれば、1年を通して<span className="font-bold text-harvest-orange-600">"家族4人分"</span>の野菜が収穫できるという、まったく新しい方法です。
                </p>
              </div>


              <div className="bg-harvest-orange-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">この方法が特別な理由は――</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-earth-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-earth-brown-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.41 15.09L7 13.5l1.41-1.41L10 13.68l6.59-6.59L18 8.5l-7.41 8.59z"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">特別配合の土</h4>
                    <p className="text-gray-600 text-sm">野菜がよく育つように特別に配合した土</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">独自の水やり方法</h4>
                    <p className="text-gray-600 text-sm">水を効率よく与える独自の水やり方法</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-farm-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-farm-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">共生栽培</h4>
                    <p className="text-gray-600 text-sm">植物同士が助け合って育つ"共生栽培"のしくみ</p>
                  </div>
                </div>
                <p className="text-center text-gray-700 mt-6 font-medium">
                  これらの工夫により、誰でも簡単に、失敗しにくい菜園づくりが可能になりました。
                </p>
              </div>

              <div className="bg-gradient-to-r from-farm-green-100 to-harvest-orange-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-farm-green-800 mb-6 text-center">こんな未来が、あなたにも待っています：</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-harvest-orange-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">朝、キッチンに行く前にベランダで新鮮な野菜を収穫できる楽しさ</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-harvest-orange-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">野菜の値上がりに振り回されず、家計にゆとりが生まれる安心感</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-harvest-orange-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">"これ、お父さん（お母さん）が育てたの！？"と家族に尊敬される喜び</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-harvest-orange-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">添加物や農薬を気にせず、大切な家族に安全な野菜を食べてもらえる満足感</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-harvest-orange-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">土にふれ、植物と向き合うことで、心がほっとする癒しの時間が毎日に</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 装飾用の自然要素 */}
        <div className="absolute top-10 right-10 opacity-10">
          <div className="text-8xl text-farm-green-300">🌾</div>
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <div className="text-6xl text-harvest-orange-300">🌻</div>
        </div>
      </section>

      {/* 入会案内セクション */}
      <section id="programs" className="py-20 bg-farm-green-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-farm-green-800 mb-6 font-elegant">
              「優しい家庭菜園の学校」に入会すると、<br />
              以下のすべてがあなたのものになります
            </h2>
          </div>
          
          {/* 入会特典一覧 */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              {/* 月替わりオンライン講座 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start">
                                      <div className="w-16 h-16 bg-farm-green-500 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">月替わりオンライン講座（毎月更新・永久視聴可能）</h3>
                    <p className="text-gray-600 leading-relaxed">まるで隣で教わっているかのような、わかりやすい動画レッスン。初心者でも迷わない、季節ごとの栽培カレンダー付き。</p>
                  </div>
                </div>
              </div>

              {/* プロ監修・栽培マニュアル */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-farm-green-500 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">プロ監修・栽培マニュアル（PDF版＆紙版）</h3>
                    <p className="text-gray-600 leading-relaxed">失敗しない土づくりから収穫までの全工程を、写真やイラスト満載で解説。困ったときにすぐ調べられる索引付き。</p>
                  </div>
                </div>
              </div>

              {/* 会員専用コミュニティ */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-farm-green-500 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">会員専用コミュニティ（Facebookグループ）</h3>
                    <p className="text-gray-600 leading-relaxed">同じ志を持つ仲間との情報交換の場。日々の栽培の様子を共有したり、質問し放題の専門家サポートつき。一人で悩む家庭菜園はもう終わりです。</p>
                  </div>
                </div>
              </div>

              {/* 1泊2日農業体験ツアー */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-farm-green-500 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">1泊2日農業体験ツアー参加権（別途費用）</h3>
                    <p className="text-gray-600 leading-relaxed">花岡正侍による講義が生で聞ける。畑で収穫した農作物をその場で調理して食べれる。淡路島と複数の提携農家で開催。</p>
                  </div>
                </div>
              </div>

              {/* 収穫野菜パッケージサービス */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-farm-green-500 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-2xl font-bold text-white">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">野菜のパッケージ・配送サービス（別途費用）</h3>
                    <p className="text-gray-600 leading-relaxed">提携農家で収穫された新鮮な野菜を、ご自宅までお届けします。</p>
                  </div>
                </div>
              </div>

              {/* 全国各地のオフ会 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-farm-green-500 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-2xl font-bold text-white">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">全国各地のオフ会開催</h3>
                    <p className="text-gray-600 leading-relaxed">淡路島と複数の提携農家で定期的にオフ会を開催。実際に会って交流し、栽培のコツを学べます。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 注意事項 */}
          <div className="text-center mb-16">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-gray-700 leading-relaxed">
                ご家庭でご利用いただく「種、土、プランターなど」は、<br />
                入会金、年会費には含まれておりませんので<br />
                ご自身でご準備していただきます。<br /><br />
                購入の仕方などは、動画や資料で丁寧に<br />
                説明していますので、ご安心ください。
              </p>
            </div>
          </div>

          {/* Nパワープラス特典 */}
          <div className="bg-gradient-to-r from-harvest-orange-100 to-farm-green-100 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-farm-green-800 mb-4">驚きの特典 - 植物の成長を劇的に促進する「<a href="https://n-powerplus.com/" target="_blank" rel="noopener noreferrer" className="text-farm-green-800 hover:text-harvest-orange-600 underline transition-colors duration-200">Nパワープラス®</a>」を無料プレゼント！</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                今回、期間限定の特別特典として、植物の生育を飛躍的に向上させる微生物栄養剤「Nパワープラス®」（250ml・通常価格5,500円）を1本無料でプレゼントいたします！
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 mb-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nパワープラス®は、20年以上の研究から生まれた革命的な植物栄養剤です。従来の「外から微生物を入れる」という考え方を根本から変え、「すでにその土地に住む微生物に栄養を与え、活性化させる」という画期的な発想で開発されました。
              </p>
              
              <h4 className="font-bold text-gray-800 mb-3">このNパワープラス®を使うと：</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-farm-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm">土が柔らかく変化し、指で簡単に掘れるようになります</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-farm-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm">植物の根張りが驚くほど良くなり、養分をしっかり吸収します</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-farm-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm">健全な微生物バランスにより、害虫が自然と減少します</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-farm-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm">栄養をしっかり吸収した植物は、より多くの実をつけます</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-farm-green-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm">本来の栄養バランスで育った作物は、味も香りも格別です</p>
                </div>
              </div>
            </div>
            
            <div className="bg-farm-green-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nパワープラス®は大豆、米糠、糖蜜などすべて天然原料から作られており、化学合成物質は一切使用していません。お子様やペットのいるご家庭でも安心して使えます。
              </p>
              <p className="text-gray-700 leading-relaxed">
                使い方も驚くほど簡単です。500倍〜1000倍に薄めて（250mlボトルなら125L〜250Lの水に対応）、通常の水やりの代わりに月に1〜2回使用するだけ。家庭菜園なら約6ヶ月分、プランター10個分に対応できます。
              </p>
              <p className="text-center font-bold text-farm-green-800 mt-4">ベランダ菜園には、この「Nパワープラス®」が最適なのです！</p>
            </div>
            

          </div>

          {/* 価格・申込セクション */}
          <div id="offer" className="bg-white rounded-2xl p-8 shadow-xl border-2 border-harvest-orange-200 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">期間限定・特別オファー</h3>
              <div className="bg-red-100 rounded-lg p-4 mb-6">
                <p className="text-red-800 font-semibold">先着50名様限定！定員に達し次第締め切り</p>
              </div>
              
              <p className="text-lg mb-8 text-center">
                通常、「優しい家庭菜園の学校」の入会金は50,000円（年会費19,800円別途）ですが、<span className="text-red-600 font-bold">先着50名様限定で入会金無料</span>にてご案内しています。
              </p>
              
              <div className="text-center mb-8">
                <p className="text-harvest-orange-600 font-bold text-lg">
                  さらに、今だけの特別特典として、植物の成長を劇的に促進する「Nパワープラス®」（通常価格5,500円）を1本無料でプレゼント！
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">通常価格</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>入会金</span>
                      <span className="line-through text-gray-500">50,000円</span>
                    </div>
                    <div className="flex justify-between">
                      <span>年会費</span>
                      <span>19,800円</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nパワープラス®</span>
                      <span className="line-through text-gray-500">5,500円</span>
                    </div>
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-harvest-orange-600 mb-4">特別価格（先着50名様限定）</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>入会金</span>
                      <span className="text-2xl font-bold text-harvest-orange-600">無料</span>
                    </div>
                    <div className="flex justify-between">
                      <span>年会費</span>
                      <span>19,800円</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nパワープラス®</span>
                      <span className="text-green-600 font-bold">1本無料プレゼント!</span>
                    </div>
                  </div>
                  <div className="bg-harvest-orange-100 p-3 rounded text-center">
                    <span className="text-harvest-orange-600 font-bold">50,000円 + 5,500円 = 55,500円お得！</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-8">
                <h4 className="font-bold text-blue-800 mb-2">安心の保証制度</h4>
                <p className="text-blue-700 text-sm">
                  もし入会から3ヶ月以内に「思ったような収穫が得られない」「続けるのが難しい」と感じられた場合、年会費19,800円からNパワープラス®代5,500円を差し引いた金額（14,300円）を返金させていただきます。
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <button 
                onClick={handleApply}
                disabled={isApplying}
                className={`py-6 px-12 rounded-lg text-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-4 flex items-center justify-center mx-auto ${
                  isApplying 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-harvest-orange-500 hover:bg-harvest-orange-600 text-white font-bold'
                }`}
              >
                {isApplying ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    申し込み中...
                  </>
                ) : (
                  '＼今すぐ申し込む／'
                )}
              </button>
              <p className="text-gray-600 text-sm">※お申し込み後、詳細をメールでお送りします</p>
            </div>
          </div>

          {/* P.S.セクション */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-bold text-gray-800 mb-4">P.S.</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              野菜の価格は今後も上昇が予想されています。家庭菜園を始めるなら、今がベストタイミングです。入会特典の「Nパワープラス®」は単なる肥料ではなく、土壌環境全体を改善する革命的な微生物栄養剤です。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              多くのお客様が「長年放置していた畑で使ったところ、3ヶ月で土が見違えるように変わった」「収穫量が2倍以上になった」と驚きの効果を報告しています。
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              これだけでも5,500円の価値があります。この機会を逃さず、家族の健康と家計を守る一歩を今日踏み出してください。迷っている時間が、あなたの家計を圧迫し続けています。今すぐ下のボタンをクリックして、未来の自分に感謝される選択をしましょう。
            </p>
          </div>
        </div>
        
        {/* 背景装飾 */}
        <div className="absolute top-20 right-20 opacity-5">
          <svg className="w-24 h-24 text-farm-green-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 opacity-5">
          <svg className="w-20 h-20 text-harvest-orange-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z"/>
          </svg>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section className="py-20 bg-gradient-to-br from-farm-green-50 to-harvest-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-farm-green-800 mb-6 font-elegant flex items-center justify-center">
              <svg className="w-8 h-8 mr-3 text-harvest-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              参加者の皆さまの声
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              実際に農業体験に参加された方々からの<br />
              嬉しいお声をご紹介いたします
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/testimonials/AdobeStock_516239930_Preview.jpeg"
                  alt="佐藤さんの写真"
                  fill
                  className="object-cover scale-110 object-top"
                  style={{ objectPosition: '50% 20%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-lg">佐藤さん</p>
                  <p className="text-sm opacity-90">東京都在住・42歳・会社員</p>
                </div>
              </div>
              <div className="p-8">
                <StarRating rating={5} />
                <p className="text-gray-600 leading-relaxed">
                  「マンションの南向きベランダ2畳スペースで始めて半年。今では家族が食べる野菜の7割はベランダ産です。子どもたちも野菜嫌いが治り、食事の時間が楽しくなりました。何より毎月の食費が2万円も減りました！」
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/testimonials/iStock-1322995729.jpg"
                  alt="鈴木さんの写真"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-lg">山田さん</p>
                  <p className="text-sm opacity-90">大阪市在住・38歳・主婦</p>
                </div>
              </div>
              <div className="p-8">
                <StarRating rating={5} />
                <p className="text-gray-600 leading-relaxed">
                  「園芸の経験はゼロでしたが、動画マニュアルをそのまま真似るだけで簡単に始められました。最初は半信半疑でしたが、3ヶ月目からはほぼ毎日何かしらの収穫があり、家計の強い味方になっています。特に最近の野菜高騰でその価値を実感しています」
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/testimonials/iStock-1334059416.jpg"
                  alt="佐藤さんの写真"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-lg">鈴木さん</p>
                  <p className="text-sm opacity-90">名古屋市在住・35歳・自営業</p>
                </div>
              </div>
              <div className="p-8">
                <StarRating rating={4} />
                <p className="text-gray-600 leading-relaxed">
                  「仕事のストレスで不眠症だった私が、朝晩の水やりと収穫の時間を楽しみに規則正しい生活を送れるようになりました。健康的な食生活と趣味が見つかり、人生が変わったと言っても過言ではありません」
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 花岡正侍からのメッセージセクション */}
      <section className="py-20 bg-gradient-to-br from-harvest-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-farm-green-800 mb-6 font-elegant flex items-center justify-center">
              <svg className="w-8 h-8 mr-3 text-harvest-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              花岡正侍からのメッセージ
            </h2>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg">
            <div className="flex flex-col items-center mb-6">
              <div className="w-[400px] h-[250px] rounded-lg overflow-hidden mb-6 shadow-xl flex-shrink-0">
                <Image
                  src="/images/teacher/hanooka-sensei.jpg"
                  alt="花岡正侍"
                  width={800}
                  height={500}
                  quality={100}
                  sizes="400px"
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-farm-green-800 mb-2">花岡正侍からのメッセージ</h3>
                <p className="text-xl font-semibold text-farm-green-800 mb-4 leading-relaxed">
                  食糧危機は必ず来る。農業を学び自給自足ができる状況を作る。そしてその学びを他に人にも教えてあげて欲しい
                </p>
                <div className="text-right mt-4">
                  <span className="text-farm-green-800 font-semibold">by 花岡正侍</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-farm-green-800 mb-6 font-elegant flex items-center justify-center">
              <svg className="w-8 h-8 mr-3 text-farm-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              農園ギャラリー
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              淡路島の豊かな自然と農業体験の様子を<br />
              写真でご紹介いたします
            </p>
          </div>

          {/* メインギャラリースライドショー */}
          <div className="relative mb-12">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* ギャラリー画像のスライド */}
              <div className="relative w-full h-full">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentGallerySlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* ナビゲーション矢印 */}
              <button
                onClick={() => setCurrentGallerySlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="前のスライド"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => setCurrentGallerySlide((prev) => (prev + 1) % galleryImages.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="次のスライド"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* スライドインジケーター */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentGallerySlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentGallerySlide 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`スライド ${index + 1}へ`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* サムネイルギャラリー */}
                      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                onClick={() => setCurrentGallerySlide(index)}
                className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  index === currentGallerySlide ? 'ring-4 ring-farm-green-500 scale-105' : ''
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* もっとみるボタン */}
          <div className="text-center mt-12">
            <Link 
              href="/gallery"
              className="inline-flex items-center justify-center bg-farm-green-600 hover:bg-farm-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
            >
              もっとみる
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* アクセスセクション */}
      <section id="access" className="py-20 bg-gradient-to-br from-farm-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-farm-green-800 mb-6 font-elegant flex items-center justify-center">
              <svg className="w-8 h-8 mr-3 text-farm-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              アクセス
            </h2>
            <p className="text-xl text-gray-600">
              兵庫県洲本市の豊かな自然の中でお待ちしております
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-farm-green-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-farm-green-800 mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-farm-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  農場所在地
                </h3>
                <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-farm-green-600 font-semibold w-20">住所:</span>
                      <span className="text-gray-700">〒656-1317<br />兵庫県洲本市五色町鮎原小山田1065番地</span>
                    </div>
                    
                    {/* 注意書き */}
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <div>
                          <p className="text-red-800 font-semibold text-sm">重要な注意事項</p>
                          <p className="text-red-700 text-sm mt-1">
                            <strong>カーナビはGoogleマップを使用してください！！</strong><br />
                            車載カーナビでは正しく表示されません。
                          </p>
                        </div>
                      </div>
                    </div>

                </div>
              </div>
              
              <div className="bg-harvest-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-farm-green-800 mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-harvest-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  交通手段
                </h3>
                <div className="space-y-6">
                   <div>
                     <h4 className="font-semibold text-farm-green-700 mb-2 flex items-center">
                       <svg className="w-5 h-5 mr-2 text-farm-green-600" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                       </svg>
                       バスでお越しの場合
                     </h4>
                     <p className="text-gray-600">淡路交通バス「鮎原」バス停下車徒歩15分<br />お迎えサービスもございます（要予約）</p>
                   </div>
                   <div>
                     <h4 className="font-semibold text-farm-green-700 mb-2 flex items-center">
                       <svg className="w-5 h-5 mr-2 text-farm-green-600" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                       </svg>
                       お車でお越しの場合
                     </h4>
                     <p className="text-gray-600">神戸淡路鳴門自動車道「津名一宮IC」から約20分</p>
                   </div>
                 </div>
              </div>
            </div>
            
            <div className="bg-earth-brown-100 rounded-xl p-4">
              <h3 className="text-xl font-semibold text-farm-green-800 mb-4 text-center flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 text-earth-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                農場所在地マップ
              </h3>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.4646435930485!2d134.805631!3d34.38953409999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554bb1afa3146f9%3A0x92669060a39c9027!2z44CSNjU2LTEzMTcg5YW15bqr55yM5rSy5pys5biC5LqU6Imy55S66a6O5Y6f5bCP5bGx55Sw77yR77yQ77yW77yV!5e0!3m2!1sja!2sjp!4v1749703038422!5m2!1sja!2sjp" 
                  width="100%" 
                  height="400" 
                  style={{border: 0}}
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96"
                />
              </div>
              <p className="text-sm text-gray-600 text-center mt-2">
                兵庫県洲本市五色町鮎原小山田1065番地
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* スクロールトップボタン */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-farm-green-600 text-white p-3 rounded-full shadow-lg hover:bg-farm-green-700 transition-colors duration-200 z-50"
          aria-label="トップへ戻る"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* お問い合わせCTAセクション */}
      <section className="py-16 bg-farm-green-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-farm-green-800 mb-4 font-elegant">まずはお気軽にLINE相談ください</h2>
          <p className="text-lg text-gray-700 mb-8">ご質問やご相談など、どんなことでもお気軽にご連絡ください。<br className="hidden md:inline" />スタッフが丁寧にご案内いたします。</p>
          <a
            href="/line-qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-farm-green-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-farm-green-700 transition-colors duration-200 flex items-center justify-center mx-auto"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            LINE相談ページへ
          </a>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-farm-green-900 text-white py-12">
        
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
                  <li><a href="#home" className="hover:text-harvest-orange-300 transition-colors duration-200">ホーム</a></li>
                  <li><a href="#programs" className="hover:text-harvest-orange-300 transition-colors duration-200">入会特典</a></li>
                  <li><Link href="/faq" className="hover:text-harvest-orange-300 transition-colors duration-200">よくあるご質問</Link></li>
                  <li><a href="#access" className="hover:text-harvest-orange-300 transition-colors duration-200">アクセス</a></li>
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