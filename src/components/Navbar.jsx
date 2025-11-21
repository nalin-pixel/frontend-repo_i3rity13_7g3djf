import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between rounded-xl mt-4 backdrop-blur-md bg-slate-900/50 border border-white/10 px-4">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-lg" />
            <div className="flex flex-col leading-tight">
              <span className="text-white font-semibold">ScrapCycle</span>
              <span className="text-xs text-white/60">Auto Recycler</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 bg-white px-4 py-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition">
              <Phone className="w-4 h-4" /> Get a Quote
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mt-2 rounded-xl backdrop-blur-md bg-slate-900/60 border border-white/10 p-4 space-y-2">
            {navItems.map(item => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg text-white/90 hover:bg-white/10">
                {item.label}
              </a>
            ))}
            <a href="mailto:info@scrapcycle.example" className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/90 hover:bg-white/10">
              <Mail className="w-4 h-4" /> info@scrapcycle.example
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
