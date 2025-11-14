import { useState } from 'react'
import { Menu, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Stack', href: '#stack' },
    { label: 'Clients', href: '#clients' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="font-semibold tracking-tight text-xl">Flames Studio</a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-black/70">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-black transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-black/90 transition-colors">
              Start a project <ArrowRight size={16} />
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="px-2 py-2 rounded hover:bg-black/5" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-full">
                Start a project <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
