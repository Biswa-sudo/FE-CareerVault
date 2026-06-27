import "./ExecutiveBlue.css";

const ExecutiveBlue = ({ data, onSectionAction }) => {
  const {
    personalInfo = {},
    sectionHeadings = {},
    technicalSummaryLabels = {},
    sectionLayout = { sidebar: [], main: [] },
    sectionContent = {},
  } = data;

  const h = {
    contact: sectionHeadings.contact || "CONTACT",
    skills: sectionHeadings.skills || "SKILLS",
    education: sectionHeadings.education || "EDUCATION",
    certifications: sectionHeadings.certifications || "CERTIFICATIONS",
    experience: sectionHeadings.experience || "EXPERIENCE",
    projects: sectionHeadings.projects || "PROJECTS",
    technicalSummary:
      sectionHeadings.technicalSummary || "TECHNICAL SUMMARY",
  };

  const getSectionData = (entry) => {
    const bucket = sectionContent[entry.type] || {};

    if (entry.source === "instance") {
      const instances = bucket.instances || [];
      return instances[entry.instanceIndex] || bucket.base || {};
    }

    return bucket.base || {};
  };

  const SectionControls = ({ region, index, total }) => (
    <div className="eb-controls no-print">
      <button
        onClick={() => onSectionAction?.(region, "up", index)}
        disabled={index === 0}
      >
        ↑
      </button>

      <button
        onClick={() => onSectionAction?.(region, "down", index)}
        disabled={index === total - 1}
      >
        ↓
      </button>

      <button
        onClick={() => onSectionAction?.(region, "duplicate", index)}
      >
        ⎘
      </button>

      <button
        onClick={() => onSectionAction?.(region, "delete", index)}
      >
        🗑
      </button>
    </div>
  );

  const renderSectionBody = (entry) => {
    const type = entry.type;
    const value = getSectionData(entry);

    switch (type) {
      case "experience":
        return (
          <>
            {(value.items || []).map((job, idx) => (
              <div key={idx} className="eb-job">
                <h4>{job.title}</h4>

                <div className="eb-company">
                  {job.company}
                </div>

                <div className="eb-meta">
                  {job.duration} • {job.location}
                </div>

                <ul>
                  {(job.achievements || []).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        );

      case "education":
        return (
          <>
            {(value.items || []).map((edu, idx) => (
              <div key={idx} className="eb-education">
                <h4>{edu.degree}</h4>

                <div className="eb-company">
                  {edu.school}
                </div>

                <div className="eb-meta">
                  {edu.year}
                </div>
              </div>
            ))}
          </>
        );

      case "skills":
        return (
          <div className="eb-skill-list">
            {(value.items || []).map((skill, idx) => (
              <span key={idx} className="eb-skill">
                {skill}
              </span>
            ))}
          </div>
        );

      case "projects":
        return (
          <>
            {(value.items || []).map((project, idx) => (
              <div key={idx} className="eb-project">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            ))}
          </>
        );

      case "technicalSummary":
        return (
          <div className="eb-tech">
            {value.languages && (
              <div>
                <strong>Languages:</strong> {value.languages}
              </div>
            )}

            {value.frameworks && (
              <div>
                <strong>Frameworks:</strong> {value.frameworks}
              </div>
            )}

            {value.databases && (
              <div>
                <strong>Databases:</strong> {value.databases}
              </div>
            )}

            {value.cloud && (
              <div>
                <strong>Cloud:</strong> {value.cloud}
              </div>
            )}

            {value.tools && (
              <div>
                <strong>Tools:</strong> {value.tools}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="executive-blue">
      <header className="eb-header">
        <h1>{personalInfo.fullName}</h1>

        <h2>{personalInfo.title}</h2>

        <div className="eb-contact">
          <span>{personalInfo.phone}</span>
          <span>{personalInfo.email}</span>
          <span>{personalInfo.location}</span>
        </div>
      </header>

      {personalInfo.summary && (
        <section>
          <h3>SUMMARY</h3>
          <div className="eb-divider"></div>

          <p className="eb-summary">
            {personalInfo.summary}
          </p>
        </section>
      )}

      {(sectionLayout.main || []).map((section, index) => (
        <section key={section.id}>
          <div className="eb-section-header">
            <h3>{h[section.type] || section.type}</h3>

            <SectionControls
              region="main"
              index={index}
              total={(sectionLayout.main || []).length}
            />
          </div>

          <div className="eb-divider"></div>

          {renderSectionBody(section)}
        </section>
      ))}
    </div>
  );
};

export default ExecutiveBlue;