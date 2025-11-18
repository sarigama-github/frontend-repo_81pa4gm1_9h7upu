import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(168,85,247,0.25),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-24 pb-10 md:pt-28 md:pb-12">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Live — PintuClub v1.3
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              PintuClub AI Web Template
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              एक आधुनिक, mindful और AI‑powered वेब डिज़ाइन टेम्पलेट — खास तौर पर AI चैटबॉट्स, automation platforms, coaching tools, wellbeing apps और growth‑focused SaaS के लिए।
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#highlights" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow/50 shadow-black/20 hover:shadow-black/30 hover:translate-y-[-1px] transition">
                Explore Highlights
              </a>
              <a href="#summary" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/15 transition">
                Overview
              </a>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-amber-500/10 overflow-hidden">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
            </div>
            <p className="mt-3 text-xs text-slate-400 text-center">AI voice agent aura — custom Spline animation</p>
          </div>
        </div>
      </div>
    </section>
  )
}
