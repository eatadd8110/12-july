'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type MediaView = 'clinical' | 'imaging' | 'autonomy'

const services = [
  {
    title: 'AI 課堂教學中心',
    subtitle: 'EdTech',
    description:
      '以生成式 AI 與智慧學習流程，重構課堂互動、教學評估與個人化學習路徑。',
  },
  {
    title: 'Agentic AI & Cybersecurity',
    subtitle: 'Agentic AI',
    description:
      '打造安全、可追溯、可治理的 AI Agent 系統，提供企業級資安與自主決策能力。',
  },
  {
    title: 'AI 醫療與生命健康科技',
    subtitle: 'INCU-BIO',
    description:
      '融合醫療數據、智能診斷與生命科學技術，推進精準醫療與健康管理平台。',
  },
  {
    title: '創新 AI 航拍技術',
    subtitle: 'Spatial Intelligence',
    description:
      '結合 AI 視覺與空拍數據，提供高精度環境分析與場景感知能力。',
  },
]

const mediaViews: Array<{
  key: MediaView
  label: string
  title: string
  copy: string
  type: 'video' | 'image'
  src: string
  poster?: string
}> = [
  {
    key: 'clinical',
    label: 'Clinical Intelligence',
    title: '從病歷與生命數據中提取關鍵信號',
    copy: '讓每一步診斷都更清晰、更可追溯。',
    type: 'video',
    src: 'https://cdn.coverr.co/videos/coverr-abstract-tech-1564138199859/1080p.mp4',
    poster: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1400&q=80',
  },
  {
    key: 'imaging',
    label: 'Medical Imaging',
    title: '高精度影像與 AI 視覺辨識',
    copy: '提升早期篩查與醫療影像的判讀效率。',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80',
  },
  {
    key: 'autonomy',
    label: 'Autonomous Health',
    title: '自動化健康管理與風險預測',
    copy: '把複雜的健康監測轉成清楚、可執行的下一步。',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=80',
  },
]

export default function HomePage() {
  const [activeView, setActiveView] = useState<MediaView>('clinical')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: 'power3.out',
      })

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 36,
        duration: 1,
        delay: 0.12,
        ease: 'power3.out',
      })

      gsap.from('.hero-cta', {
        opacity: 0,
        y: 24,
        duration: 0.95,
        delay: 0.24,
        ease: 'power3.out',
      })

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
            },
          }
        )
      })
    })

    const handleScroll = () => {
      const y = window.scrollY
      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((layer, index) => {
        const speed = 0.04 + index * 0.03
        layer.style.transform = `translate3d(0, ${y * speed}px, 0)`
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const activeMedia = mediaViews.find((view) => view.key === activeView) ?? mediaViews[0]

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#02050f] text-white">
      <section className="relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_80%_15%,_rgba(96,165,250,0.16),_transparent_30%),linear-gradient(135deg,_rgba(2,5,15,0.95),_rgba(2,6,23,0.82))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:70px_70px]" />
        <div className="absolute left-[7%] top-[16%] h-20 w-20 rounded-full border border-cyan-400/20 bg-cyan-400/10 blur-3xl" data-parallax />
        <div className="absolute right-[10%] top-[18%] h-36 w-36 rounded-full border border-sky-400/20 bg-sky-400/10 blur-3xl" data-parallax />
        <div className="absolute bottom-[16%] left-[14%] h-28 w-28 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 blur-3xl" data-parallax />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-6 lg:px-10">
          <header className="flex items-center justify-between">
            <div className="group relative isolate overflow-hidden rounded-full border border-cyan-200/30 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_36%),linear-gradient(135deg,rgba(10,14,24,0.98),rgba(4,10,24,0.96),rgba(8,15,28,0.98))] px-5 py-2.5 text-base font-black uppercase tracking-[0.46em] text-slate-100 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_22px_rgba(34,211,238,0.22),0_0_48px_rgba(56,189,248,0.16)] backdrop-blur md:px-6 md:py-3 md:text-xl">
              <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.25),_transparent_25%),radial-gradient(circle_at_80%_80%,_rgba(34,211,238,0.18),_transparent_30%)]" />
              <span className="absolute inset-0 rounded-full border border-cyan-200/30" />
              <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
              <span className="pointer-events-none absolute inset-0 opacity-90">
                <span className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-100/45 to-transparent animate-[pulse_4.5s_ease-in-out_infinite]" />
                <span className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-300/40 to-transparent animate-[pulse_4.5s_ease-in-out_infinite_2s]" />
                <span className="absolute inset-x-0 top-1/2 h-[1px] -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-100/22 to-transparent animate-[pulse_4.5s_ease-in-out_infinite]" />
                <span className="absolute left-[-12%] top-0 h-full w-[18%] -rotate-12 bg-gradient-to-r from-transparent via-cyan-200/24 to-transparent blur-2xl transition-all duration-700 group-hover:left-[110%]" />
                <span className="absolute inset-0 rounded-full shadow-[inset_0_0_24px_rgba(34,211,238,0.12)]" />
              </span>
              <span className="relative ml-2 inline-flex items-center gap-2.5">
                <span className="relative flex h-2.8 w-2.8 items-center justify-center rounded-full border border-cyan-100/80 bg-white shadow-[0_0_10px_rgba(255,255,255,0.35),0_0_18px_rgba(34,211,238,0.32)]">
                  <span className="absolute inset-[1px] rounded-full border border-cyan-300/25" />
                  <span className="h-1.1 w-1.1 rounded-full bg-cyan-200/95 animate-[ping_4.8s_cubic-bezier(0,0,0.2,1)_infinite]" />
                </span>
                <span className="tracking-[0.34em] text-[0.96rem] text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.16)] sm:text-[1rem]">Billion InnoTech</span>
              </span>
            </div>
            <nav className="hidden gap-7 text-sm text-slate-300 md:flex">
              <a href="#showcase" className="transition hover:text-white">Showcase</a>
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </nav>
          </header>

          <div className="flex flex-1 flex-col justify-center py-16 lg:py-24">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-cyan-300">
              AI Healthcare • Deep Tech • Intelligent Systems
            </p>
            <h1 className="hero-title max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Designing AI
              <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-white to-slate-400 bg-clip-text text-transparent">
                future of intelligent medicine.
              </span>
            </h1>
            <p className="hero-subtitle mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Billion InnoTech 將 AI、醫療科技與安全架構融合，打造兼具品牌感與技術深度的未來健康平台。
            </p>
            <div className="hero-cta mt-10 flex flex-wrap gap-4">
              <a href="#showcase" className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                Explore the Vision
              </a>
              <a href="#contact" className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/30">
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="showcase" className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
        <div data-reveal className="rounded-[2.2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Showcase</p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                高端影片與大型圖片切換，打造更像科技品牌宣傳頁的體驗。
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {mediaViews.map((view) => (
                <button
                  key={view.key}
                  onClick={() => setActiveView(view.key)}
                  className={`rounded-full px-4 py-2 text-sm ${activeView === view.key ? 'bg-cyan-400/20 text-cyan-100' : 'bg-white/5 text-slate-300'}`}
                >
                  {view.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.8rem] border border-white/10 bg-[#08101f]/80 p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">{activeMedia.label}</p>
              <h3 className="mt-4 text-3xl font-semibold">{activeMedia.title}</h3>
              <p className="mt-5 text-lg leading-8 text-slate-300">{activeMedia.copy}</p>
              <div className="mt-8 rounded-[1.4rem] border border-cyan-400/20 bg-cyan-400/10 p-5 text-sm text-cyan-100">
                以極簡的內容節奏與強烈的視覺層次，讓品牌訊息更有產品頁的沉浸感。
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/40">
              {activeMedia.type === 'video' ? (
                <video autoPlay muted loop playsInline className="h-full w-full object-cover" poster={activeMedia.poster}>
                  <source src={activeMedia.src} type="video/mp4" />
                </video>
              ) : (
                <img src={activeMedia.src} alt={activeMedia.title} className="h-full w-full object-cover" />
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(2,5,15,0.2)_60%,rgba(2,5,15,0.8)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Billion InnoTech</p>
                <p className="mt-2 text-xl font-semibold text-white">{activeMedia.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
        <div data-reveal className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Services</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            以清晰的服務架構，讓每一個創新方向都更容易被理解。
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} data-reveal className="rounded-[1.7rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">{service.subtitle}</p>
              <h3 className="mt-3 text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div data-reveal className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 text-center backdrop-blur lg:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            把品牌故事、產品體驗與技術深度，全部落在同一個頁面上。
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            如果你想要更極簡、更像 Apple 的產品頁，或是更像高端科技品牌的長頁宣傳頁，這個版本都可以繼續往下精緻化。
          </p>
          <a href="mailto:hello@billioninnotech.com" className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
            hello@billioninnotech.com
          </a>
        </div>
      </section>
    </main>
  )
}
