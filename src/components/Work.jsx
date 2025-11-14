export default function Work() {
  const projects = [
    {
      title: 'Fintech OS',
      desc: 'Design system + web app for modern banking',
      img: 'https://images.unsplash.com/photo-1551281044-8d8c9b8d43d8?q=80&w=1600&auto=format&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind', 'FastAPI']
    },
    {
      title: 'E‑commerce 2.0',
      desc: 'Headless storefront with real‑time personalization',
      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop',
      tags: ['Next.js', 'Node', 'Postgres', 'Edge']
    },
    {
      title: 'Healthcare AI',
      desc: 'HIPAA‑ready clinician assistant for triage',
      img: 'https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1600&auto=format&fit=crop',
      tags: ['Python', 'OpenAI', 'MongoDB', 'Azure']
    }
  ]

  return (
    <section id="work" className="py-24 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl font-semibold tracking-tight">Selected work</h2>
          <a href="#contact" className="text-sm underline underline-offset-4">Start a project</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden border border-black/10 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-medium">{p.title}</h3>
                <p className="text-sm text-black/60 mt-1">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-black/5">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
