import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { to: '/my-cvs', label: 'My CVs', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { to: '/templates', label: 'Templates', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2zm0 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2z' },
  { to: '/documents', label: 'Documents', icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' },
  { to: '/account', label: 'Account', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { to: '/spoken-english', label: 'Spoken English', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
  { to: '/skill-analysis', label: 'Skill Analysis', icon: 'M9 17v-6m4 6V7m4 10V4M4 21h16' },
  { to: '/recruiter-marketplace', label: 'Recruiter Marketplace', icon: 'M20 13V8a2 2 0 00-2-2h-3V4a2 2 0 00-2-2h-2a2 2 0 00-2 2v2H6a2 2 0 00-2 2v5m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-4m-8 0H4m8 0v2' },
  { to: '/ai-interview', label: 'AI Interview', icon: 'M12 1v11m0 0a3 3 0 003-3V7a3 3 0 10-6 0v2a3 3 0 003 3zm-7 0a7 7 0 0014 0m-7 0v4m-4 0h8' },
  { to: '/portfolio', label: 'Portfolio', icon: 'M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 010 18M12 3a15.3 15.3 0 000 18' },
  { to: '/study-groups', label: 'Study Groups', icon: 'M17 20h5v-2a4 4 0 00-5.9-3.5M17 20H7m10 0v-2c0-.7-.1-1.4-.4-2M7 20H2v-2a4 4 0 015.9-3.5M7 20v-2c0-.7.1-1.4.4-2m0 0a5 5 0 019.2 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
]

export default function Sidebar({ open, setOpen, desktopOpen = true }) {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <>
      {/* Mobile overlay */}
      {open && <div className="fixed inset-0 z-40 bg-black/30 md:hidden" onClick={() => setOpen(false)} />}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-all duration-300 ease-in-out md:relative md:inset-auto ${open ? 'translate-x-0' : '-translate-x-full'} ${desktopOpen ? 'md:translate-x-0 md:w-64 md:opacity-100' : 'md:-translate-x-full md:w-0 md:opacity-0 md:border-r-0 md:overflow-hidden'}`}>
        <div className="flex items-center h-16 px-4 border-b">
          <span className="text-xl font-display font-bold text-primary-600">CV Pro</span>
        </div>
        <nav className="mt-6 px-4 space-y-1">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
              </svg>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="absolute bottom-4 left-0 right-0 px-4">
          <button onClick={handleLogout} className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </aside>
    </>
  )
}
