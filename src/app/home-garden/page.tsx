'use client';
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomeGardenPage() {
  // モバイルメニューの状態管理
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // ページタイトルの設定
  useEffect(() => {
    document.title = '家庭菜園講座について - 優しい家庭菜園の学校'
  }, [])
  
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer')
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // ギャラリー画像の管理（topページと重複しない写真を使用）
  const galleryImages = [
    {
      src: '/images/gallery/LINE_ALBUM1 (19).jpg',
      alt: '家庭菜園での収穫',
      title: '毎日の収穫'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (3).jpg',
      alt: '野菜の栽培',
      title: '野菜の成長'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (5).jpg',
      alt: '家庭菜園の指導',
      title: 'プロの指導'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (7).jpg',
      alt: '実習の様子',
      title: '実践学習'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (13).jpg',
      alt: '農業体験',
      title: '体験学習'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (11).jpg',
      alt: '収穫体験',
      title: '収穫の喜び'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (16).jpg',
      alt: 'イベントの様子',
      title: '楽しいイベント'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (17).jpg',
      alt: '新鮮な野菜',
      title: '収穫成果'
    },
    {
      src: '/images/gallery/LINE_ALBUM1 (18).jpg',
      alt: '豊富な収穫',
      title: '豊かな収穫'
    }
  ]

  const [currentGalleryImage, setCurrentGalleryImage] = React.useState(0)

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
                <Link href="/gallery" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">ギャラリー</Link>
                <Link href="/home-garden" className="text-harvest-orange-600 hover:text-harvest-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors font-semibold flex items-center bg-harvest-orange-50">
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
              <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors">ギャラリー</Link>
              <Link href="/home-garden" onClick={() => setIsMobileMenuOpen(false)} className="text-harvest-orange-600 hover:text-harvest-orange-800 block px-3 py-2 rounded-md text-base font-medium font-semibold flex items-center bg-harvest-orange-50">
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
      <section className="relative bg-gradient-to-r from-farm-green-600 to-farm-green-800 text-white">
        {/* ヒーロー背景画像 */}
        <div className="absolute inset-0">
          <Image 
            src="/images/hero/LINE_ALBUM_2025.7.27 _250728_1.jpg" 
            alt="オープンファーム - 農業体験の様子" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-farm-green-800/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block text-harvest-orange-300">家庭菜園講座について</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-farm-green-100">
              初心者でも安心！プロが教える<br />
              家庭菜園の基礎から実践まで
            </p>
            <div className="flex justify-center">
              <a 
                href="https://order.awaji-smilefarm.com/memberships/ms_smashkovmdwhladc/subscriptions/new"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-harvest-orange-500 hover:bg-harvest-orange-600 text-white font-bold py-4 px-10 rounded-lg text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center group"
              >
                <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                今すぐ申し込む
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 問題提起セクション */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-farm-green-800 mb-6">毎日のように値上がりする野菜の価格に、家計のやりくりが厳しくなっていませんか？</h2>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <div className="space-y-4 text-gray-700">
              <p className="flex items-start">
                <span className="text-red-500 mr-3">😰</span>
                スーパーで野菜を手に取るたび、「また値上がりした…」とため息をついてしまう
              </p>
              <p className="flex items-start">
                <span className="text-red-500 mr-3">💸</span>
                料理に使いたい野菜を我慢して、安いものだけを選んでしまう
              </p>
              <p className="flex items-start">
                <span className="text-red-500 mr-3">😟</span>
                子どもたちに十分な野菜を食べさせてあげられているか不安になる
              </p>
            </div>
          </div>

          <div className="text-center text-lg text-gray-700 mb-8">
            <p className="mb-6 text-xl font-semibold text-farm-green-800">その気持ち、痛いほどわかります。</p>
            <p className="mb-6">実は私も数年前、同じ悩みを抱えていました。野菜の価格高騰に家計が圧迫され、「何とか自分で野菜を育てられないか」と思ったものの、庭がない都会のマンション暮らし。「場所がない」「土いじりは難しそう」「時間がかかりそう」と、あきらめかけていたのです。</p>
          </div>

          <div className="bg-farm-green-50 border-l-4 border-farm-green-400 p-6 text-center">
            <p className="text-gray-700 text-lg mb-4">
              <strong className="text-farm-green-800 text-xl">でも今は違います。</strong>
            </p>
            <p className="text-gray-700 mb-4">
              私の小さなベランダは、次々と新鮮野菜を生み出す「家族の台所」となりました。子どもたちは自分たちで育てた野菜を喜んで食べ、スーパーでの野菜代は以前の半分以下に。
            </p>
            <p className="text-farm-green-800 font-semibold text-lg">
              そして何より、土に触れ、植物が成長する姿を見守る喜びを知りました。
            </p>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-farm-green-800 mb-4">「どうやってそんなことができるの？」</p>
            <p className="text-xl text-gray-700">その秘密を今日、あなたにお伝えします。</p>
          </div>
        </div>
      </section>

      {/* 植物との関係性セクション */}
      <section className="py-20 bg-farm-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 italic mb-8">
              そういえば、植物って黙って育ってくれるのに、<br />
              なぜか見ているだけで心が満たされますよね。
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-farm-green-800 mb-6">毎朝、食卓に並ぶ野菜たち。</h3>
            <div className="space-y-4 text-gray-700 mb-8">
              <p>「今日はちょっと元気がないなぁ...」</p>
              <p>「この色、本当に自然のものなのかな...」</p>
              <p>「子どもに安心して食べさせられるかな...」</p>
            </div>
            <p className="text-gray-700 mb-6">
              そんな小さな疑問が、食事のたびに顔を出します。
            </p>
            <p className="text-gray-700">
              多くの家庭では、野菜売り場で立ち止まり、「本当はもっと自然なものを食べさせたい」という気持ちが静かに広がっています。そして「自分で育てられたら...」という小さな夢が芽生えます。
            </p>
          </div>

          <div className="mt-12 bg-gray-100 p-8 rounded-xl">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">でもね...</h4>
            <div className="space-y-3 text-gray-700">
              <p>「マンションだし、庭なんてないし...」</p>
              <p>「土いじりなんて小学校以来だし...」</p>
              <p>「毎日世話するの、忙しくて無理かも...」</p>
            </div>
            <p className="text-gray-700 mt-4 font-semibold">
              そんな風に、夢は夢のままで終わってしまいます。
            </p>
          </div>
        </div>
      </section>

      {/* 小さな森の話セクション */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-farm-green-100 to-farm-green-200 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-farm-green-800 mb-6">しかし今、ある人たちのベランダには不思議な"小さな森"があります。</h3>
            <div className="space-y-4 text-gray-700">
              <p>朝起きたら、目に飛び込んでくる緑の輝き。</p>
              <p>子どもが「今日はどれが食べごろ？」とワクワクしながら観察する森。</p>
              <p>食卓に「今朝採れたよ」と誇らしげに並べられる、そんな不思議な森。</p>
            </div>
            <p className="text-farm-green-800 font-semibold text-lg mt-6">
              これって、なんだか生命の神秘を毎日感じているみたい、と思いませんか？
            </p>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 mb-4">
              実はこれ、難しい技術じゃなくて<span className="text-farm-green-800 font-bold">「ちょっとした知恵」</span>の力なんです。
            </p>
          </div>
        </div>
      </section>

      {/* 解決策紹介セクション */}
      <section id="about" className="py-20 bg-farm-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">🌱 「優しい家庭菜園の学校」</h2>
            <p className="text-xl text-gray-700">
              —それは、ベランダを"心の安らぎを生み出す場所"に変える方法。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-farm-green-800 mb-6">多くの人が家庭菜園で挫折するのには理由があります</h3>
              <div className="space-y-4 text-gray-700 mb-6">
                <p>広い土地がいる、重い土を運ぶ、毎日の水やりが大変...。</p>
                <p className="font-semibold text-farm-green-800">でも「優しい家庭菜園の学校」ではそんな常識を全部ひっくり返します。</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-farm-green-800 mb-3">「狭小スペース集約栽培法」</h4>
                <p className="text-gray-700">
                  は、たった1畳のベランダスペースで、小さな自然の循環を作り出す方法なんです。
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-farm-green-800 mb-4">大阪大学農学部 田中教授も驚いた</h4>
              <p className="text-gray-600 italic mb-6">
                「自然の摂理をこんな形で活かすとは！」と驚いたような、ちょっと意外なアプローチ。
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-farm-green-500 rounded-full mr-3"></span>
                  特殊配合の土
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-farm-green-500 rounded-full mr-3"></span>
                  ちょっと変わった水やり方法
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-farm-green-500 rounded-full mr-3"></span>
                  野菜同士の「おともだち作戦」
                </p>
              </div>
              <p className="text-farm-green-800 font-semibold mt-4">
                この組み合わせが、驚きの結果を生み出すのです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 未来のビジョンセクション */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">この方法を知ったら、こんな日常が待っているかもしれません</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="text-4xl mb-4 text-center">🌅</div>
              <p className="text-gray-700 text-center">
                朝、カーテンを開けた瞬間、緑の命に「おはよう」と挨拶する穏やかな時間。
              </p>
            </div>
            <div className="card p-6">
              <div className="text-4xl mb-4 text-center">🍽️</div>
              <p className="text-gray-700 text-center">
                「これ、ベランダで育ったの？」と、食卓での会話が弾む瞬間。
              </p>
            </div>
            <div className="card p-6">
              <div className="text-4xl mb-4 text-center">✨</div>
              <p className="text-gray-700 text-center">
                「ねぇねぇ、これ、パパ（ママ）が育てたの？すごーい！」という子どもの目が輝く喜び。
              </p>
            </div>
            <div className="card p-6">
              <div className="text-4xl mb-4 text-center">🤔</div>
              <p className="text-gray-700 text-center">
                「この野菜、どうやって育ったんだろう」という子どもの好奇心が自然と芽生える教育の場。
              </p>
            </div>
            <div className="card p-6">
              <div className="text-4xl mb-4 text-center">🧘</div>
              <p className="text-gray-700 text-center">
                朝の水やり5分間が、不思議と「今日も頑張ろう」という気持ちにさせてくれる小さな瞑想時間。
              </p>
            </div>
            <div className="card p-6">
              <div className="text-4xl mb-4 text-center">🤍</div>
              <p className="text-gray-700 text-center">
                今、あなたのベランダは何をしていますか？ ただの通路？物置き場？それとも、ちょっと寂しい空間？
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-farm-green-800 font-semibold">
              もしかしたら、ベランダは「心の豊かさを育む場所」になるかもしれませんよ。
            </p>
          </div>
        </div>
      </section>

      {/* 選ばれる理由セクション */}
      <section className="py-20 bg-farm-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">「優しい家庭菜園の学校」が選ばれる理由</h2>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
            <p className="text-gray-700 text-lg mb-6">
              従来の家庭菜園は、広い庭が必要で、重労働も多く、失敗も多いものでした。でも「優しい家庭菜園の学校」は違います。
            </p>
            <div className="bg-farm-green-50 p-6 rounded-lg">
              <p className="text-farm-green-800 font-bold text-xl mb-4">
                私たちが開発した「狭小スペース集約栽培法」
              </p>
              <p className="text-gray-700">
                は、わずか1畳分のベランダスペースでも、年間を通じて家族4人分の野菜を収穫できる画期的な方法です。
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl mb-12">
            <div className="flex items-center">
              <div className="text-3xl mr-3">🎓</div>
              <div>
                <h4 className="text-lg font-semibold text-blue-800 mb-2">大阪大学農学部 田中教授</h4>
                <p className="text-blue-700 italic font-medium">
                  「従来の常識をくつがえす革新的なアプローチ」
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-farm-green-800 mb-8">あなたは今、このような未来を手に入れることができます：</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-2xl mr-4">🌱</div>
                <p className="text-gray-700">
                  朝起きたら、キッチンに行く前にベランダで採れたての野菜を収穫する喜び
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-4">💰</div>
                <p className="text-gray-700">
                  スーパーの値上げに一喜一憂せず、家計にゆとりが生まれる安心感
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-4">👨‍👩‍👧‍👦</div>
                <p className="text-gray-700">
                  「お父さん（お母さん）が育てたの？すごい！」と家族から尊敬の眼差しを向けられる満足感
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-2xl mr-4">🌿</div>
                <p className="text-gray-700">
                  添加物や農薩を気にせず、安全で新鮮な野菜を家族に食べさせられる安心
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-4">🧘‍♀️</div>
                <p className="text-gray-700">
                  土に触れ、生命を育てる癒しの時間が毎日の生活にもたらす心の余裕
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">💬 会員様の声</h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-12">
            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-farm-green-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl">👨‍💼</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-farm-green-800">佐藤さん（42歳・会社員）</h4>
                  <p className="text-gray-600">東京都在住</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                「マンションの南向きベランダ2畳スペースで始めて半年。今では家族が食べる野菜の7割はベランダ産です。子どもたちも野菜嫌いが治り、食事の時間が楽しくなりました。何より毎月の食費が2万円も減りました！」
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-farm-green-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl">👩‍🍳</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-farm-green-800">山田さん（38歳・主婦）</h4>
                  <p className="text-gray-600">大阪市在住</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                「園芸の経験はゼロでしたが、動画マニュアルをそのまま真似るだけで簡単に始められました。最初は半信半疑でしたが、3ヶ月目からはほぼ毎日何かしらの収穫があり、家計の強い味方になっています。特に最近の野菜高騰でその価値を実感しています」
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-farm-green-100 rounded-full flex items-center justify-center mr-6">
                  <span className="text-3xl">👨‍💻</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-farm-green-800">鈴木さん（51歳・自営業）</h4>
                  <p className="text-gray-600">名古屋市在住</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                「仕事のストレスで不眠症だった私が、朝晩の水やりと収穫の時間を楽しみに規則正しい生活を送れるようになりました。健康的な食生活と趣味が見つかり、人生が変わったと言っても過言ではありません」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="py-20 bg-farm-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">みんなで収穫した野菜たち</h2>
            <p className="text-xl text-gray-700 mt-4">
              実際に収穫した新鮮な野菜をご覧ください
            </p>
          </div>

          {/* メイン画像表示 */}
          <div className="relative mb-12">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={galleryImages[currentGalleryImage].src}
                alt={galleryImages[currentGalleryImage].alt}
                fill
                className="object-cover"
                priority
              />


              {/* ナビゲーション矢印 */}
              <button
                onClick={() => setCurrentGalleryImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="前の画像"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="次の画像"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* サムネイル画像 */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                onClick={() => setCurrentGalleryImage(index)}
                className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  index === currentGalleryImage ? 'ring-4 ring-farm-green-500 scale-105' : ''
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

          <div className="text-center mt-12">
            <button 
              onClick={scrollToOffer}
              className="bg-farm-green-600 hover:bg-farm-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              今すぐ始める
            </button>
          </div>
        </div>
      </section>

      {/* プログラム内容セクション */}
      <section className="py-20 bg-farm-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">📚 あなたが手に入れるもの</h2>
            <p className="text-xl text-gray-700">
              「優しい家庭菜園の学校」に入会すると、以下のすべてがあなたのものになります：
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card p-8">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-semibold text-farm-green-800 mb-4">月替わりオンライン講座（毎月更新・永久視聴可能）</h3>
              <p className="text-gray-600 mb-4">まるで隣で教わっているかのような、わかりやすい動画レッスン。初心者でも迷わない、季節ごとの栽培カレンダー付き。</p>
            </div>

            <div className="card p-8">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold text-farm-green-800 mb-4">プロ監修・栽培マニュアル（PDF版＆紙版）</h3>
              <p className="text-gray-600 mb-4">失敗しない土づくりから収穫までの全工程を、写真やイラスト満載で解説。困ったときにすぐ調べられる索引付き。</p>
            </div>

            <div className="card p-8">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-farm-green-800 mb-4">会員専用コミュニティ（Facebookグループ）</h3>
              <p className="text-gray-600 mb-4">同じ志を持つ仲間との情報交換の場。質問し放題の専門家サポートつき。一人で悩む家庭菜園はもう終わりです。</p>
            </div>

            <div className="card p-8">
              <div className="text-4xl mb-4">🏕️</div>
              <h3 className="text-xl font-semibold text-farm-green-800 mb-4">1泊2日農業体験ツアー参加権（別途費用）</h3>
              <p className="text-gray-600 mb-4">花岡正侍による講義が生で聞ける。畑で収穫した農作物をその場で調理して食べれる。淡路島と複数の提携農家で開催。</p>
            </div>

            <div className="card p-8">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-farm-green-800 mb-4">野菜のパッケージ・配送サービス（別途費用）</h3>
              <p className="text-gray-600 mb-4">提携農家で収穫された新鮮な野菜を、ご自宅までお届けします。</p>
            </div>

            <div className="card p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-farm-green-800 mb-4">全国各地のオフ会開催</h3>
              <p className="text-gray-600 mb-4">淡路島と複数の提携農家で定期的にオフ会を開催。実際に会って交流し、栽培のコツを学べます。</p>
            </div>
          </div>

          {/* 注意事項 */}
          <div className="text-center mb-12">
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
        </div>
      </section>

      {/* 特別オファーセクション */}
      <section id="offer" className="py-20 bg-farm-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">🎯 期間限定・特別オファー</h2>
          
          <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl mb-8">
            <p className="text-lg mb-8 text-center">
              通常、「優しい家庭菜園の学校」の入会金は50,000円（年会費19,800円別途）ですが、<span className="text-red-600 font-bold">先着50名様限定で入会金無料</span>にてご案内しています。
            </p>
            
            <div className="text-center mb-8">
              <p className="text-harvest-orange-600 font-bold text-lg">
                さらに、今だけの特別特典として、植物の成長を劇的に促進する「Nパワープラス®」（通常価格5,500円）を1本無料でプレゼント！
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-farm-green-800 mb-4">通常価格</h3>
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
                <h3 className="text-2xl font-bold text-harvest-orange-600 mb-4">特別価格（先着50名様限定）</h3>
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
            
            <div className="bg-blue-50 rounded-lg p-4 mt-8">
              <h4 className="font-bold text-blue-800 mb-2">安心の保証制度</h4>
                              <p className="text-blue-700 text-sm">
                  もし入会から3ヶ月以内に「思ったような収穫が得られない」「続けるのが難しい」と感じられた場合、年会費19,800円からNパワープラス®代5,500円を差し引いた金額（14,300円）を返金させていただきます。
                </p>
            </div>
          </div>

          <div className="bg-red-600 text-white p-6 rounded-xl mb-8">
            <h3 className="text-xl font-bold mb-2">⚠️ 定員に達し次第締め切り！今すぐお申し込みください</h3>
            <p>この特別オファーは、先着50名様限定です。定員に達し次第、この価格でのご案内は終了となります。毎回このキャンペーンは数日で定員に達してしまうため、今すぐのお申し込みをおすすめします。</p>
          </div>

          <div className="space-y-6">
            <a 
              href="https://order.awaji-smilefarm.com/memberships/ms_smashkovmdwhladc/subscriptions/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-harvest-orange-500 hover:bg-harvest-orange-600 text-white font-bold py-6 px-12 rounded-xl text-2xl transition-colors duration-200 shadow-2xl hover:shadow-3xl"
            >
              ＼今すぐ申し込む／
            </a>
          </div>
        </div>
      </section>

      {/* 最後の押しセクション */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-farm-green-800 mb-6">P.S.</h3>
            <div className="space-y-6 text-gray-700">
              <p>
                野菜の価格は今後も上昇が予想されています。家庭菜園を始めるなら、今がベストタイミングです。入会特典の「Nパワープラス®」は単なる肥料ではなく、土壌環境全体を改善する革命的な微生物栄養剤です。
              </p>
              <p>
                多くのお客様が「長年放置していた畑で使ったところ、3ヶ月で土が見違えるように変わった」「収穫量が2倍以上になった」と驚きの効果を報告しています。
              </p>
              <div className="bg-harvest-orange-50 p-6 rounded-lg border-l-4 border-harvest-orange-400">
                <p className="font-semibold text-harvest-orange-800 mb-4">
                  これだけでも5,500円の価値があります。
                </p>
                <p className="mb-4">
                  この機会を逃さず、家族の健康と家計を守る一歩を今日踏み出してください。迷っている時間が、あなたの家計を圧迫し続けています。
                </p>
                <p className="font-semibold">
                  今すぐ下のボタンをクリックして、未来の自分に感謝される選択をしましょう。
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-harvest-orange-500 hover:bg-harvest-orange-600 text-white font-bold py-4 px-10 rounded-xl text-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
                未来の自分に感謝される選択をする
              </button>
            </div>
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