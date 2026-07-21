import React from 'react';
import './CreativeBlue.css';

// SVG Icons
const HexIcon = ({ children }) => (
  <svg width="28" height="28" viewBox="0 0 24 24" className="cb-hex-base">
    <polygon points="12 2 22 7 22 17 12 22 2 17 2 7" fill="#2b5b84" />
    <g fill="#ffffff" transform="scale(0.6) translate(8, 8)">
      {children}
    </g>
  </svg>
);

const ContactIcon = ({ children }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" className="cb-contact-icon">
    <path d="M4 4h16v16H4z" fill="#b3d4e5" rx="4" />
    <g stroke="#2b5b84" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      {children}
    </g>
  </svg>
);

const BulletIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" className="cb-bullet">
    <path d="M5 3l14 9-14 9z" fill="#1ea096" />
  </svg>
);

const CreativeBlue = ({ data, onSectionAction }) => {
  const {
    personalInfo = {},
    sectionHeadings = {},
    sectionLayout = { sidebar: [], main: [] },
    sectionContent = {},
  } = data;

  const h = {
    contact: sectionHeadings.contact || 'CONTACT',
    skills: sectionHeadings.skills || 'GENERAL SKILLS',
    education: sectionHeadings.education || 'EDUCATION',
    certifications: sectionHeadings.certifications || 'INTERESTS',
    experience: sectionHeadings.experience || 'WORK EXPERIENCE',
    projects: sectionHeadings.projects || 'PERSONAL PROJECTS',
    technicalSummary: sectionHeadings.technicalSummary || 'LANGUAGES',
  };

  const getSectionData = (entry) => {
    const bucket = sectionContent[entry.type] || {};
    if (entry.source === 'instance') {
      const instances = bucket.instances || [];
      return instances[entry.instanceIndex] || bucket.base || {};
    }
    return bucket.base || {};
  };

  const SectionControls = ({ region, index, total }) => (
    <div className="cb-controls no-print">
      <button
        type="button"
        aria-label="Move section up"
        title="Move section up"
        onClick={() => onSectionAction?.(region, 'up', index)}
        disabled={index === 0}
      >
        [Up]
      </button>
      <button
        type="button"
        aria-label="Move section down"
        title="Move section down"
        onClick={() => onSectionAction?.(region, 'down', index)}
        disabled={index === total - 1}
      >
        [Dn]
      </button>
      <button
        type="button"
        aria-label="Duplicate section"
        title="Duplicate section"
        onClick={() => onSectionAction?.(region, 'duplicate', index)}
      >
        [++]
      </button>
      <button
        type="button"
        aria-label="Delete section"
        title="Delete section"
        onClick={() => onSectionAction?.(region, 'delete', index)}
      >
        [X]
      </button>
    </div>
  );

  const renderSectionIcon = (type) => {
    switch (type) {
      case 'experience':
        return <path d="M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5z" />;
      case 'education':
        return <path d="M12 3L1 9l4 2.18v6L12 21l7-4.82v-6l2.12-1.15V17h2V9L12 3zm6.83 6.4L12 13.1l-6.83-3.7L12 5.7l6.83 3.7z" />;
      case 'skills':
        return <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />;
      case 'projects':
        return <path d="M12 2L2 22l10-3 10 3L12 2z" />;
      case 'technicalSummary':
        return <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />;
      case 'certifications':
        return <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />;
      default:
        return <circle cx="12" cy="12" r="8" />;
    }
  };

  const renderSectionBody = (entry) => {
    const type = entry.type;
    const value = getSectionData(entry);

    if (type === "experience") {
      return (
        <div className="cb-experience-list">
          {(value.items || []).map((job, index) => (
            <div key={index} className="cb-job-item">
              <h3 className="cb-job-title">{job.title}</h3>
              <div className="cb-job-company">{job.company}</div>
              <div className="cb-job-date">{job.duration}</div>
              {job.achievements && job.achievements.length > 0 && (
                <>
                  <div className="cb-job-achievements-label">Achievements</div>
                  <ul className="cb-bullets">
                    {job.achievements.map((item, idx) => (
                      <li key={idx}>
                        <div className="cb-bullet-wrapper"><BulletIcon /></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      );
    }

    if (type === "education") {
      return (
        <div className="cb-education-list">
          {(value.items || []).map((item, index) => (
            <div key={index} className="cb-edu-item">
              <h3 className="cb-edu-degree">{item.degree}</h3>
              <div className="cb-edu-school">{item.school}</div>
              <div className="cb-edu-date">{item.year}</div>
            </div>
          ))}
        </div>
      );
    }

    if (type === "skills") {
      return (
        <div className="cb-skills-grid">
          {(value.items || []).map((skill, index) => (
            <div key={index} className="cb-skill-item">{skill}</div>
          ))}
        </div>
      );
    }

    if (type === "projects") {
      return (
        <div className="cb-projects-list">
          {(value.items || []).map((project, index) => {
            const parts = project.title.split('(');
            const role = parts[0];
            const dates = parts.length > 1 ? '(' + parts[1] : '';
            return (
              <div key={index} className="cb-project-item">
                <h3 className="cb-project-title">
                  {role} <span className="cb-project-date">{dates}</span>
                </h3>
                {project.description && (
                  <ul className="cb-bullets">
                    {project.description.split('\n').map((item, idx) => (
                      <li key={idx}>
                        <div className="cb-bullet-wrapper"><BulletIcon /></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    if (type === "technicalSummary") {
      const languages = (value.languages || '').split('\n').map(l => l.split('|'));
      return (
        <div className="cb-languages-grid">
          {languages.map((lang, idx) => (
            <div key={idx} className="cb-lang-item">
              <div className="cb-lang-name">{lang[0]}</div>
              {lang[1] && <div className="cb-lang-prof">{lang[1]}</div>}
            </div>
          ))}
        </div>
      );
    }

    if (type === "certifications") {
      return (
        <div className="cb-interests-grid">
          {(value.items || []).map((cert, index) => (
            <div key={index} className="cb-interest-item">
              <BulletIcon /> <span>{cert}</span>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="cb-container">
      <header className="cb-header">
        <div className="cb-header-left">
          <h1 className="cb-name">{personalInfo.fullName}</h1>
          <h2 className="cb-title">{personalInfo.title}</h2>
          {personalInfo.summary && <p className="cb-summary">{personalInfo.summary}</p>}
          <div className="cb-diamond"></div>
        </div>
        
        <div className="cb-header-right">
          {personalInfo.email && (
            <div className="cb-contact-row">
              <span>{personalInfo.email}</span>
              <ContactIcon><path d="M4 4h16v16H4z"/><path d="M4 8l8 5 8-5"/></ContactIcon>
            </div>
          )}
          {personalInfo.phone && (
            <div className="cb-contact-row">
              <span>{personalInfo.phone}</span>
              <ContactIcon><path d="M6 2v20M6 6h12v12H6z"/></ContactIcon>
            </div>
          )}
          {personalInfo.location && (
            <div className="cb-contact-row">
              <span>{personalInfo.location}</span>
              <ContactIcon><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></ContactIcon>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="cb-contact-row">
              <span>{personalInfo.linkedin}</span>
              <ContactIcon><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></ContactIcon>
            </div>
          )}
          {personalInfo.github && (
            <div className="cb-contact-row">
              <span>{personalInfo.github}</span>
              <ContactIcon><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></ContactIcon>
            </div>
          )}
        </div>

        <div className="cb-photo-wrapper">
          {personalInfo.image && (
            <img src={personalInfo.image} alt="Profile" className="cb-photo" />
          )}
        </div>
      </header>

      <div className="cb-layout">
        <main className="cb-main">
          {(sectionLayout.main || []).map((section, index) => (
            <section key={section.id} className="cb-section">
              <div className="cb-section-header">
                <div className="cb-section-title-wrap">
                  <HexIcon>{renderSectionIcon(section.type)}</HexIcon>
                  <h3 className="cb-section-title">{h[section.type]}</h3>
                </div>
                <SectionControls region="main" index={index} total={(sectionLayout.main || []).length} />
              </div>
              {renderSectionBody(section)}
            </section>
          ))}
        </main>

        <aside className="cb-sidebar">
          {(sectionLayout.sidebar || []).map((section, index) => (
            <section key={section.id} className="cb-section">
              <div className="cb-section-header">
                <div className="cb-section-title-wrap">
                  <HexIcon>{renderSectionIcon(section.type)}</HexIcon>
                  <h3 className="cb-section-title">{h[section.type]}</h3>
                </div>
                <SectionControls region="sidebar" index={index} total={(sectionLayout.sidebar || []).length} />
              </div>
              {renderSectionBody(section)}
            </section>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default CreativeBlue;