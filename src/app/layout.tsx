import type { Metadata } from 'next'
import React from 'react'
import { Inter, Noto_Sans_JP, Playfair_Display } from 'next/font/google'
import './globals.css'

// Google Fonts設定
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
})

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap"
})

export const metadata: Metadata = {
  title: '優しい家庭菜園の学校 | 小さなスペースで大きな収穫を',
  description: '1畳のスペースで家族4人分の野菜を育てる新しい家庭菜園の学校。狭小スペース集約栽培法で、誰でも簡単に野菜作りが始められます。',
  keywords: '家庭菜園, ベランダ菜園, 野菜作り, 狭小スペース栽培, プランター栽培, 自家製野菜',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${notoSansJP.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
} 