// LandingPage.jsx
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const LandingPage = () => {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg fixed-top ${isNavbarScrolled ? 'glass-nav shadow-sm' : ''}`}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <span className="text-primary">Benture</span> AI
          </a>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#interview">AI Interview</a></li>
              <li className="nav-item"><a className="nav-link" href="#recruiters">Recruiters</a></li>
              <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary rounded-pill px-4">Login</button>
              <button className="btn btn-primary rounded-pill px-4">Join Waitlist</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero-section min-vh-100 d-flex align-items-center pt-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <button className="btn btn-primary btn-lg rounded-pill px-5 py-5">  Go to New Landing Page</button>
              <h1 className="display-3 fw-bold mb-3">Transform Your Career with <span className="text-primary">AI</span></h1>
              <p className="lead text-secondary mb-4">Create ATS-friendly resumes, practice AI interviews, improve spoken English, learn job-ready skills, and get discovered by recruiters.</p>
              <div className="d-flex gap-3 flex-wrap">
                <button className="btn btn-primary btn-lg rounded-pill px-5">Join Waitlist</button>
                <button className="btn btn-outline-secondary btn-lg rounded-pill px-5">
                  <i className="bi bi-play-circle me-2"></i>Watch Demo
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-illustration position-relative">
                <div className="row g-3">
                  {['Resume Builder', 'AI Analysis', 'Interview Practice', 'Video Profiles', 'Recruiter Discovery'].map((item, i) => (
                    <div key={i} className="col-6">
                      <div className="glass-card p-4 text-center h-100 animate__animated animate__fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
                        <i className={`bi bi-${['file-earmark-text', 'graph-up', 'mic', 'camera-video', 'people'][i]} fs-1 text-primary`}></i>
                        <p className="mt-2 fw-semibold mb-0">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="problem-section py-5">
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-3">The Job Search Process is <span className="text-primary">Broken</span></h2>
          <div className="row g-4 mt-4">
            {[
              { icon: 'file-earmark-x', title: 'Resume Rejections', desc: 'Most resumes never pass ATS systems.' },
              { icon: 'heart-pulse', title: 'Interview Anxiety', desc: 'Candidates struggle to prepare effectively.' },
              { icon: 'eye-slash', title: 'Lack of Visibility', desc: "Recruiters rarely see the real candidate behind the resume." },
              { icon: 'lightbulb', title: 'Skill Gaps', desc: "Candidates don't know what to learn next." }
            ].map((item, i) => (
              <div key={i} className="col-md-3 col-sm-6">
                <div className="problem-card p-4 text-center h-100">
                  <i className={`bi bi-${item.icon} fs-1 text-primary`}></i>
                  <h5 className="mt-3 fw-bold">{item.title}</h5>
                  <p className="text-secondary mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="solution-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-5">One Platform. <span className="text-primary">Complete Career Growth.</span></h2>
          <div className="row g-4">
            {['AI Resume Builder', 'AI Interview Coach', 'Spoken English Training', 'AI Learning Hub', 'Personalized Skill Training', 'Recruiter Discovery'].map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="solution-card p-4 h-100">
                  <div className="icon-wrapper bg-primary bg-opacity-10 rounded-3 p-3 d-inline-block mb-3">
                    <i className={`bi bi-${['file-earmark-text', 'mic', 'translate', 'cpu', 'person-gear', 'search'][i]} fs-2 text-primary`}></i>
                  </div>
                  <h5 className="fw-bold">{item}</h5>
                  <p className="text-secondary mb-0">AI-powered tools to accelerate your career growth.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features-section py-5">
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-5">Powerful <span className="text-primary">Features</span></h2>
          <div className="row g-4">
            {[
              { icon: 'file-earmark-arrow-up', title: 'AI Resume Builder', desc: 'Upload up to 3 resumes. AI parsing, ATS optimization, professional templates, PDF export.' },
              { icon: 'folder', title: 'Resume Management', desc: 'Create up to 10 resumes, primary selection, public link: bentureai.com/profile/username' },
              { icon: 'robot', title: 'AI Interview Coach', desc: 'Mock interviews with HR & technical questions. Get feedback & scoring.' },
              { icon: 'chat-dots', title: 'Spoken English Training', desc: 'AI conversation partner, pronunciation analysis, grammar corrections.' },
              { icon: 'book', title: 'AI Learning Hub', desc: 'Learn AI, Prompt Engineering, Workplace Productivity, Automation Skills.' },
              { icon: 'graph-up-arrow', title: 'Personalized Skill Training', desc: 'Analyze resume, detect gaps, recommend learning paths & practice questions.' }
            ].map((feature, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="feature-card p-4 h-100">
                  <i className={`bi bi-${feature.icon} fs-1 text-primary`}></i>
                  <h5 className="mt-3 fw-bold">{feature.title}</h5>
                  <p className="text-secondary mb-0">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section id="recruiters" className="vision-section py-5 bg-primary bg-opacity-10">
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-3">The <span className="text-primary">Future</span> of Recruitment</h2>
          <p className="text-center text-secondary mb-5">Candidates upload short videos. Recruiters discover talent through AI-powered search and video feeds.</p>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="vision-card p-4 h-100">
                <h5 className="fw-bold">For Recruiters</h5>
                <ul className="list-unstyled">
                  {['Search candidates', 'Apply filters', 'Watch introductions', 'Chat with candidates', 'Schedule interviews'].map((item, i) => (
                    <li key={i} className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="vision-card p-4 h-100">
                <h5 className="fw-bold">Roadmap</h5>
                <div className="timeline">
                  {['Resume Intelligence', 'AI Interview Coach', 'Skill Development', 'Recruiter Marketplace', 'AI Talent Network'].map((phase, i) => (
                    <div key={i} className="d-flex align-items-center mb-3">
                      <div className="phase-number bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '30px', height: '30px' }}>{i+1}</div>
                      <span>{phase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section py-5">
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-5">How It <span className="text-primary">Works</span></h2>
          <div className="row g-4">
            {['Upload Resume', 'AI Extracts & Optimizes', 'Create ATS-Friendly Resume', 'Practice AI Interviews', 'Improve Skills', 'Get Discovered'].map((step, i) => (
              <div key={i} className="col-lg-2 col-md-4 col-6 text-center">
                <div className="step-circle bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '60px', height: '60px' }}>{i+1}</div>
                <p className="fw-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="compare-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-5">Why <span className="text-primary">Benture AI</span></h2>
          <div className="table-responsive">
            <table className="table table-bordered bg-white">
              <thead className="table-primary">
                <tr>
                  <th>Features</th>
                  <th>Benture AI</th>
                  <th>Traditional Resume Builders</th>
                </tr>
              </thead>
              <tbody>
                {['ATS Optimization', 'AI Interview Practice', 'Spoken English Training', 'Skill Gap Analysis', 'Video Profile', 'Recruiter Discovery', 'AI Learning'].map((item, i) => (
                  <tr key={i}>
                    <td>{item}</td>
                    <td><i className="bi bi-check-circle-fill text-success"></i></td>
                    <td>{['ATS Optimization', 'AI Interview Practice', 'Spoken English Training'].includes(item) ? <i className="bi bi-x-circle-fill text-danger"></i> : <i className="bi bi-check-circle-fill text-success"></i>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section py-5">
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-5">What Our <span className="text-primary">Users Say</span></h2>
          <div className="row g-4">
            {[
              { name: 'Sarah Johnson', role: 'Software Engineer', text: "Benture AI helped me land my dream job at Google. The AI interview coach was incredibly realistic!" },
              { name: 'Michael Chen', role: 'Career Switcher', text: "I switched from finance to tech in 3 months. Benture AI's skill gap analysis showed me exactly what to learn." },
              { name: 'Priya Patel', role: 'HR Manager', text: "As a recruiter, I love the video profiles. I can see the real candidate before scheduling interviews." }
            ].map((testimonial, i) => (
              <div key={i} className="col-md-4">
                <div className="testimonial-card p-4 h-100">
                  <i className="bi bi-quote fs-1 text-primary opacity-50"></i>
                  <p className="text-secondary">{testimonial.text}</p>
                  <div className="d-flex align-items-center">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white fw-bold" style={{ width: '40px', height: '40px' }}>{testimonial.name.charAt(0)}</div>
                    <div className="ms-3">
                      <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                      <small className="text-secondary">{testimonial.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-5">Simple, <span className="text-primary">Transparent</span> Pricing</h2>
          <div className="row g-4 justify-content-center">
            {[
              { name: 'Free', price: '$0', features: ['Resume Builder'], button: 'Get Started' },
              { name: 'Pro', price: '$19/mo', features: ['AI Resume Analysis', 'AI Interview Coach', 'Spoken English Training'], button: 'Join Waitlist' },
              { name: 'Premium', price: 'Coming Soon', features: ['Future Recruiter Features', 'Video Profiles', 'AI Talent Network'], button: 'Notify Me', badge: 'Coming Soon' }
            ].map((plan, i) => (
              <div key={i} className="col-md-4">
                <div className={`pricing-card p-4 h-100 ${i === 1 ? 'border-primary border-2 shadow' : ''}`}>
                  {plan.badge && <span className="badge bg-primary mb-3">{plan.badge}</span>}
                  <h3 className="fw-bold">{plan.name}</h3>
                  <div className="display-6 fw-bold mb-3">{plan.price}</div>
                  <ul className="list-unstyled">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i>{feature}</li>
                    ))}
                  </ul>
                  <button className={`btn ${i === 1 ? 'btn-primary' : 'btn-outline-primary'} w-100 rounded-pill`}>{plan.button}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section py-5">
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-5">Frequently Asked <span className="text-primary">Questions</span></h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {[
                { q: 'How many resumes can I create?', a: 'You can create up to 10 resumes with Benture AI.' },
                { q: 'Can I download PDF resumes?', a: 'Yes! All resumes can be exported as professional PDFs.' },
                { q: 'Is ATS optimization included?', a: 'Absolutely. All resumes are automatically optimized for ATS systems.' },
                { q: 'Will recruiters be able to contact me?', a: 'Yes, when you opt-in to recruiter discovery, recruiters can reach out.' },
                { q: 'Is AI Interview available?', a: "Yes! Practice with our AI interviewer anytime, anywhere." }
              ].map((faq, i) => (
                <div key={i} className="faq-item border-bottom py-3">
                  <h6 className="fw-bold">{faq.q}</h6>
                  <p className="text-secondary mb-0">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="display-4 fw-bold mb-3">Ready to Build Your <span className="text-warning">Future</span>?</h2>
          <p className="lead mb-4">Join the Benture AI waitlist and experience the future of career growth.</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn btn-light btn-lg rounded-pill px-5 text-primary fw-bold">Join Waitlist</button>
            <button className="btn btn-outline-light btn-lg rounded-pill px-5">Request Demo</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-5 bg-dark text-white">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="fw-bold"><span className="text-primary">Benture</span> AI</h5>
              <p className="text-secondary">Build Better Careers with AI</p>
            </div>
            <div className="col-md-4">
              <h6>Quick Links</h6>
              <ul className="list-unstyled">
                {['About', 'Features', 'Pricing', 'Contact'].map((item, i) => (
                  <li key={i}><a href="#" className="text-secondary text-decoration-none">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="col-md-4">
              <h6>Legal</h6>
              <ul className="list-unstyled">
                {['Privacy Policy', 'Terms & Conditions'].map((item, i) => (
                  <li key={i}><a href="#" className="text-secondary text-decoration-none">{item}</a></li>
                ))}
              </ul>
              <div className="d-flex gap-3 mt-3">
                <a href="#" className="text-secondary"><i className="bi bi-linkedin fs-5"></i></a>
                <a href="#" className="text-secondary"><i className="bi bi-youtube fs-5"></i></a>
                <a href="#" className="text-secondary"><i className="bi bi-instagram fs-5"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .glass-nav {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          transition: transform 0.3s;
        }
        .glass-card:hover {
          transform: translateY(-5px);
        }
        .problem-card, .solution-card, .feature-card, .vision-card, .testimonial-card, .pricing-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .problem-card:hover, .solution-card:hover, .feature-card:hover, .vision-card:hover, .testimonial-card:hover, .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
        }
        .step-circle {
          font-weight: bold;
          font-size: 1.2rem;
        }
        .phase-number {
          font-weight: bold;
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 80px !important;
          }
          .display-3 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;