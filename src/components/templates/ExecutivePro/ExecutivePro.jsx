import "./ExecutivePro.css";

const SectionControls = ({ region, index, total, onSectionAction }) => (
  <div className="ep2-section-controls no-print">
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

const headingDefaults = {
  summary: 'About me',
  contact: 'Details',
  skills: 'Skills',
  certifications: 'Languages',
  projects: 'Hobbies',
  experience: 'Professional experience',
  education: 'Education',
  technicalSummary: 'Technical skills',
  technicalSkills: 'Technical skills',
  volunteer: 'Volunteer',
  strengths: 'Strengths',
  references: 'References',
}

const getSafeArray = (value) => (Array.isArray(value) ? value : [])

const Icon = ({ type }) => {
  const paths = {
    marker: 'M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
    mail: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 10H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2z',
    phone: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.5 4.5a1 1 0 01-.502 1.21l-2.26 1.13a11.05 11.05 0 005.523 5.523l1.13-2.26a1 1 0 011.21-.502l4.5 1.5a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    calendar: 'M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z',
    license: 'M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm4 4h8m-8 4h5',
    heading: 'M9 12h6m-6 4h6m-6-8h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z',
  }

  return (
    <svg className="ep2-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={paths[type] || paths.heading} />
    </svg>
  )
}

const ExecutivePro = ({ data = {}, onSectionAction, showLeftSidebar = true }) => {
  const {
    personalInfo = {},
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

  const renderSectionBody = (entry) => {
    const { type } = entry;
    const value = getSectionData(entry);

    if (type === 'summary') {
      return <p className="ep2-paragraph">{value.text || personalInfo.summary || ''}</p>
    }

    if (type === 'contact') {
      const contactItems = [
        {
          icon: 'marker',
          label: 'Address',
          value: value.location || personalInfo.location || '',
        },
        {
          icon: 'mail',
          label: 'Email',
          value: value.email || personalInfo.email || '',
        },
        {
          icon: 'phone',
          label: 'Mobile',
          value: value.phone || personalInfo.phone || '',
        },
        {
          icon: 'calendar',
          label: 'Date of birth',
          value: value.dob || '',
        },
        {
          icon: 'license',
          label: 'Driving licence',
          value: value.license || '',
        },
      ].filter((item) => item.value)

      return (
        <ul className="ep2-contact-list">
          {contactItems.map((item, index) => (
            <li key={`${item.label}-${index}`}>
              <Icon type={item.icon} />
              <div>
                <span className="ep2-contact-label">{item.label}</span>
                <span className="ep2-contact-value">{item.value}</span>
              </div>
            </li>
          ))}
        </ul>
      )
    }

    if (type === 'skills') {
      const skills = getSafeArray(value.items)
      return (
        <ul className="ep2-bullets">
          {skills.map((skill, index) => (
            <li key={index}>{skill?.value || skill}</li>
          ))}
        </ul>
      )
    }

    if (type === 'certifications' || type === 'projects') {
      return (
        <ul className="ep2-bullets">
          {getSafeArray(value.items).map((item, index) => (
            <li key={index}>{item?.value || item?.title || item}</li>
          ))}
        </ul>
      )
    }

    if (type === 'experience' || type === 'volunteer') {
      return (
        <>
          {getSafeArray(value.items).map((item, index) => {
            const achievements = getSafeArray(item.achievements)
            return (
              <article key={index} className="ep2-experience-item">
                <div className="ep2-meta-row ep2-date-row">{item.duration || item.year || ''}</div>
                <h4>{item.title || ''}</h4>
                <div className="ep2-meta-row">
                  <span>{item.company || item.organization || ''}</span>
                  <span>{item.location || ''}</span>
                </div>
                {item.companyDescription ? <p className="ep2-paragraph">{item.companyDescription}</p> : null}
                <ul className="ep2-bullets ep2-bullets-tight">
                  {achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                ))}
              </ul>
              </article>
            )
          })}
        </>
      )
    }

    if (type === 'education') {
      return (
        <>
          {getSafeArray(value.items).map((item, index) => (
            <article key={index} className="ep2-education-item">
              <div className="ep2-meta-row ep2-date-row">{item.year || ''}</div>
              <h4>{item.degree || ''}</h4>
              <div className="ep2-meta-row">
                <span>{item.school || ''}</span>
                <span>{item.location || ''}</span>
              </div>
              {item.achievements?.length ? (
                <ul className="ep2-bullets ep2-bullets-tight">
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </>
      )
    }

    if (type === 'technicalSummary' || type === 'technicalSkills') {
      const rows = []
      if (value.languages) rows.push(`Languages: ${value.languages}`)
      if (value.frameworks) rows.push(`Frameworks: ${value.frameworks}`)
      if (value.databases) rows.push(`Databases: ${value.databases}`)
      if (value.cloud) rows.push(`Cloud: ${value.cloud}`)
      if (value.tools) rows.push(`Tools: ${value.tools}`)

      const additional = getSafeArray(value.additional)
      additional.forEach((item) => {
        if (item?.label || item?.value) {
          rows.push(`${item.label || 'Additional'}: ${item.value || ''}`)
        }
      })

      const fallbackItems = getSafeArray(value.items).map((item) => item?.value || item)
      const output = rows.length ? rows : fallbackItems

      return (
        <ul className="ep2-bullets">
          {output.map((row, index) => (
            <li key={index}>{row}</li>
          ))}
        </ul>
      )
    }

    if (type === 'strengths' || type === 'references') {
      return (
        <>
          {getSafeArray(value.items).map((item, index) => (
            <article key={index} className="ep2-generic-item">
              <div>
                <h4>{item.title || item.name || ''}</h4>
                <p className="ep2-paragraph">{item.description || item.details || ''}</p>
              </div>
            </article>
          ))}
        </>
      )
    }

    return null
  };

  const getTrueIndex = (id, list) => list.findIndex((s) => s.id === id)
  const getHeading = (type) => sectionHeadings[type] || headingDefaults[type] || type
  const sidebarSections = (sectionLayout.sidebar || [])
  const mainSections = (sectionLayout.main || [])
  const aboutText =
    getSectionData({ type: 'summary', source: 'base' })?.text ||
    personalInfo.summary ||
    ''
  const profileImage = personalInfo.image || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500'

  return (
    <div className={`ep2-resume ${showLeftSidebar ? '' : 'ep2-no-sidebar'}`}>
      {showLeftSidebar ? (
        <aside className="ep2-sidebar">
          <img
            src={profileImage}
            alt={personalInfo.fullName || 'Profile'}
            className="ep2-profile-image"
          />
          <h1 className="ep2-name">{personalInfo.fullName || 'Ava Brown'}</h1>
          <p className="ep2-role">{personalInfo.title || 'Job'}</p>

          {sidebarSections.map((section) => (
            <section key={section.id} className="ep2-sidebar-section">
              <div className="ep2-section-title-row">
                <h3 className="ep2-section-title">{getHeading(section.type)}</h3>
                <SectionControls
                  region="sidebar"
                  index={getTrueIndex(section.id, sidebarSections)}
                  total={sidebarSections.length}
                  onSectionAction={onSectionAction}
                />
              </div>
              {renderSectionBody(section)}
            </section>
          ))}
        </aside>
      ) : null}

      <main className="ep2-main">
        <section className="ep2-main-section ep2-about">
          <h3 className="ep2-main-heading">
            <Icon type="heading" />
            {getHeading('summary')}
          </h3>
          <p className="ep2-paragraph">{aboutText}</p>
        </section>

        {mainSections.map((section) => (
          <section key={section.id} className="ep2-main-section">
            <div className="ep2-section-title-row">
              <h3 className="ep2-main-heading">
                <Icon type="heading" />
                {getHeading(section.type)}
              </h3>
              <SectionControls
                region="main"
                index={getTrueIndex(section.id, mainSections)}
                total={mainSections.length}
                onSectionAction={onSectionAction}
              />
            </div>
            {renderSectionBody(section)}
          </section>
        ))}
      </main>
    </div>
  );
};

export default ExecutivePro;