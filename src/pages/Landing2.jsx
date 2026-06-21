import { Link } from "react-router-dom";
import "./Landing2.css";

const featureCards = [
  {
    title: "Resume Vault",
    description:
      "Save up to 10 resumes and keep every version ready for interviews and applications.",
  },
  {
    title: "Document Vault",
    description:
      "Store important career documents in one secure space and access them quickly.",
  },
  {
    title: "Resume Builder",
    description:
      "Create and edit professional resumes without complicated tools or setup.",
  },
  {
    title: "Resume Templates",
    description:
      "Choose ATS-friendly templates and download polished resume PDFs anytime.",
  },
  {
    title: "Public Resume Link",
    description:
      "Share one primary resume publicly using a clean phone-based link.",
  },
  {
    title: "Resume Upload & Conversion",
    description:
      "Upload an existing resume and continue editing it as structured content.",
  },
];

const faqItems = [
  {
    question: "What do I get with the yearly plan?",
    answer:
      "You get full CareerVault access, including resume creation, PDF downloads, resume upload conversion, document vault, and public resume sharing.",
  },
  {
    question: "How many resumes and documents can I store?",
    answer: "Up to 10 resumes and up to 10 documents per account.",
  },
  {
    question: "Can I edit uploaded resumes?",
    answer:
      "Yes. Uploaded resumes are converted into editable data so you can continue improving them in the builder.",
  },
  {
    question: "Is this complicated to use?",
    answer:
      "No. CareerVault is built for a simple workflow: sign up, upload or create, edit, and share.",
  },
];

export default function Landing() {
  return (
    <div className="landing-page">
      <header className="landing-nav">
        <div className="landing-brand">CareerVault</div>
        <div className="landing-nav-actions">
          <Link to="/login" className="btn btn-outline-dark btn-sm">
            Log In
          </Link>
          <Link to="/signup" className="btn btn-dark btn-sm">
            Get Started
          </Link>
        </div>
      </header>

      <section className="hero-section">
        <p className="hero-tag">Simple SaaS Resume Vault</p>
        <h1>Your Career Documents. Always Ready.</h1>
        <p className="hero-subtitle">
          Store, build, and share professional resumes with a clean workflow. One
          dashboard for resumes, documents, and your public resume link.
        </p>
        <div className="hero-cta-row">
          <Link to="/signup" className="btn btn-dark btn-lg">
            Start For INR 99/year
          </Link>
          <Link to="/login" className="btn btn-outline-dark btn-lg">
            I Already Have An Account
          </Link>
        </div>
        <div className="hero-benefits">
          <span>10 Resume Slots</span>
          <span>10 Document Slots</span>
          <span>Public Resume Link</span>
          <span>PDF Export</span>
        </div>
      </section>

      <section className="feature-section">
        <div className="section-head">
          <h2>Everything You Need In One Career Workspace</h2>
          <p>
            Designed for students, freshers, and professionals who want speed,
            clarity, and confidence.
          </p>
        </div>
        <div className="feature-grid">
          {featureCards.map((card) => (
            <article key={card.title} className="feature-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="how-section">
        <div className="section-head">
          <h2>How It Works</h2>
          <p>A fast 4-step flow built for real job seekers.</p>
        </div>
        <div className="how-grid">
          <div className="how-item">
            <span>1</span>
            <h3>Sign Up</h3>
            <p>Create your account and access your personal dashboard instantly.</p>
          </div>
          <div className="how-item">
            <span>2</span>
            <h3>Upload Or Create Resume</h3>
            <p>Start from scratch or upload an existing resume to edit it easily.</p>
          </div>
          <div className="how-item">
            <span>3</span>
            <h3>Store Documents</h3>
            <p>Keep certificates, letters, and career files in your document vault.</p>
          </div>
          <div className="how-item">
            <span>4</span>
            <h3>Share Anywhere</h3>
            <p>Set one primary resume and share your public profile link confidently.</p>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="pricing-card">
          <p className="price-label">Simple Pricing</p>
          <h2>INR 99</h2>
          <p className="per-year">per year</p>
          <ul>
            <li>Up to 10 resumes</li>
            <li>Up to 10 documents</li>
            <li>Resume upload and conversion</li>
            <li>Public resume link</li>
            <li>PDF download</li>
          </ul>
          <Link to="/signup" className="btn btn-dark w-100">
            Subscribe And Start
          </Link>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-head">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {faqItems.map((item) => (
            <article className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <h2>Store, Build and Share Professional Resumes.</h2>
        <p>
          Launch your career workflow in minutes with a focused, modern platform.
        </p>
        <div className="hero-cta-row">
          <Link to="/signup" className="btn btn-dark btn-lg">
            Create Account
          </Link>
          <Link to="/login" className="btn btn-outline-dark btn-lg">
            Login
          </Link>
        </div>
      </section>
    </div>
  );
}
