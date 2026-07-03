'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>('.fade-up')

    gsap.from('.hero-title', {
      opacity: 0,
      y: 80,
      duration: 1.3,
      ease: 'power3.out',
    })

    gsap.from('.hero-subtitle', {
      opacity: 0,
      y: 50,
      duration: 1.2,
      delay: 0.2,
      ease: 'power3.out',
    })

    gsap.from('.hero-cta', {
      opacity: 0,
      y: 40,
      duration: 1,
      delay: 0.4,
      ease: 'power3.out',
    })

    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 80,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <main className="min-h-screen bg-bg text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_22%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_20%)]" />

        <section className="relative z-10 px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm uppercase tracking-[0.32em] text-sky-300">
              Billion InnoTech
            </span>

            <div className="mt-10 max-w-3xl">
              <h1 className="hero-title text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                AI 醫療科技，重新定義智慧健康。
              </h1>
              <p className="hero-subtitle mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                結合尖端人工智能與醫療診斷，打造可預測、可追蹤、可擴充的醫療數據平台，讓每一次治療都更準確、更安心。
              </p>

              <div className="hero-cta mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#solution"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  了解方案
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:border-slate-200"
                >
                  聯絡我們
                </a>
              </div>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-3">
              {[
                { label: '即時預測', value: '98.7%' },
                { label: '診斷加速', value: '2.3x' },
                { label: '資料安全', value: 'HIPAA Ready' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="fade-up rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                  <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" className="relative z-10 border-t border-white/10 px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300">高科技醫療</p>
                <h2 className="fade-up mt-6 text-4xl font-semibold tracking-tight text-white">
                  由 AI 解析每一道臨床訊號。
                </h2>
                <p className="fade-up mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  我地結合多維醫療數據、影像分析、以及實時監測，提供跨領域的智能決策支援。讓醫療人員專注判斷，而非忙於資料整理。
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: '智能病歷',
                    desc: '自動解析病患歷史與檢查結果，快速定位關鍵風險。',
                  },
                  {
                    title: '計算式診斷',
                    desc: '深度學習模型支援多種病種，速度與精準度兼備。',
                  },
                  {
                    title: '雲端協作',
                    desc: '安全加密醫療資料，跨團隊共享全程可追溯。',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="fade-up rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                  >
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-3 text-slate-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[2rem] border border-white/10 bg-surface/70 p-10 shadow-glass backdrop-blur-xl">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">產品亮點</p>
                  <h3 className="text-3xl font-semibold text-white">智慧監控與預防，打造下一代醫療體驗。</h3>
                  <p className="text-slate-300">
                    Billion InnoTech 的平台會自動偵測病情趨勢，並透過 AI 模型推送最適化治療方案，助力醫療團隊在重要時刻做出最精準判斷。
                  </p>
                </div>

                <div className="grid gap-5">
                  {['動態生命徵象分析', '跨院資料即時對接', '自動化風險提示系統'].map((item) => (
                    <div key={item} className="fade-up rounded-3xl bg-[#08101f] p-6 text-slate-200">
                      <p className="font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative z-10 border-t border-white/10 px-6 py-24 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">開始合作</p>
              <h3 className="mt-6 text-4xl font-semibold text-white">
                讓 Billion InnoTech 成為您醫療轉型的核心力量。
              </h3>
              <p className="mt-5 mx-auto max-w-2xl text-slate-300">
                一站式 AI 醫療解決方案，從檢測到診斷再到後續追蹤，全面提升醫療效率與品質。
              </p>
              <a
                href="mailto:hello@billioninnotech.com"
                className="mt-10 inline-flex rounded-full bg-sky-400 px-10 py-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              >
                聯絡 Billion InnoTech
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
