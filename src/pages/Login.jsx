import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

export default function Login() {
  const { login, authenticated, authLoading } = useAuth()
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const { register, handleSubmit, setError, formState: { errors } } = useForm()

  useEffect(() => {
    if (!authLoading && authenticated) {
      navigate('/dashboard', { replace: true })
    }
  }, [authLoading, authenticated, navigate])

  const onSubmit = async (data) => {
    setSubmitting(true)
    try {
      await login(data.email, data.password)
      navigate('/dashboard')
    } catch {
      setError('email', { message: 'Invalid credentials' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border">
        <h2 className="text-2xl font-display font-bold mb-6">Welcome back</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input label="Email" type="email" {...register('email')} error={errors.email?.message} />
          <Input label="Password" type="password" {...register('password')} />
          <Button type="submit" className="w-full" disabled={submitting}>{submitting ? 'Logging in...' : 'Login'}</Button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don’t have an account? <Link to="/signup" className="text-primary-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}
