const MainNavbar = () => {
return (
     <header className="header">
        <div className="container header-container">
          <div className="logo">
            <span className="logo-icon">🚀</span>
            <span className="logo-text">Benture AI</span>
          </div>
          <nav className="nav">
            <a href="/about-us">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/faq">FAQ</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/account-settings">Account Settings</a>
          </nav>
          <div className="header-actions">
            <a href="/login" className="btn btn-outline">Login</a>
            <a href="/signup" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </header>
)
}

export default MainNavbar