import React from 'react';
import './TemplateExecutiveAssistant.css';

const PhoneIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const MailIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const LinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
);

const PinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const CalendarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

const AchievementIcons = [
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>,
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>,
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
];

const TemplateExecutiveAssistant = ({ data, onSectionAction }) => {
  const {
    personalInfo = {},
    sectionHeadings = {},
    sectionLayout = { sidebar: [], main: [] },
    sectionContent = {},
  } = data;

  const h = {
    projects: sectionHeadings.projects || 'ACHIEVEMENTS',
    skills: sectionHeadings.skills || 'SKILLS',
    certifications: sectionHeadings.certifications || 'COURSES',
    experience: sectionHeadings.experience || 'EXPERIENCE',
    education: sectionHeadings.education || 'EDUCATION',
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
    <div className="tea-controls no-print">
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
        &#43;
      </button>
      <button
        type="button"
        aria-label="Delete section"
        title="Delete section"
        onClick={() => onSectionAction?.(region, 'delete', index)}
      >
        &#10005;
      </button>
    </div>
  );

  const renderSectionBody = (entry) => {
    const type = entry.type;
    const value = getSectionData(entry);

    if (type === "projects") {
      return (
        <div className="tea-achievements-list">
          {(value.items || []).map((item, index) => (
            <div key={index} className="tea-achievement-item">
              <div className="tea-achievement-icon">
                {AchievementIcons[index % AchievementIcons.length]}
              </div>
              <div className="tea-achievement-text">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (type === "skills") {
      return (
        <ul className="tea-skills-list">
          {(value.items || []).map((skill, index) => (
            <li key={index} className="tea-skill-item">{skill}</li>
          ))}
        </ul>
      );
    }

    if (type === "certifications") {
      return (
        <div className="tea-courses-list">
          {(value.items || []).map((cert, index) => {
            const parts = cert.split('|');
            return (
              <div key={index} className="tea-course-item">
                <h4>{parts[0]}</h4>
                {parts[1] && <p>{parts[1]}</p>}
              </div>
            );
          })}
        </div>
      );
    }

    if (type === "experience") {
      return (
        <div className="tea-experience-list">
          {(value.items || []).map((job, index) => {
            const [datePart, locPart] = (job.duration || '').split('|');
            return (
              <div key={index} className="tea-job-item">
                <h3 className="tea-job-title">{job.title}</h3>
                <div className="tea-job-meta">
                  <span className="tea-job-company">{job.company}</span>
                  <div className="tea-job-right-meta">
                    {datePart && (
                      <span className="tea-meta-item">
                        <CalendarIcon /> {datePart.trim()}
                      </span>
                    )}
                    {locPart && (
                      <span className="tea-meta-item">
                        <PinIcon /> {locPart.trim()}
                      </span>
                    )}
                    {!locPart && job.location && (
                      <span className="tea-meta-item">
                        <PinIcon /> {job.location}
                      </span>
                    )}
                  </div>
                </div>
                {job.achievements && job.achievements.length > 0 && (
                  <ul className="tea-job-bullets">
                    {job.achievements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    if (type === "education") {
      return (
        <div className="tea-education-list">
          {(value.items || []).map((item, index) => {
            const [datePart, locPart] = (item.year || '').split('|');
            return (
              <div key={index} className="tea-edu-item">
                <h3 className="tea-edu-degree">{item.degree}</h3>
                <div className="tea-edu-meta">
                  <span className="tea-edu-school">{item.school}</span>
                  <div className="tea-edu-right-meta">
                    {datePart && (
                      <span className="tea-meta-item">
                        <CalendarIcon /> {datePart.trim()}
                      </span>
                    )}
                    {locPart && (
                      <span className="tea-meta-item">
                        <PinIcon /> {locPart.trim()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    if (type === "technicalSummary") {
      const langString = value.languages || '';
      const languages = langString.split('\n').map(l => {
        const p = l.split('|');
        return { name: p[0], level: p[1], score: parseInt(p[2] || '0', 10) };
      }).filter(l => l.name);

      return (
        <div className="tea-languages-list">
          {languages.map((lang, idx) => (
            <div key={idx} className="tea-lang-item">
              <span className="tea-lang-name">{lang.name}</span>
              <div className="tea-lang-score">
                <span className="tea-lang-level">{lang.level}</span>
                <div className="tea-lang-dots">
                  {[1, 2, 3, 4, 5].map(num => (
                    <svg key={num} width="10" height="10" viewBox="0 0 10 10">
                      <circle cx="5" cy="5" r="4" fill={num <= lang.score ? "#1e293b" : "#e5e7eb"} />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="tea-container">
      <header className="tea-header">
        <h1 className="tea-name">{personalInfo.fullName}</h1>
        <h2 className="tea-title">{personalInfo.title}</h2>
        <div className="tea-contact-info">
          {personalInfo.phone && (
            <div className="tea-contact-item">
              <PhoneIcon /> <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.email && (
            <div className="tea-contact-item">
              <MailIcon /> <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="tea-contact-item">
              <LinkIcon /> <span>{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="tea-contact-item">
              <PinIcon /> <span>{personalInfo.location}</span>
            </div>
          )}
        </div>
      </header>

      <div className="tea-content">
        <aside className="tea-left-col">
          {(sectionLayout.sidebar || []).map((section, index) => (
            <section key={section.id} className="tea-section">
              <div className="tea-section-header">
                <h3 className="tea-section-title">{h[section.type]}</h3>
                <SectionControls region="sidebar" index={index} total={(sectionLayout.sidebar || []).length} />
              </div>
              {renderSectionBody(section)}
            </section>
          ))}
        </aside>

        <main className="tea-right-col">
          {personalInfo.summary && (
            <section className="tea-section">
              <div className="tea-section-header">
                <h3 className="tea-section-title">SUMMARY</h3>
              </div>
              <p className="tea-summary-text">{personalInfo.summary}</p>
            </section>
          )}

          {(sectionLayout.main || []).map((section, index) => (
            <section key={section.id} className="tea-section">
              <div className="tea-section-header">
                <h3 className="tea-section-title">{h[section.type]}</h3>
                <SectionControls region="main" index={index} total={(sectionLayout.main || []).length} />
              </div>
              {renderSectionBody(section)}
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default TemplateExecutiveAssistant;