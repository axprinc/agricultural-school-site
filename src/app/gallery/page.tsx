'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function GalleryPage() {
  // モバイルメニューの状態管理
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // ギャラリー画像の管理
  const galleryImages = [
    {
      src: '/images/gallery/LINE_ALBUM1 (2).jpg',
      alt: 'オープンファーム - 野菜栽培の様子',
      title: '野菜栽培',
      description: '参加者の皆さまが実際に野菜を栽培している様子です。'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (19).jpg',
      alt: 'オープンファーム - 収穫体験',
      title: '収穫体験',
      description: '新鮮な野菜を収穫する喜びを体験していただけます。'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (1).jpg',
      alt: 'オープンファーム - 農場風景',
      title: '農場風景',
      description: '美しい自然に囲まれた農場の風景をお楽しみください。'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (3).jpg',
      alt: 'オープンファーム - 参加者の皆さま',
      title: '参加者の皆さま',
      description: '和やかな雰囲気の中で農業体験を楽しんでいます。'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (4).jpg',
      alt: 'オープンファーム - 農業体験',
      title: '農業体験',
      description: '実際の農作業を通じて農業の楽しさを学びます。'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (5).jpg',
      alt: 'オープンファーム - 家庭菜園指導',
      title: '家庭菜園指導',
      description: 'プロの農家による丁寧な家庭菜園の指導を行います。'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (6).jpg',
      alt: 'オープンファーム - 野菜の成長',
      title: '野菜の成長',
      description: '育てている野菜の成長過程を観察できます。'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (7).jpg',
      alt: 'オープンファーム - 実習風景',
      title: '実習風景',
      description: '実際の農作業の実習を通じて技術を身につけます。'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (8).jpg',
      alt: 'オープンファーム - 収穫の喜び',
      title: '収穫の喜び',
      description: '自分で育てた野菜を収穫する喜びは格別です。'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (9).jpg',
      alt: 'オープンファーム - 栽培技術指導',
      title: '栽培技術指導',
      description: '効果的な栽培技術について詳しく指導いたします。'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (10).jpg',
      alt: 'オープンファーム - 家族での参加',
      title: '家族での参加',
      description: 'ご家族皆さまでお楽しみいただけるプログラムです。'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (11).jpg',
      alt: 'オープンファーム - 農場見学',
      title: '農場見学',
      description: '農場全体を見学し、農業について学べます。'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (12).jpg',
      alt: 'オープンファーム - 講師による指導',
      title: '講師による指導',
      description: '経験豊富な講師が丁寧に指導いたします。'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (13).jpg',
      alt: 'オープンファーム - 参加者同士の交流',
      title: '参加者同士の交流',
      description: '参加者同士の交流も農業体験の魅力の一つです。'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (14).jpg',
      alt: 'オープンファーム - 農作業実践',
      title: '農作業実践',
      description: '実際の農作業を体験していただきます。'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (15).jpg',
      alt: 'オープンファーム - イベントの様子',
      title: 'イベントの様子',
      description: '楽しいイベントの雰囲気をお伝えします。'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (16).jpg',
      alt: '収穫した新鮮な野菜',
      title: '収穫した新鮮な野菜',
      description: '参加者の皆さまが収穫した新鮮な野菜です。'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (17).jpg',
      alt: '新鮮な収穫野菜',
      title: '新鮮な収穫野菜',
      description: '色とりどりの新鮮な収穫野菜をご覧ください。'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (18).jpg',
      alt: '収穫体験の成果',
      title: '収穫体験の成果',
      description: '収穫体験での豊かな成果物です。'
    }
  ]

  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-farm-green-50 to-white">
      {/* ナビゲーション */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <svg className="w-8 h-8 mr-3 text-farm-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z"/>
              </svg>
              <Link href="/" className="text-xl font-bold text-farm-green-800 font-elegant">優しい家庭菜園の学校</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">ホーム</Link>
                <a href="/#programs" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">入会特典</a>
                <Link href="/gallery" className="text-farm-green-900 bg-farm-green-100 px-3 py-2 rounded-md text-sm font-medium font-semibold">ギャラリー</Link>
                <Link href="/home-garden" className="text-harvest-orange-600 hover:text-harvest-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors font-semibold flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                  家庭菜園講座
                </Link>
                <a href="/#access" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">アクセス</a>
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
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors">ホーム</Link>
              <a href="/#programs" onClick={() => setIsMobileMenuOpen(false)} className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors">入会特典</a>
              <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-farm-green-900 bg-farm-green-100 block px-3 py-2 rounded-md text-base font-medium font-semibold">ギャラリー</Link>
              <Link href="/home-garden" onClick={() => setIsMobileMenuOpen(false)} className="text-harvest-orange-600 hover:text-harvest-orange-800 block px-3 py-2 rounded-md text-base font-medium font-semibold flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
                家庭菜園講座
              </Link>
              <a href="/#access" onClick={() => setIsMobileMenuOpen(false)} className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors">アクセス</a>
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

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-green-400 via-emerald-500 to-lime-400 text-white py-16 overflow-hidden">
        {/* 装飾的な背景パターン */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-300/30 via-emerald-400/20 to-yellow-300/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent leading-tight">
              Gallery
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed">
              美しい農場での体験の瞬間を写真でお楽しみください
            </p>
          </div>
        </div>
        
        {/* 下部の波形装飾 */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-12" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-white"></path>
          </svg>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

          {/* 画像グリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white shadow-md"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
              </div>
            ))}
          </div>

          {/* 戻るボタン */}
          <div className="text-center mt-16">
            <Link 
              href="/"
              className="inline-flex items-center justify-center bg-farm-green-600 hover:bg-farm-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
            >
              <svg className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              ホームに戻る
            </Link>
          </div>
        </div>
      </section>

      {/* モーダル（画像拡大表示） */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              width={1000}
              height={800}
              className="object-contain max-h-[90vh] w-auto"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
          </div>
        </div>
      )}

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
                  <li><Link href="/" className="hover:text-harvest-orange-300 transition-colors duration-200">ホーム</Link></li>
                  <li><a href="/#programs" className="hover:text-harvest-orange-300 transition-colors duration-200">入会特典</a></li>
                  <li><Link href="/faq" className="hover:text-harvest-orange-300 transition-colors duration-200">よくあるご質問</Link></li>
                  <li><a href="/#access" className="hover:text-harvest-orange-300 transition-colors duration-200">アクセス</a></li>
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