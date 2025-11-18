import React from 'react'
import { Check, Layers, Smartphone, Rocket, Shield, Palette } from 'lucide-react'

const items = [
  { icon: Check, title: '17 Premium Pages', desc: 'Ready-to-ship pages with mindful UX patterns.' },
  { icon: Layers, title: '80+ Sections', desc: 'Composable blocks with clean autolayout.' },
  { icon: Palette, title: 'Design System', desc: 'Unified tokens, spacing, and typography.' },
  { icon: Rocket, title: '3D Renders', desc: 'Futuristic visuals for AI-first brands.' },
  { icon: Smartphone, title: 'Mobile First', desc: 'Fully responsive, fast and accessible.' },
  { icon: Shield, title: 'Lifetime Updates', desc: 'New pages, icons and refinements.' },
]

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-16 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Product Highlights</h2>
          <p className="mt-2 text-slate-300">Everything you need to launch an AI-savvy brand experience.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 hover:bg-white/7 transition">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-xl bg-gradient-to-br from-violet-500/20 to-amber-400/20 p-2 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{title}</h3>
                  <p className="text-slate-300/90 text-sm mt-1">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
