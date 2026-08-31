import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './PortfolioPage.css';
import { apiRequest } from '../lib/apiClient';
import { useAuth } from '../context/AuthContext';

const PortfolioPage = () => {
  const navigate = useNavigate();
  const { email: emailParam } = useParams();
  const { user } = useAuth();
  const decodedEmail = emailParam ? decodeURIComponent(emailParam) : null;
  const isPublicProfile = Boolean(decodedEmail);
  const isOwner = !isPublicProfile || Boolean(
    decodedEmail &&
    user?.email &&
    decodedEmail.toLowerCase() === user.email.toLowerCase()
  );

  // ---------- STATE ----------
  const [isEditing, setIsEditing] = useState(false);

  // ---------- DATA ----------
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

  const [userData, setUserData] = useState(defaultData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  const shareLink = decodedEmail
    ? `${window.location.origin}/profile/${encodeURIComponent(decodedEmail)}`
    : `${window.location.origin}/profile/${encodeURIComponent(user?.email || 'user')}`;

  useEffect(() => {
    const loadData = async () => {
      try {
        const query = isPublicProfile
          ? `/portfolio.php?type=data&email=${encodeURIComponent(decodedEmail)}`
          : '/portfolio.php?type=data';

        const response = await apiRequest(query);
        const parsed = response?.item?.data || null;
        if (parsed && typeof parsed === 'object') {
          ['skills', 'experience', 'education', 'services', 'projects', 'testimonials', 'cvs', 'documents', 'certificates', 'hobbies'].forEach(key => {
            if (!Array.isArray(parsed[key])) parsed[key] = [];
          });
          setUserData(parsed);
        }
      } catch (e) {
        setError(
          e instanceof Error
            ? e.message
            : 'Failed to load portfolio data.'
        );
      } finally {
        setLoading(false);
        setIsInitialized(true);
      }
    };

    loadData();
  }, [decodedEmail, isPublicProfile]);

  useEffect(() => {
    if (!isInitialized || isPublicProfile || !isOwner) return;

    apiRequest('/portfolio.php?type=data', {
      method: 'PUT',
      body: { data: userData },
    }).catch((e) => {
      setError(e instanceof Error ? e.message : 'Failed to save portfolio data.');
    });
  }, [userData, isInitialized, isPublicProfile, isOwner]);

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

  const handleDownloadPrimaryCV = () => {
    const primary = userData.cvs?.find(cv => cv.isPrimary);
    if (primary && primary.fileUrl) {
      window.open(primary.fileUrl, '_blank');
    } else {
      alert('No primary CV set yet.');
    }
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
          <h5 className="hero-subtitle">{data.heroSub}</h5>
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
  const canEdit = !isPublicProfile || isOwner;

  if (isPublicProfile) {
    return (
      <div className="portfolio-page">
        {loading && <div className="p-3 text-sm text-gray-600">Loading portfolio data...</div>}
        {error && <div className="m-3 rounded border border-red-300 bg-red-50 p-3 text-sm text-red-700">{error}</div>}
        <PublicView data={userData} />
      </div>
    );
  }

  const pageContent = (
    <div className="portfolio-page">
      {loading && <div className="p-3 text-sm text-gray-600">Loading portfolio data...</div>}
      {error && <div className="m-3 rounded border border-red-300 bg-red-50 p-3 text-sm text-red-700">{error}</div>}
      {isEditing && canEdit ? (
        <EditView
          data={userData}
          onSave={handleSaveProfile}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <div className="public-toolbar">
            <div className="toolbar-actions" style={{display:'flex',justifyContent:'space-between'}}>
              <button className="btn-primary" onClick={() => setIsEditing(true)}>✏️ Edit</button>
              <button className="btn-primary" onClick={handleCopyLink}>🔗 Share</button>
            </div>
          </div>
          <PublicView data={userData} />
        </>
      )}
    </div>
  );

  return pageContent;
};

export default PortfolioPage;