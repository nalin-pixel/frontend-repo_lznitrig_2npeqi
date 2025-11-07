import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Founder from './components/Founder'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Founder />
        <Contact />
      </main>
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Luxentti — All rights reserved.</p>
          <div className="text-sm text-gray-500">Crafted with care for elevated brands.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
