import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PortfolioPage.css';

const PortfolioPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ---------- STATE ----------
  const [isEditing, setIsEditing] = useState(false);
  const [showPublicView, setShowPublicView] = useState(false);

  // ---------- CHECK URL QUERY PARAMS ON LOAD ----------
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const publicParam = params.get('public');
    if (publicParam === 'true') {
      setShowPublicView(true);
    } else {
      setShowPublicView(false);
    }
  }, [location.search]);

  // ---------- DATA LOADING ----------
  const loadData = () => {
    const stored = localStorage.getItem('portfolio_data');
    if (!stored) return null;
    try {
      const parsed = JSON.parse(stored);
      ['skills', 'experience', 'education', 'services', 'projects', 'testimonials', 'cvs', 'documents', 'certificates', 'hobbies'].forEach(key => {
        if (!Array.isArray(parsed[key])) parsed[key] = [];
      });
      return parsed;
    } catch {
      return null;
    }
  };

  const defaultData = {
    name: 'Biswaranjan Pradhan',
    title: 'Full Stack Developer',
    bio: 'Passionate developer with 4+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud architecture.',
    location: 'Odisha, India',
    email: 'biswa@email.com',
    phone: '+91 98765 43210',
    linkedin: 'linkedin.com/in/biswaranjan',
    github: 'github.com/biswaranjan',
    website: 'biswaranjan.dev',
    heroQuote: 'Imagination is more important than knowledge.',
    heroSub: 'Together we the people achieve more than any single person could ever do alone.',
    downloadCVText: 'Download CV',
    avatar: '',
    skills: [
      { name: 'React.js', percentage: 90 },
      { name: 'Node.js', percentage: 85 },
      { name: 'Python', percentage: 75 },
      { name: 'AWS', percentage: 70 },
      { name: 'Docker', percentage: 65 },
      { name: 'MongoDB', percentage: 80 }
    ],
    experience: [
      { id: 1, company: 'Tech Solutions Inc.', role: 'Senior Full Stack Developer', period: '2022 - Present', description: 'Led development of 5+ enterprise applications. Mentored junior developers.' },
      { id: 2, company: 'Startup Hub', role: 'Software Engineer', period: '2020 - 2022', description: 'Built and maintained microservices architecture. Improved system performance by 40%.' }
    ],
    education: [
      { id: 1, institution: 'Odisha University of Technology', degree: 'B.Tech in Computer Science', year: '2020' }
    ],
    services: [
      { id: 1, title: 'Design Principles', description: 'Need a project completed by an expert? Let\'s go access a human resources consultant to answer questions.' },
      { id: 2, title: 'Unique Values', description: 'Need a project completed by an expert? Let\'s go access a human resources consultant to answer questions.' },
      { id: 3, title: 'Style Components', description: 'Need a project completed by an expert? Let\'s go access a human resources consultant to answer questions.' },
      { id: 4, title: 'Working Process', description: 'Need a project completed by an expert? Let\'s go access a human resources consultant to answer questions.' }
    ],
    projects: [
      { id: 1, title: 'Project Alpha', description: 'A modern web application for e-commerce.', image: '' },
      { id: 2, title: 'Project Beta', description: 'Mobile-first design system.', image: '' },
      { id: 3, title: 'Project Gamma', description: 'AI-powered analytics dashboard.', image: '' }
    ],
    testimonials: [
      { id: 1, name: 'Jack Metiyo Shina', text: 'Gilroy is a great and super-professional service provider, which brought new technologies, new methodology, and a fresh perspective to our project.', image: '' }
    ],
    certificates: [
      { id: 1, title: 'AWS Certified Solutions Architect', image: '', link: 'https://aws.amazon.com/certification' },
      { id: 2, title: 'Google Professional Cloud Developer', image: '', link: 'https://cloud.google.com/certification' }
    ],
    hobbies: ['Photography', 'Travelling', 'Reading', 'Chess'],
    cvs: [
      { id: 1, title: 'Full Stack Developer CV', modified: 'Jul 18, 2026', isPrimary: true, role: 'Full Stack Developer', fileUrl: '/cvs/fullstack.pdf' },
      { id: 2, title: 'Frontend Engineer CV', modified: 'Jul 10, 2026', isPrimary: false, role: 'Frontend Engineer', fileUrl: '/cvs/frontend.pdf' }
    ],
    documents: [
      { id: 1, name: 'Resume - Full Stack.pdf', type: 'Resume', uploaded: 'Jul 18, 2026' },
      { id: 2, name: 'Cover Letter - Google.pdf', type: 'Cover Letter', uploaded: 'Jul 15, 2026' },
      { id: 3, name: 'Certification - AWS.pdf', type: 'Certificate', uploaded: 'Jul 10, 2026' }
    ]
  };

  const [userData, setUserData] = useState(() => {
    const saved = loadData();
    return saved || defaultData;
  });

  const shareLink = `${window.location.origin}${window.location.pathname}?public=true`;

  useEffect(() => {
    localStorage.setItem('portfolio_data', JSON.stringify(userData));
  }, [userData]);

  // ---------- HANDLERS ----------
  const handleSaveProfile = (updatedData) => {
    setUserData(updatedData);
    setIsEditing(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(shareLink).then(() => {
      alert('📋 Portfolio link copied to clipboard!');
    }).catch(() => {
      const input = document.createElement('input');
      input.value = shareLink;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      alert('📋 Portfolio link copied to clipboard!');
    });
  };

  const handleSetPrimary = (cvId) => {
    const updatedCvs = userData.cvs.map(cv => ({
      ...cv,
      isPrimary: cv.id === cvId
    }));
    setUserData({ ...userData, cvs: updatedCvs });
  };

  const handleDeleteCV = (cvId) => {
    if (window.confirm('Are you sure you want to delete this CV?')) {
      const updatedCvs = userData.cvs.filter(cv => cv.id !== cvId);
      setUserData({ ...userData, cvs: updatedCvs });
    }
  };

  const handleDownloadPrimaryCV = () => {
    const primary = userData.cvs?.find(cv => cv.isPrimary);
    if (primary && primary.fileUrl) {
      window.open(primary.fileUrl, '_blank');
    } else {
      alert('No primary CV set yet.');
    }
  };

  const handleSaveAsTemplate = () => {
    localStorage.setItem('portfolio_template', JSON.stringify(userData));
    alert('📁 Portfolio data saved as template for auto‑filling!');
  };

  const handleBackToDashboard = () => {
    navigate('/portfolio');
    setShowPublicView(false);
  };

  const stats = {
    profileViews: 247,
    cvsCount: userData.cvs?.length || 0,
    documentsCount: userData.documents?.length || 0,
    shares: 12
  };

  // ---------- PUBLIC VIEW ----------
  const PublicView = ({ data }) => (
    <div className="portfolio-public">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-avatar">
            {data.avatar ? (
              <img src={data.avatar} alt={data.name} />
            ) : (
              <span>{data.name.split(' ').map(n => n[0]).join('')}</span>
            )}
          </div>
          <h1 className="hero-quote-large2">"{data.heroQuote}"</h1>
          <p className="hero-subtitle">{data.heroSub}</p>
          <h2>{data.name}</h2>
          <p className="hero-title">{data.title}</p>
          <button className="btn-primary hero-btn" onClick={handleDownloadPrimaryCV}>
            {data.downloadCVText}
          </button>
        </div>
      </section>

      {/* About Me */}
      <section className="profile-section">
        <div className="container">
          <h3>About Me</h3>
          <p className="bio-text-large">{data.bio}</p>
          <div className="contact-info">
            <span>📍 {data.location}</span>
            <span>📧 {data.email}</span>
            <span>🔗 <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
            <span>🔗 <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer">GitHub</a></span>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="profile-section alt-bg">
        <div className="container">
          <h3>Experience</h3>
          <div className="timeline">
            {data.experience.map(exp => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-date">{exp.period}</div>
                <div className="timeline-content">
                  <h4>{exp.role}</h4>
                  <h5>{exp.company}</h5>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="profile-section">
        <div className="container">
          <h3>Skills</h3>
          <div className="skills-grid">
            {data.skills.map((skill, idx) => (
              <div key={idx} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${skill.percentage}%` }}></div>
                </div>
                <span className="skill-percent">{skill.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="profile-section alt-bg">
        <div className="container">
          <h3>Education</h3>
          <div className="education-grid">
            {data.education.map(edu => (
              <div key={edu.id} className="edu-card">
                <h4>{edu.degree}</h4>
                <p>{edu.institution}</p>
                <span className="edu-year">{edu.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      {data.services.length > 0 && (
        <section className="profile-section">
          <div className="container">
            <h3>Services</h3>
            <div className="services-grid">
              {data.services.map(service => (
                <div key={service.id} className="service-card">
                  <div className="service-icon">💡</div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="profile-section alt-bg">
          <div className="container">
            <h3>Projects</h3>
            <div className="projects-grid">
              {data.projects.map(proj => (
                <div key={proj.id} className="project-card">
                  {proj.image && <img src={proj.image} alt={proj.title} />}
                  <h4>{proj.title}</h4>
                  <p>{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certificates */}
      {data.certificates.length > 0 && (
        <section className="profile-section">
          <div className="container">
            <h3>Certificates</h3>
            <div className="certificates-grid">
              {data.certificates.map(cert => (
                <div key={cert.id} className="certificate-card">
                  {cert.image ? (
                    <img src={cert.image} alt={cert.title} />
                  ) : (
                    <div className="certificate-placeholder">📜</div>
                  )}
                  <h4>{cert.title}</h4>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                      🔗 Verify Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hobbies */}
      {data.hobbies.length > 0 && (
        <section className="profile-section alt-bg">
          <div className="container">
            <h3>Hobbies & Interests</h3>
            <div className="hobbies-container">
              {data.hobbies.map((hobby, idx) => (
                <span key={idx} className="hobby-tag">{hobby}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {data.testimonials.length > 0 && (
        <section className="profile-section">
          <div className="container">
            <h3>Testimonials</h3>
            <div className="testimonials-grid">
              {data.testimonials.map(t => (
                <div key={t.id} className="testimonial-card">
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="testimonial-avatar" />
                  ) : (
                    <div className="testimonial-avatar-placeholder">👤</div>
                  )}
                  <p className="testimonial-text">“{t.text}”</p>
                  <span className="testimonial-author">— {t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );

  // ---------- EDIT VIEW ----------
  const EditView = ({ data, onSave, onCancel }) => {
    const [formData, setFormData] = useState(JSON.parse(JSON.stringify(data)));

    const updateField = (field, value) => {
      setFormData({ ...formData, [field]: value });
    };

    const updateArrayItem = (arrayName, id, field, value) => {
      const updated = formData[arrayName].map(item =>
        item.id === id ? { ...item, [field]: value } : item
      );
      setFormData({ ...formData, [arrayName]: updated });
    };

    const addArrayItem = (arrayName, template) => {
      const newItem = { ...template, id: Date.now() + Math.random() * 1000 };
      setFormData({ ...formData, [arrayName]: [...formData[arrayName], newItem] });
    };

    const removeArrayItem = (arrayName, id) => {
      const updated = formData[arrayName].filter(item => item.id !== id);
      setFormData({ ...formData, [arrayName]: updated });
    };

    const updateSkill = (index, field, value) => {
      const skills = [...formData.skills];
      skills[index] = { ...skills[index], [field]: value };
      setFormData({ ...formData, skills });
    };

    const addSkill = () => {
      setFormData({ ...formData, skills: [...formData.skills, { name: '', percentage: 0 }] });
    };

    const removeSkill = (index) => {
      const skills = formData.skills.filter((_, i) => i !== index);
      setFormData({ ...formData, skills });
    };

    // Hobbies helpers
    const addHobby = () => {
      setFormData({ ...formData, hobbies: [...formData.hobbies, ''] });
    };

    const updateHobby = (index, value) => {
      const hobbies = [...formData.hobbies];
      hobbies[index] = value;
      setFormData({ ...formData, hobbies });
    };

    const removeHobby = (index) => {
      const hobbies = formData.hobbies.filter((_, i) => i !== index);
      setFormData({ ...formData, hobbies });
    };

    const handleAvatarUpload = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({ ...formData, avatar: event.target.result });
      };
      reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSave(formData);
    };

    return (
      <div className="edit-page">
        <header className="edit-header">
          <h2>✏️ Edit Portfolio</h2>
          <div className="edit-actions">
            <button type="button" className="btn-outline" onClick={onCancel}>Cancel</button>
            <button type="button" className="btn-primary" onClick={handleSubmit}>💾 Save Changes</button>
          </div>
        </header>

        <form className="edit-form" onSubmit={handleSubmit}>
          {/* General Information */}
          <div className="edit-section">
            <h3>General Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" value={formData.name} onChange={(e) => updateField('name', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Title</label>
                <input type="text" value={formData.title} onChange={(e) => updateField('title', e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea rows="3" value={formData.bio} onChange={(e) => updateField('bio', e.target.value)} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Location</label>
                <input type="text" value={formData.location} onChange={(e) => updateField('location', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" value={formData.email} onChange={(e) => updateField('email', e.target.value)} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>LinkedIn</label>
                <input type="text" value={formData.linkedin} onChange={(e) => updateField('linkedin', e.target.value)} />
              </div>
              <div className="form-group">
                <label>GitHub</label>
                <input type="text" value={formData.github} onChange={(e) => updateField('github', e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <label>Hero Quote</label>
              <input type="text" value={formData.heroQuote} onChange={(e) => updateField('heroQuote', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Hero Subtitle</label>
              <input type="text" value={formData.heroSub} onChange={(e) => updateField('heroSub', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Download CV Button Text</label>
              <input type="text" value={formData.downloadCVText} onChange={(e) => updateField('downloadCVText', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Avatar Image (upload)</label>
              <input type="file" accept="image/*" onChange={handleAvatarUpload} />
              {formData.avatar && <img src={formData.avatar} alt="Avatar" className="avatar-preview" />}
            </div>
          </div>

          {/* Skills */}
          <div className="edit-section">
            <h3>Skills</h3>
            {formData.skills.map((skill, idx) => (
              <div key={idx} className="inline-editor">
                <input value={skill.name} onChange={(e) => updateSkill(idx, 'name', e.target.value)} placeholder="Skill" />
                <input type="number" value={skill.percentage} onChange={(e) => updateSkill(idx, 'percentage', Number(e.target.value))} placeholder="%" min="0" max="100" />
                <button type="button" className="btn-small danger" onClick={() => removeSkill(idx)}>✕</button>
              </div>
            ))}
            <button type="button" className="btn-outline btn-small" onClick={addSkill}>+ Add Skill</button>
          </div>

          {/* Experience */}
          <div className="edit-section">
            <h3>Experience</h3>
            {formData.experience.map(exp => (
              <div key={exp.id} className="inline-editor">
                <input value={exp.company} onChange={(e) => updateArrayItem('experience', exp.id, 'company', e.target.value)} placeholder="Company" />
                <input value={exp.role} onChange={(e) => updateArrayItem('experience', exp.id, 'role', e.target.value)} placeholder="Role" />
                <input value={exp.period} onChange={(e) => updateArrayItem('experience', exp.id, 'period', e.target.value)} placeholder="Period" />
                <input value={exp.description} onChange={(e) => updateArrayItem('experience', exp.id, 'description', e.target.value)} placeholder="Description" />
                <button type="button" className="btn-small danger" onClick={() => removeArrayItem('experience', exp.id)}>✕</button>
              </div>
            ))}
            <button type="button" className="btn-outline btn-small" onClick={() => addArrayItem('experience', { company: '', role: '', period: '', description: '' })}>+ Add Experience</button>
          </div>

          {/* Education */}
          <div className="edit-section">
            <h3>Education</h3>
            {formData.education.map(edu => (
              <div key={edu.id} className="inline-editor">
                <input value={edu.institution} onChange={(e) => updateArrayItem('education', edu.id, 'institution', e.target.value)} placeholder="Institution" />
                <input value={edu.degree} onChange={(e) => updateArrayItem('education', edu.id, 'degree', e.target.value)} placeholder="Degree" />
                <input value={edu.year} onChange={(e) => updateArrayItem('education', edu.id, 'year', e.target.value)} placeholder="Year" />
                <button type="button" className="btn-small danger" onClick={() => removeArrayItem('education', edu.id)}>✕</button>
              </div>
            ))}
            <button type="button" className="btn-outline btn-small" onClick={() => addArrayItem('education', { institution: '', degree: '', year: '' })}>+ Add Education</button>
          </div>

          {/* Services */}
          <div className="edit-section">
            <h3>Services</h3>
            {formData.services.map(service => (
              <div key={service.id} className="inline-editor">
                <input value={service.title} onChange={(e) => updateArrayItem('services', service.id, 'title', e.target.value)} placeholder="Title" />
                <input value={service.description} onChange={(e) => updateArrayItem('services', service.id, 'description', e.target.value)} placeholder="Description" />
                <button type="button" className="btn-small danger" onClick={() => removeArrayItem('services', service.id)}>✕</button>
              </div>
            ))}
            <button type="button" className="btn-outline btn-small" onClick={() => addArrayItem('services', { title: '', description: '' })}>+ Add Service</button>
          </div>

          {/* Projects */}
          <div className="edit-section">
            <h3>Projects</h3>
            {formData.projects.map(proj => (
              <div key={proj.id} className="inline-editor">
                <input value={proj.title} onChange={(e) => updateArrayItem('projects', proj.id, 'title', e.target.value)} placeholder="Title" />
                <input value={proj.description} onChange={(e) => updateArrayItem('projects', proj.id, 'description', e.target.value)} placeholder="Description" />
                <input value={proj.image} onChange={(e) => updateArrayItem('projects', proj.id, 'image', e.target.value)} placeholder="Image URL" />
                <button type="button" className="btn-small danger" onClick={() => removeArrayItem('projects', proj.id)}>✕</button>
              </div>
            ))}
            <button type="button" className="btn-outline btn-small" onClick={() => addArrayItem('projects', { title: '', description: '', image: '' })}>+ Add Project</button>
          </div>

          {/* Certificates */}
          <div className="edit-section">
            <h3>Certificates</h3>
            {formData.certificates.map(cert => (
              <div key={cert.id} className="inline-editor">
                <input value={cert.title} onChange={(e) => updateArrayItem('certificates', cert.id, 'title', e.target.value)} placeholder="Certificate Title" />
                <input value={cert.image} onChange={(e) => updateArrayItem('certificates', cert.id, 'image', e.target.value)} placeholder="Image URL" />
                <input value={cert.link} onChange={(e) => updateArrayItem('certificates', cert.id, 'link', e.target.value)} placeholder="Verify Link (optional)" />
                <button type="button" className="btn-small danger" onClick={() => removeArrayItem('certificates', cert.id)}>✕</button>
              </div>
            ))}
            <button type="button" className="btn-outline btn-small" onClick={() => addArrayItem('certificates', { title: '', image: '', link: '' })}>+ Add Certificate</button>
          </div>

          {/* Hobbies */}
          <div className="edit-section">
            <h3>Hobbies & Interests</h3>
            {formData.hobbies.map((hobby, idx) => (
              <div key={idx} className="inline-editor">
                <input value={hobby} onChange={(e) => updateHobby(idx, e.target.value)} placeholder="Hobby" />
                <button type="button" className="btn-small danger" onClick={() => removeHobby(idx)}>✕</button>
              </div>
            ))}
            <button type="button" className="btn-outline btn-small" onClick={addHobby}>+ Add Hobby</button>
          </div>

          {/* Testimonials */}
          <div className="edit-section">
            <h3>Testimonials</h3>
            {formData.testimonials.map(t => (
              <div key={t.id} className="inline-editor">
                <input value={t.name} onChange={(e) => updateArrayItem('testimonials', t.id, 'name', e.target.value)} placeholder="Name" />
                <input value={t.text} onChange={(e) => updateArrayItem('testimonials', t.id, 'text', e.target.value)} placeholder="Text" />
                <input value={t.image} onChange={(e) => updateArrayItem('testimonials', t.id, 'image', e.target.value)} placeholder="Image URL" />
                <button type="button" className="btn-small danger" onClick={() => removeArrayItem('testimonials', t.id)}>✕</button>
              </div>
            ))}
            <button type="button" className="btn-outline btn-small" onClick={() => addArrayItem('testimonials', { name: '', text: '', image: '' })}>+ Add Testimonial</button>
          </div>
        </form>
      </div>
    );
  };

  // ---------- MAIN RENDER ----------
  return (
    <div className="portfolio-page">
      {isEditing ? (
        <EditView
          data={userData}
          onSave={handleSaveProfile}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <main className="main-content">
          {showPublicView ? (
            // PUBLIC VIEW (full page)
            <>
              <div className="public-header">
                <h2>Public Profile</h2>
                <button className="btn-outline btn-small" onClick={handleBackToDashboard}>← Back to Dashboard</button>
              </div>
              <PublicView data={userData} />
            </>
          ) : (
            // DASHBOARD VIEW
            <>
              <header className="page-header">
                <div>
                  <h1 className="page-title">📋 Portfolio</h1>
                  <p className="page-subtitle">Manage your public profile</p>
                </div>
                <div className="header-actions">
                  <button className="btn-primary" onClick={() => setIsEditing(true)}>✏️ Edit</button>
                  <button className="btn-outline" onClick={() => setShowPublicView(true)}>👁️ Preview</button>
                  <button className="btn-outline" onClick={handleSaveAsTemplate}>📁 Save Template</button>
                  <button className="btn-primary" onClick={handleCopyLink}>🔗 Share</button>
                </div>
              </header>

              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-icon">👁️</span>
                  <div>
                    <div className="stat-value">{stats.profileViews}</div>
                    <div className="stat-label">Views</div>
                  </div>
                </div>
                <div className="stat-card">
                  <span className="stat-icon">📄</span>
                  <div>
                    <div className="stat-value">{stats.cvsCount}</div>
                    <div className="stat-label">CVs</div>
                  </div>
                </div>
                <div className="stat-card">
                  <span className="stat-icon">📁</span>
                  <div>
                    <div className="stat-value">{stats.documentsCount}</div>
                    <div className="stat-label">Documents</div>
                  </div>
                </div>
                <div className="stat-card">
                  <span className="stat-icon">🔗</span>
                  <div>
                    <div className="stat-value">{stats.shares}</div>
                    <div className="stat-label">Shares</div>
                  </div>
                </div>
              </div>

              <div className="cvs-docs-grid">
                <div className="cvs-container">
                  <h3>📄 Your CVs</h3>
                  {userData.cvs.map(cv => (
                    <div key={cv.id} className={`cv-item ${cv.isPrimary ? 'primary' : ''}`}>
                      <div>
                        <strong>{cv.title}</strong> {cv.isPrimary && <span className="primary-badge">⭐ Primary</span>}
                        <div className="cv-meta">{cv.role} • {cv.modified}</div>
                      </div>
                      <div className="cv-actions">
                        {!cv.isPrimary && (
                          <button className="btn-outline btn-small" onClick={() => handleSetPrimary(cv.id)}>Set Primary</button>
                        )}
                        <button className="btn-outline btn-small">View</button>
                        <button className="btn-outline btn-small">Download</button>
                        <button className="btn-outline btn-small danger" onClick={() => handleDeleteCV(cv.id)}>Delete</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="documents-container">
                  <h3>📁 Documents</h3>
                  {userData.documents.map(doc => (
                    <div key={doc.id} className="document-card">
                      <div className="document-icon">📄</div>
                      <div>
                        <div className="document-name">{doc.name}</div>
                        <div className="document-type">{doc.type}</div>
                        <div className="document-date">{doc.uploaded}</div>
                      </div>
                      <button className="btn-outline btn-small">Download</button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </main>
      )}
    </div>
  );
};

export default PortfolioPage;