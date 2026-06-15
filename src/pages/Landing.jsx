import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

const features = [
  { title: '10 Professional Templates', desc: 'Choose from modern, minimal, or creative styles.' },
  { title: 'Live Preview', desc: 'See every change instantly as you type.' },
  { title: 'Download as PDF', desc: 'Print-ready, A4 formatted documents.' },
  { title: 'Document Storage', desc: 'Upload cover letters and certificates safely.' },
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center border-b">
        <span className="text-2xl font-display font-bold text-primary-600">CV Pro</span>
        <Link to="/login" className="text-gray-600 hover:text-primary-600 text-sm font-medium">Login</Link>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-display font-bold text-gray-900 leading-tight"
        >
          Craft a CV that <span className="text-primary-600">gets interviews</span>
        </motion.h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Professional CV builder with beautiful templates, live editing, and secure document storage. All for just ₹100/year.
        </p>
        <div className="mt-10">
          <Link to="/payment">
            <Button className="px-8 py-3 text-lg">Get Started for ₹100/year</Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Everything you need</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">One Simple Plan</h2>
          <div className="border rounded-2xl p-8 shadow-sm">
            <span className="text-5xl font-display font-bold text-primary-600">₹100</span>
            <span className="text-gray-500">/year</span>
            <ul className="mt-6 space-y-3 text-left text-gray-600">
              <li className="flex gap-2"><span>✓</span> Unlimited CV creation</li>
              <li className="flex gap-2"><span>✓</span> Save up to 10 CVs</li>
              <li className="flex gap-2"><span>✓</span> Document uploads</li>
              <li className="flex gap-2"><span>✓</span> Premium templates</li>
            </ul>
            <Link to="/payment" className="mt-8 block">
              <Button className="w-full">Subscribe Now</Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-400 border-t">
        © 2026 CV Builder Pro. All rights reserved.
      </footer>
    </div>
  )
}
