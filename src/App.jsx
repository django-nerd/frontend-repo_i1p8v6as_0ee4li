import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Areas from './components/Areas'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="font-semibold text-gray-900">HVAC Template</p>
            <p className="text-gray-600 mt-2">A clean, modern template for HVAC companies serving Utah.</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Hours</p>
            <ul className="mt-2 text-gray-600 space-y-1">
              <li>Mon–Fri: 8am – 8pm</li>
              <li>Sat: 9am – 5pm</li>
              <li>Sun: Emergency only</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Contact</p>
            <ul className="mt-2 text-gray-600 space-y-1">
              <li>Salt Lake City, UT</li>
              <li>801‑123‑4567</li>
              <li>info@yourhvac.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Your HVAC Company. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Areas />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
