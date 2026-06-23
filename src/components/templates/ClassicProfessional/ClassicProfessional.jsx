import "./ClassicProfessional.css";

const ClassicProfessional = ({ data, showLeftSidebar = true }) => {
  const {
    personalInfo,
    skills,
    education,
    certifications,
    experience,
    projects,
    technicalSummary = {},
    sectionHeadings = {},
    technicalSummaryLabels = {},
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

  const summaryRows = [
    { label: tl.languages, value: technicalSummary.languages || '' },
    { label: tl.frameworks, value: technicalSummary.frameworks || '' },
    { label: tl.databases, value: technicalSummary.databases || '' },
    { label: tl.cloud, value: technicalSummary.cloud || '' },
    { label: tl.tools, value: technicalSummary.tools || '' },
    ...((technicalSummary.additional || [])
      .filter(item => item && (item.label || item.value))
      .map(item => ({
        label: item.label || 'Additional',
        value: item.value || '',
      }))),
  ];

  return (
    <div className={`resume ${showLeftSidebar ? '' : 'resume-no-sidebar'}`}>
      {showLeftSidebar && <aside className="sidebar">
        <img
          src={personalInfo.image}
          alt={personalInfo.fullName}
          className="profile-image"
        />

        <section>
          <h3>{h.contact}</h3>

          <p>{personalInfo.email}</p>
          <p>{personalInfo.phone}</p>
          <p>{personalInfo.location}</p>
          <p>{personalInfo.linkedin}</p>
          <p>{personalInfo.github}</p>
        </section>

        <section>
          <h3>{h.skills}</h3>

          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3>{h.education}</h3>

          {education.map((item, index) => (
            <div key={index}>
              <strong>{item.degree}</strong>
              <p>{item.school}</p>
              <p>{item.year}</p>
            </div>
          ))}
        </section>

        <section>
          <h3>{h.certifications}</h3>

          <ul>
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>
      </aside>}

      <main className="main-content">
        <h1>{personalInfo.fullName}</h1>

        <h2>{personalInfo.title}</h2>

        <p className="summary">{personalInfo.summary}</p>

        <section>
          <h3>{h.experience}</h3>

          {experience.map((job, index) => (
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
        </section>

        <section>
          <h3>{h.projects}</h3>

          {projects.map((project, index) => (
            <div key={index}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </section>

        <section>
          <h3>{h.technicalSummary}</h3>

          <div className="tech-grid">
            {summaryRows.map((row, index) => (
              <p key={index}>
                <strong>{row.label}:</strong> {row.value}
              </p>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClassicProfessional;