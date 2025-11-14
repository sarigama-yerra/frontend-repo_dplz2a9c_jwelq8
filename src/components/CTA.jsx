export default function CTA() {
  return (
    <section id="contact" className="py-24 border-t border-black/5">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Ready to build?</h2>
        <p className="mt-3 text-black/60">Tell us about your product and timelines. We’ll reply within 24 hours.</p>
        <form className="mt-8 grid gap-3 text-left">
          <input type="text" placeholder="Your name" className="w-full rounded-xl border border-black/10 px-4 py-3" required />
          <input type="email" placeholder="Email" className="w-full rounded-xl border border-black/10 px-4 py-3" required />
          <input type="text" placeholder="Company / Project" className="w-full rounded-xl border border-black/10 px-4 py-3" />
          <textarea placeholder="What are you building?" rows="5" className="w-full rounded-xl border border-black/10 px-4 py-3" />
          <button type="submit" className="mt-2 inline-flex justify-center rounded-full bg-black text-white px-6 py-3 hover:bg-black/90">Request proposal</button>
        </form>
        <p className="mt-4 text-xs text-black/50">We typically start 1 new engagement each month.</p>
      </div>
    </section>
  )
}
