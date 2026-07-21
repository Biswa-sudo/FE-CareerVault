import React from 'react';
import './TimelineProfessional.css';

// SVG Icons
const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);
const IconPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
const IconLink = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
);

const TimelineProfessional = ({ data, onSectionAction }) => {
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

  const SectionControls = ({ region, index, total }) => (
    <div className="tp-controls no-print">
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

  const renderSectionBody = (entry, region) => {
    const type = entry.type;
    const value = getSectionData(entry);

    if (type === "experience") {
      return (
        <div className="tp-timeline-container">
          {(value.items || []).map((job, index) => (
            <div key={index} className="tp-timeline-item">
              <div className="tp-timeline-dot"></div>
              <div className="tp-job-meta">
                <span className="tp-job-date">{job.duration}</span>
                {job.location && <span className="tp-job-loc"> | {job.location}</span>}
              </div>
              <h3 className="tp-job-title">{job.title}</h3>
              <div className="tp-job-company">{job.company}</div>
              {job.achievements && job.achievements.length > 0 && (
                <ul className="tp-bullets">
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

    if (type === "education") {
      return (
        <div className="tp-timeline-container">
          {(value.items || []).map((item, index) => (
            <div key={index} className="tp-timeline-item">
              <div className="tp-timeline-dot"></div>
              <div className="tp-job-meta">
                <span className="tp-job-date">{item.year}</span>
              </div>
              <h3 className="tp-job-title">{item.degree}</h3>
              <div className="tp-job-company">{item.school}</div>
            </div>
          ))}
        </div>
      );
    }

    if (type === "projects") {
      return (
        <div className="tp-projects-list">
          {(value.items || []).map((project, index) => (
            <div key={index} className="tp-project-item">
              <h3 className="tp-project-title">{project.title}</h3>
              {project.description && (
                <p className="tp-project-desc">{project.description}</p>
              )}
            </div>
          ))}
        </div>
      );
    }

    if (type === "skills" || type === "certifications") {
      return (
        <div className="tp-tags-list">
          {(value.items || []).map((item, index) => (
            <span key={index} className="tp-tag">{item}</span>
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
        <div className="tp-tech-list">
          {rows.map((row, idx) => (
            <div key={idx} className="tp-tech-item">
              <span className="tp-tech-label">{row.label}:</span>
              <span className="tp-tech-val">{row.val}</span>
            </div>
          ))}
          {(value.additional || []).map((add, idx) => (
            <div key={`add-${idx}`} className="tp-tech-item">
              <span className="tp-tech-label">{add.label}:</span>
              <span className="tp-tech-val">{add.value}</span>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="tp-container">
      <header className="tp-header">
        <div className="tp-header-main">
          <h1 className="tp-name">{personalInfo.fullName}</h1>
          <h2 className="tp-title">{personalInfo.title}</h2>
          
          <div className="tp-contact-bar">
            {personalInfo.email && (
              <span className="tp-contact-item">
                <IconMail /> {personalInfo.email}
              </span>
            )}
            {personalInfo.phone && (
              <span className="tp-contact-item">
                <IconPhone /> {personalInfo.phone}
              </span>
            )}
            {personalInfo.location && (
              <span className="tp-contact-item">
                <IconPin /> {personalInfo.location}
              </span>
            )}
            {personalInfo.linkedin && (
              <span className="tp-contact-item">
                <IconLink /> {personalInfo.linkedin.replace(/^https?:\/\//, '')}
              </span>
            )}
          </div>
        </div>
        {personalInfo.image && (
          <div className="tp-photo-box">
            <img src={personalInfo.image} alt={personalInfo.fullName} className="tp-photo" />
          </div>
        )}
      </header>

      {personalInfo.summary && (
        <div className="tp-summary">
          <p>{personalInfo.summary}</p>
        </div>
      )}

      <div className="tp-layout">
        <aside className="tp-sidebar">
          {(sectionLayout.sidebar || []).map((section, index) => (
            <section key={section.id} className="tp-section">
              <div className="tp-section-header">
                <h3 className="tp-section-title">{h[section.type]}</h3>
                <SectionControls region="sidebar" index={index} total={(sectionLayout.sidebar || []).length} />
              </div>
              {renderSectionBody(section, 'sidebar')}
            </section>
          ))}
        </aside>

        <main className="tp-main">
          {(sectionLayout.main || []).map((section, index) => (
            <section key={section.id} className="tp-section">
              <div className="tp-section-header">
                <h3 className="tp-section-title">{h[section.type]}</h3>
                <SectionControls region="main" index={index} total={(sectionLayout.main || []).length} />
              </div>
              {renderSectionBody(section, 'main')}
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default TimelineProfessional;