import React, { useState } from 'react';
import './FAQ.css';
import MainNavbar from '../components/Layout/MainNavbar';


const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState([]);

  const categories = [
    { id: 'general', label: 'General' },
    { id: 'pricing', label: 'Pricing & Plans' },
    { id: 'features', label: 'Features' },
    { id: 'technical', label: 'Technical' },
    { id: 'privacy', label: 'Privacy & Security' }
  ];

  const faqData = {
    general: [
      {
        question: 'What is Benture AI?',
        answer: 'Benture AI is an AI-powered career growth platform that helps students and professionals build resumes, practice interviews, improve spoken English, identify skill gaps, and get discovered by recruiters — all in one place.'
      },
      {
        question: 'Who is Benture AI for?',
        answer: 'Benture AI is for students, job seekers, working professionals, career switchers, recruiters, educational institutions, and businesses. Anyone looking to grow their career or find the right talent.'
      },
      {
        question: 'How is Benture AI different from other platforms?',
        answer: 'Unlike fragmented point solutions, Benture AI is an integrated ecosystem covering the entire learning-to-employment journey. We are AI-native, Bharat-focused, and built for affordability.'
      },
      {
        question: 'Is Benture AI free to use?',
        answer: 'Yes! We offer a free tier with basic features. You can upgrade to Pro or Premium for advanced features like unlimited AI interviews, video profiles, and recruiter discovery.'
      },
      {
        question: 'Do I need technical skills to use Benture AI?',
        answer: 'Not at all. Benture AI is designed to be intuitive and easy to use. Whether you\'re a student or a professional, you\'ll find the platform simple to navigate.'
      }
    ],
    pricing: [
      {
        question: 'What are the pricing plans?',
        answer: 'We offer Free (₹0), Starter (₹99/month), Pro (₹249/month), and Premium (₹499/month) plans. Annual plans come with a 16% discount. Each plan includes more features, resumes, and AI interviews.'
      },
      {
        question: 'Can I cancel my subscription anytime?',
        answer: 'Absolutely. You can cancel your subscription anytime. No questions asked. Your data will remain accessible until the end of your billing cycle.'
      },
      {
        question: 'Do you offer student discounts?',
        answer: 'Yes! We offer special pricing for students with valid educational IDs. Contact our support team with your student ID to get the discount.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major UPI apps, credit/debit cards, and net banking. We also support annual subscriptions for better savings.'
      },
      {
        question: 'Is there a free trial?',
        answer: 'Our Free tier is effectively a forever-free trial with essential features. You can use it as long as you want. Upgrade when you need more features.'
      }
    ],
    features: [
      {
        question: 'How many resumes can I create?',
        answer: 'Free plan: 1 resume. Starter: 5 resumes. Pro: 10 resumes. Premium: Unlimited resumes.'
      },
      {
        question: 'Can I download my resume as PDF?',
        answer: 'Yes! All resumes can be exported as professional, print-ready PDFs with one click.'
      },
      {
        question: 'Is ATS optimization included?',
        answer: 'Absolutely. All resumes are automatically optimized for ATS (Applicant Tracking Systems) to ensure they pass automated screening.'
      },
      {
        question: 'How does the AI Interview work?',
        answer: 'Our AI interviewer generates personalized questions based on your resume, skills, and target role. You practice in a realistic chat interface and receive instant feedback on structure, content, and delivery.'
      },
      {
        question: 'What is the Spoken English feature?',
        answer: 'It\'s an AI conversation partner that helps you practice pronunciation, grammar, vocabulary, and fluency. It\'s designed specifically for professional and interview contexts.'
      },
      {
        question: 'What is Skill Analysis?',
        answer: 'Skill Analysis uses AI to evaluate your resume, identify your strengths and skill gaps, and recommend personalized learning paths to help you achieve your career goals.'
      },
      {
        question: 'What are Study Groups?',
        answer: 'Study Groups are live virtual rooms where you can study with peers, compete on leaderboards, track streaks, and hold each other accountable. Students who study in groups are 3x more likely to stay consistent.'
      },
      {
        question: 'How does Recruiter Marketplace work?',
        answer: 'Recruiters can search for candidates using AI-powered filters, view video profiles, message candidates directly, and schedule interviews — all through the platform.'
      }
    ],
    technical: [
      {
        question: 'Is Benture AI available on mobile?',
        answer: 'Yes! Benture AI is fully responsive and works on all devices — desktop, tablet, and mobile. We\'re also building native mobile apps for iOS and Android.'
      },
      {
        question: 'Do I need to install anything?',
        answer: 'No. Benture AI is a web-based platform. Just visit our website, create an account, and start using it. No downloads or installations required.'
      },
      {
        question: 'Is my data safe?',
        answer: 'Yes. We use industry-standard encryption, secure servers, and regular security audits. Your data belongs to you, and we never share it without your explicit consent.'
      },
      {
        question: 'What browsers does Benture AI support?',
        answer: 'We support all modern browsers — Chrome, Firefox, Safari, Edge, and Brave. For the best experience, we recommend using the latest version of Chrome.'
      },
      {
        question: 'Can I access my data offline?',
        answer: 'Currently, we require an internet connection. However, we are working on offline access features for documents and resumes.'
      }
    ],
    privacy: [
      {
        question: 'How does Benture AI use my data?',
        answer: 'We use your data solely to provide and improve our services — resume analysis, interview coaching, skill assessment, and career recommendations. We never sell your data to third parties.'
      },
      {
        question: 'Can I delete my account and data?',
        answer: 'Yes. You can delete your account and all associated data anytime from your account settings. We will permanently remove your data within 30 days of your request.'
      },
      {
        question: 'Does Benture AI comply with data protection laws?',
        answer: 'Yes. We comply with India\'s Digital Personal Data Protection Act (DPDP Act), GDPR (for international users), and all applicable data protection regulations.'
      },
      {
        question: 'Who owns the content I create?',
        answer: 'You own everything you create on Benture AI — resumes, documents, and portfolio content. We only use your data to provide you with better recommendations and services.'
      },
      {
        question: 'Does Benture AI use my data for AI training?',
        answer: 'We may use anonymized and aggregated data to improve our AI models. You can opt out of this at any time. Your personal data is never used without your explicit consent.'
      }
    ]
  };

  const toggleItem = (question) => {
    setOpenItems(prev =>
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  const currentFAQs = faqData[activeCategory] || [];

  return (
    <div className="faq-page">
        <MainNavbar />
      {/* ===== HERO ===== */}
      <section className="faq-hero">
        <div className="container">
          <div className="faq-hero-content">
            <span className="faq-badge">❓ Got Questions?</span>
            <h1 className="faq-title">
              Frequently Asked
              <span className="highlight"> Questions</span>
            </h1>
            <p className="faq-subtitle">
              Find answers to the most common questions about Benture AI.
              Can't find what you're looking for? <a href="/contact">Contact us</a>
            </p>
            <div className="faq-search">
              <input type="text" placeholder="Search your question..." />
              <button className="search-btn">🔍</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES ===== */}
      <section className="faq-categories">
        <div className="container">
          <div className="category-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ LIST ===== */}
      <section className="faq-list-section">
        <div className="container">
          <div className="faq-list">
            {currentFAQs.map((item, index) => {
              const isOpen = openItems.includes(item.question);
              return (
                <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-question"
                    onClick={() => toggleItem(item.question)}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="faq-more">
            <p>Still have questions?</p>
            <div className="faq-contact-options">
              <a href="/contact" className="btn btn-primary">📧 Contact Support</a>
              <a href="/chat" className="btn btn-outline">💬 Live Chat</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="faq-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📝</div>
              <div className="stat-info">
                <span className="stat-value">50+</span>
                <span className="stat-label">Questions Answered</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-info">
                <span className="stat-value">2 min</span>
                <span className="stat-label">Average Response Time</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-info">
                <span className="stat-value">98%</span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💬</div>
              <div className="stat-info">
                <span className="stat-value">24/7</span>
                <span className="stat-label">AI Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="faq-cta">
        <div className="container">
          <h2>Still Have Questions?</h2>
          <p>Our team is here to help. Reach out to us anytime.</p>
          <div className="faq-cta-actions">
            <a href="/contact" className="btn btn-primary btn-large">📧 Contact Us</a>
            <a href="mailto:support@benture.ai" className="btn btn-outline btn-light btn-large">
              ✉️ support@benture.ai
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;