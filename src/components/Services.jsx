import { motion } from 'framer-motion'
import { Car, Recycle, Wrench, Truck, Battery, Shield } from 'lucide-react'

const services = [
  {
    icon: Car,
    title: 'Cash for Junk Cars',
    desc: 'Top-dollar offers for vehicles in any condition. Free towing included.',
  },
  {
    icon: Recycle,
    title: 'Metal Recycling',
    desc: 'Eco-friendly processing for ferrous and non‑ferrous metals with transparent weights.',
  },
  {
    icon: Wrench,
    title: 'Used Auto Parts',
    desc: 'Quality-tested parts with warranty. Save money and reduce waste.',
  },
  {
    icon: Truck,
    title: 'Same‑Day Pickup',
    desc: 'Fast dispatch across the city. We handle all paperwork on site.',
  },
  {
    icon: Battery,
    title: 'Battery & Tire Disposal',
    desc: 'Responsible disposal and recycling for hazardous components.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    desc: 'Fully compliant with environmental and safety regulations.',
  },
]

const cardVariants = {
  off: { opacity: 0, y: 20, scale: 0.98 },
  on: (i) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.06, duration: 0.5 } }),
}

function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-x-0 -top-24 -z-0 h-48 bg-gradient-to-b from-emerald-400/10 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-white/70">Reliable recycling with fair prices and friendly service.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="off"
              whileInView="on"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),rgba(16,185,129,0.15),transparent_40%)]" />
              <s.icon className="w-10 h-10 text-emerald-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
