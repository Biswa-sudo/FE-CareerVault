import React from 'react';
import './ProfessionalDark.css';

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

const ProfessionalDark = ({ data, onSectionAction }) => {
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

  const SectionControls = ({ region, index, total, theme = 'light' }) => (
    <div className={`pd-controls no-print pd-controls-${theme}`}>
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
        <div className="pd-contact-list">
          {value.phone && (
            <div className="pd-contact-item">
              <IconPhone /> <span>{value.phone}</span>
            </div>
          )}
          {value.email && (
            <div className="pd-contact-item">
              <IconMail /> <span>{value.email}</span>
            </div>
          )}
          {value.location && (
            <div className="pd-contact-item">
              <IconPin /> <span className="pd-pre-line">{value.location}</span>
            </div>
          )}
          {value.linkedin && (
            <div className="pd-contact-item">
              <IconLink /> <span>{value.linkedin.replace(/^https?:\/\//, '')}</span>
            </div>
          )}
          {value.github && (
            <div className="pd-contact-item">
              <IconLink /> <span>{value.github.replace(/^https?:\/\//, '')}</span>
            </div>
          )}
        </div>
      );
    }

    if (type === "skills" || type === "certifications") {
      return (
        <div className="pd-skills-list">
          {(value.items || []).map((item, index) => (
            <div key={index} className="pd-skill-item">
              <span className="pd-skill-bullet"></span> {item}
            </div>
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
        <div className="pd-tech-list">
          {rows.map((row, idx) => (
            <div key={idx} className="pd-tech-item">
              <div className="pd-tech-label">{row.label}</div>
              <div className="pd-tech-val">{row.val}</div>
            </div>
          ))}
          {(value.additional || []).map((add, idx) => (
            <div key={`add-${idx}`} className="pd-tech-item">
              <div className="pd-tech-label">{add.label}</div>
              <div className="pd-tech-val">{add.value}</div>
            </div>
          ))}
        </div>
      );
    }

    if (type === "experience") {
      return (
        <div className="pd-experience-list">
          {(value.items || []).map((job, index) => (
            <div key={index} className="pd-job-item">
              <div className="pd-job-header">
                <div className="pd-job-title-row">
                  <h3 className="pd-job-title">{job.title}</h3>
                  <span className="pd-job-date">{job.duration}</span>
                </div>
                <div className="pd-job-company">
                  {job.company} {job.location && ` | ${job.location}`}
                </div>
              </div>
              {job.achievements && job.achievements.length > 0 && (
                <ul className="pd-bullets">
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
        <div className="pd-education-list">
          {(value.items || []).map((item, index) => (
            <div key={index} className="pd-edu-item">
              <div className="pd-edu-row">
                <h3 className="pd-edu-degree">{item.degree}</h3>
                <span className="pd-edu-date">{item.year}</span>
              </div>
              <div className="pd-edu-school">{item.school}</div>
            </div>
          ))}
        </div>
      );
    }

    if (type === "projects") {
      return (
        <div className="pd-projects-list">
          {(value.items || []).map((project, index) => (
            <div key={index} className="pd-project-item">
              <h3 className="pd-project-title">{project.title}</h3>
              {project.description && (
                <p className="pd-project-desc">{project.description}</p>
              )}
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="pd-container">
      <aside className="pd-sidebar">
        <div className="pd-sidebar-header">
          {personalInfo.image && (
            <div className="pd-photo-wrap">
              <img src={personalInfo.image} alt={personalInfo.fullName} className="pd-photo" />
            </div>
          )}
          <h1 className="pd-name-sidebar">{personalInfo.fullName}</h1>
          <h2 className="pd-title-sidebar">{personalInfo.title}</h2>
        </div>

        <div className="pd-sidebar-content">
          {(sectionLayout.sidebar || []).map((section, index) => (
            <section key={section.id} className="pd-section">
              <div className="pd-section-header pd-section-header-dark">
                <h3 className="pd-section-title pd-section-title-dark">{h[section.type]}</h3>
                <SectionControls region="sidebar" index={index} total={(sectionLayout.sidebar || []).length} theme="dark" />
              </div>
              {renderSectionBody(section, 'sidebar')}
            </section>
          ))}
        </div>
      </aside>

      <main className="pd-main">
        {personalInfo.summary && (
          <section className="pd-section pd-summary-section">
            <div className="pd-section-header">
              <h3 className="pd-section-title">PROFILE</h3>
            </div>
            <p className="pd-summary-text">{personalInfo.summary}</p>
          </section>
        )}

        {(sectionLayout.main || []).map((section, index) => (
          <section key={section.id} className="pd-section">
            <div className="pd-section-header">
              <h3 className="pd-section-title">{h[section.type]}</h3>
              <SectionControls region="main" index={index} total={(sectionLayout.main || []).length} theme="light" />
            </div>
            {renderSectionBody(section, 'main')}
          </section>
        ))}
      </main>
    </div>
  );
};

export default ProfessionalDark;