import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      details: 'support@benture.ai',
      sub: 'We reply within 24 hours'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: '+91 98765 43210',
      sub: 'Mon-Fri, 9AM - 6PM IST'
    },
    {
      icon: '📍',
      title: 'Address',
      details: 'Bhubaneswar, Odisha',
      sub: 'India 751001'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '🔗', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'YouTube', icon: '▶️', url: '#' }
  ];

  return (
    <div className="contact-page">
      {/* ===== HERO ===== */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <span className="contact-badge">📬 Get In Touch</span>
            <h1 className="contact-title">
              We'd Love to
              <span className="highlight"> Hear From You</span>
            </h1>
            <p className="contact-subtitle">
              Have questions, feedback, or partnership ideas? Reach out to us.
              We're here to help you grow your career.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrapper">
              <div className="contact-form-header">
                <h2>Send a Message</h2>
                <p>Fill in the form below and we'll get back to you shortly.</p>
              </div>

              {submitSuccess && (
                <div className="success-message">
                  ✅ Thank you! Your message has been sent. We'll reply within 24 hours.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : '📤 Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <h2>Contact Information</h2>
              <p className="contact-info-sub">
                Here are the ways you can reach us.
              </p>

              <div className="contact-info-list">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="info-icon">{item.icon}</div>
                    <div className="info-content">
                      <h4>{item.title}</h4>
                      <p className="info-detail">{item.details}</p>
                      <span className="info-sub">{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-social">
                <h4>Follow Us</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.url} className="social-link" aria-label={social.name}>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP / LOCATION ===== */}
      <section className="location-section">
        <div className="container">
          <div className="location-card">
            <div className="location-content">
              <span className="location-badge">📍 Our Office</span>
              <h2>Visit Us</h2>
              <p>
                We're based in the heart of Bhubaneswar, Odisha. 
                Come say hello or schedule a meeting with our team.
              </p>
              <div className="location-details">
                <div className="location-item">
                  <span className="loc-icon">🏢</span>
                  <div>
                    <strong>Benture AI</strong>
                    <p>Bhubaneswar, Odisha</p>
                    <p>India 751001</p>
                  </div>
                </div>
                <div className="location-item">
                  <span className="loc-icon">🕐</span>
                  <div>
                    <strong>Office Hours</strong>
                    <p>Monday - Friday</p>
                    <p>9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="location-map">
              <div className="map-placeholder">
                <div className="map-pin">📍</div>
                <p>Benture AI</p>
                <span className="map-sub">Bhubaneswar, Odisha</span>
                <div className="map-overlay">
                  <span>📍 View on Google Maps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ CTA ===== */}
      <section className="contact-faq-cta">
        <div className="container">
          <div className="faq-cta-content">
            <div className="faq-cta-icon">❓</div>
            <div className="faq-cta-text">
              <h3>Quick Questions?</h3>
              <p>Check our FAQ page for instant answers to common questions.</p>
            </div>
            <a href="/faq" className="btn btn-primary">Browse FAQ →</a>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="contact-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">💬</div>
              <div className="stat-info">
                <span className="stat-value">5,000+</span>
                <span className="stat-label">Messages Received</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-info">
                <span className="stat-value">4 hrs</span>
                <span className="stat-label">Average Response Time</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-info">
                <span className="stat-value">98%</span>
                <span className="stat-label">User Satisfaction</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🌍</div>
              <div className="stat-info">
                <span className="stat-value">15+</span>
                <span className="stat-label">Cities Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;