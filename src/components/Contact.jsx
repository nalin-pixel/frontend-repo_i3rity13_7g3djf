import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin } from 'lucide-react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Sending...' })
    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      const data = await res.json()
      setStatus({ state: 'success', message: 'Thanks! We\'ll be in touch shortly.' })
      setForm({ name: '', email: '', phone: '', topic: '', message: '' })
    } catch (err) {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Get a fast quote</h2>
            <p className="mt-3 text-white/70">Tell us about your vehicle or recycling needs. We typically respond within 30 minutes during business hours.</p>

            <div className="mt-8 space-y-4 text-white/80">
              <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-emerald-400" /> (555) 123-4567</div>
              <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-emerald-400" /> quotes@scrapcycle.example</div>
              <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-emerald-400" /> 123 Yard Rd, Industrial Park</div>
            </div>
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="(555) 123-4567" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Topic</label>
                <input name="topic" value={form.topic} onChange={handleChange} placeholder="Junk car, parts, metal..." className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/70 mb-1">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Year, make, model, condition..." className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 text-slate-950 font-semibold px-5 py-2.5 hover:bg-emerald-300 transition">
                <Send className="w-4 h-4" /> Send Message
              </button>
              <p className={`text-sm ${status.state === 'error' ? 'text-red-400' : 'text-white/70'}`}>
                {status.state === 'loading' && 'Sending...'}
                {status.state === 'success' && status.message}
                {status.state === 'error' && status.message}
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
