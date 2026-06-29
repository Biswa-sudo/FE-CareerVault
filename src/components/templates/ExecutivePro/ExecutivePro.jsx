// ExecutivePro.jsx
import "./ExecutivePro.css";

const ExecutivePro = ({ data, onSectionAction }) => {
  const {
    personalInfo,
    sectionHeadings = {},
    sectionLayout = { sidebar: [], main: [] },
    sectionContent = {},
  } = data;

  const getSectionData = (entry) => {
    const bucket = sectionContent[entry.type] || {};
    if (entry.source === 'instance') {
      const instances = bucket.instances || [];
      return instances[entry.instanceIndex] || bucket.base || {};
    }
    return bucket.base || {};
  };

  const SectionControls = ({ region, index, total }) => (
    <div className="section-controls no-print">
      <button
        type="button"
        onClick={() => onSectionAction?.(region, 'up', index)}
        disabled={index === 0}
      >
        ↑
      </button>
      <button
        type="button"
        onClick={() => onSectionAction?.(region, 'down', index)}
        disabled={index === total - 1}
      >
        ↓
      </button>
      <button
        type="button"
        onClick={() => onSectionAction?.(region, 'duplicate', index)}
      >
        ⎘
      </button>
      <button
        type="button"
        onClick={() => onSectionAction?.(region, 'delete', index)}
      >
        🗑
      </button>
    </div>
  );

  const renderSectionBody = (entry) => {
    const type = entry.type;
    const value = getSectionData(entry);

    // SUMMARY
    if (type === "summary") {
      return <p>{value.text || ''}</p>;
    }

    // EDUCATION
    if (type === "education") {
      return (
        <>
          {(value.items || []).map((item, index) => (
            <div key={index} className="education">
              <div className="education-header">
                <div>
                  <h4>{item.degree || ''}</h4>
                  <h5>{item.school || ''}</h5>
                  <div className="meta">
                    <span>
                      <i className="fa-solid fa-calendar"></i>
                      {item.year || ''}
                    </span>
                    <span>
                      <i className="fa-solid fa-location-dot"></i>
                      {item.location || ''}
                    </span>
                  </div>
                </div>
                {item.gpa && (
                  <div className="gpa">
                    <small>GPA</small>
                    <strong>{item.gpa}</strong>
                    <span>/ 4.0</span>
                  </div>
                )}
              </div>
              {item.achievements && item.achievements.length > 0 && (
                <ul>
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </>
      );
    }

    // TECHNICAL SKILLS
    if (type === "technicalSkills") {
      const skills = value.items || [];
      return (
        <div className="skills">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      );
    }

    // VOLUNTEER
    if (type === "volunteer") {
      return (
        <>
          {(value.items || []).map((item, index) => (
            <div key={index} className="volunteer">
              <h4>{item.title || ''}</h4>
              <h5>{item.organization || ''}</h5>
              <div className="meta">
                <span>
                  <i className="fa-solid fa-calendar"></i>
                  {item.year || ''}
                </span>
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                  {item.location || ''}
                </span>
              </div>
              <ul>
                {(item.achievements || []).map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      );
    }

    // EXPERIENCE
    if (type === "experience") {
      return (
        <>
          {(value.items || []).map((item, index) => (
            <div key={index} className="experience">
              <h4>{item.title || ''}</h4>
              <h5>{item.company || ''}</h5>
              <div className="meta">
                <span>
                  <i className="fa-solid fa-calendar"></i>
                  {item.year || ''}
                </span>
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                  {item.location || ''}
                </span>
              </div>
              {item.companyDescription && (
                <p>{item.companyDescription}</p>
              )}
              <ul>
                {(item.achievements || []).map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      );
    }

    // STRENGTHS
    if (type === "strengths") {
      const icons = ['fa-solid fa-book', 'fa-solid fa-gears'];
      return (
        <>
          {(value.items || []).map((item, index) => (
            <div key={index} className="strength">
              <i className={icons[index % icons.length]}></i>
              <div>
                <h4>{item.title || ''}</h4>
                <p>{item.description || ''}</p>
              </div>
            </div>
          ))}
        </>
      );
    }

    // REFERENCES
    if (type === "references") {
      return (
        <>
          {(value.items || []).map((item, index) => (
            <div key={index} className="reference">
              <h5>{item.name || ''}</h5>
              <p>{item.details || ''}</p>
            </div>
          ))}
        </>
      );
    }

    return null;
  };

  const sidebarSections = (sectionLayout.sidebar || []).filter(
    section => section.type !== 'profile'
  );

  return (
    <div className="resume">

      {/* ===== HEADER ===== */}
      <header className="header">
        <h1>{personalInfo.fullName || 'LIZ SHELBY'}</h1>
        <h2>{personalInfo.title || 'Computer Science Student'}</h2>
        <div className="contact">
          <div className="item">
            <i className="fa-solid fa-phone"></i>
            <span>{personalInfo.phone || '+1-234-423-8975'}</span>
          </div>
          <div className="item">
            <i className="fa-solid fa-at"></i>
            <span>{personalInfo.email || 'help@enhancv.com'}</span>
          </div>
          <div className="item">
            <i className="fa-solid fa-link"></i>
            <span>{personalInfo.linkedin || 'https://www.github.com/betty-pen/'}</span>
          </div>
          <div className="item">
            <i className="fa-solid fa-location-dot"></i>
            <span>{personalInfo.location || 'Little Rock, AK'}</span>
          </div>
        </div>
      </header>

      {/* ===== BODY ===== */}
      <div className="content">

        {/* LEFT COLUMN */}
        <aside className="left-column">
          {sidebarSections.map((section, index) => (
            <section key={section.id}>
              <div className="section-title-row">
                <h3 className="section-title">
                  {sectionHeadings[section.type] || section.type.toUpperCase()}
                </h3>
                <SectionControls
                  region="sidebar"
                  index={index}
                  total={sidebarSections.length}
                />
              </div>
              {renderSectionBody(section)}
            </section>
          ))}
        </aside>

        {/* RIGHT COLUMN */}
        <main className="right-column">
          {(sectionLayout.main || []).map((section, index) => (
            <section key={section.id}>
              <div className="section-title-row">
                <h3 className="section-title">
                  {sectionHeadings[section.type] || section.type.toUpperCase()}
                </h3>
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

      {/* ===== FOOTER ===== */}
      <footer>
        <span>www.enhancv.com</span>
        <span>Powered by Enhancv</span>
      </footer>

    </div>
  );
};

export default ExecutivePro                                                                                                                                         ;