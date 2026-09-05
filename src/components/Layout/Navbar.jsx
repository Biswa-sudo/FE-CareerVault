import './MainNavbar.css'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

export default function Navbar({ onMenuClick }) {
  const { user, logout } = useAuth()

  return (
    <header className="relative z-40 overflow-visible bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <button className="p-2 rounded-md text-gray-500 hover:bg-gray-100" onClick={onMenuClick}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="text-lg font-semibold text-gray-700">Benture AI</div>
      <div className="flex items-center gap-4">
        {user && (
          <div className="main-navbar__dropdown relative">
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="text-sm text-gray-600">{user.name}</span>
              <button
                type="button"
                className="main-navbar__avatar"
                aria-label="User menu"
                title="User menu"
              >
                {user.name?.charAt(0).toUpperCase()}
              </button>
            </div>

            <div className="main-navbar__dropdown-menu">
              <Link to="/account" className="main-navbar__dropdown-item">
                Account
              </Link>
              {/* <Link to="/dashboard" className="main-navbar__dropdown-item">
                Dashboard
              </Link> */}
              <button
                type="button"
                onClick={logout}
                className="main-navbar__dropdown-item main-navbar__dropdown-item--danger w-full text-left border-0 bg-transparent"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
