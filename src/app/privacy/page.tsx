'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import MainFooter from '@/components/MainFooter'

export default function PrivacyPage() {
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
              プライバシーポリシー
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              お客様の個人情報保護について
            </p>
          </div>

          {/* コンテンツカード */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-farm-green-100 p-8 md:p-12">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p>
                本プライバシーポリシー（以下「本ポリシー」といいます）は、<strong>株式会社グリーンハーベスト</strong>（以下「当社」といいます）が提供する農業スクール関連サービスおよびナチュラル・ピュア ライフスタイル・ウォーターをはじめとする化粧品の通信販売（以下、これらを総称して「本サービス」といいます）における、お客様の個人情報の取扱い指針を定めるものです。
              </p>

              <div className="border-t border-farm-green-200 pt-8">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">1. 基本方針</h2>
                <p>
                  当社は、個人情報の重要性を認識し、個人情報保護法その他の関連法令・ガイドラインを遵守します。当社が取得した個人情報は、本ポリシーに定める利用目的の範囲内で適切に取り扱い、安全かつ最新の状態で管理します。
                </p>
              </div>

              <div className="border-t border-farm-green-200 pt-8">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">2. 個人情報の取得と利用目的</h2>
                
                <h3 className="text-xl font-semibold text-farm-green-700 mb-3">(1) 取得方法と取得する情報</h3>
                <p className="mb-3">
                  当社は、利用登録・資料請求・お問い合わせ・イベント申込・商品購入・SNS 連携等の適法かつ公正な手段により、必要最小限の個人情報を取得します。
                </p>
                <p className="mb-2">主な取得情報は以下のとおりです。</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li>氏名、住所、電話番号、メールアドレス等の連絡先情報</li>
                  <li>クレジットカード情報等の決済関連情報（外部決済サービスを経由して取得）</li>
                  <li>商品の配送先住所・配送希望情報</li>
                  <li>商品の購入履歴・利用履歴</li>
                  <li>お問い合わせ・ご相談の内容</li>
                  <li>Cookie・アクセスログ・端末識別情報等</li>
                </ul>

                <h3 className="text-xl font-semibold text-farm-green-700 mb-3 mt-6">(2) 利用目的</h3>
                <p className="mb-4">取得した個人情報は、以下の目的で利用します。</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>本サービスの登録手続き、本人確認、講座・コミュニティの提供</li>
                  <li>お問い合わせ対応、サポート連絡</li>
                  <li>受講料・年会費・商品代金等の決済・請求・領収書発行</li>
                  <li>オンライン講座・教材・コミュニティ運営の改善・向上</li>
                  <li>農業体験ツアー・オフ会等イベント案内、キャンペーン情報提供</li>
                  <li>化粧品その他商品のご注文処理、配送手配、配送状況のご連絡</li>
                  <li>購入履歴の管理および関連商品・サービスのご案内</li>
                  <li>商品の品質・安全に関するご連絡（成分・使用上の注意等）</li>
                  <li>返品・交換・不良品対応等のアフターサービス</li>
                  <li>マーケティングデータ分析（属性情報・行動履歴等）</li>
                  <li>不正利用・規約違反の調査および対応</li>
                  <li>契約・利用規約等に基づく権利行使・義務履行</li>
                  <li>採用応募者の選考および連絡</li>
                  <li>従業員の人事・労務管理、福利厚生の提供</li>
                </ol>

                <h3 className="text-xl font-semibold text-farm-green-700 mb-3 mt-6">(3) 利用制限</h3>
                <p>
                  法令で認められる場合を除き、ご本人の同意なく上記利用目的を超えて個人情報を取り扱いません。
                </p>
              </div>

              <div className="border-t border-farm-green-200 pt-8">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">3. 個人データの第三者提供</h2>
                <p className="mb-4">
                  当社は、次の場合を除き、ご本人の同意なく個人データを第三者に提供しません。
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>法令に基づく場合</li>
                  <li>人命・身体・財産の保護に必要で同意取得が困難な場合</li>
                  <li>公衆衛生の向上・児童の健全育成推進に特に必要で同意取得が困難な場合</li>
                  <li>国・地方公共団体等の法令事務協力で同意取得により支障を及ぼすおそれがある場合</li>
                  <li>利用目的達成に必要な範囲で業務を委託する場合</li>
                  <li>広告効果測定のため第三者提供が必要な場合（個人関連情報の取得を含む）</li>
                </ol>
              </div>

              <div className="border-t border-farm-green-200 pt-8">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">4. 安全管理措置</h2>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li><strong>情報の正確性確保</strong>：最新かつ正確な内容を保持</li>
                  <li><strong>技術的安全対策</strong>：SSL/TLS、アクセス制限、ウイルス対策等</li>
                  <li><strong>委託先管理</strong>：委託契約締結、監督・監査</li>
                  <li><strong>廃棄</strong>：不要となった個人情報は速やかかつ安全に廃棄</li>
                </ol>
              </div>

              <div className="border-t border-farm-green-200 pt-8">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">5. 個人関連情報の取扱い</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cookie、広告識別子、IP アドレス、閲覧履歴等の個人関連情報を取得する場合があります。</li>
                  <li>当社は、これらを個人データとして利用する場合、本ポリシーの利用目的に従って取り扱います。</li>
                </ul>
              </div>

              <div className="border-t border-farm-green-200 pt-8">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">6. Cookie 等の利用</h2>
                
                <h3 className="text-xl font-semibold text-farm-green-700 mb-3">(1) Cookie とは</h3>
                <p>
                  ウェブサイト利用履歴や入力内容をお客様の端末に保存する技術です。
                </p>

                <h3 className="text-xl font-semibold text-farm-green-700 mb-3 mt-6">(2) 利用目的</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>ウェブサイトの利便性向上</li>
                  <li>アクセス解析によるサービス改善</li>
                  <li>お客様の興味・関心に基づく最適なコンテンツ提供</li>
                </ul>

                <h3 className="text-xl font-semibold text-farm-green-700 mb-3 mt-6">(3) 拒否方法</h3>
                <p>
                  Cookie の無効化はブラウザ設定から可能ですが、当社サービスの一部機能がご利用いただけない場合があります。
                </p>
              </div>

              <div className="border-t border-farm-green-200 pt-8">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">7. 開示・訂正・利用停止等の請求</h2>
                <p>
                  当社が保有する個人データの開示等をご希望の場合は、下記窓口までご連絡ください。ご本人確認後、法令に基づき速やかに対応します。
                </p>
              </div>

              <div className="border-t border-farm-green-200 pt-8">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">8. お問い合わせ窓口</h2>
                <div className="bg-farm-green-50 p-6 rounded-lg border-l-4 border-farm-green-400 space-y-2">
                  <p className="font-semibold text-farm-green-800">優しい家庭菜園の学校</p>
                  <p>〒656-0021 兵庫県洲本市五色町鮎原小山田1065番地</p>
                  <p>メール：info@awaji-smilefarm.com</p>
                  <p>運営責任者：石川 貴子</p>
                </div>
              </div>

              <div className="border-t border-farm-green-200 pt-8">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">9. プライバシーポリシーの変更</h2>
                <p>
                  当社は本ポリシーを適宜見直し、改定します。改定後は当社ウェブサイト上に掲示した時点で効力を生じます。
                </p>
              </div>

              <div className="border-t border-farm-green-200 pt-8 text-center">
                <p className="text-lg font-semibold text-farm-green-800">以上</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <MainFooter />
    </div>
  )
}