function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} ScrapCycle Auto Recycler. All rights reserved.</p>
        <div className="text-white/60 text-sm">Licensed Recycler • EPA compliant • Insured</div>
      </div>
    </footer>
  )
}

export default Footer
