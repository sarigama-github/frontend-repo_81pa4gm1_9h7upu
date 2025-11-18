import React from 'react'

const bullets = [
  '17 Pages',
  '80+ Unique Sections',
  'PintuClub Design System',
  'PintuClub Icon Pack',
  'Custom 3D Renders',
  'Clean Autolayout',
  'Lifetime Support & Updates'
]

export default function Summary(){
  return (
    <section id="summary" className="relative py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 sm:p-8">
          <h3 className="text-white text-xl font-semibold">Highlights Summary</h3>
          <div className="mt-5 grid sm:grid-cols-2 gap-3">
            {bullets.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="text-slate-300">{b}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-slate-400 text-sm">File format: Figma (with Urbanist font included under Google Font license)</p>
        </div>
      </div>
    </section>
  )
}
