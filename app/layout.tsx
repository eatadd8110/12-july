import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Billion InnoTech',
  description: 'AI 醫療科技公司官網，深色高科技風，使用 Next.js 與 Tailwind CSS。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  )
}
