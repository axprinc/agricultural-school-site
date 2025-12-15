'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function SubPageHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const desktopLinkClass =
    'text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors'
  const mobileLinkClass =
    'text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors'

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <svg className="w-8 h-8 mr-3 text-farm-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z" />
            </svg>
            <Link href="/" className="text-xl font-bold text-farm-green-800 font-elegant">
              優しい家庭菜園の学校
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/#home" className={desktopLinkClass}>
                ホーム
              </Link>
              <Link href="/#programs" className={desktopLinkClass}>
                入会特典
              </Link>
              <Link href="/#offer" className={desktopLinkClass}>
                料金・お申し込み
              </Link>
              <Link href="/#gallery" className={desktopLinkClass}>
                ギャラリー
              </Link>
              <Link href="/#access" className={desktopLinkClass}>
                アクセス
              </Link>
              <Link href="/faq" className={desktopLinkClass}>
                よくあるご質問
              </Link>
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
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINE相談
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}






