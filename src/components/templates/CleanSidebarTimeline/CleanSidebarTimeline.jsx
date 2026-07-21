import React from 'react';
import './CleanSidebarTimeline.css';

const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const IconPin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const IconLink = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
);

const CleanSidebarTimeline = ({ data, onSectionAction }) => {
  const {
    personalInfo = {},
    sectionHeadings = {},
    technicalSummaryLabels = {},
    sectionLayout = { sidebar: [], main: [] },
    sectionContent = {},
  } = data;

  const h = {
    contact: sectionHeadings.contact || 'Contact',
    skills: sectionHeadings.skills || 'Expertise',
    education: sectionHeadings.education || 'Education',
    certifications: sectionHeadings.certifications || 'Certifications',
    experience: sectionHeadings.experience || 'Work Experience',
    projects: sectionHeadings.projects || 'Projects',
    technicalSummary: sectionHeadings.technicalSummary || 'Language',
  };

  const getSectionData = (entry) => {
    const bucket = sectionContent[entry.type] || {};
    if (entry.source === 'instance') {
      const instances = bucket.instances || [];
      return instances[entry.instanceIndex] || bucket.base || {};
    }
    return bucket.base || {};
  };

  const SectionControls = ({ region, index, total, isSidebar = false }) => (
    <div className={`cst-controls no-print ${isSidebar ? 'cst-controls-sidebar' : ''}`}>
      <button
        type="button"
        aria-label="Move section up"
        title="Move section up"
        onClick={() => onSectionAction?.(region, 'up', index)}
        disabled={index === 0}
      >
        &#8593;
      </button>
      <button
        type="button"
        aria-label="Move section down"
        title="Move section down"
        onClick={() => onSectionAction?.(region, 'down', index)}
        disabled={index === total - 1}
      >
        &#8595;
      </button>
      <button
        type="button"
        aria-label="Duplicate section"
        title="Duplicate section"
        onClick={() => onSectionAction?.(region, 'duplicate', index)}
      >
        +
      </button>
      <button
        type="button"
        aria-label="Delete section"
        title="Delete section"
        onClick={() => onSectionAction?.(region, 'delete', index)}
      >
        &times;
      </button>
    </div>
  );

  const renderSectionBody = (entry, region) => {
    const type = entry.type;
    const value = getSectionData(entry);

    if (type === "contact") {
      return (
        <div className="cst-contact-list">
          {value.phone && (
            <div className="cst-contact-item">
              <span className="cst-icon-wrap"><IconPhone /></span>
              <span>{value.phone}</span>
            </div>
          )}
          {value.email && (
            <div className="cst-contact-item">
              <span className="cst-icon-wrap"><IconMail /></span>
              <span>{value.email}</span>
            </div>
          )}
          {value.location && (
            <div className="cst-contact-item">
              <span className="cst-icon-wrap"><IconPin /></span>
              <span className="cst-pre-line">{value.location}</span>
            </div>
          )}
          {value.linkedin && (
            <div className="cst-contact-item">
              <span className="cst-icon-wrap"><IconLink /></span>
              <span>{value.linkedin.replace(/^https?:\/\//, '')}</span>
            </div>
          )}
          {value.github && (
            <div className="cst-contact-item">
              <span className="cst-icon-wrap"><IconLink /></span>
              <span>{value.github.replace(/^https?:\/\//, '')}</span>
            </div>
          )}
        </div>
      );
    }

    if (type === "skills") {
      return (
        <div className="cst-expertise-list">
          {(value.items || []).map((skill, index) => {
            const parts = skill.split('|');
            const name = parts[0];
            const percent = parts[1] ? `${parts[1]}%` : '80%'; // fallback for generic visualization
            return (
              <div key={index} className="cst-expertise-item">
                <div className="cst-expertise-name">{name}</div>
                <div className="cst-expertise-bar-bg">
                  <div className="cst-expertise-bar-fill" style={{ width: percent }}></div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    if (type === "education") {
      return (
        <div className="cst-education-list">
          {(value.items || []).map((item, index) => (
            <div key={index} className="cst-edu-item">
              <div className="cst-edu-year">{item.year}</div>
              <div className="cst-edu-degree">{item.degree}</div>
              <div className="cst-edu-school">{item.school}</div>
            </div>
          ))}
        </div>
      );
    }

    if (type === "experience") {
      return (
        <div className="cst-experience-timeline">
          {(value.items || []).map((job, index) => (
            <div key={index} className="cst-timeline-item">
              <div className="cst-timeline-dot"></div>
              <h3 className="cst-job-title">{job.title}</h3>
              <div className="cst-job-meta">
                <span className="cst-job-company">{job.company}</span>
                {job.duration && <span className="cst-job-date"> {job.duration}</span>}
              </div>
              {job.achievements && job.achievements.length > 0 && (
                <ul className="cst-bullets">
                  {job.achievements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      );
    }

    if (type === "projects") {
      return (
        <div className="cst-projects-timeline">
          {(value.items || []).map((project, index) => (
            <div key={index} className="cst-timeline-item">
              <div className="cst-timeline-dot"></div>
              <h3 className="cst-job-title">{project.title}</h3>
              {project.description && (
                <p className="cst-project-desc">{project.description}</p>
              )}
            </div>
          ))}
        </div>
      );
    }

    if (type === "certifications") {
      return (
        <ul className="cst-bullets">
          {(value.items || []).map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      );
    }

    if (type === "technicalSummary") {
      const languages = (value.languages || '').split('\n').filter(Boolean);
      return (
        <div className="cst-languages-list">
          {languages.map((lang, idx) => {
            const parts = lang.split('|');
            const name = parts[0];
            const score = parseInt(parts[1] || '0', 10);
            return (
              <div key={idx} className="cst-lang-item">
                <span className="cst-lang-name">{name}</span>
                <div className="cst-lang-dots">
                  {[1, 2, 3, 4, 5].map(num => (
                    <div 
                      key={num} 
                      className={`cst-lang-dot ${num <= score ? 'cst-lang-dot-filled' : ''}`}
                    ></div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="cst-container">
      <aside className="cst-sidebar">
        {personalInfo.image && (
          <div className="cst-photo-container">
            <img src={personalInfo.image} alt={personalInfo.fullName} className="cst-photo" />
          </div>
        )}

        {(sectionLayout.sidebar || []).map((section, index) => (
          <section key={section.id} className="cst-section cst-sidebar-section">
            <div className="cst-section-header">
              <h2 className="cst-section-title cst-sidebar-title">{h[section.type]}</h2>
              <SectionControls region="sidebar" index={index} total={(sectionLayout.sidebar || []).length} isSidebar={true} />
            </div>
            {renderSectionBody(section, 'sidebar')}
          </section>
        ))}
      </aside>

      <main className="cst-main">
        <header className="cst-header">
          <h1 className="cst-name">{personalInfo.fullName}</h1>
          <h2 className="cst-title">{personalInfo.title}</h2>
          
          {personalInfo.summary && (
            <section className="cst-section cst-profile-section">
              <div className="cst-section-header">
                <h2 className="cst-section-title">Profile</h2>
              </div>
              <p className="cst-summary-text">{personalInfo.summary}</p>
            </section>
          )}
        </header>

        {(sectionLayout.main || []).map((section, index) => (
          <section key={section.id} className="cst-section cst-main-section">
            <div className="cst-section-header">
              <h2 className="cst-section-title">{h[section.type]}</h2>
              <SectionControls region="main" index={index} total={(sectionLayout.main || []).length} />
            </div>
            {renderSectionBody(section, 'main')}
          </section>
        ))}
      </main>
    </div>
  );
};

export default CleanSidebarTimeline;