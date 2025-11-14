export default function Logos() {
  const brands = [
    'Stripe', 'Shopify', 'Notion', 'Figma', 'Vercel', 'Coinbase', 'OpenAI'
  ]
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 items-center gap-6 opacity-60">
          {brands.map((b) => (
            <div key={b} className="text-center text-sm tracking-wide">{b}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
