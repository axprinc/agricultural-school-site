"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  // ヒーロー画像のスライド管理
  const heroImages = [
    {
      src: '/images/hero/LINE_ALBUM_2025.6_250612_1.jpg',
      alt: '家庭菜園の様子',
      title: '小さなスペースで',
      subtitle: '大きな収穫を'
    },
    {
      src: '/images/hero/LINE_ALBUM_2025.6_250612_2.jpg', 
      alt: '家庭菜園での活動',
      title: '毎日の食卓に',
      subtitle: '自家製野菜を届ける'
    },
    {
      src: '/images/hero/iStock-1169145715.jpg',
      alt: '美しい農場風景',
      title: '家族みんなで',
      subtitle: '収穫の喜びを分かち合う'
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

  // ギャラリー画像のスライド管理
  const galleryImages = [
    {
      src: '/images/gallery/LINE_ALBUM_2025.6_250612_4.jpg',
      alt: '淡路島の農場風景',
      title: '農場風景',
      bgColor: 'bg-earth-brown-300'
    },
    {
      src: '/images/gallery/LINE_ALBUM_2025.6_250612_5.jpg',
      alt: '参加者の皆さまとの活動',
      title: '体験活動',
      bgColor: 'bg-farm-green-400'
    },
    {
      src: '/images/gallery/LINE_ALBUM_2025.6_250612_6.jpg',
      alt: '野菜栽培の様子',
      title: '野菜栽培',
      bgColor: 'bg-harvest-orange-400'
    },
    {
      src: '/images/gallery/LINE_ALBUM_2025.6_250612_1.jpg',
      alt: '農場での収穫体験の様子',
      title: '収穫体験',
      bgColor: 'bg-farm-green-300'
    },
    {
      src: '/images/gallery/LINE_ALBUM_2025.6_250612_7.jpg',
      alt: '農場での作業風景',
      title: '作業風景',
      bgColor: 'bg-earth-brown-400'
    },
    {
      src: '/images/gallery/LINE_ALBUM_2025.6_250612_8.jpg',
      alt: '収穫した野菜たち',
      title: '収穫物',
      bgColor: 'bg-farm-green-500'
    },
    {
      src: '/images/gallery/LINE_ALBUM_2025.6_250612_9.jpg',
      alt: '農業体験の楽しい時間',
      title: '楽しい体験',
      bgColor: 'bg-harvest-orange-500'
    },
    {
      src: '/images/gallery/LINE_ALBUM_2025.6_250612_10.jpg',
      alt: '農場での活動風景',
      title: '活動風景',
      bgColor: 'bg-earth-brown-500'
    }
  ]

  const [currentGallerySlide, setCurrentGallerySlide] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-farm-green-50 to-white">
      {/* ナビゲーション */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
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
                <a href="#home" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">ホーム</a>
                <a href="#programs" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">入会特典</a>
                <a href="#gallery" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">ギャラリー</a>
                <a href="/home-garden" className="text-harvest-orange-600 hover:text-harvest-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors font-semibold flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                  家庭菜園講座
                </a>
                <a href="#access" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">アクセス</a>
                <a href="#contact" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">お問い合わせ</a>
              </div>
            </div>
          </div>
        </div>
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
            
            {/* グラデーション背景は画像使用時はコメントアウト */}
            {/* 
            <div className={`absolute inset-0 ${
              index === 0 ? 'bg-gradient-to-r from-farm-green-400 to-farm-green-600' :
              index === 1 ? 'bg-gradient-to-r from-harvest-orange-400 to-earth-brown-500' :
              'bg-gradient-to-r from-earth-brown-400 to-farm-green-500'
            }`}></div>
            */}
            
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
              <button className="bg-harvest-orange-500 hover:bg-harvest-orange-600 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center group">
                <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                今すぐ申し込む
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
                    <p className="text-gray-700 leading-relaxed">「これ、お父さん（お母さん）が育てたの！？」と家族に尊敬される喜び</p>
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
                    <h3 className="text-xl font-bold text-gray-800 mb-3">会員専用コミュニティアクセス権</h3>
                    <p className="text-gray-600 leading-relaxed">同じ志を持つ仲間との情報交換の場。質問し放題の専門家サポートつき。孤独な家庭菜園とはおさらばです。</p>
                  </div>
                </div>
              </div>

              {/* 四季の種子セット */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-farm-green-500 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">四季の種子セット（年4回お届け）</h3>
                    <p className="text-gray-600 leading-relaxed">その季節に最適な、有機・無農薬の高品質種子をセレクト。市場では手に入らない希少品種も含む充実のセット。</p>
                  </div>
                </div>
              </div>

              {/* 緊急時専門家サポート */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-farm-green-500 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-2xl font-bold text-white">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">緊急時専門家サポート（月2回まで）</h3>
                    <p className="text-gray-600 leading-relaxed">植物の異変や急な質問に、園芸のプロが24時間以内に回答。失敗のリスクを最小限に抑えます。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nパワープラス特典 */}
          <div className="bg-gradient-to-r from-harvest-orange-100 to-farm-green-100 rounded-2xl p-8 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-farm-green-800 mb-4">驚きの特典 - 植物の成長を劇的に促進する「<a href="https://smilefarming.stores.jp/" target="_blank" rel="noopener noreferrer" className="text-farm-green-800 hover:text-harvest-orange-600 underline transition-colors">Nパワープラス®</a>」を無料プレゼント！</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                今回、期間限定の特別特典として、植物の生育を飛躍的に向上させる微生物栄養剤「<a href="https://smilefarming.stores.jp/" target="_blank" rel="noopener noreferrer" className="text-farm-green-700 hover:text-harvest-orange-600 underline transition-colors">Nパワープラス®</a>」（250ml・通常価格5,500円）を1本無料でプレゼントいたします！
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 mb-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                <a href="https://smilefarming.stores.jp/" target="_blank" rel="noopener noreferrer" className="text-farm-green-700 hover:text-harvest-orange-600 underline transition-colors">Nパワープラス®</a>は、20年以上の研究から生まれた革命的な植物栄養剤です。従来の「外から微生物を入れる」という考え方を根本から変え、「すでにその土地に住む微生物に栄養を与え、活性化させる」という画期的な発想で開発されました。
              </p>
              
              <h4 className="font-bold text-gray-800 mb-3">この<a href="https://smilefarming.stores.jp/" target="_blank" rel="noopener noreferrer" className="text-farm-green-700 hover:text-harvest-orange-600 underline transition-colors">Nパワープラス®</a>を使うと：</h4>
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
                <a href="https://smilefarming.stores.jp/" target="_blank" rel="noopener noreferrer" className="text-farm-green-700 hover:text-harvest-orange-600 underline transition-colors">Nパワープラス®</a>は大豆、米糠、糖蜜などすべて天然原料から作られており、化学合成物質は一切使用していません。お子様やペットのいるご家庭でも安心して使えます。
              </p>
              <p className="text-gray-700 leading-relaxed">
                使い方も驚くほど簡単です。500倍〜1000倍に薄めて（250mlボトルなら125L〜250Lの水に対応）、通常の水やりの代わりに月に1〜2回使用するだけ。家庭菜園なら約6ヶ月分、プランター10個分に対応できます。
              </p>
              <p className="text-center font-bold text-farm-green-800 mt-4">ベランダ菜園には、この「Nパワープラス®」が最適なのです！</p>
            </div>
            
            {/* Nパワープラス詳細リンク */}
            <div className="text-center mt-6">
              <a 
                href="https://smilefarming.stores.jp/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-farm-green-600 hover:bg-farm-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Nパワープラス®の詳細についてはこちら
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* 価格・申込セクション */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-harvest-orange-200 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">期間限定・特別オファー</h3>
              <div className="bg-red-100 rounded-lg p-4 mb-6">
                <p className="text-red-800 font-semibold">先着50名様限定！5月15日まで</p>
              </div>
              
              <div className="flex justify-center items-center space-x-8 mb-6">
                <div className="text-center">
                  <div className="text-gray-500 line-through text-lg">通常価格</div>
                  <div className="text-gray-500 line-through text-2xl font-bold">30,000円</div>
                </div>
                <div className="text-4xl text-harvest-orange-500">→</div>
                <div className="text-center">
                  <div className="text-harvest-orange-600 text-lg">特別価格</div>
                  <div className="text-harvest-orange-600 text-4xl font-bold">20,000円</div>
                  <div className="text-gray-600 text-sm">+ 月会費 980円</div>
                </div>
              </div>
              
              <div className="bg-harvest-orange-50 rounded-lg p-4 mb-6">
                <p className="text-harvest-orange-800 font-semibold">
                  さらに！「Nパワープラス®」（5,500円相当）を無料プレゼント
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-8">
                <h4 className="font-bold text-blue-800 mb-2">安心の保証制度</h4>
                <p className="text-blue-700 text-sm">
                  もし入会から3ヶ月以内に「思ったような収穫が得られない」「続けるのが難しい」と感じられた場合、全額返金いたします。あなたにはリスクがありません。
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-harvest-orange-500 hover:bg-harvest-orange-600 text-white font-bold py-6 px-12 rounded-lg text-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-4">
                ＼今すぐ申し込む／
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
                  src="/images/testimonials/iStock-1328982200.jpg"
                  alt="山田さんの写真"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-lg">佐藤さん</p>
                  <p className="text-sm opacity-90">東京都在住・42歳・会社員</p>
                </div>
              </div>
              <div className="p-8">
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
                <p className="text-gray-600 leading-relaxed">
                  「仕事のストレスで不眠症だった私が、朝晩の水やりと収穫の時間を楽しみに規則正しい生活を送れるようになりました。健康的な食生活と趣味が見つかり、人生が変わったと言っても過言ではありません」
                </p>
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
              農場ギャラリー
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.slice(0, 8).map((image, index) => (
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


        </div>
      </section>

      {/* アクセスセクション */}
      <section id="access" className="py-20 bg-white">
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
                     <p className="text-gray-600">神戸淡路鳴門自動車道「津名一宮IC」から約20分<br />無料駐車場完備（30台）</p>
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

      {/* お問い合わせセクション */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-elegant flex items-center justify-center">
            <svg className="w-8 h-8 mr-3 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z"/>
            </svg>
            まずは気軽にお問い合わせください
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            体験内容や料金について、お気軽にご相談ください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center mx-auto sm:mx-0">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              電話で問い合わせ
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 hover:border-white/30 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto sm:mx-0">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              メールで問い合わせ
            </button>
          </div>
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
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-harvest-orange-300 transition-colors duration-200">ホーム</a></li>
                <li><a href="#programs" className="hover:text-harvest-orange-300 transition-colors duration-200">入会特典</a></li>
                <li><a href="#gallery" className="hover:text-harvest-orange-300 transition-colors duration-200">ギャラリー</a></li>
                <li><a href="#access" className="hover:text-harvest-orange-300 transition-colors duration-200">アクセス</a></li>
                <li><a href="#contact" className="hover:text-harvest-orange-300 transition-colors duration-200">お問い合わせ</a></li>
              </ul>
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