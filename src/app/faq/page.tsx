"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import Image from 'next/image'

export default function FAQ() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setScrollProgress(Math.min(Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100), 100))
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const faqs = [
    {
      question: "初心者でも大丈夫ですか？",
      answer: "はい、もちろんです！当スクールは初心者の方でも安心して始められるよう、基礎から丁寧に指導いたします。必要な道具や知識は全てスクールで提供・説明いたしますので、ご安心ください。"
    },
    {
      question: "小さなベランダでも野菜は育てられますか？",
      answer: "はい、可能です！ベランダ菜園に適した野菜やハーブの育て方を詳しくご指導いたします。限られたスペースでも効率的に収穫できる方法や、コンテナ栽培のコツなども学べます。"
    },
    {
      question: "必要な道具は全て揃っていますか？",
      answer: "基本的な道具（シャベル、じょうろ、手袋など）はスクールで用意しております。ご自宅で栽培を始める際に必要な道具の選び方や、おすすめの道具についても詳しくご説明いたします。"
    },
    {
      question: "季節によって育てられる野菜は変わりますか？",
      answer: "はい、野菜にはそれぞれ適した栽培時期があります。当スクールでは、季節ごとの栽培カレンダーに基づいて、その時期に最適な野菜の育て方をご指導いたします。春夏秋冬、それぞれの季節で楽しめる野菜栽培を学べます。"
    },
    {
      question: "スクールの開催時間は？",
      answer: "基本的な開催時間は平日10:00-16:00、土日祝日9:00-17:00となっております。また、季節や天候に応じて、早朝や夕方の特別クラスも開催しております。詳細なスケジュールはお問い合わせください。"
    },
    {
      question: "駐車場はありますか？",
      answer: "はい、スクール敷地内に無料駐車場を完備しております。お車でのご来校も可能です。駐車場のご利用方法については、お申し込み時にご案内いたします。"
    },
    {
      question: "家族で参加できますか？",
      answer: "はい、家族でのご参加を大歓迎いたします！お子様連れの方も安心してご参加いただけるよう、キッズスペースも用意しております。家族で一緒に野菜づくりを楽しみながら学べます。"
    },
    {
      question: "雨天の場合はどうなりますか？",
      answer: "雨天の場合は、屋内の実習スペースで栽培の基礎知識や技術を学んでいただきます。また、天候に左右されない栽培方法（水耕栽培など）についても学べる機会となります。"
    }
  ]

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-farm-green-50 to-white">
      {/* スクロール進捗バー */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-farm-green-500 to-harvest-orange-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* ヘッダー */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* ロゴ */}
            <div className="flex-shrink-0 flex items-center">
              <svg className="w-8 h-8 mr-3 text-farm-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.5 8.5L20 7L14.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9.5 12L4 7L10.5 8.5L12 2Z"/>
              </svg>
              <h1 className="text-xl font-bold text-farm-green-800 font-elegant">優しい家庭菜園の学校</h1>
            </div>

            {/* デスクトップナビゲーション */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  TOP
                </Link>
                <Link
                  href="/gardening"
                  className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  家庭菜園コース
                </Link>
                <Link
                  href="/faq"
                  className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  よくある質問
                </Link>
                <Link
                  href="/contact"
                  className="text-farm-green-700 hover:text-farm-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>

            {/* モバイルメニューボタン */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg focus:outline-none"
              aria-label="メニュー"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-farm-green-800 transition-all duration-300 ${
                  isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''
                }`} />
                <span className={`w-full h-0.5 bg-farm-green-800 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`w-full h-0.5 bg-farm-green-800 transition-all duration-300 ${
                  isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-lg">
              <Link
                href="/"
                className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                TOP
              </Link>
              <Link
                href="/gardening"
                className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                家庭菜園コース
              </Link>
              <Link
                href="/faq"
                className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                よくある質問
              </Link>
              <Link
                href="/contact"
                className="text-farm-green-700 hover:text-farm-green-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-farm-green-900 mb-4 font-elegant">よくあるご質問</h1>
          <p className="text-lg text-gray-600">家庭菜園スクールについて、よくいただくご質問と回答をご紹介いたします。</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={false}
              animate={{ height: "auto" }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-farm-green-500 focus:ring-opacity-50"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-farm-green-900">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <FaChevronUp className="text-farm-green-600" />
                  ) : (
                    <FaChevronDown className="text-farm-green-600" />
                  )}
                </div>
              </button>
              {expandedFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">その他のご質問がございましたら、お気軽にお問い合わせください。</p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-farm-green-600 hover:bg-farm-green-700 transition-colors duration-200"
          >
            お問い合わせはこちら
          </a>
        </div>
      </main>

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
                <li><a href="/" className="hover:text-harvest-orange-300 transition-colors duration-200">ホーム</a></li>
                <li><a href="/home-garden" className="hover:text-harvest-orange-300 transition-colors duration-200">家庭菜園講座</a></li>
                <li><a href="/contact" className="hover:text-harvest-orange-300 transition-colors duration-200">お問い合わせ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-harvest-orange-300">お問い合わせ</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  03-XXXX-XXXX
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@example.com
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 優しい家庭菜園の学校. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 