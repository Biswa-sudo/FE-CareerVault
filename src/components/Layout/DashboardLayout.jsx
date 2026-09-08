import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { useEffect, useRef, useState } from 'react'

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true)
  const location = useLocation()
  const mainRef = useRef(null)

  useEffect(() => {
    setSidebarOpen(false)
  }, [location.pathname])

  // Ensure the main content is scrolled to top on route change
  useEffect(() => {
    try {
      if (mainRef.current) {
        mainRef.current.scrollTop = 0
      } else {
        window.scrollTo(0, 0)
      }
    } catch (e) {
      // silent
    }
  }, [location.pathname])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMenuClick = () => {
    if (window.innerWidth >= 768) {
      setDesktopSidebarOpen(prev => !prev)
      return
    }
    setSidebarOpen(true)
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        desktopOpen={desktopSidebarOpen}
      />
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
        <Navbar onMenuClick={handleMenuClick} />
        <main ref={mainRef} className="flex-1 overflow-x-hidden overflow-y-auto px-3 py-4 sm:px-5 lg:px-6">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  )
}
