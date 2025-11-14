import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black to-transparent opacity-[0.03]" />
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs text-black/60">
              <Sparkles size={14} /> Full-service product studio
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight leading-tight">
              We design, build, and launch world‑class websites & apps
            </h1>
            <p className="mt-6 text-lg text-black/60 max-w-prose">
              Strategy, design, engineering and growth in one integrated team. We ship fast, sweat details, and obsess over outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full hover:bg-black/90">
                Start a project <ArrowRight size={18} />
              </a>
              <a href="#work" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 hover:border-black/20">
                See our work
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-black/60">
              <div>
                <div className="text-2xl font-semibold text-black">120+</div>
                Products shipped
              </div>
              <div>
                <div className="text-2xl font-semibold text-black">$500M</div>
                Client value created
              </div>
              <div>
                <div className="text-2xl font-semibold text-black">8.9/10</div>
                NPS from founders
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-black/10 bg-white shadow-sm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1664262283608-05edf08055be?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTaG93Y2FzZXxlbnwwfDB8fHwxNzYzMTQ3MzgxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="h-full w-full object-cover" alt="Showcase" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-sm">
                <div className="text-xs text-black/60">Recent launch</div>
                <div className="font-medium">AI Commerce Platform</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
