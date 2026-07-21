import React from 'react';
import './CenteredProfile.css';

const CenteredProfile = ({ data, onSectionAction }) => {
  const {
    personalInfo = {},
    sectionHeadings = {},
    technicalSummaryLabels = {},
    sectionLayout = { main: [] },
    sectionContent = {},
  } = data;

  const tl = {
    languages: technicalSummaryLabels.languages || 'Languages',
    frameworks: technicalSummaryLabels.frameworks || 'Frameworks',
    databases: technicalSummaryLabels.databases || 'Databases',
    cloud: technicalSummaryLabels.cloud || 'Cloud & DevOps',
    tools: technicalSummaryLabels.tools || 'Tools',
  };

  const h = {
    contact: sectionHeadings.contact || 'CONTACT',
    skills: sectionHeadings.skills || 'SKILLS',
    education: sectionHeadings.education || 'EDUCATION',
    certifications: sectionHeadings.certifications || 'CERTIFICATIONS',
    experience: sectionHeadings.experience || 'WORK HISTORY',
    projects: sectionHeadings.projects || 'PROJECTS',
    technicalSummary: sectionHeadings.technicalSummary || 'TECHNICAL EXPERTISE',
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
    <div className="cp-controls no-print">
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

  const getTechnicalSummaryRows = (value) => {
    const dataRow = value || {};
    return [
      { label: tl.languages, value: dataRow.languages || '' },
      { label: tl.frameworks, value: dataRow.frameworks || '' },
      { label: tl.databases, value: dataRow.databases || '' },
      { label: tl.cloud, value: dataRow.cloud || '' },
      { label: tl.tools, value: dataRow.tools || '' },
      ...((dataRow.additional || [])
        .filter((item) => item && (item.label || item.value))
        .map((item) => ({
          label: item.label || 'Additional',
          value: item.value || '',
        }))),
    ].filter(row => row.value);
  };

  const renderSectionBody = (entry) => {
    const type = entry.type;
    const value = getSectionData(entry);

    if (type === "experience") {
      return (
        <div className="cp-experience-list">
          {(value.items || []).map((job, index) => (
            <div key={index} className="cp-job-item">
              <div className="cp-date-badge">{job.duration}</div>
              <div className="cp-job-header">
                <strong>{job.title}</strong>
                {job.title && (job.company || job.location) && <span className="cp-separator"> | </span>}
                {job.company && <span>{job.company}</span>}
                {job.company && job.location && <span>, </span>}
                {job.location && <span>{job.location}</span>}
              </div>
              {job.achievements && job.achievements.length > 0 && (
                <ul className="cp-bullets">
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
        <div className="cp-education-list">
          {(value.items || []).map((item, index) => (
            <div key={index} className="cp-job-item">
              <div className="cp-date-badge">{item.year}</div>
              <div className="cp-job-header">
                <strong>{item.degree}</strong>
                {item.degree && item.school && <span className="cp-separator"> | </span>}
                {item.school && <span>{item.school}</span>}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (type === "skills" || type === "certifications") {
      return (
        <ul className="cp-bullets cp-two-columns">
          {(value.items || []).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }

    if (type === "projects") {
      return (
        <div className="cp-projects-list">
          {(value.items || []).map((project, index) => (
            <div key={index} className="cp-job-item">
              <div className="cp-job-header">
                <strong>{project.title}</strong>
              </div>
              {project.description && (
                <ul className="cp-bullets">
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

    if (type === "technicalSummary") {
      const summaryRows = getTechnicalSummaryRows(value);
      return (
        <div className="cp-tech-grid">
          {summaryRows.map((row, index) => (
            <div key={index} className="cp-tech-row">
              <strong className="cp-tech-label">{row.label}:</strong>
              <span className="cp-tech-value">{row.value}</span>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  const contactItems = [
    personalInfo.phone,
    personalInfo.email,
    personalInfo.location,
    personalInfo.linkedin,
    personalInfo.github
  ].filter(Boolean);

  return (
    <div className="cp-container">
      <header className="cp-header">
        <div className="cp-photo-wrapper">
          {personalInfo.image && (
            <img src={personalInfo.image} alt={personalInfo.fullName} className="cp-photo" />
          )}
        </div>
        
        <h1 className="cp-name">{personalInfo.fullName}</h1>
        <hr className="cp-divider" />
        
        <div className="cp-contact-info">
          {contactItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <span>{item}</span>
              {idx < contactItems.length - 1 && <span className="cp-contact-dot">•</span>}
            </React.Fragment>
          ))}
        </div>
        
        <hr className="cp-divider" />
        
        {personalInfo.summary && (
          <p className="cp-summary">{personalInfo.summary}</p>
        )}
      </header>

      <main className="cp-main">
        {(sectionLayout.main || []).map((section, index) => {
          if (section.type === 'contact') return null; // Contact handled in header
          return (
            <section key={section.id} className="cp-section">
              <div className="cp-section-header-wrapper">
                <h2 className="cp-section-title">{h[section.type]}</h2>
                <SectionControls region="main" index={index} total={(sectionLayout.main || []).length} />
              </div>
              {renderSectionBody(section)}
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default CenteredProfile;