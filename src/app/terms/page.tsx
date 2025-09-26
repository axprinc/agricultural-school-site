import React from 'react'
import Link from 'next/link'

export default function TermsPage() {
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
      <nav className="bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50 border-b border-farm-green-200">
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
                <Link href="/home-garden" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">家庭菜園</Link>
                <Link href="/faq" className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">よくあるご質問</Link>
              </div>
            </div>
          </div>
        </div>
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
              2025年6月改定
            </p>
          </div>

          {/* コンテンツカード */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-farm-green-100 p-8 md:p-12">
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">第１条（本規約について）</h2>
                <p className="mb-4">
                  本規約（以下「本規約」といいます。）は、「株式会社グリーンハーベスト農業スクール」（以下「本サービス」といいます。）の利用に関して、基本的事項および会員が遵守すべき内容を定めるものです。会員は、本規約に同意のうえ、本サービスを利用するものとします。
                </p>
                <p className="mb-4">
                  本サービスは、<strong>株式会社グリーンハーベスト（以下「運営事務局」といいます。）</strong>が運営・管理を行います。会員は、本サービスの利用に際して、随時提供される情報や注意事項を確認する責任を負います。サービス利用をもって、本規約に同意したものとみなされます。
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
                  本サービスは、農業に関する講座、体験活動、動画教材、オンライン配信、質疑応答、コミュニティフォーラム等を含む教育型サービスです。利用には、運営事務局が指定するプラットフォーム（例：「FANTS」等）を使用します。
                </p>
                <p className="mb-4">
                  会員は、自己の責任と費用で必要な機材・通信環境を整備し、安全性（セキュリティ等）を確保する義務があります。サービスの内容は変更される場合があり、運営事務局はその完全性や特定目的適合性等を保証しません。
                </p>
              </div>

              <div className="border-b border-farm-green-200 pb-6">
                <h2 className="text-2xl font-bold text-farm-green-800 mb-4">第７条（料金）</h2>
                <p>
                  本サービスは月額または年額制の有料サービスです。支払いは自動更新され、日割計算による返金は行いません。更新停止を希望する場合は、所定の退会手続きを行う必要があります。料金は事前告知により改定される場合があります。
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
    </div>
  )
} 