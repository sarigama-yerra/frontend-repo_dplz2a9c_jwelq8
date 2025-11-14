import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Work from './components/Work'
import Stack from './components/Stack'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-black">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Work />
        <Stack />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-black/60">
          <div>© {new Date().getFullYear()} Flames Studio — All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#work" className="hover:text-black">Work</a>
            <a href="#stack" className="hover:text-black">Stack</a>
            <a href="#clients" className="hover:text-black">Clients</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
