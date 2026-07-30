import './MainNavbar.css';
import BentureAILogo from "../../assets/BentureAILogoText.png";
const MainNavbar = () => {
  return (
    <header className="main-navbar">
      <div className="main-navbar__container">
        <div className="main-navbar__logo">
          {/* <span className="main-navbar__logo-icon">🚀</span>
          <span className="main-navbar__logo-text">Benture AI</span> */}
          <img src={BentureAILogo} alt="Benture AI Logo" className="main-navbar__logo-image" />
        </div>
        <nav className="main-navbar__nav" aria-label="Primary navigation">
          <a href="/about-us">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/faq">FAQ</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/account-settings">Account Settings</a>
        </nav>
        <div className="main-navbar__actions">
          <a href="/login" className="main-navbar__btn main-navbar__btn--outline">Login</a>
          <a href="/signup" className="main-navbar__btn main-navbar__btn--primary">Get Started</a>
        </div>
      </div>
    </header>
  );
};

export default MainNavbar;