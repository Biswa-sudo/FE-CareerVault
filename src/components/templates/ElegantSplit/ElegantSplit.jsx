import React from 'react';
import './ElegantSplit.css';

const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const IconPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const IconLink = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
);

const ElegantSplit = ({ data, onSectionAction }) => {
  const {
    personalInfo = {},
    sectionHeadings = {},
    technicalSummaryLabels = {},
    sectionLayout = { sidebar: [], main: [] },
    sectionContent = {},
  } = data;

  const h = {
    contact: sectionHeadings.contact || 'CONTACT',
    skills: sectionHeadings.skills || 'SKILLS',
    education: sectionHeadings.education || 'EDUCATION',
    certifications: sectionHeadings.certifications || 'CERTIFICATIONS',
    experience: sectionHeadings.experience || 'EXPERIENCE',
    projects: sectionHeadings.projects || 'PROJECTS',
    technicalSummary: sectionHeadings.technicalSummary || 'EXPERTISE',
  };

  const getSectionData = (entry) => {
    const bucket = sectionContent[entry.type] || {};
    if (entry.source === 'instance') {
      const instances = bucket.instances || [];
      return instances[entry.instanceIndex] || bucket.base || {};
    }
    return bucket.base || {};
  };

  const SectionControls = ({ region, index, total, isDark = false }) => (
    <div className={`es-controls no-print ${isDark ? 'es-controls-dark' : ''}`}>
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
        <div className="es-contact-list">
          {value.email && (
            <div className="es-contact-item">
              <IconMail /> <span>{value.email}</span>
            </div>
          )}
          {value.phone && (
            <div className="es-contact-item">
              <IconPhone /> <span>{value.phone}</span>
            </div>
          )}
          {value.location && (
            <div className="es-contact-item">
              <IconPin /> <span className="es-pre-line">{value.location}</span>
            </div>
          )}
          {value.linkedin && (
            <div className="es-contact-item">
              <IconLink /> <span>{value.linkedin.replace(/^https?:\/\//, '')}</span>
            </div>
          )}
          {value.github && (
            <div className="es-contact-item">
              <IconLink /> <span>{value.github.replace(/^https?:\/\//, '')}</span>
            </div>
          )}
        </div>
      );
    }

    if (type === "skills" || type === "certifications") {
      return (
        <div className="es-tags">
          {(value.items || []).map((item, index) => (
            <span key={index} className="es-tag">{item}</span>
          ))}
        </div>
      );
    }

    if (type === "technicalSummary") {
      const rows = [
        { label: technicalSummaryLabels.languages || 'Languages', val: value.languages },
        { label: technicalSummaryLabels.frameworks || 'Frameworks', val: value.frameworks },
        { label: technicalSummaryLabels.databases || 'Databases', val: value.databases },
        { label: technicalSummaryLabels.cloud || 'Cloud/DevOps', val: value.cloud },
        { label: technicalSummaryLabels.tools || 'Tools', val: value.tools }
      ].filter(r => r.val);

      return (
        <div className="es-tech-list">
          {rows.map((row, idx) => (
            <div key={idx} className="es-tech-item">
              <span className="es-tech-label">{row.label}</span>
              <span className="es-tech-val">{row.val}</span>
            </div>
          ))}
          {(value.additional || []).map((add, idx) => (
            <div key={`add-${idx}`} className="es-tech-item">
              <span className="es-tech-label">{add.label}</span>
              <span className="es-tech-val">{add.value}</span>
            </div>
          ))}
        </div>
      );
    }

    if (type === "experience") {
      return (
        <div className="es-timeline">
          {(value.items || []).map((job, index) => (
            <div key={index} className="es-timeline-item">
              <div className="es-timeline-date">{job.duration}</div>
              <div className="es-timeline-content">
                <h3 className="es-job-title">{job.title}</h3>
                <div className="es-job-company">
                  {job.company} {job.location && ` | ${job.location}`}
                </div>
                {job.achievements && job.achievements.length > 0 && (
                  <ul className="es-bullets">
                    {job.achievements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (type === "education") {
      return (
        <div className="es-timeline">
          {(value.items || []).map((item, index) => (
            <div key={index} className="es-timeline-item">
              <div className="es-timeline-date">{item.year}</div>
              <div className="es-timeline-content">
                <h3 className="es-job-title">{item.degree}</h3>
                <div className="es-job-company">{item.school}</div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (type === "projects") {
      return (
        <div className="es-projects">
          {(value.items || []).map((project, index) => (
            <div key={index} className="es-project-item">
              <h3 className="es-job-title">{project.title}</h3>
              {project.description && (
                <p className="es-project-desc">{project.description}</p>
              )}
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="es-container">
      <aside className="es-sidebar">
        <div className="es-sidebar-top">
          {personalInfo.image && (
            <div className="es-photo-wrap">
              <img src={personalInfo.image} alt={personalInfo.fullName} className="es-photo" />
            </div>
          )}
        </div>
        
        <div className="es-sidebar-content">
          {(sectionLayout.sidebar || []).map((section, index) => (
            <section key={section.id} className="es-section">
              <div className="es-section-header">
                <h3 className="es-section-title es-title-light">{h[section.type]}</h3>
                <SectionControls region="sidebar" index={index} total={(sectionLayout.sidebar || []).length} isDark={true} />
              </div>
              {renderSectionBody(section, 'sidebar')}
            </section>
          ))}
        </div>
      </aside>

      <main className="es-main">
        <header className="es-header">
          <h1 className="es-name">{personalInfo.fullName}</h1>
          <h2 className="es-title">{personalInfo.title}</h2>
          {personalInfo.summary && (
            <p className="es-summary">{personalInfo.summary}</p>
          )}
        </header>

        <div className="es-main-content">
          {(sectionLayout.main || []).map((section, index) => (
            <section key={section.id} className="es-section">
              <div className="es-section-header">
                <h3 className="es-section-title">{h[section.type]}</h3>
                <SectionControls region="main" index={index} total={(sectionLayout.main || []).length} />
              </div>
              {renderSectionBody(section, 'main')}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ElegantSplit;