import React from 'react'

const logs = [
  { v: 'v1.3', note: '+1 Page (AI Companion), Improved Components, Color & Accessibility Fixes' },
  { v: 'v1.2', note: '+2 Pages (Sign In & Sign Up), New Variants, +60 UI Icons Added' },
  { v: 'v1.1', note: '+2 Pages (Privacy & 404), Design System Update, Typography Refinement' },
  { v: 'v1.0', note: 'Initial PintuClub Web Template Release' },
]

export default function Changelog() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-white text-xl font-semibold">Changelogs</h3>
            <span className="text-slate-400 text-sm">PintuClub Updates</span>
          </div>
          <div className="mt-6 space-y-4">
            {logs.map(({ v, note }) => (
              <div key={v} className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-amber-400" />
                <p className="text-slate-300"><span className="text-white font-medium mr-2">{v}</span>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
