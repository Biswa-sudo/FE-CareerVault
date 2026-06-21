import "./ClassicProfessional.css";

const ClassicProfessional = ({ data }) => {
  const {
    personalInfo,
    skills,
    education,
    certifications,
    experience,
    projects,
    technicalSummary,
  } = data;

  return (
    <div className="resume">
      <aside className="sidebar">
        <img
          src={personalInfo.image}
          alt={personalInfo.fullName}
          className="profile-image"
        />

        <section>
          <h3>CONTACT</h3>

          <p>{personalInfo.email}</p>
          <p>{personalInfo.phone}</p>
          <p>{personalInfo.location}</p>
          <p>{personalInfo.linkedin}</p>
          <p>{personalInfo.github}</p>
        </section>

        <section>
          <h3>SKILLS</h3>

          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3>EDUCATION</h3>

          {education.map((item, index) => (
            <div key={index}>
              <strong>{item.degree}</strong>
              <p>{item.school}</p>
              <p>{item.year}</p>
            </div>
          ))}
        </section>

        <section>
          <h3>CERTIFICATIONS</h3>

          <ul>
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>
      </aside>

      <main className="main-content">
        <h1>{personalInfo.fullName}</h1>

        <h2>{personalInfo.title}</h2>

        <p className="summary">{personalInfo.summary}</p>

        <section>
          <h3>EXPERIENCE</h3>

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
          <h3>PROJECTS</h3>

          {projects.map((project, index) => (
            <div key={index}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </section>

        <section>
          <h3>TECHNICAL SUMMARY</h3>

          <div className="tech-grid">
            <p>
              <strong>Languages:</strong> {technicalSummary.languages}
            </p>

            <p>
              <strong>Frameworks:</strong> {technicalSummary.frameworks}
            </p>

            <p>
              <strong>Databases:</strong> {technicalSummary.databases}
            </p>

            <p>
              <strong>Cloud & DevOps:</strong> {technicalSummary.cloud}
            </p>

            <p>
              <strong>Tools:</strong> {technicalSummary.tools}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClassicProfessional;