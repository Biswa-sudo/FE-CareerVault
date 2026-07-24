import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

export default function Navbar({ onMenuClick }) {
  const { user, logout } = useAuth()

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <button className="p-2 rounded-md text-gray-500 hover:bg-gray-100" onClick={onMenuClick}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="text-lg font-semibold text-gray-700">Benture AI</div>
      <div className="flex items-center gap-4">
        {user && (
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">{user.name}</span>
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">
              {user.name?.charAt(0).toUpperCase()}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
