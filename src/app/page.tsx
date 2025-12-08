"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { MousePointerClick, CreditCard, Mail, Smartphone, Sprout, ArrowRight } from 'lucide-react'
import MembershipHandler from '@/components/MembershipHandler'
import { getMembershipUrl } from '@/lib/membership'

export default function Home() {
  const [membershipUrl, setMembershipUrl] = useState('https://order.awaji-smilefarm.com/memberships/ms_smashkovmdwhladc/subscriptions/new')

  // Update membership URL on client side and listen for cookie changes
  useEffect(() => {
    const updateUrl = () => setMembershipUrl(getMembershipUrl())
    updateUrl()
    
    // Check for updates every 100ms for a short period after mount
    // This ensures we catch the cookie being set by MembershipHandler
    const interval = setInterval(updateUrl, 100)
    const timeout = setTimeout(() => clearInterval(interval), 1000)
    
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])
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
      title: '家族の食卓に',
      subtitle: '安心・安全な自家製野菜を届ける',
    },
    {
      src: '/images/hero/LINE_ALBUM_2025.7.27 _250728_3.jpg',
      alt: 'オープンファーム - 参加者との交流',
      title: '家族みんなで',
      subtitle: '収穫の喜びを分かち合う'
    },
    {
      src: '/images/hero/LINE_ALBUM_2025.7.27_250728_4.png',
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
      
      // 現在のセクションを判定（ページ上のセクション順）
      const sections = ['home', 'programs', 'offer', 'gallery', 'access']
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

  const pricingSteps = [
    {
      title: '「今すぐ申し込む」をクリック',
      description: 'お申し込みページへ移動します',
      color: 'bg-[#F4C496]',
      icon: MousePointerClick,
      iconColor: 'text-[#B65B2F]',
    },
    {
      title: 'お客様情報と決済情報の入力',
      description: '内容をご確認のうえ送信',
      color: 'bg-[#F4D77E]',
      icon: CreditCard,
      iconColor: 'text-[#C38720]',
    },
    {
      title: '確認メールを受信',
      description: 'ご案内に沿って会員サイトなどにアクセス',
      color: 'bg-[#9EDCCC]',
      icon: Mail,
      iconColor: 'text-[#278366]',
    },
    {
      title: 'ご利用開始',
      description: '会員コンテンツやサポートを活用',
      color: 'bg-[#9FC9F0]',
      icon: null,
      iconColor: 'text-[#2775B8]',
    },
  ]

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
      {/* Membership handler - monitors URL params and sets cookies */}
      <Suspense fallback={null}>
        <MembershipHandler />
      </Suspense>
      
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
                <a
                  href="#home"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors scroll-smooth ${
                    activeSection === 'home'
                      ? 'bg-farm-green-100 text-farm-green-900 font-semibold'
                      : 'text-farm-green-700 hover:text-farm-green-900'
                  }`}
                >
                  ホーム
                </a>
                <a
                  href="#programs"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors scroll-smooth ${
                    activeSection === 'programs'
                      ? 'bg-farm-green-100 text-farm-green-900 font-semibold'
                      : 'text-farm-green-700 hover:text-farm-green-900'
                  }`}
                >
                  入会特典
                </a>
                <a
                  href="#offer"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors scroll-smooth ${
                    activeSection === 'offer'
                      ? 'bg-farm-green-100 text-farm-green-900 font-semibold'
                      : 'text-farm-green-700 hover:text-farm-green-900'
                  }`}
                >
                  料金・お申し込み
                </a>
                <a
                  href="#gallery"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors scroll-smooth ${
                    activeSection === 'gallery'
                      ? 'bg-farm-green-100 text-farm-green-900 font-semibold'
                      : 'text-farm-green-700 hover:text-farm-green-900'
                  }`}
                >
                  ギャラリー
                </a>
                <a
                  href="#access"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors scroll-smooth ${
                    activeSection === 'access'
                      ? 'bg-farm-green-100 text-farm-green-900 font-semibold'
                      : 'text-farm-green-700 hover:text-farm-green-900'
                  }`}
                >
                  アクセス
                </a>
                <Link
                  href="/faq"
                  className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  よくあるご質問
                </Link>
                <a
                  href="https://line.me/R/ti/p/@650hmqnu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
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
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                ホーム
              </a>
              <a
                href="#programs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                入会特典
              </a>
              <a
                href="#offer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                料金・お申し込み
              </a>
              <a
                href="#gallery"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                ギャラリー
              </a>
              <a
                href="#access"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                アクセス
              </a>
              <Link
                href="/faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                よくあるご質問
              </Link>
              <Link
                href="/tokuteishyou"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                特定商取引法に基づく表示
              </Link>
              <Link
                href="/privacy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/terms"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                利用規約
              </Link>
              <a
                href="https://line.me/R/ti/p/@650hmqnu"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center"
              >
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
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* 実際の画像を使用 */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover transition-transform duration-[10000ms] ease-in-out animate-ken-burns-in-strong ${
                index === 3 ? 'object-bottom' : ''
              }`}
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
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight font-elegant">
              {heroImages[currentSlide].title}
              <span className="block text-harvest-orange-200 font-light">
                {heroImages[currentSlide].subtitle}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-farm-green-50 max-w-3xl mx-auto leading-relaxed">
              狭いベランダでも大丈夫<br />
              1畳のスペースでプランターを使って<br />
              安全・安心な野菜を育てる家庭菜園を学びませんか
            </p>
            
            <div className="flex justify-center">
              <button 
                onClick={scrollToOffer}
                disabled={isApplying}
                className={`py-4 px-10 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center ${
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
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    今すぐ申し込む
                  </>
                )}
              </button>
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
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* 下の波（次セクション：白背景） */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 text-white z-10">
          <svg className="w-full h-12 md:h-16" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="currentColor"
              d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,181.3C672,192,768,224,864,240C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-gradient-to-b from-farm-green-50 via-white to-farm-green-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-farm-green-800 mb-12 font-elegant">
              「優しい家庭菜園の学校」が選ばれる理由
            </h2>
            
            <div className="max-w-4xl mx-auto text-left space-y-8">
              <div className="bg-gradient-to-r from-gray-50 to-farm-green-50 rounded-2xl p-8">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  「安心・安全なものを家庭で食べたい」と思って無農薬に挑戦した結果、<br />
                  「虫がついて、うまく育たない」「思っていたより収穫できない」――<br />
                  そんなイメージをお持ちではありませんか？
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed font-semibold">
                  でも、「優しい家庭菜園の学校」なら違います。
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  私たちが開発した
                  <span className="font-bold text-farm-green-800 bg-farm-green-100 px-2 py-1 rounded">
                    「Nパワー」
                  </span>
                  という微生物群の栄養水を使うと、残留農薬をゼロにし、安全・安心な野菜を育てることができます。<br />
                  さらに、土着の微生物群の力を最大限に発揮する
                  <span className="font-bold text-farm-green-800 bg-farm-green-100 px-2 py-1 rounded">
                    淡路スマイルファームブレンドのスペシャルな土
                  </span>
                  と組み合わせることで、鮮度が長持ちし、通常より多く、元氣なお野菜を栽培できます。
                </p>
              </div>


              <div className="bg-sky-50 rounded-2xl p-8">
                <div className="text-center mb-10 md:mb-14">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-farm-green-800">
                    この方法が特別な理由は――
                  </h3>
                  <p className="text-sm md:text-base text-slate-700">
                    土と微生物の力を最大限に活かすことで、狭いベランダでも「小さな畑」のような環境をつくります。
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <article className="bg-white rounded-3xl shadow-md p-6 md:p-7 flex flex-col items-stretch">
                    <Image
                      src="/images/online-school-garden-lp/online-school-garden-lp_5.png"
                      alt="Nパワーのイメージ"
                      width={800}
                      height={400}
                      className="w-full h-52 md:h-60 object-cover rounded-2xl mb-4"
                    />
                    <h4 className="font-semibold text-base md:text-lg text-emerald-900 mb-3">
                      理由1：残留農薬を限りなくゼロに近づける栄養剤「Nパワー」
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Nパワーは、土の中の微生物たちが元気に働けるように整えるための栄養剤です。
                      土の力を高めることで、野菜自体が本来持っている強さを引き出し、農薬に頼らない栽培をサポートします。
                    </p>
                  </article>

                  <article className="bg-white rounded-3xl shadow-md p-6 md:p-7 flex flex-col items-stretch">
                    <Image
                      src="/images/online-school-garden-lp/online-school-garden-lp_6.png"
                      alt="土づくりのイメージ"
                      width={800}
                      height={400}
                      className="w-full h-52 md:h-60 object-cover rounded-2xl mb-4"
                    />
                    <h4 className="font-semibold text-base md:text-lg text-emerald-900 mb-3">
                      理由2：その土地の微生物群を味方につける土づくり
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      その場にいる微生物たちを最大限に活用することで、根がしっかりと張り、病害虫に負けにくい環境をつくります。
                      「がんばりすぎないお世話」でも、季節ごとに元気な野菜が育つ仕組みです。
                    </p>
                  </article>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 下の波（次セクション：入会案内セクション） */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full text-[#f7f1dd]">
          <svg className="w-full h-12 md:h-16" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="currentColor"
              d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,181.3C672,192,768,224,864,240C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* 入会案内セクション */}
      <section id="programs" className="relative bg-[#f7f1dd] py-14 md:py-16 overflow-hidden">
        {/* 水彩風ぼやぼや背景（サービスセクション） */}
        <div className="pointer-events-none absolute -top-16 -left-10 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply blur-3xl opacity-60" />
        <div className="pointer-events-none absolute -top-10 right-0 w-72 h-72 bg-harvest-orange-100 rounded-full mix-blend-multiply blur-3xl opacity-55 translate-x-1/4" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply blur-3xl opacity-45 translate-y-1/3" />

        <div className="relative max-w-5xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 leading-relaxed">
              「優しい家庭菜園の学校」に入ると、
              <br className="hidden md:block" />
              こんなにたくさんの嬉しいサービスがついてきます。
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <article className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col relative">
              <Image
                src="/images/gallery/LINE_ALBUM1 (5).jpg"
                alt="収穫した色とりどりの野菜"
                width={800}
                height={320}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-emerald-700 font-semibold mb-0">01</p>
                <h3 className="font-semibold text-base md:text-lg text-emerald-900 mt-1">
                  安全・安心な野菜が、自分の家のベランダやお庭で収穫できる
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  微生物群のチカラを最大限に活用するNパワーを使うことで安心で安全なお野菜が作れます。
                </p>
              </div>
            </article>

            <article className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col">
              <Image
                src="/images/online-school-garden-lp/online-school-garden-lp_2.jpeg"
                alt="オンライン講座のイメージ"
                width={800}
                height={320}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-emerald-700 font-semibold mb-0">02</p>
                <h3 className="font-semibold text-base md:text-lg text-emerald-900 mt-1">
                  月替わりオンライン講座
                  <br />
                  （毎月更新）
                </h3>
                <p className="text-sm text-slate-600 mt-2">まるで隣で教わっているかのような、わかりやすい動画レッスン。</p>
              </div>
            </article>

            <article className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col">
              <Image
                src="/images/gallery/123.jpg"
                alt="優しい家庭菜園の学校のサービスイメージ"
                width={800}
                height={320}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-emerald-700 font-semibold mb-0">03</p>
                <h3 className="font-semibold text-base md:text-lg text-emerald-900 mt-1">
                  Nパワー開発者花岡正侍先生や
                  <br />
                  専門家にいつでも質問できる
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  スクールの講師に、質問し放題の専門家サポートつき。一人で悩む家庭菜園はもう終わりです。
                </p>
              </div>
            </article>

            <article className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col">
              <Image
                src="/images/online-school-garden-lp/online-school-garden-lp_3.jpeg"
                alt="会員専用コミュニティのイメージ"
                width={800}
                height={320}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-emerald-700 font-semibold mb-0">04</p>
                <h3 className="font-semibold text-base md:text-lg text-emerald-900 mt-1">
                  会員専用コミュニティ
                  <br />
                  （Facebookグループ）
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  家庭菜園初心者やすでに始めている仲間と、日々の栽培の様子を共有したり、交流ができます。（自由参加）
                </p>
              </div>
            </article>

            <article className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col">
              <Image
                src="/images/online-school-garden-lp/online-school-garden-lp_4.jpeg"
                alt="野菜のパッケージと配送のイメージ"
                width={800}
                height={320}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-emerald-700 font-semibold">05</p>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-semibold">
                    準備中
                  </span>
                </div>
                <h3 className="font-semibold text-base md:text-lg text-emerald-900 mt-1">
                  野菜のパッケージ・配送サービス
                  <br />
                  （別途費用）
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  Nパワーを使っている提携農家で収穫された安全・安心で新鮮なお野菜を、ご自宅までお届けします。
                </p>
              </div>
            </article>

            <article className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col relative">
              <Image
                src="/images/gallery/LINE_ALBUM1 (8).jpg"
                alt="オープンファームの様子"
                width={800}
                height={320}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-emerald-700 font-semibold">06</p>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-semibold">
                    準備中
                  </span>
                </div>
                <h3 className="font-semibold text-base md:text-lg text-emerald-900 mt-1">
                  全国各地の提携農家さんの
                  <br />
                  オープンファームにご招待
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  淡路島と全国各地でNパワーを使っている提携農家で定期的にオープンファームを開催。実際に会って交流し、栽培のコツを学べます。
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* 下の波（次セクション：驚きの特典） */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full text-amber-400">
          <svg className="w-full h-12 md:h-16" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="currentColor"
              d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,181.3C672,192,768,224,864,240C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* 驚きの特典 */}
      <section className="relative bg-gradient-to-br from-farm-green-50 via-harvest-orange-50 to-white py-16 md:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-6xl w-full mx-auto bg-white/90 shadow-xl overflow-hidden rounded-lg">
            {/* 上部コンテンツ */}
            <div className="p-6 md:p-10 pb-4">
              {/* リボンヘッダー */}
              <div className="flex justify-center mb-6">
                <div className="relative inline-block bg-farm-green-700 text-white text-center px-8 py-2 rounded shadow-md">
                  <h2 className="text-xl md:text-2xl font-bold tracking-wider">驚きの特典</h2>
                  <div className="pointer-events-none absolute inset-y-[5px] inset-x-[5px] border border-white/30 rounded" />
                </div>
              </div>

              {/* メイン見出し */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-[#5A4D41] mb-8 leading-snug">
                微生物群のチカラを最大限活用して、
                <br className="hidden md:block" />
                安心安全なお野菜を作る
                <br className="hidden md:block" />
                <span className="text-farm-green-700">「Nパワープラス®（100ml・非売品）」</span>を
                <span className="text-[#D97757]">無料プレゼント！</span>
              </h3>

              {/* 画像＋説明グリッド */}
              <div className="grid grid-cols-1 md:[grid-template-columns:minmax(0,1.3fr)_minmax(0,1.1fr)] gap-10 items-start">
                {/* 左：商品画像（Nパワープラスのイメージ） */}
                <div className="relative group mx-auto w-full max-w-[520px] md:max-w-[580px]">
                  <div className="relative w-full rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
                    <Image
                      src="/images/online-school-garden-lp/online-school-garden-lp_10.png"
                      alt="Nパワープラスのイメージ"
                      fill
                      className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  <p className="text-xs text-center text-gray-400 mt-2">※画像はイメージです</p>
                </div>

                {/* 右：テキスト・チェックリスト */}
                <div className="flex flex-col gap-5">
                  {/* 説明テキスト */}
                  <p className="text-[#5A4D41] font-medium leading-relaxed">
                    今回、期間限定の特別特典として、植物の生育を飛躍的に向上させる微生物栄養剤「Nパワープラス®（100ml・非売品）」を1本無料でプレゼントいたします！
                  </p>

                  {/* 数量限定ボックス */}
                  <div className="bg-[#FFF4E0]/60 border-2 border-[#E6D5B8] p-3 rounded-lg flex items-center gap-3">
                    <span className="bg-farm-green-700 text-white text-xs md:text-sm font-bold px-3 py-1 rounded shadow-sm whitespace-nowrap">
                      数量限定
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[#D97757] text-xs font-bold">無料プレゼント！</span>
                      <span className="text-[#5A4D41] font-bold text-lg leading-tight">
                        Nパワープラス®（100ml・非売品）
                      </span>
                    </div>
                  </div>

                  {/* チェックリスト */}
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 min-w-[24px]">
                        <svg className="w-6 h-6 text-farm-green-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" opacity="0.2" />
                          <path d="M10.5 13.5L8 11l-1.5 1.5L10.5 16 17 9.5 15.5 8z" />
                        </svg>
                      </div>
                      <p className="text-sm text-[#5A4D41] font-medium leading-relaxed">
                        農薬を使ったとしても、残留農薬ゼロにできます。
                        <br />
                        <span className="text-xs text-gray-500">（注意：野菜によります）</span>
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 min-w-[24px]">
                        <svg className="w-6 h-6 text-farm-green-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" opacity="0.2" />
                          <path d="M10.5 13.5L8 11l-1.5 1.5L10.5 16 17 9.5 15.5 8z" />
                        </svg>
                      </div>
                      <p className="text-sm text-[#5A4D41] font-medium leading-relaxed">
                        健全な微生物バランスにより、害虫が自然と減少します。
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 min-w-[24px]">
                        <svg className="w-6 h-6 text-farm-green-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" opacity="0.2" />
                          <path d="M10.5 13.5L8 11l-1.5 1.5L10.5 16 17 9.5 15.5 8z" />
                        </svg>
                      </div>
                      <p className="text-sm text-[#5A4D41] font-medium leading-relaxed">
                        栄養をしっかり吸収した植物は、より多くの実をつけます。
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 min-w-[24px]">
                        <svg className="w-6 h-6 text-farm-green-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" opacity="0.2" />
                          <path d="M10.5 13.5L8 11l-1.5 1.5L10.5 16 17 9.5 15.5 8z" />
                        </svg>
                      </div>
                      <p className="text-sm text-[#5A4D41] font-medium leading-relaxed">
                        本来の栄養バランスで育った作物は、味も香りも格別です。
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 min-w-[24px]">
                        <svg className="w-6 h-6 text-farm-green-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" opacity="0.2" />
                          <path d="M10.5 13.5L8 11l-1.5 1.5L10.5 16 17 9.5 15.5 8z" />
                        </svg>
                      </div>
                      <p className="text-sm text-[#5A4D41] font-medium leading-relaxed">
                        植物の根張りが驚くほど良くなり、養分をしっかり吸収します。
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 下部：紙風テクスチャ＋説明文 */}
            <div className="relative mt-4">
              {/* ちぎれた紙の境界装飾 */}
              <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full rotate-180">
                <svg
                  className="relative block w-[calc(100%+1.3px)] h-6 text-[#fbf8ef]"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,0V46.29c47,0,47,33.88,94,33.88,47,0,47-33.88,94-33.88,47,0,47,33.88,94,33.88,47,0,47-33.88,94-33.88,47,0,47,33.88,94,33.88,47,0,47-33.88,94-33.88,47,0,47,33.88,94,33.88,47,0,47-33.88,94-33.88,47,0,47,33.88,94,33.88,47,0,47-33.88,94-33.88,47,0,47,33.88,94,33.88L1200,0Z"
                    fill="#fdfbf7"
                  />
                </svg>
              </div>

              <div className="bg-[#FFF4E0] p-6 md:p-10 pt-8 border-t-2 border-dashed border-[#e0dac5] relative">
                <div className="bg-white/70 p-6 rounded-lg shadow-sm border border-[#e0dac5] space-y-3">
                  <p className="text-sm md:text-base text-[#5A4D41] leading-7">
                    Nパワープラス®は、20年以上の研究から生まれた革命的な植物栄養剤です。
                  </p>
                  <p className="text-sm md:text-base text-[#5A4D41] leading-7">
                    従来の「外から微生物を入れる」という考え方ではなく、「すでにその土地に住む微生物に栄養を与えて活性化させる」という画期的な発想で開発されました。
                  </p>
                  <p className="text-sm md:text-base text-[#5A4D41] leading-7">
                    大豆、米糠、糖蜜などすべて天然原料から作られており、化学合成物質は一切使用していません。お子様やご高齢の方のいるご家庭でも安心してお使いいただけます。
                  </p>
                  <p className="text-sm md:text-base text-[#5A4D41] leading-7">
                    使い方も驚くほど簡単。500倍に薄めて（100mlボトルなら500L水に対応）、通常の水やりの代わりに月に1〜2回使用するだけです。家庭菜園なら約6ヶ月分、プランター10個分に対応できます。
                  </p>
                </div>

                {/* 飾りアイコン */}
                <div className="absolute bottom-4 left-4 opacity-20">
                  <svg className="w-12 h-12 text-farm-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M5 21c3-6 3-10 0-16 4 1 7 4 7 8 0 4-3 7-7 8z" />
                    <path d="M12 21c3-5 3-9 1-14 3 1 6 4 6 8 0 4-3 7-7 8z" />
                  </svg>
                </div>
                <div className="absolute bottom-4 right-4 opacity-20">
                  <svg className="w-12 h-12 text-farm-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 22V10" />
                    <path d="M7 15c0-3 2-7 5-9 3 2 5 6 5 9" />
                    <path d="M9 18c0-2 1.5-4.5 3-5.5 1.5 1 3 3.5 3 5.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 下の波（次セクション：料金・申込について） */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full text-[#FFFBF5]">
          <svg className="w-full h-12 md:h-16" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="currentColor"
              d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,181.3C672,192,768,224,864,240C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* 入会特典の詳細 */}
      <section id="offer" className="relative py-16 bg-[#FFFBF5] overflow-hidden md:overflow-visible">
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-40 h-40 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 py-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B5E3C] inline-block relative font-elegant">
              料金・申込について
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#8B5E3C] opacity-30 rounded-full" />
            </h2>
            <div className="mt-6 flex justify-center">
              <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF4E0] text-base md:text-lg font-bold text-[#8B5E3C] shadow-sm">
                <span className="text-lg">🎁</span>
                <span>ご入会の方全員に、スペシャル土・Nパワー（100ml）・種をプレゼント！</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 mb-6">
            <div className="flex-1 bg-white rounded-3xl p-6 md:p-7 shadow-lg border-2 border-orange-50 relative transform transition-transform hover:-translate-y-1">
              <div className="absolute -top-6 -right-6 md:-right-4 bg-[#FFF9E5] text-[#8B5E3C] px-4 py-4 rounded-full shadow-md border-2 border-[#E6D5B8] flex flex-col items-center justify-center transform rotate-12 w-24 h-24">
                <span className="text-xs font-bold">今だけ</span>
                <span className="text-sm font-bold text-orange-600">お得！</span>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#E6D5B8]" />
              </div>
              <h3 className="text-center text-gray-600 font-bold mb-3 text-base md:text-lg tracking-wide">入会金</h3>
              <div className="text-center">
                <div className="flex items-end justify-center gap-1 text-[#D97757]">
                  <span className="text-3xl md:text-4xl font-extrabold tracking-tight">39,800</span>
                  <span className="text-lg font-bold mb-1.5">円</span>
                  <span className="text-sm text-gray-500 mb-2 font-normal">（税込）</span>
                </div>
                <p className="mt-2 inline-flex items-baseline gap-1 text-sm md:text-base text-gray-700">
                  <span className="font-bold text-base md:text-lg text-[#8B5E3C] tracking-wide">通常</span>
                  <span className="line-through text-base md:text-lg font-semibold text-gray-600">55,000円</span>
                </p>
              </div>
            </div>

            <div className="flex-1 bg-white rounded-3xl p-6 shadow-lg border-2 border-green-50 flex flex-col justify-center transform transition-transform hover:-translate-y-1">
              <h3 className="text-center text-gray-500 font-bold mb-2">月額</h3>
              <div className="text-center">
                <div className="flex items-end justify-center gap-1 text-[#5A4D41]">
                  <span className="text-3xl md:text-4xl font-extrabold tracking-tight">1,500</span>
                  <span className="text-lg font-bold mb-1.5">円</span>
                  <span className="text-sm text-gray-500 mb-2 font-normal">（税込）</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mb-12 mx-auto max-w-3xl scroll-mt-24">
            <div className="bg-[#FFF4E0] border-2 border-[#E6D5B8] text-center py-4 px-4 relative shadow-sm mx-4 md:mx-0 rounded-[12px]">
              <div className="absolute top-0 left-0 -ml-2 w-4 h-full border-r-2 border-dashed border-[#E6D5B8]" />
              <div className="absolute top-0 right-0 -mr-2 w-4 h-full border-l-2 border-dashed border-[#E6D5B8]" />
              <p className="text-lg md:text-xl font-bold text-[#5A4D41] mb-1">
                初回お支払い総額 <span className="text-[#D97757]">41,300円</span>{' '}
                <span className="text-sm font-normal">（税込）</span>
              </p>
              <p className="text-sm text-gray-600">（内訳：入会金 ＋ 初月利用料）</p>
            </div>
            <p className="text-center text-gray-600 mt-3 text-sm md:text-base">
              1か月後からは、月額利用料1,500円のみでご利用いただけます。
            </p>
          </div>

          <div className="mt-10">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] inline-flex items-center gap-2">
                入会までの<span className="text-[#D97757]">4つのステップ</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6 relative items-center justify-items-center">
              <div className="hidden md:block absolute top-1/2 left-[10%] w-[80%] h-0.5 border-t-2 border-dashed border-gray-300 -z-10 -translate-y-1/2" />

              <div className="relative w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-[#FFEBD6] flex flex-col items-center justify-center p-4 md:p-5 text-center shadow-md hover:scale-105 transition-transform duration-300 group">
                <div className="absolute top-4 left-4 bg-[#E99069] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg shadow-sm z-20 border-2 border-white">
                  1
                </div>
                <div className="mb-2 p-1.5 md:p-2 border-2 border-[#E99069] rounded-md bg-white/50">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E99069" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L14.5 8.5L21 9.5L16 14L17.5 20.5L12 17L6.5 20.5L8 14L3 9.5L9.5 8.5L12 2Z" strokeDasharray="4,2" />
                    <path d="M12 13L12 20M12 20L9 17M12 20L15 17" />
                  </svg>
                </div>
                <h4 className="font-bold text-sm md:text-lg mb-1 text-[#5A4D41] leading-tight">
                  「今すぐ申し込む」<br />をクリック
                </h4>
                <p className="text-[11px] md:text-sm text-[#8B5E3C] mt-2 leading-snug">
                  お申し込みページへ
                  <br />
                  移動します
                </p>
              </div>

              <div className="md:hidden flex justify-center -my-1 opacity-30 rotate-90">
                <ArrowRight />
              </div>

              <div className="relative w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-[#FFF5CC] flex flex-col items-center justify-center p-4 md:p-5 text-center shadow-md hover:scale-105 transition-transform duration-300 group">
                <div className="absolute top-4 left-4 bg-[#ECC94B] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg shadow-sm z-20 border-2 border-white">
                  2
                </div>
                <div className="mb-2 p-1.5 md:p-2 border-2 border-[#ECC94B] rounded-md bg-white/50">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D69E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                    <path d="M6 15h4" strokeDasharray="1,2" strokeWidth="3" />
                  </svg>
                </div>
                <h4 className="font-bold text-sm md:text-lg mb-1 text-[#5A4D41] leading-tight">
                  お客様情報と
                  <br />
                  決済情報の入力
                </h4>
                <p className="text-[11px] md:text-sm text-[#8B5E3C] mt-2 leading-snug">
                  内容をご確認のうえ
                  <br />
                  送信してください
                </p>
              </div>

              <div className="md:hidden flex justify-center -my-1 opacity-30 rotate-90">
                <ArrowRight />
              </div>

              <div className="relative w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-[#D6F5E3] flex flex-col items-center justify-center p-4 md:p-5 text-center shadow-md hover:scale-105 transition-transform duration-300 group">
                <div className="absolute top-4 left-4 bg-[#48BB78] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg shadow-sm z-20 border-2 border-white">
                  3
                </div>
                <div className="mb-2 p-1.5 md:p-2 border-2 border-[#48BB78] rounded-md bg-white/50">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2F855A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <h4 className="font-bold text-sm md:text-lg mb-1 text-[#5A4D41] leading-tight">
                  確認メールを
                  <br />
                  受信
                </h4>
                <p className="text-[11px] md:text-sm text-[#8B5E3C] mt-2 leading-snug">
                  案内に沿って
                  <br />
                  会員サイトへ
                </p>
              </div>

              <div className="md:hidden flex justify-center -my-1 opacity-30 rotate-90">
                <ArrowRight />
              </div>

              <div className="relative w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-[#DCEFFF] flex flex-col items-center justify-center p-4 md:p-5 text-center shadow-md hover:scale-105 transition-transform duration-300 group">
                <div className="absolute top-4 left-4 bg-[#4299E1] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg shadow-sm z-20 border-2 border-white">
                  4
                </div>
                <div className="mb-2 p-1.5 md:p-2 border-2 border-[#4299E1] rounded-md bg-white/50">
                  <div className="flex gap-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2B6CB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20V10" />
                      <path d="M12 20c4 0 7-3 7-7s-3-7-7-7-7 3-7 7 3 7 7 7z" />
                      <path d="M9 10c-2 0-4-2-4-4s2-4 4-4 4 2 4 4-2 4-4 4z" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2B6CB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                      <path d="M12 18h.01" />
                    </svg>
                  </div>
                </div>
                <h4 className="font-bold text-sm md:text-lg mb-1 text-[#5A4D41] leading-tight">ご利用開始</h4>
                <p className="text-[11px] md:text-sm text-[#8B5E3C] mt-2 leading-snug">
                  会員コンテンツや
                  <br />
                  サポートを活用
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center relative">
            <div className="hidden md:block absolute left-1/4 top-0 -translate-x-full translate-y-4">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#D97757" strokeWidth="3" strokeLinecap="round" className="opacity-70 rotate-12">
                <path d="M20,20 Q60,10 80,60" />
                <path d="M80,60 L70,50 M80,60 L90,50" />
              </svg>
            </div>
            <div className="hidden md:block absolute right-1/4 top-0 translate-x-full translate-y-8">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="#5A4D41" strokeWidth="3" strokeLinecap="round" className="opacity-50">
                <path d="M50,20 L50,80" />
                <path d="M20,50 L50,80 L80,50" />
              </svg>
            </div>
            <div className="absolute top-0 right-[30%] text-[#E8BA35] animate-bounce delay-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
            <a
              href={membershipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-b from-[#E99069] to-[#D56A42] text-white font-bold text-2xl py-5 px-16 rounded-full shadow-[0_6px_0_#A84B26] active:shadow-[0_2px_0_#A84B26] active:translate-y-1 transition-all hover:brightness-110 inline-flex items-center gap-2 mx-auto"
            >
              <span>＼</span>
              今すぐ申し込む
              <span>／</span>
            </a>
            <p className="mt-6 text-xs text-gray-500">※お申し込み後、詳細をメールでお送りします</p>
          </div>
        </div>

        {/* 下の波（次セクション：参加者の皆さまの声） */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full text-farm-green-50">
          <svg className="w-full h-12 md:h-16" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="currentColor"
              d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,181.3C672,192,768,224,864,240C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section className="py-20 bg-gradient-to-br from-farm-green-50 to-harvest-orange-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-farm-green-800 mb-6 font-elegant">
              参加者の皆さまの声
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              実際にNパワーを使って野菜を育てた方々からの<br />
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

        {/* 下の波（次セクション：花岡先生プロフィール） */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full text-[#fffbf5]">
          <svg className="w-full h-12 md:h-16" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="currentColor"
              d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,181.3C672,192,768,224,864,240C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* 花岡先生のプロフィールセクション */}
      <section className="py-20 bg-gradient-to-br from-harvest-orange-50 via-[#fffaf0] to-farm-green-50 relative overflow-hidden">
        {/* 水彩風ぼやぼや背景 */}
        <div className="pointer-events-none absolute -top-10 -left-10 w-64 h-64 bg-harvest-orange-100 rounded-full mix-blend-multiply blur-3xl opacity-60" />
        <div className="pointer-events-none absolute top-1/3 -right-16 w-72 h-72 bg-farm-green-100 rounded-full mix-blend-multiply blur-3xl opacity-55" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 w-56 h-56 bg-amber-100 rounded-full mix-blend-multiply blur-3xl opacity-45 translate-y-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-farm-green-800 mb-6 font-elegant">
              花岡先生のプロフィール
            </h2>
          </div>
          <div className="max-w-5xl mx-auto bg-white/95 rounded-3xl p-8 md:p-10 shadow-2xl border border-harvest-orange-100">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
              <div className="w-full md:w-1/2 space-y-4">
                <div className="w-64 h-44 md:w-80 md:h-56 rounded-3xl overflow-hidden shadow-xl mx-auto border-4 border-harvest-orange-100">
                  <Image
                    src="/images/teacher/hanooka-sensei.jpg"
                    alt="花岡正侍"
                    width={800}
                    height={500}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-base md:text-lg font-semibold text-farm-green-800 leading-relaxed text-center md:text-left">
                  食糧危機は必ず来る。農業を学び自給自足ができる状況を作る。そしてその学びを他の人にも教えてあげて欲しい　by 花岡正侍
                </p>
              </div>
              <div className="w-full md:w-1/2 space-y-4 text-left">
                <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-3 relative">
                  <p className="inline-flex items-center px-3 py-1 rounded-full bg-farm-green-100 text-farm-green-900 text-xs font-semibold mb-2">
                    プロフィール
                  </p>
                  <p className="text-lg md:text-xl font-bold text-farm-green-900">
                    花岡正侍先生
                  </p>
                  <p>1944年、徳島県に生まれる。26歳の時に微生物群に興味を持ち、北海道の大雪山に入山。</p>
                  <p>
                    アイヌ民族の長老から山で生きる術を学び、自然界の摂理を独学・実践する中で、地球上のすべての生命が「水と微生物群の働きのバランス」で生かされていることを
                    大雪山山系から学ぶ。微生物群のエサとなるNパワープラスを用いた世界初の農法「えがおの農業。」を開発。
                  </p>
                  <p>
                    現代農業で失われた土壌バランスを取り戻すには微生物群で整えることが重要だと考え、「えがおの農業。」を指導・普及。日本のみならずベトナム、モンゴル、
                    フィリピン、スリランカ、中東などで土壌改善やプラスチックごみの肥料化、砂漠の緑地化プロジェクトにも取り組んでいる。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 下の波（次セクション：ギャラリー） */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full text-white">
          <svg className="w-full h-12 md:h-16" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="currentColor"
              d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,181.3C672,192,768,224,864,240C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section id="gallery" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-farm-green-800 mb-6 font-elegant">
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

        {/* 下の波（次セクション：アクセス） */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full text-farm-green-50">
          <svg className="w-full h-12 md:h-16" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="currentColor"
              d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,181.3C672,192,768,224,864,240C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* アクセスセクション */}
      <section id="access" className="py-20 bg-gradient-to-br from-farm-green-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-farm-green-800 mb-6 font-elegant">
              アクセス
            </h2>
            <p className="text-xl text-gray-600">
              <span className="block md:inline">
                月に1回で、兵庫県淡路島の豊かな自然の中で
              </span>
              <span className="block md:inline">
                オープンファームを開催しています。
              </span>
              <br className="hidden md:block" />
              <span className="block">
                メンバーは、無料でオープンファームにご参加できます。
              </span>
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
                            <strong>カーナビはGoogleマップで「淡路スマイルファーム」を目的地にしてください！！</strong><br />
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M6.75 18a2.25 2.25 0 11-4.5 0m4.5 0a2.25 2.25 0 11-4.5 0m4.5 0h10.5m-12 0V5.25c0-.414.336-.75.75-.75h10.5c.414 0 .75.336.75.75V18m-12-6.75h12m-12-3h12m-4.5 9.75a2.25 2.25 0 104.5 0"
                    />
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
                    <p className="text-gray-600">淡路交通バス「鮎原」バス停下車徒歩15分</p>
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

        {/* 下の波（次セクション：LINE相談&CTA） */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full text-farm-green-50">
          <svg className="w-full h-12 md:h-16" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="currentColor"
              d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,181.3C672,192,768,224,864,240C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
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
          <h2 className="text-3xl md:text-4xl font-bold text-farm-green-800 mb-4 font-elegant">
            <span className="block md:inline">まずはお気軽に</span>
            <span className="block md:inline">LINE相談ください</span>
          </h2>
          <p className="text-lg text-gray-700 mb-8">ご質問やご相談など、どんなことでもお気軽にご連絡ください。<br className="hidden md:inline" />スタッフが丁寧にご案内いたします。</p>
          <a
            href="https://line.me/R/ti/p/@650hmqnu"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex md:min-w-[320px] px-8 py-4 bg-farm-green-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-farm-green-700 transition-colors duration-200 items-center justify-center mx-auto"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            まずはお気軽にLINE相談ください
          </a>
          <a
            href={membershipUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex md:min-w-[320px] px-8 py-4 bg-harvest-orange-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-harvest-orange-600 transition-colors duration-200 items-center justify-center mx-auto mt-4"
          >
            今すぐ申し込む
          </a>
        </div>
      </section>

      {/* フッター（PC/タブレットのみ表示。スマホではfixedフッターを使用） */}
      <footer className="main-footer relative bg-farm-green-900 text-white pt-16 md:pt-20 pb-12">
        {/* 上の波（前セクション：LINE相談&CTA） */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -translate-y-full text-farm-green-900">
          <svg className="w-full h-12 md:h-16" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="currentColor"
              d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,181.3C672,192,768,224,864,240C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-harvest-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z"/>
                </svg>
                優しい家庭菜園の学校
              </h3>
              <p className="text-gray-300">安全・安心なお野菜をベランダや小さなお庭から作れるスクールです。</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-harvest-orange-300">リンク</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="#home" className="hover:text-harvest-orange-300 transition-colors duration-200">
                      ホーム
                    </a>
                  </li>
                  <li>
                    <a href="#programs" className="hover:text-harvest-orange-300 transition-colors duration-200">
                      入会特典
                    </a>
                  </li>
                  <li>
                    <a href="#offer" className="hover:text-harvest-orange-300 transition-colors duration-200">
                      料金・お申し込み
                    </a>
                  </li>
                  <li>
                    <a href="#gallery" className="hover:text-harvest-orange-300 transition-colors duration-200">
                      ギャラリー
                    </a>
                  </li>
                  <li>
                    <a href="#access" className="hover:text-harvest-orange-300 transition-colors duration-200">
                      アクセス
                    </a>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-harvest-orange-300 transition-colors duration-200">
                      よくあるご質問
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <Link href="/tokuteishyou" className="hover:text-harvest-orange-300 transition-colors duration-200">
                      特定商取引法に基づく表示
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-harvest-orange-300 transition-colors duration-200">
                      プライバシーポリシー
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-harvest-orange-300 transition-colors duration-200">
                      利用規約
                    </Link>
                  </li>
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

      {/* スマホ専用 追従フッターメニュー */}
      <div className="fixed-footer-menu">
        <a
          href="https://line.me/R/ti/p/@650hmqnu"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-btn line-btn"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
          <span>LINE相談</span>
        </a>

        <a
          href={membershipUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-btn cta-btn"
        >
          今すぐ申し込む
        </a>
      </div>
    </div>
  )
}