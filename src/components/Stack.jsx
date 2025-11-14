export default function Stack() {
  const stacks = [
    {
      title: 'Web',
      items: ['React', 'Next.js', 'Vite', 'Tailwind', 'Framer Motion']
    },
    {
      title: 'Backend',
      items: ['FastAPI', 'Node', 'Postgres', 'MongoDB', 'Redis']
    },
    {
      title: 'Infra',
      items: ['Vercel', 'AWS', 'Docker', 'CI/CD', 'Analytics']
    },
  ]

  return (
    <section id="stack" className="py-24 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight mb-10">Technology we master</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {stacks.map((s) => (
            <div key={s.title} className="rounded-2xl border border-black/10 p-6 bg-white">
              <h3 className="font-medium">{s.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-full bg-black/5">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
