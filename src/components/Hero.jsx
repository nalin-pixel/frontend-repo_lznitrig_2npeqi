import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ogkQKI3cQqsyds7m/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900"
        >
          Timeless Pieces, Modern Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
        >
          Luxentti curates elevated essentials and statement pieces for the discerning eye.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a href="#collections" className="inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-black transition">
            Explore Collections
          </a>
          <a href="#contact" className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:border-gray-400 transition">
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
