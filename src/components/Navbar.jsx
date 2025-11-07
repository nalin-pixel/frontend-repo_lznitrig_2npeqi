import { Instagram, Mail, Phone } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-amber-600 shadow-inner" />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-700">Luxentti</p>
            <h1 className="text-xl font-semibold tracking-tight text-gray-900">Curated Luxury</h1>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#collections" className="text-gray-700 hover:text-gray-900">Collections</a>
          <a href="#founder" className="text-gray-700 hover:text-gray-900">Founder</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/luxentti"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:shadow transition"
          >
            <Instagram className="h-4 w-4 text-amber-600" />
            <span className="hidden sm:inline">Follow</span>
          </a>
          <a
            href="mailto:hello@luxentti.com"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black transition"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href="tel:+0000000000"
            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 hover:border-gray-300"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
        </div>
      </div>
    </header>
  )
}
