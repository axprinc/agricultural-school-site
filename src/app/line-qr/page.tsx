'use client'

import Link from 'next/link'

export default function LineQRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-farm-green-50 to-farm-green-100">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-farm-green-800">
              優しい家庭菜園の学校
            </Link>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-farm-green-800 mb-4">
            LINE相談はこちら
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            QRコードを読み取って、お気軽にご相談ください
          </p>
        </div>

        {/* QRコードセクション */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="max-w-md mx-auto">
            {/* QRコードプレースホルダー */}
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6">
              <div className="w-64 h-64 mx-auto bg-white rounded-lg shadow-inner flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h2M4 8h4m4 0V4m0 0h.01M12 4h4.01M12 20v-4M8 20H4m0 0V4" />
                  </svg>
                  <p className="text-sm">LINEのQRコード</p>
                  <p className="text-xs text-gray-400 mt-1">（実際のQRコードに置き換えてください）</p>
                </div>
              </div>
            </div>

            {/* 説明テキスト */}
            <div className="space-y-4 mb-8">
              <p className="text-gray-700">
                上のQRコードをスマートフォンのカメラまたはLINEアプリで読み取ってください。
              </p>
              <p className="text-sm text-gray-600">
                ご質問やご相談など、どんなことでもお気軽にお声かけください。<br />
                専門スタッフが丁寧にお答えいたします。
              </p>
            </div>

            {/* 直接リンクボタン */}
            <div className="space-y-4">
              <a
                href="https://lin.ee/gShmItl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                LINEで相談する
              </a>
              
              <p className="text-xs text-gray-500">
                QRコードが読み取れない場合は、上のボタンをクリックしてください
              </p>
            </div>
          </div>
        </div>

        {/* ホームに戻るボタン */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-farm-green-300 text-farm-green-700 font-medium rounded-lg hover:bg-farm-green-50 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
