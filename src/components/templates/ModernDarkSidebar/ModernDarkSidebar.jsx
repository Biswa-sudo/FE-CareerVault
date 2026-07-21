import React from 'react';
import './ModernDarkSidebar.css';

const ModernDarkSidebar = ({ data, onSectionAction }) => {
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
    certifications: sectionHeadings.certifications || 'CERTIFICATES',
    experience: sectionHeadings.experience || 'EXPERIENCE',
    projects: sectionHeadings.projects || 'PROJECTS',
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
    <div className="mds-controls no-print">
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

    if (type === "contact") {
      return (
        <div className="mds-contact-list">
          {value.email && <div>{value.email}</div>}
          {value.phone && <div>{value.phone}</div>}
          {value.location && <div className="mds-pre-line">{value.location}</div>}
          {value.linkedin && <div>{value.linkedin.replace(/^https?:\/\//, '')}</div>}
          {value.github && <div>{value.github.replace(/^https?:\/\//, '')}</div>}
        </div>
      );
    }

    if (type === "skills" || type === "certifications") {
      return (
        <ul className="mds-bullet-list">
          {(value.items || []).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }

    if (type === "technicalSummary") {
      // Typically used for languages in this layout
      const languages = (value.languages || '').split('\n').filter(Boolean);
      return (
        <div className="mds-languages-list">
          {languages.map((lang, idx) => {
            const parts = lang.split(/[:|]/);
            return (
              <div key={idx} className="mds-language-item">
                <span className="mds-language-name">{parts[0]?.trim()}</span>
                {parts[1] && (
                  <span className="mds-language-level">: {parts[1]?.trim()}</span>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    if (type === "experience") {
      return (
        <div className="mds-experience-list">
          {(value.items || []).map((job, index) => (
            <div key={index} className="mds-job-item">
              <div className="mds-job-header">
                <span className="mds-job-company">{job.company}</span>
                {job.company && job.title && <span className="mds-job-separator"> | </span>}
                <span className="mds-job-title">{job.title}</span>
              </div>
              <div className="mds-job-date">{job.duration}</div>
              {job.achievements && job.achievements.length > 0 && (
                <ul className="mds-job-bullets">
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
        <div className="mds-education-list">
          {(value.items || []).map((item, index) => (
            <div key={index} className="mds-edu-item">
              <div className="mds-edu-degree">{item.degree}</div>
              <div className="mds-edu-meta">
                <span className="mds-edu-school">{item.school}</span>
                {item.school && item.year && <span className="mds-edu-separator"> &#8212; </span>}
                <span className="mds-edu-year">{item.year}</span>
              </div>
              {item.achievements && item.achievements.map((ach, i) => (
                <div key={i} className="mds-edu-extra">{ach}</div>
              ))}
            </div>
          ))}
        </div>
      );
    }

    if (type === "projects") {
      return (
        <div className="mds-projects-list">
          {(value.items || []).map((project, index) => (
            <div key={index} className="mds-project-item">
              <div className="mds-job-header">
                <span className="mds-job-title">{project.title}</span>
              </div>
              {project.description && (
                <ul className="mds-job-bullets">
                  {project.description.split('\n').map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="mds-container">
      <aside className="mds-sidebar">
        {personalInfo.image && (
          <div className="mds-photo-container">
            <img src={personalInfo.image} alt={personalInfo.fullName} className="mds-photo" />
          </div>
        )}

        {(sectionLayout.sidebar || []).map((section, index) => (
          <section key={section.id} className="mds-section mds-sidebar-section">
            <div className="mds-section-header">
              <h3 className="mds-section-title">{h[section.type]}</h3>
              <SectionControls region="sidebar" index={index} total={(sectionLayout.sidebar || []).length} />
            </div>
            {renderSectionBody(section, 'sidebar')}
          </section>
        ))}
      </aside>

      <main className="mds-main">
        <header className="mds-header">
          <h1 className="mds-name">{personalInfo.fullName}</h1>
          <h2 className="mds-title">{personalInfo.title}</h2>
        </header>

        {personalInfo.summary && (
          <section className="mds-section mds-main-section">
            <div className="mds-section-header">
              <h3 className="mds-section-title">SUMMARY</h3>
            </div>
            <p className="mds-summary-text" dangerouslySetInnerHTML={{ __html: personalInfo.summary.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </section>
        )}

        {(sectionLayout.main || []).map((section, index) => (
          <section key={section.id} className="mds-section mds-main-section">
            <div className="mds-section-header">
              <h3 className="mds-section-title">{h[section.type]}</h3>
              <SectionControls region="main" index={index} total={(sectionLayout.main || []).length} />
            </div>
            {renderSectionBody(section, 'main')}
          </section>
        ))}
      </main>
    </div>
  );
};

export default ModernDarkSidebar;