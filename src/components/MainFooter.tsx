'use client'

import React from 'react'
import Link from 'next/link'

export default function MainFooter() {
  return (
    <footer className="main-footer relative bg-farm-green-900 text-white pt-16 md:pt-20 pb-12">
      {/* 上の波（前セクション） */}
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
                <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z" />
              </svg>
              優しい家庭菜園の学校
            </h3>
            <p className="text-gray-300">
              安全・安心なお野菜をベランダや小さなお庭から作れるスクールです。
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-harvest-orange-300">リンク</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/#home" className="hover:text-harvest-orange-300 transition-colors duration-200">
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link href="/#programs" className="hover:text-harvest-orange-300 transition-colors duration-200">
                    入会特典
                  </Link>
                </li>
                <li>
                  <Link href="/#offer" className="hover:text-harvest-orange-300 transition-colors duration-200">
                    料金・お申し込み
                  </Link>
                </li>
                <li>
                  <Link href="/#gallery" className="hover:text-harvest-orange-300 transition-colors duration-200">
                    ギャラリー
                  </Link>
                </li>
                <li>
                  <Link href="/#access" className="hover:text-harvest-orange-300 transition-colors duration-200">
                    アクセス
                  </Link>
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
                <svg
                  className="w-4 h-4 mr-2 mt-1 text-harvest-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
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
  )
}






