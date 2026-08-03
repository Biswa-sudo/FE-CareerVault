import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useNavigate, Link, useSearchParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(4, 'Min 4 characters'),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

export default function SignUp() {
  const { signUp, authenticated, authLoading } = useAuth()
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const redirectTo = searchParams.get('redirect') || '/dashboard'
  const { register, handleSubmit, setError, formState: { errors } } = useForm({ resolver: zodResolver(schema) })

  useEffect(() => {
    if (!authLoading && authenticated) {
      navigate(redirectTo, { replace: true })
    }
  }, [authLoading, authenticated, navigate, redirectTo])

  const onSubmit = async (data) => {
    setSubmitting(true)
    try {
      await signUp({ name: data.name, email: data.email, password: data.password })
      navigate(redirectTo)
    } catch (error) {
      setError('email', { message: error instanceof Error ? error.message : 'Signup failed' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border">
        <h2 className="text-2xl font-display font-bold mb-6">Create your account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input label="Full Name" {...register('name')} error={errors.name?.message} />
          <Input label="Email" type="email" {...register('email')} error={errors.email?.message} />
          <Input label="Password" type="password" {...register('password')} error={errors.password?.message} />
          <Input label="Confirm Password" type="password" {...register('confirmPassword')} error={errors.confirmPassword?.message} />
          <Button type="submit" className="w-full" disabled={submitting}>{submitting ? 'Creating account...' : 'Sign Up'}</Button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account? <Link to="/login" className="text-primary-600 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  )
}
