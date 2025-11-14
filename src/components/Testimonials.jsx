export default function Testimonials() {
  const quotes = [
    {
      name: 'Amelia, CEO at Bloom.ai',
      text: 'They shipped our MVP in 6 weeks and it actually scaled. Clear thinking, strong design taste, and an A+ engineering bar.'
    },
    {
      name: 'Jared, Product Lead at Northbank',
      text: 'A partner who matched our speed and raised our standards. The design system cut delivery time in half.'
    },
    {
      name: 'Priya, Founder at CareLoop',
      text: 'From HIPAA to growth loops, they handled it end-to-end. We went from idea to launch to Series A with them.'
    },
  ]
  return (
    <section id="testimonials" className="py-24 border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight mb-10">Client words</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-2xl border border-black/10 p-6 bg-white">
              <blockquote className="text-black/80">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-black/60">{q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
