import React from 'react';
import './TermsOfService.css';

const TermsOfService = () => {
  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      content: `By accessing or using the Benture AI platform, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services. These terms apply to all users, including visitors, registered users, and paid subscribers.`
    },
    {
      id: 'services',
      title: '2. Description of Services',
      content: `Benture AI provides an AI-powered career growth platform that includes resume building, AI interview practice, spoken English training, skill analysis, study groups, recruiter marketplace, and related features. We may modify, suspend, or discontinue any part of the services at any time without notice.`
    },
    {
      id: 'accounts',
      title: '3. User Accounts',
      content: `You must create an account to access certain features. You are responsible for maintaining the confidentiality of your credentials and for all activities under your account. You agree to provide accurate and complete information and to update it as needed.`
    },
    {
      id: 'user-content',
      title: '4. User Content',
      content: `You retain ownership of all content you submit, including resumes, documents, and portfolio materials. By submitting content, you grant Benture AI a non-exclusive, worldwide, royalty-free license to use, store, and process it solely for providing and improving our services. We will not share your personal data with third parties without your explicit consent.`
    },
    {
      id: 'intellectual-property',
      title: '5. Intellectual Property',
      content: `All intellectual property rights in the platform, including software, design, trademarks, logos, and AI models, are owned by Benture AI. You may not copy, modify, or reverse-engineer any part of the platform without our prior written consent.`
    },
    {
      id: 'subscriptions',
      title: '6. Subscriptions and Payments',
      content: `We offer both free and paid subscription plans. Paid plans are billed on a monthly or annual basis as selected. You can cancel any time, and no further charges will apply after the current billing cycle. Refunds are handled on a case-by-case basis. All prices are in Indian Rupees (INR) and include applicable taxes.`
    },
    {
      id: 'privacy',
      title: '7. Privacy and Data Protection',
      content: `Your privacy matters to us. Our Privacy Policy explains how we collect, use, and protect your data. We comply with India's Digital Personal Data Protection Act (DPDP Act) and other applicable laws. You can access, correct, or delete your data anytime through your account settings.`
    },
    {
      id: 'third-party',
      title: '8. Third-Party Links and Services',
      content: `Our platform may contain links to third-party websites or services. We are not responsible for their content, policies, or practices. Your interactions with third parties are solely between you and them.`
    },
    {
      id: 'acceptable-use',
      title: '9. Acceptable Use Policy',
      content: `You agree not to use the platform for any unlawful, abusive, or harmful purpose. This includes transmitting malware, harassing others, impersonating others, or violating any applicable laws. We reserve the right to suspend or terminate accounts that violate this policy.`
    },
    {
      id: 'disclaimers',
      title: '10. Disclaimers and Limitation of Liability',
      content: `The platform is provided "as is" and "as available". We do not guarantee that the services will be uninterrupted, error-free, or secure. To the maximum extent permitted by law, we disclaim all warranties, whether express or implied. In no event shall Benture AI be liable for any indirect, incidental, or consequential damages arising from your use of the platform.`
    },
    {
      id: 'indemnification',
      title: '11. Indemnification',
      content: `You agree to indemnify and hold harmless Benture AI, its affiliates, and its employees from any claims, damages, losses, or expenses arising out of your use of the platform or violation of these terms.`
    },
    {
      id: 'termination',
      title: '12. Termination',
      content: `We may terminate or suspend your access at any time, with or without notice, for any reason, including violation of these terms. You may also delete your account at any time. Upon termination, your right to use the platform ceases immediately.`
    },
    {
      id: 'changes',
      title: '13. Changes to Terms',
      content: `We reserve the right to update these terms periodically. We will notify you of significant changes via email or a prominent notice on our website. Your continued use of the platform after changes constitutes acceptance of the revised terms.`
    },
    {
      id: 'governing-law',
      title: '14. Governing Law and Dispute Resolution',
      content: `These terms are governed by the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the courts in Bhubaneswar, Odisha. We encourage you to contact us first to resolve any issues amicably.`
    },
    {
      id: 'contact',
      title: '15. Contact Information',
      content: `If you have any questions about these Terms of Service, please contact us at:`
    }
  ];

  const lastUpdated = 'July 18, 2026';

  return (
    <div className="tos-page">
      {/* ===== HERO ===== */}
      <section className="tos-hero">
        <div className="container">
          <div className="tos-hero-content">
            <span className="tos-badge">⚖️ Legal</span>
            <h1 className="tos-title">
              Terms of <span className="highlight">Service</span>
            </h1>
            <p className="tos-subtitle">
              Please read these terms carefully before using Benture AI.
              Last updated: <strong>{lastUpdated}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ===== TOS CONTENT ===== */}
      <section className="tos-section">
        <div className="container">
          <div className="tos-content">
            {/* Table of Contents */}
            <div className="tos-toc">
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
            <div className="tos-sections">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="tos-card">
                  <h2 className="tos-card-title">{section.title}</h2>
                  <div className="tos-card-body">
                    {section.id === 'contact' ? (
                      <>
                        <p>{section.content}</p>
                        <div className="tos-contact">
                          <div className="contact-item">
                            <span>📧</span>
                            <a href="mailto:legal@benture.ai">legal@benture.ai</a>
                          </div>
                          <div className="contact-item">
                            <span>📍</span>
                            <span>Benture AI, Bhubaneswar, Odisha, India</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <p>{section.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Acknowledgment */}
              <div className="tos-acknowledgment">
                <p>
                  By using Benture AI, you acknowledge that you have read, understood,
                  and agree to be bound by these Terms of Service.
                </p>
                <div className="tos-actions">
                  <a href="/signup" className="btn btn-primary">I Agree & Continue</a>
                  <a href="/privacy-policy" className="btn btn-outline">View Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SIMILAR PAGES ===== */}
      <section className="tos-related">
        <div className="container">
          <div className="related-grid">
            <a href="/privacy-policy" className="related-card">
              <span className="related-icon">🔒</span>
              <h4>Privacy Policy</h4>
              <p>How we protect your data</p>
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

export default TermsOfService;