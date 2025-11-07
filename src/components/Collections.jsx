import { motion } from 'framer-motion'

const items = [
  {
    title: 'Capsule Essentials',
    img: 'https://images.unsplash.com/photo-1520975605369-c5e4a3f3dfd2?q=80&w=2070&auto=format&fit=crop',
    tag: 'Wardrobe'
  },
  {
    title: 'Jewelry & Accents',
    img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2069&auto=format&fit=crop',
    tag: 'Details'
  },
  {
    title: 'Evening Curation',
    img: 'https://images.unsplash.com/photo-1521334726092-b509a19597c6?q=80&w=2070&auto=format&fit=crop',
    tag: 'Occasion'
  }
]

export default function Collections() {
  return (
    <section id="collections" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Signature Collections</h3>
            <p className="mt-3 text-gray-600 max-w-xl">A considered selection that balances modern minimalism with refined luxury.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:border-gray-400">Request a Lookbook</a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  {item.tag}
                </div>
                <h4 className="mt-2 text-xl font-semibold text-gray-900">{item.title}</h4>
                <button className="mt-4 inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black">
                  View Details
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
