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
            {/* QRコード */}
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6">
              <div className="w-64 h-64 mx-auto bg-white rounded-lg shadow-inner flex items-center justify-center">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=https%3A%2F%2Fline.me%2FR%2Fti%2Fp%2F%40650hmqnu"
                  alt="LINE相談用QRコード"
                  className="w-56 h-56 object-contain"
                />
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

            {/* QRコードが読み取れない場合の案内 */}
            <div className="space-y-2">
              <p className="text-xs text-gray-500">
                QRコードが読み取れない場合は、以下のURLをブラウザにコピーして開いてください。
              </p>
              <p className="text-xs text-green-700 break-all underline">
                https://line.me/R/ti/p/@650hmqnu
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
