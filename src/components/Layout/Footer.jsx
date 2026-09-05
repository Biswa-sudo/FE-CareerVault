import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BentureAILogo from "../../assets/BentureAILogoText.webp";

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer className="footer border-t" style={{backgroundColor: '#0F2852'}}>
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="footer-grid grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="footer-brand">
              <div className="logo flex items-center gap-2 mb-2">
                <img style={{backgroundColor: '#ffffff',borderRadius: '5%'}} src={BentureAILogo} alt="Benture AI Logo" className="main-navbar__logo-image cursor-pointer" onClick={() => navigate('/')} />
            </div>
            <p className="text-sm text-slate-100">Built in Odisha, India. 🇮🇳</p>
            <p className="footer-tagline text-xs text-slate-100 mt-1">Your AI Career Mentor</p>
          </div>

          <div className="footer-links">
            <h4 className="font-semibold mb-2">Product</h4>
            <ul className="text-sm text-slate-100 space-y-1">
              <li><Link to="/career-vault">Career Vault</Link></li>
              <li><Link to="/career-vault-pro-info">Career Vault Pro</Link></li>
              <li><Link to="/spoken-english">Spoken English</Link></li>
                            {/* <li><Link to="/study-groups">Study Groups</Link></li> */}

            </ul>
          </div>

          <div className="footer-links">
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="text-sm text-slate-100 space-y-1">
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact">Careers</Link></li>
              <li><Link to="/faq">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="text-sm text-slate-100 space-y-1">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/faq">Help Center</Link></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="social-icons flex items-center gap-3 text-xl">
              <Link to="/contact" aria-label="Facebook">📘</Link>
              <Link to="/contact" aria-label="Twitter">🐦</Link>
              <Link to="/contact" aria-label="Instagram">📸</Link>
              <Link to="/contact" aria-label="YouTube">▶️</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom mt-6 border-t pt-4 text-sm text-slate-500">
          <p>© 2026 Benture AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
