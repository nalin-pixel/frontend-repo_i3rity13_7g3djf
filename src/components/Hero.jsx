import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-40 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 border border-white/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/80 text-sm">Licensed & environmentally responsible</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Scrap Yard & Auto Recycling
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80">
            Honest prices for junk cars, eco-friendly metal recycling, and quality used parts. Fast pickup and same‑day quotes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-emerald-400 text-slate-950 font-semibold px-6 py-3 hover:bg-emerald-300 transition">
              Get a Quote
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-6 py-3 hover:bg-white/10 transition">
              Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
