import React from 'react'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Changelog from './components/Changelog'
import Summary from './components/Summary'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background aura */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.15),transparent_60%)]" />

      {/* Header */}
      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="PintuClub" className="h-8 w-8" />
            <span className="font-semibold tracking-tight">PintuClub</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#highlights" className="hover:text-white transition">Highlights</a>
            <a href="#summary" className="hover:text-white transition">Summary</a>
            <a href="/test" className="hover:text-white transition">System Test</a>
          </nav>
        </div>
      </header>

      {/* Main sections */}
      <main className="relative z-10">
        <Hero />
        <Highlights />
        <Changelog />
        <Summary />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} PintuClub — Modern, mindful and AI‑powered web template.</p>
          <div className="flex items-center gap-3 text-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-400">Mobile‑first • Fully responsive • Urbanist</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
