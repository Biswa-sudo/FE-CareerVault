import React from 'react';
import './MinimalistTech.css';

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

const MinimalistTech = ({ data, onSectionAction }) => {
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
    technicalSummary: sectionHeadings.technicalSummary || 'TECHNOLOGIES',
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
    <div className={`mt-controls no-print mt-controls-${theme}`}>
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
        <div className="mt-contact-list">
          {value.email && (
            <div className="mt-contact-item">
              <IconMail /> <span>{value.email}</span>
            </div>
          )}
          {value.phone && (
            <div className="mt-contact-item">
              <IconPhone /> <span>{value.phone}</span>
            </div>
          )}
          {value.location && (
            <div className="mt-contact-item">
              <IconPin /> <span className="mt-pre-line">{value.location}</span>
            </div>
          )}
          {value.linkedin && (
            <div className="mt-contact-item">
              <IconLink /> <span>{value.linkedin.replace(/^https?:\/\//, '')}</span>
            </div>
          )}
          {value.github && (
            <div className="mt-contact-item">
              <IconLink /> <span>{value.github.replace(/^https?:\/\//, '')}</span>
            </div>
          )}
        </div>
      );
    }

    if (type === "skills" || type === "certifications") {
      return (
        <div className="mt-tags">
          {(value.items || []).map((item, index) => (
            <span key={index} className="mt-tag">{item}</span>
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
        <div className="mt-tech-list">
          {rows.map((row, idx) => (
            <div key={idx} className="mt-tech-item">
              <span className="mt-tech-label">{row.label}</span>
              <span className="mt-tech-val">{row.val}</span>
            </div>
          ))}
          {(value.additional || []).map((add, idx) => (
            <div key={`add-${idx}`} className="mt-tech-item">
              <span className="mt-tech-label">{add.label}</span>
              <span className="mt-tech-val">{add.value}</span>
            </div>
          ))}
        </div>
      );
    }

    if (type === "experience") {
      return (
        <div className="mt-experience">
          {(value.items || []).map((job, index) => (
            <div key={index} className="mt-job-item">
              <div className="mt-job-header">
                <div className="mt-job-title-wrapper">
                  <h3 className="mt-job-title">{job.title}</h3>
                  <span className="mt-job-company">
                    {job.company} {job.location && ` | ${job.location}`}
                  </span>
                </div>
                <div className="mt-job-date">{job.duration}</div>
              </div>
              {job.achievements && job.achievements.length > 0 && (
                <ul className="mt-bullets">
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
        <div className="mt-education">
          {(value.items || []).map((item, index) => (
            <div key={index} className="mt-edu-item">
              <div className="mt-edu-header">
                <h3 className="mt-edu-degree">{item.degree}</h3>
                <div className="mt-edu-date">{item.year}</div>
              </div>
              <div className="mt-edu-school">{item.school}</div>
            </div>
          ))}
        </div>
      );
    }

    if (type === "projects") {
      return (
        <div className="mt-projects">
          {(value.items || []).map((project, index) => (
            <div key={index} className="mt-project-item">
              <h3 className="mt-project-title">{project.title}</h3>
              {project.description && (
                <p className="mt-project-desc">{project.description}</p>
              )}
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="mt-container">
      <header className="mt-header">
        <div className="mt-header-inner">
          <div className="mt-header-info">
            <h1 className="mt-name">{personalInfo.fullName}</h1>
            <h2 className="mt-title">{personalInfo.title}</h2>
            <div className="mt-header-contact">
              {personalInfo.email && (
                <span className="mt-header-contact-item"><IconMail /> {personalInfo.email}</span>
              )}
              {personalInfo.phone && (
                <span className="mt-header-contact-item"><IconPhone /> {personalInfo.phone}</span>
              )}
              {personalInfo.location && (
                <span className="mt-header-contact-item"><IconPin /> {personalInfo.location}</span>
              )}
              {personalInfo.linkedin && (
                <span className="mt-header-contact-item"><IconLink /> {personalInfo.linkedin.replace(/^https?:\/\//, '')}</span>
              )}
            </div>
          </div>
          {personalInfo.image && (
            <div className="mt-photo-wrap">
              <img src={personalInfo.image} alt={personalInfo.fullName} className="mt-photo" />
            </div>
          )}
        </div>
      </header>

      <div className="mt-body">
        <aside className="mt-sidebar">
          {(sectionLayout.sidebar || []).map((section, index) => (
            <section key={section.id} className="mt-section">
              <div className="mt-section-header">
                <h3 className="mt-section-title">{h[section.type]}</h3>
                <SectionControls region="sidebar" index={index} total={(sectionLayout.sidebar || []).length} theme="dark" />
              </div>
              {renderSectionBody(section, 'sidebar')}
            </section>
          ))}
        </aside>

        <main className="mt-main">
          {personalInfo.summary && (
            <section className="mt-section">
              <div className="mt-section-header">
                <h3 className="mt-section-title mt-title-light">SUMMARY</h3>
              </div>
              <p className="mt-summary">{personalInfo.summary}</p>
            </section>
          )}

          {(sectionLayout.main || []).map((section, index) => (
            <section key={section.id} className="mt-section">
              <div className="mt-section-header">
                <h3 className="mt-section-title mt-title-light">{h[section.type]}</h3>
                <SectionControls region="main" index={index} total={(sectionLayout.main || []).length} theme="light" />
              </div>
              {renderSectionBody(section, 'main')}
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default MinimalistTech;