import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center bg-white p-10 rounded-2xl shadow-sm border max-w-md w-full"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h2 className="text-2xl font-display font-bold text-gray-800">Payment Successful!</h2>
        <p className="text-gray-600 mt-2">You’re now a premium member.</p>
        <div className="mt-8 space-y-3">
          <Link to="/signup">
            <Button className="w-full">Create Your Account</Button>
          </Link>
          <Link to="/login" className="block">
            <Button variant="secondary" className="w-full">Go to Login</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
