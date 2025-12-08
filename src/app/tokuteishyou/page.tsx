'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import MainFooter from '@/components/MainFooter'

export default function TokuteishyouPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const desktopLinkClass = 'text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors'
  const mobileLinkClass = 'text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors'

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
                <Link href="/#home" className={desktopLinkClass}>ホーム</Link>
                <Link href="/#programs" className={desktopLinkClass}>入会特典</Link>
                <Link href="/#offer" className={desktopLinkClass}>料金・お申し込み</Link>
                <Link href="/#gallery" className={desktopLinkClass}>ギャラリー</Link>
                <Link href="/#access" className={desktopLinkClass}>アクセス</Link>
                <Link href="/faq" className={desktopLinkClass}>よくあるご質問</Link>
                <a
                  href="https://line.me/R/ti/p/@650hmqnu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${desktopLinkClass} flex items-center`}
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
                aria-expanded={isMobileMenuOpen}
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
              <Link href="/#home" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                ホーム
              </Link>
              <Link href="/#programs" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                入会特典
              </Link>
              <Link href="/#offer" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                料金・お申し込み
              </Link>
              <Link href="/#gallery" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                ギャラリー
              </Link>
              <Link href="/#access" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                アクセス
              </Link>
              <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                よくあるご質問
              </Link>
              <Link href="/tokuteishyou" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                特定商取引法に基づく表示
              </Link>
              <Link href="/privacy" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                プライバシーポリシー
              </Link>
              <Link href="/terms" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass}>
                利用規約
              </Link>
              <a
                href="https://line.me/R/ti/p/@650hmqnu"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${mobileLinkClass} flex items-center`}
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

      {/* メインコンテンツ */}
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* ヘッダー */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-farm-green-800 mb-4">
              特定商取引法に基づく表示
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto whitespace-nowrap">
              安心してご利用いただけるよう、法律で定められた情報を公開しております
            </p>
          </div>

          {/* コンテンツカード */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-farm-green-100 p-8 md:p-12">
            <div className="space-y-8">
              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-xl font-semibold text-farm-green-800 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-farm-green-100 rounded-full flex items-center justify-center mr-3 text-farm-green-600 text-sm font-bold">1</span>
                  会社名
                </h2>
                <p className="text-gray-700 ml-9">株式会社グリーンハーベスト</p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-xl font-semibold text-farm-green-800 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-farm-green-100 rounded-full flex items-center justify-center mr-3 text-farm-green-600 text-sm font-bold">2</span>
                  営業所所在地
                </h2>
                <p className="text-gray-700 ml-9">〒656-1317<br />兵庫県洲本市五色町鮎原小山田1065番地</p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-xl font-semibold text-farm-green-800 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-farm-green-100 rounded-full flex items-center justify-center mr-3 text-farm-green-600 text-sm font-bold">3</span>
                  販売価格以外でお客様に発生する費用
                </h2>
                <div className="text-gray-700 ml-9 space-y-2">
                  <p>
                    当サイトのページ閲覧、コンテンツ購入、ソフトウェアのダウンロード等に必要となるインターネット接続料金や通信料金はお客様のご負担となります。料金の詳細は、ご利用のインターネットプロバイダまたは携帯電話会社にお問い合わせください。
                  </p>
                </div>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-xl font-semibold text-farm-green-800 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-farm-green-100 rounded-full flex items-center justify-center mr-3 text-farm-green-600 text-sm font-bold">4</span>
                  交換の方法、引渡し時期
                </h2>
                <p className="text-gray-700 ml-9">お申し込み後、1週間以内に商品をお届けいたします。</p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-xl font-semibold text-farm-green-800 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-farm-green-100 rounded-full flex items-center justify-center mr-3 text-farm-green-600 text-sm font-bold">5</span>
                  支払い方法・時期
                </h2>
                <p className="text-gray-700 ml-9">
                  現在のお支払い方法はクレジットカード決済のみとなります。お支払い時期は、ご利用のカード会社の規定に準じます。
                </p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-xl font-semibold text-farm-green-800 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-farm-green-100 rounded-full flex items-center justify-center mr-3 text-farm-green-600 text-sm font-bold">6</span>
                  販売価格
                </h2>
                <p className="text-gray-700 ml-9">入会金：39,800円（税込）<br />月額：1,500円（税込）</p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-xl font-semibold text-farm-green-800 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-farm-green-100 rounded-full flex items-center justify-center mr-3 text-farm-green-600 text-sm font-bold">7</span>
                  返品・キャンセルについて
                </h2>
                <div className="ml-9 space-y-3 text-gray-700">
                  <p>
                    万が一、入会から3ヶ月以内に「思ったような成果が得られない」「ご自身に合わない」と感じられた場合は、以下の条件を満たすことで、年会費を全額返金させていただきます。
                  </p>
                  <p>返金をご希望の場合は、入会日から90日以内にその旨をメールまたはお電話にてご連絡ください。</p>
                  <p>お申し込み時にお渡しする「Nパワープラス®」が未開封であることを確認の上、指定の住所へご返送ください（送料はお客様負担）。</p>
                  <p>返送確認後、速やかにご指定の口座へ年会費を全額返金いたします（振込手数料を差し引いた額となります）。</p>
                  <div className="bg-farm-green-50 p-4 rounded-lg border-l-4 border-farm-green-400">
                    <p className="text-sm text-farm-green-800 font-semibold">※返金制度のご利用は、おひとり様一度限りとさせていただきます。</p>
                    <p className="text-sm text-farm-green-700 mt-2">※開封済みの商品や、90日を過ぎてのご申請には対応いたしかねます。</p>
                  </div>
                </div>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-xl font-semibold text-farm-green-800 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-farm-green-100 rounded-full flex items-center justify-center mr-3 text-farm-green-600 text-sm font-bold">8</span>
                  サービス内容
                </h2>
                <p className="text-gray-700 ml-9">家庭菜園指導、オンライン講座、会員コミュニティ、農業体験ツアー等</p>
              </div>

              <div className="pb-6">
                <h2 className="text-xl font-semibold text-farm-green-800 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-farm-green-100 rounded-full flex items-center justify-center mr-3 text-farm-green-600 text-sm font-bold">9</span>
                  利用規約・プライバシーポリシー
                </h2>
                <p className="text-gray-700 ml-9">
                  詳細は<Link href="/terms" className="text-farm-green-700 underline ml-1 mr-1">利用規約</Link>
                  と
                  <Link href="/privacy" className="text-farm-green-700 underline ml-1">プライバシーポリシー</Link>
                  をご確認ください。
                </p>
              </div>
            </div>
          </div>

          {/* フッター */}
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 border border-farm-green-300 text-farm-green-700 font-medium rounded-lg hover:bg-farm-green-50 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            ホームに戻る
          </Link>
        </div>
        </div>
      </div>

      <MainFooter />
    </div>
  )
}