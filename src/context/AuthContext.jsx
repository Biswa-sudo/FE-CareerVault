import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { getSession, loginUser, logout as removeAuth, signUpUser } from '../lib/localStorage'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)
  const [authLoading, setAuthLoading] = useState(true)
  const [authError, setAuthError] = useState('')

  useEffect(() => {
    const hydrateSession = async () => {
      try {
        const session = await getSession()
        setUser(session.user)
        setAuthenticated(session.authenticated)
        setAuthError('')
      } catch (error) {
        setAuthError(error instanceof Error ? error.message : 'Failed to load session.')
      } finally {
        setAuthLoading(false)
      }
    }

    hydrateSession()
  }, [])

  const signUp = useCallback(async (userData) => {
    const nextUser = await signUpUser(userData)
    setUser(nextUser)
    setAuthenticated(true)
    setAuthError('')
    return true
  }, [])

  const login = useCallback(async (email, password) => {
    const loggedInUser = await loginUser(email, password)
    setUser(loggedInUser)
    setAuthenticated(true)
    setAuthError('')
    return true
  }, [])

  const logoutUser = useCallback(async () => {
    await removeAuth()
    setUser(null)
    setAuthenticated(false)
  }, [])

  return (
    <AuthContext.Provider value={{ user, authenticated, signUp, login, logout: logoutUser, authLoading, authError }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
