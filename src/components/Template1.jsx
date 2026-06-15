import "./Template1.css";

export default function Template1({ cvData }) {
  const { personal, experiences, education, skills, languages, hobbies } = cvData || {};
  const pi = personal || {};

  return (
    <div className="resume-template">
      {/* LEFT SIDEBAR */}
      <div className="left-panel">
        <div className="profile-image">
          <img
            src={pi.photo || "https://via.placeholder.com/200"}
            alt=""
          />
        </div>
        <h1 className="name">{pi.fullName}</h1>
        <p className="designation">{pi.designation}</p>

        <div className="section">
          <h3>CONTACT</h3>
          <p>{pi.phone}</p>
          <p>{pi.email}</p>
          <p>{pi.website}</p>
          <p>{pi.address}</p>
        </div>

        <div className="section">
          <h3>SKILLS</h3>
          {skills?.map((skill, i) => <p key={i}>• {skill}</p>)}
        </div>

        <div className="section">
          <h3>LANGUAGES</h3>
          {languages?.map((lang, i) => <p key={i}>• {lang}</p>)}
        </div>

        <div className="section">
          <h3>HOBBIES</h3>
          {hobbies?.map((hobby, i) => <p key={i}>• {hobby}</p>)}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-panel">
        <div className="section">
          <h2>PROFILE</h2>
          <p className="summary">{pi.summary}</p>
        </div>

        <div className="section">
          <h2>WORK EXPERIENCE</h2>
          {experiences?.map((exp, i) => (
            <div key={i} className="experience-item">
              <div className="job-header">
                <div>
                  <h4>{exp.position}</h4>
                  <p>{exp.company}</p>
                </div>
                <span>{exp.startDate} - {exp.endDate}</span>
              </div>
              <ul>
                {exp.responsibilities?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section">
          <h2>EDUCATION</h2>
          {education?.map((edu, i) => (
            <div key={i} className="education-item">
              <h4>{edu.degree}</h4>
              <p>{edu.institute}</p>
              <span>{edu.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}