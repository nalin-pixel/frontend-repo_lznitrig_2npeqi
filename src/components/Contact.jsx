import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thank you — we will be in touch shortly.')
  }

  return (
    <section id="contact" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Collaborate with Luxentti</h3>
          <p className="mt-4 text-gray-700">For private sourcing, editorial projects, or partnerships, share a few details and we’ll respond within 1–2 business days.</p>
          <div className="mt-8 rounded-2xl border border-gray-200 p-6">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <input type="text" required placeholder="Full name" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              <input type="email" required placeholder="Email address" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              <input type="text" placeholder="Company / Brand (optional)" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              <textarea rows="4" required placeholder="Tell us about your project" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-black">
                <Send className="h-4 w-4" />
                Send inquiry
              </button>
              {status && <p className="text-sm text-emerald-700 font-medium">{status}</p>}
            </form>
          </div>
        </div>
        <div>
          <div className="rounded-3xl bg-gradient-to-br from-amber-100 via-white to-amber-50 p-8 border border-amber-200/60">
            <h4 className="text-xl font-semibold text-gray-900">Studio Details</h4>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>By appointment only</li>
              <li>Worldwide sourcing available</li>
              <li>Response within 24–48 hours</li>
            </ul>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a href="mailto:hello@luxentti.com" className="text-amber-700 hover:underline">hello@luxentti.com</a>
              <a href="https://www.instagram.com/luxentti" target="_blank" rel="noreferrer" className="text-amber-700 hover:underline">@luxentti</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
