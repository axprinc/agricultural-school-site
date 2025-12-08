'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import MainFooter from '@/components/MainFooter'

export default function TermsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const desktopLinkClass =
    'text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors'
  const mobileLinkClass =
    'text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors'

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
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045 .301-.24 1.186 1.049 .645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
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
                  <path d="M19.365 9.863c.349 0 .63.285 .63 .631 0 .345-.281 .63-.63 .63H17.61v1.125h1.755c.349 0 .63 .283 .63 .63 0 .344-.281 .629-.63 .629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345 .282-.63 .63-.63h2.386c.346 0 .627 .285 .627 .63 0 .349-.281 .63-.63 .63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174 .51-.432 .596-.064 .021-.133 .031-.199 .031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279 .629-.631 .629-.346 0-.626-.285-.626-.629V8.108c0-.27 .173-.51 .43-.595 .06-.023 .136-.033 .194-.033 .195 0 .375 .104 .495 .254l2.462 3.33V8.108c0-.345 .282-.63 .63-.63 .345 0 .63 .285 .63 .63v4.771zm-5.741 0c0 .344-.282 .629-.631 .629-.345 0-.627-.285-.627-.629V8.108c0-.345 .282-.63 .63-.63 .346 0 .628 .285 .628 .63v4.771zm-2.466 .629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345 .285-.63 .63-.63 .348 0 .63 .285 .63 .63v4.141h1.756c.348 0 .629 .283 .629 .63 0 .344-.282 .629-.629 .629M24 10.314C24 4.943 18.615 .572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608 .391 .082 .923 .258 1.058 .59 .12 .301 .079 .766 .038 1.08l-.164 1.02c-.045 .301-.24 1.186 1.049 .645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
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
              利用規約
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              2025年12月改定
            </p>
          </div>

          {/* コンテンツカード */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-farm-green-100 p-8 md:p-12">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">第１条（本規約について）</h2>
                <p className="mb-4">
                  本規約（以下「本規約」といいます。）は、「優しい家庭菜園の学校」（以下「本サービス」といいます。）の利用に関して、基本的事項および会員が遵守すべき内容を定めるものです。会員は、本規約に同意のうえ、本サービスを利用するものとします。
                </p>
                <p className="mb-4">
                  本サービスは、株式会社グリーンハーベスト（以下「運営事務局」といいます。）が運営・管理を行います。会員は、本サービスの利用に際して、随時提供される情報や注意事項を確認する責任を負います。サービス利用をもって、本規約に同意したものとみなされます。
                </p>
                <p>
                  未成年者が本サービスを利用する場合、保護者その他の法定代理人の同意を得る必要があります。
                </p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">第２条（個別規約）</h2>
                <p>
                  運営事務局が定めるガイドライン、ポリシー等の個別規定（以下「個別規約」といいます。）も、本規約と一体として適用されます。個別規約と本規約が矛盾する場合、個別規約が優先します。
                </p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">第３条（本規約の変更）</h2>
                <p>
                  運営事務局は、必要に応じて本規約を事前通知なしに変更できるものとします。変更後の規約は、本サービス上に表示された時点から効力を持ち、以降の利用によって会員は同意したものとみなされます。
                </p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">第４条（申込みと承認）</h2>
                <p className="mb-4">
                  利用希望者は、本規約に同意のうえ所定の方法で申込みを行い、運営事務局が承認した時点で会員となります。以下のような場合には、運営事務局は申込みを拒否または取消すことがあります：
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>虚偽の登録情報</li>
                  <li>過去に規約違反による利用停止歴がある</li>
                  <li>反社会的勢力との関係</li>
                  <li>その他不適切と判断される場合</li>
                </ul>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">第５条（利用権）</h2>
                <p>
                  本サービスの利用権は一身専属的であり、第三者との共有・譲渡・相続はできません。
                </p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">第６条（本サービスの内容）</h2>
                <p className="mb-4">
                  本サービスは、農業に関する講座、体験活動、動画教材、オンライン配信、質疑応答、コミュニティフォーラム等を含む教育型サービスです。
                </p>
                <p className="mb-4">
                  会員は、自己の責任と費用で必要な機材・通信環境を整備し、安全性（セキュリティ等）を確保する義務があります。サービスの内容は変更される場合があり、運営事務局はその完全性や特定目的適合性等を保証しません。
                </p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">第７条（料金）</h2>
                <p>
                  本サービスは月額制の有料サービスです。支払いは自動更新され、日割計算による返金は行いません。更新停止を希望する場合は、所定の退会手続きを行う必要があります。料金は事前告知により改定される場合があります。
                </p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">第８条（他社サービスとの連携）</h2>
                <p>
                  本サービスには他事業者のコンテンツが含まれることがあり、その責任は当該事業者に帰属します。利用には該当事業者の規約が適用されます。
                </p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">第９条（コンテンツの利用）</h2>
                <p className="mb-4">
                  提供される教材・動画等のコンテンツは非独占的利用権として会員に許諾されるものであり、著作権その他の権利は運営事務局または原権利者に帰属します。
                </p>
                <p>
                  会員が投稿・送信したコンテンツのバックアップは自己責任とし、運営事務局はその保存責任を負いません。一般公開された投稿については、運営事務局がプロモーション目的で利用できるものとします。
                </p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">第10条（退会）</h2>
                <p>
                  会員は所定の手続きにより、いつでも退会可能です。退会後は、利用中のコンテンツ含め本サービスのすべての機能にアクセスできなくなり、利用料金の返金も行いません。
                </p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">第11条（個人情報の取扱い）</h2>
                <p>
                  会員の個人情報は、別途定めるプライバシーポリシーに従って適切に管理されます。
                </p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">第12条（禁止事項）</h2>
                <p className="mb-4">会員は以下の行為をしてはなりません：</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>本サービスの無断転載・開示</li>
                  <li>商業的勧誘、宗教活動</li>
                  <li>誹謗中傷、違法・不適切な投稿</li>
                  <li>他会員や第三者になりすます行為</li>
                  <li>本サービスの運営妨害</li>
                  <li>知的財産権等の侵害</li>
                </ul>
                <p>
                  違反があった場合、運営事務局は投稿削除・利用停止・強制退会などの措置を講じることができます。
                </p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">第13条（免責）</h2>
                <p>
                  自然災害や通信障害等に起因するサービス停止やデータ損失について、運営事務局は故意・重過失がない限り責任を負いません。賠償責任が生じる場合でも、損害賠償の上限は1万円とします。
                </p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">第14条（運営事務局からの連絡）</h2>
                <p>
                  運営事務局は、登録されたメールアドレスやSNSを通じて会員に連絡を行います。登録情報に変更がある場合は速やかに修正してください。
                </p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">第15条（規約の一部無効）</h2>
                <p>
                  規約の一部が法的に無効とされても、他の条項は有効です。
                </p>
              </div>

              <div className="pb-6">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">第16条（準拠法および管轄）</h2>
                <p>
                  本規約は日本法に基づき、紛争が生じた場合は神戸地方裁判所を第一審の専属的合意管轄裁判所とします。
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