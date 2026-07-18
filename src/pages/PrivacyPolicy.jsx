import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const lastUpdated = 'July 18, 2026';

  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: `Benture AI ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully. By using Benture AI, you consent to the practices described herein.`
    },
    {
      id: 'information-collect',
      title: '2. Information We Collect',
      content: `We collect several types of information to provide and improve our services:

      • Personal Identifiers: name, email address, phone number, date of birth, location
      • Professional Information: resume data, employment history, education, skills, portfolio content
      • Account Credentials: username, password, authentication data
      • Usage Data: how you interact with the platform, pages visited, features used, time spent
      • Device Information: IP address, browser type, operating system, device type
      • Communication Data: messages sent through our platform, support inquiries
      • AI Interaction Data: responses to interview questions, practice session recordings, feedback provided`
    },
    {
      id: 'how-we-use',
      title: '3. How We Use Your Information',
      content: `We use your data for the following purposes:

      • To provide, maintain, and improve our AI career platform
      • To personalize your experience and deliver tailored recommendations
      • To enable AI interview coaching, resume analysis, skill assessments, and learning paths
      • To connect you with recruiters (with your explicit consent)
      • To send you updates, notifications, and promotional communications (you can opt out)
      • To analyze usage patterns and enhance platform performance
      • To ensure security, prevent fraud, and enforce our terms
      • To comply with legal obligations`
    },
    {
      id: 'legal-basis',
      title: '4. Legal Basis for Processing',
      content: `We process your data based on one or more of the following legal grounds:

      • **Consent**: You have given explicit consent for specific processing activities
      • **Contract**: Processing is necessary for the performance of our contract with you (e.g., providing services)
      • **Legal Obligation**: Processing is required to comply with applicable laws
      • **Legitimate Interests**: Processing is necessary for our legitimate business interests, such as improving services and security`
    },
    {
      id: 'data-sharing',
      title: '5. Data Sharing and Disclosure',
      content: `We do not sell your personal data. We may share your data in the following circumstances:

      • **With your consent**: When you opt-in to recruiter discovery, recruiters can view your profile
      • **With service providers**: Trusted partners who help us operate the platform (e.g., hosting, analytics, payments)
      • **For legal reasons**: If required by law, court order, or government regulation
      • **In business transitions**: In case of merger, acquisition, or asset sale, your data may be transferred
      • **With your explicit direction**: When you choose to share your portfolio or resume link`
    },
    {
      id: 'data-retention',
      title: '6. Data Retention',
      content: `We retain your personal data only as long as necessary for the purposes outlined in this policy, or as required by law. You can request deletion of your data anytime through your account settings. We will permanently delete your data within 30 days of a verified deletion request, unless retention is required for legal compliance.`
    },
    {
      id: 'data-security',
      title: '7. Data Security',
      content: `We implement robust security measures to protect your data, including:

      • Encryption of data in transit (TLS) and at rest (AES-256)
      • Secure cloud infrastructure with access controls
      • Regular security audits and vulnerability assessments
      • Employee training on data protection
      • Incident response and breach notification procedures

      While we strive to protect your data, no system is completely secure. We cannot guarantee absolute security.`
    },
    {
      id: 'user-rights',
      title: '8. Your Rights',
      content: `Under India's Digital Personal Data Protection Act (DPDP Act) and other applicable laws, you have the following rights:

      • **Right to Access**: Request a copy of your personal data
      • **Right to Correction**: Correct inaccurate or incomplete data
      • **Right to Deletion**: Request deletion of your data (subject to exceptions)
      • **Right to Object**: Object to certain processing activities
      • **Right to Withdraw Consent**: Withdraw consent at any time
      • **Right to Data Portability**: Receive your data in a portable format
      • **Right to Grievance**: Lodge a complaint with a supervisory authority

      To exercise these rights, please contact us at privacy@benture.ai`
    },
    {
      id: 'cookies',
      title: '9. Cookies and Tracking',
      content: `We use cookies and similar technologies to enhance your experience, analyze usage, and serve relevant content. Types of cookies we use:

      • **Essential Cookies**: Required for basic platform functionality
      • **Analytics Cookies**: Help us understand user behavior (Google Analytics, Mixpanel)
      • **Preference Cookies**: Remember your settings and preferences
      • **Marketing Cookies**: Used for advertising (you can opt out)

      You can control cookie preferences in your browser settings. Blocking cookies may affect some features.`
    },
    {
      id: 'third-party',
      title: '10. Third-Party Services',
      content: `We use third-party services that may collect data: Google Analytics for analytics, Razorpay/Stripe for payments, OpenAI for AI services, and cloud providers for hosting. These services have their own privacy policies. We encourage you to review them.`
    },
    {
      id: 'children',
      title: '11. Children\'s Privacy',
      content: `Our platform is not intended for children under 13. We do not knowingly collect personal data from children under 13. If we become aware of such data, we will delete it immediately. If you are a parent or guardian and believe your child has provided us with data, please contact us.`
    },
    {
      id: 'international',
      title: '12. International Data Transfers',
      content: `We are based in India, but may process data in other countries where our service providers operate. We ensure that appropriate safeguards are in place for international transfers, such as Standard Contractual Clauses or adequacy decisions.`
    },
    {
      id: 'changes',
      title: '13. Changes to This Policy',
      content: `We may update this Privacy Policy from time to time. We will notify you of significant changes via email or platform notification. The "Last Updated" date at the top of this policy indicates the latest revision. Your continued use of the platform after changes constitutes acceptance.`
    },
    {
      id: 'contact',
      title: '14. Contact Us',
      content: `If you have questions, concerns, or wish to exercise your rights, please contact us at:`
    }
  ];

  return (
    <div className="privacy-page">
      {/* ===== HERO ===== */}
      <section className="privacy-hero">
        <div className="container">
          <div className="privacy-hero-content">
            <span className="privacy-badge">🔒 Privacy</span>
            <h1 className="privacy-title">
              Privacy <span className="highlight">Policy</span>
            </h1>
            <p className="privacy-subtitle">
              How we collect, use, and protect your data.
              Last updated: <strong>{lastUpdated}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ===== PRIVACY CONTENT ===== */}
      <section className="privacy-section">
        <div className="container">
          <div className="privacy-content">
            {/* Table of Contents */}
            <div className="privacy-toc">
              <h3>📋 Table of Contents</h3>
              <ul>
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections */}
            <div className="privacy-sections">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="privacy-card">
                  <h2 className="privacy-card-title">{section.title}</h2>
                  <div className="privacy-card-body">
                    {section.id === 'contact' ? (
                      <>
                        <p>{section.content}</p>
                        <div className="privacy-contact">
                          <div className="contact-item">
                            <span>📧</span>
                            <a href="mailto:privacy@benture.ai">privacy@benture.ai</a>
                          </div>
                          <div className="contact-item">
                            <span>📍</span>
                            <span>Benture AI, Bhubaneswar, Odisha, India</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <p style={{ whiteSpace: 'pre-line' }}>{section.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Acknowledgment */}
              <div className="privacy-acknowledgment">
                <p>
                  We take your privacy seriously. If you have any concerns, please don't hesitate
                  to reach out to our privacy team.
                </p>
                <div className="privacy-actions">
                  <a href="/contact" className="btn btn-primary">Contact Privacy Team</a>
                  <a href="/terms-of-service" className="btn btn-outline">View Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RELATED PAGES ===== */}
      <section className="privacy-related">
        <div className="container">
          <div className="related-grid">
            <a href="/terms-of-service" className="related-card">
              <span className="related-icon">⚖️</span>
              <h4>Terms of Service</h4>
              <p>Legal terms and conditions</p>
            </a>
            <a href="/faq" className="related-card">
              <span className="related-icon">❓</span>
              <h4>FAQ</h4>
              <p>Frequently asked questions</p>
            </a>
            <a href="/contact" className="related-card">
              <span className="related-icon">📧</span>
              <h4>Contact Us</h4>
              <p>Get in touch with our team</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;