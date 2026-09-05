import './MainNavbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import BentureAILogo from "../../assets/BentureAILogoText.webp";
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import { hasAnyActiveSubscription } from '../../lib/localStorage';

const MainNavbar = () => {
  const { authenticated, authLoading, logout } = useAuth();
  const navigate = useNavigate();
  const [checking, setChecking] = useState(false);
  const navLinks = [
    { to: '/about-us', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
    { to: '/faq', label: 'FAQ' },
    { to: '/terms-of-service', label: 'Terms of Service' },
    { to: '/privacy-policy', label: 'Privacy Policy' },
    { to: '/account-settings', label: 'Account Settings' },
  ];

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="main-navbar">
      <div className="main-navbar__container">
        <NavLink to="/" className="main-navbar__logo" aria-label="Go to home page">
          {/* <span className="main-navbar__logo-icon">🚀</span>
          <span className="main-navbar__logo-text">Benture AI</span> */}
          <img src={BentureAILogo} alt="Benture AI Logo" className="main-navbar__logo-image" />
        </NavLink>
        <nav className="main-navbar__nav" aria-label="Primary navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive ? 'main-navbar__nav-link main-navbar__nav-link--active' : 'main-navbar__nav-link'
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="main-navbar__actions">
          {!authLoading && authenticated ? (
            <>
              <button
                type="button"
                className="main-navbar__btn main-navbar__btn--primary p-2"
                onClick={async () => {
                  try {
                    setChecking(true);
                    const any = await hasAnyActiveSubscription();
                    if (any) {
                      navigate('/dashboard');
                    } else {
                      navigate('/payment');
                    }
                  } finally {
                    setChecking(false);
                  }
                }}
                disabled={checking}
              >
                {checking ? 'Please wait...' : 'My Dashboard'}
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="main-navbar__btn main-navbar__btn--outline navbar_logout p-2"
                aria-label="Logout"
                title="Logout"
              >
                <span aria-hidden="true">⎋</span>
              </button>
            </>
          ) : null}

          {!authLoading && !authenticated ? (
            <>
              <NavLink to="/login" className="main-navbar__btn main-navbar__btn--outline">Login</NavLink>
              <NavLink to="/signup" className="main-navbar__btn main-navbar__btn--primary">Get Started</NavLink>
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default MainNavbar;