import React from 'react';
import './SimpleAndElegant.css';

const SimpleAndElegant = ({ data, showLeftSidebar = false, onSectionAction }) => {
  const {
    personalInfo = {},
    technicalSummary = {},
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
    contact: sectionHeadings.contact || 'Contact',
    skills: sectionHeadings.skills || 'Skills',
    education: sectionHeadings.education || 'Education',
    certifications: sectionHeadings.certifications || 'Certifications',
    experience: sectionHeadings.experience || 'Career',
    projects: sectionHeadings.projects || 'Projects',
    technicalSummary: sectionHeadings.technicalSummary || 'Skills and Interests',
  };

  const sectionTitles = {
    contact: h.contact,
    skills: h.skills,
    education: h.education,
    certifications: h.certifications,
    experience: h.experience,
    projects: h.projects,
    technicalSummary: h.technicalSummary,
  };

  const getSectionData = (entry) => {
    const bucket = sectionContent[entry.type] || {};
    if (entry.source === 'instance') {
      const instances = bucket.instances || [];
      return instances[entry.instanceIndex] || bucket.base || {};
    }
    return bucket.base || {};
  };

  const getTechnicalSummaryRows = (value) => {
    const dataRow = value || {};
    return [
      { label: 'Language skills', value: dataRow.languages || '' },
      { label: 'Computer skills', value: dataRow.tools || '' },
      { label: 'Interests', value: dataRow.frameworks || '' },
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
        <div className="sae-section-content">
          {(value.items || []).map((job, index) => (
            <div key={index} className="sae-row">
              <div className="sae-row-left">
                {job.duration}
              </div>
              <div className="sae-row-right">
                <strong>{job.company}</strong>
                <div className="sae-subtitle">{job.title}</div>
                {job.achievements && job.achievements.length > 0 && (
                  <ul className="sae-bullets">
                    {job.achievements.map((item, idx) => (
                      <li key={idx}>- {item}</li>
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
        <div className="sae-section-content">
          {(value.items || []).map((item, index) => (
            <div key={index} className="sae-row">
              <div className="sae-row-left">
                {item.year}
              </div>
              <div className="sae-row-right">
                <strong>{item.school}</strong>
                <div className="sae-subtitle">{item.degree}</div>
                {item.achievements && item.achievements.length > 0 && (
                  <ul className="sae-bullets">
                    {item.achievements.map((ach, idx) => (
                      <li key={idx}>- {ach}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (type === "technicalSummary" || type === "skills") {
      const summaryRows = getTechnicalSummaryRows(value);
      return (
        <div className="sae-section-content">
          {summaryRows.map((row, index) => (
            <div key={index} className="sae-row">
              <div className="sae-row-left">{row.label}</div>
              <div className="sae-row-right">
                {row.value.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (type === "projects") {
      return (
        <div className="sae-section-content">
          {(value.items || []).map((project, index) => (
            <div key={index} className="sae-row">
              <div className="sae-row-left">Project</div>
              <div className="sae-row-right">
                <strong>{project.title}</strong>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (type === "certifications") {
      return (
        <div className="sae-section-content">
          {(value.items || []).map((cert, index) => (
            <div key={index} className="sae-row">
              <div className="sae-row-left">Certification</div>
              <div className="sae-row-right">{cert}</div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  const SectionControls = ({ region, index, total }) => (
    <div className="sae-controls no-print">
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

  return (
    <div className="sae-container">
      <header className="sae-header">
        <div className="sae-header-title">
          <h1>CV</h1>
        </div>
        <div className="sae-header-info">
          <div className="sae-info-column">
            <div className="sae-info-block">
              <strong>Name</strong>
              <div>{personalInfo.fullName}</div>
            </div>
            <div className="sae-info-block">
              <strong>Address</strong>
              <div className="sae-pre-line">{personalInfo.location}</div>
            </div>
            <div className="sae-info-block">
              <strong>Email</strong>
              <div>{personalInfo.email}</div>
            </div>
          </div>
          <div className="sae-info-column">
            <div className="sae-info-block">
              <strong>Birthday</strong>
              <div>{personalInfo.birthday || personalInfo.summary}</div>
            </div>
            <div className="sae-info-block">
              <strong>Phone</strong>
              <div>{personalInfo.phone}</div>
            </div>
          </div>
          <div className="sae-photo-container">
            {personalInfo.image && (
              <img src={personalInfo.image} alt={personalInfo.fullName} className="sae-photo" />
            )}
          </div>
        </div>
      </header>

      <main className="sae-main">
        {(sectionLayout.main || []).map((section, index) => {
          if (section.type === 'contact') return null; // Handled in header
          return (
            <section key={section.id} className="sae-section">
              <div className="sae-section-header">
                <h2>{sectionTitles[section.type]}</h2>
                <SectionControls
                  region="main"
                  index={index}
                  total={(sectionLayout.main || []).length}
                />
              </div>
              {renderSectionBody(section)}
            </section>
          );
        })}
      </main>

      <footer className="sae-footer">
        <div>London, 1st January 2023</div>
        <div className="sae-signature-placeholder">
          {/* Simulated Signature using cursive font or styling */}
          <span className="sae-signature">Lebene</span>
        </div>
      </footer>
    </div>
  );
};

export default SimpleAndElegant;