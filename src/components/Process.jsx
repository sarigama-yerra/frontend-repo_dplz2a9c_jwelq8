export default function Process() {
  const steps = [
    { num: '01', title: 'Discovery', desc: 'We map goals, users, and success metrics.' },
    { num: '02', title: 'Design', desc: 'Rapid explorations, iterations, and prototypes.' },
    { num: '03', title: 'Build', desc: 'Engineering with strong QA and performance budgets.' },
    { num: '04', title: 'Launch & Grow', desc: 'Go‑live, instrumentation, and ongoing experiments.' },
  ]

  return (
    <section id="process" className="py-24 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight mb-10">A calm, proven process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="rounded-2xl border border-black/10 p-6 bg-white">
              <div className="text-xs text-black/50">{s.num}</div>
              <h3 className="mt-2 font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-black/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
