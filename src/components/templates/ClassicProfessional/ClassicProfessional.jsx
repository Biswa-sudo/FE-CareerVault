import "./ClassicProfessional.css";

const ClassicProfessional = ({ data, showLeftSidebar = true, onSectionAction }) => {
  const {
    personalInfo,
    technicalSummary = {},
    sectionHeadings = {},
    technicalSummaryLabels = {},
    sectionLayout = { sidebar: [], main: [] },
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
    experience: sectionHeadings.experience || 'EXPERIENCE',
    projects: sectionHeadings.projects || 'PROJECTS',
    technicalSummary: sectionHeadings.technicalSummary || 'TECHNICAL SUMMARY',
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
    const bucket = sectionContent[entry.type] || {}
    if (entry.source === 'instance') {
      const instances = bucket.instances || []
      return instances[entry.instanceIndex] || bucket.base || {}
    }
    return bucket.base || {}
  }

  const getTechnicalSummaryRows = (value) => {
    const dataRow = value || {}
    return [
      { label: tl.languages, value: dataRow.languages || '' },
      { label: tl.frameworks, value: dataRow.frameworks || '' },
      { label: tl.databases, value: dataRow.databases || '' },
      { label: tl.cloud, value: dataRow.cloud || '' },
      { label: tl.tools, value: dataRow.tools || '' },
      ...((dataRow.additional || [])
        .filter(item => item && (item.label || item.value))
        .map(item => ({
          label: item.label || 'Additional',
          value: item.value || '',
        }))),
    ]
  }

  const renderSectionBody = (entry) => {
    const type = entry.type
    const value = getSectionData(entry)

    if (type === "contact") {
      return (
        <>
          <p>{value.email || ''}</p>
          <p>{value.phone || ''}</p>
          <p>{value.location || ''}</p>
          <p>{value.linkedin || ''}</p>
          <p>{value.github || ''}</p>
        </>
      );
    }

    if (type === "skills") {
      return (
        <ul>
          {(value.items || []).map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      );
    }

    if (type === "education") {
      return (
        <>
          {(value.items || []).map((item, index) => (
            <div key={index}>
              <strong>{item.degree}</strong>
              <p>{item.school}</p>
              <p>{item.year}</p>
            </div>
          ))}
        </>
      );
    }

    if (type === "certifications") {
      return (
        <ul>
          {(value.items || []).map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      );
    }

    if (type === "experience") {
      return (
        <>
          {(value.items || []).map((job, index) => (
            <div key={index} className="job">
              <div className="job-header">
                <div>
                  <h4>{job.title}</h4>

                  <span>
                    {job.company} • {job.location}
                  </span>
                </div>

                <span>{job.duration}</span>
              </div>

              <ul>
                {job.achievements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      );
    }

    if (type === "projects") {
      return (
        <>
          {(value.items || []).map((project, index) => (
            <div key={index}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </>
      );
    }

    if (type === "technicalSummary") {
      const summaryRows = getTechnicalSummaryRows(value)
      return (
        <div className="tech-grid">
          {summaryRows.map((row, index) => (
            <p key={index}>
              <strong>{row.label}:</strong> {row.value}
            </p>
          ))}
        </div>
      );
    }

    return null;
  };

  const SectionControls = ({ region, index, total }) => (
    <div className="section-controls no-print">
      <button
        type="button"
        aria-label="Move section up"
        title="Move section up"
        onClick={() => onSectionAction?.(region, 'up', index)}
        disabled={index === 0}
      >
        ↑
      </button>
      <button
        type="button"
        aria-label="Move section down"
        title="Move section down"
        onClick={() => onSectionAction?.(region, 'down', index)}
        disabled={index === total - 1}
      >
        ↓
      </button>
      <button
        type="button"
        aria-label="Duplicate section"
        title="Duplicate section"
        onClick={() => onSectionAction?.(region, 'duplicate', index)}
      >
        ⎘
      </button>
      <button
        type="button"
        aria-label="Delete section"
        title="Delete section"
        onClick={() => onSectionAction?.(region, 'delete', index)}
      >
        🗑
      </button>
    </div>
  );

  return (
    <div className={`resume ${showLeftSidebar ? '' : 'resume-no-sidebar'}`}>
      {showLeftSidebar && <aside className="sidebar">
        <img
          src={personalInfo.image}
          alt={personalInfo.fullName}
          className="profile-image"
        />

        {(sectionLayout.sidebar || []).map((section, index) => (
          <section key={section.id}>
            <div className="section-title-row">
              <h3>{sectionTitles[section.type]}</h3>
              <SectionControls
                region="sidebar"
                index={index}
                total={(sectionLayout.sidebar || []).length}
              />
            </div>
            {renderSectionBody(section)}
          </section>
        ))}
      </aside>}

      <main className="main-content">
        <h1>{personalInfo.fullName}</h1>

        <h2>{personalInfo.title}</h2>

        <p className="summary">{personalInfo.summary}</p>

        {(sectionLayout.main || []).map((section, index) => (
          <section key={section.id}>
            <div className="section-title-row">
              <h3>{sectionTitles[section.type]}</h3>
              <SectionControls
                region="main"
                index={index}
                total={(sectionLayout.main || []).length}
              />
            </div>
            {renderSectionBody(section)}
          </section>
        ))}
      </main>
    </div>
  );
};

export default ClassicProfessional;