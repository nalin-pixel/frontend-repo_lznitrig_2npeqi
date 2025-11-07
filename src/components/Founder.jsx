export default function Founder() {
  return (
    <section id="founder" className="relative bg-gradient-to-b from-amber-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Meet the Founder</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Luxentti was founded by Mai Wahdan with a vision to celebrate craftsmanship, understated elegance, and a modern approach to luxury curation. Each piece is thoughtfully selected to tell a story that resonates with individuality and timeless taste.
          </p>
          <p className="mt-4 text-gray-700">
            From editorial styling to private sourcing, the studio partners with clients seeking quality and character. The result is a wardrobe—and a home—that feels effortlessly elevated.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=2070&auto=format&fit=crop"
              alt="Founder portrait"
              className="h-[460px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
