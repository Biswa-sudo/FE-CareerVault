import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { getRegisteredUser, setRegisteredUser, setLoggedIn, logout as removeAuth, isLoggedIn, getCurrentUser } from '../lib/localStorage'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => getCurrentUser())
  const [authenticated, setAuthenticated] = useState(() => isLoggedIn())

  const signUp = useCallback((userData) => {
    setRegisteredUser(userData)
    setLoggedIn(userData)
    setUser(userData)
    setAuthenticated(true)
  }, [])

  const login = useCallback((email, password) => {
    const registered = getRegisteredUser()
    if (registered && registered.email === email && registered.password === password) {
      setLoggedIn(registered)
      setUser(registered)
      setAuthenticated(true)
      return true
    }
    return false
  }, [])

  const logoutUser = useCallback(() => {
    removeAuth()
    setUser(null)
    setAuthenticated(false)
  }, [])

  return (
    <AuthContext.Provider value={{ user, authenticated, signUp, login, logout: logoutUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
