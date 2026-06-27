const defaultFormData = {
  personalInfo: {
    image: '',
    fullName: 'LIZ SHELBY',
    title: 'Computer Science Student',
    email: 'help@enhancv.com',
    phone: '+1-234-423-8975',
    location: 'Little Rock, AK',
    linkedin: 'https://www.github.com/betty-pen/',
  },
  sectionHeadings: {
    summary: 'SUMMARY',
    education: 'EDUCATION',
    technicalSkills: 'TECHNICAL SKILLS',
    volunteer: 'VOLUNTEER',
    experience: 'EXPERIENCE',
    strengths: 'STRENGTHS',
    references: 'REFERENCES',
  },
  sectionContent: {
    summary: {
      base: {
        text: 'Resourceful Software Intern with 2 years of experience in the IT sector. Skilled in Java, Python and HTML. Adept at computer systems and web services. Looking for an internship that will help me become a skillful professional.',
      },
    },
    education: {
      base: {
        items: [
          {
            degree: 'High School Diploma',
            school: 'Excel High School',
            year: '09/2014 - 06/2019',
            location: 'Boston, MA',
            gpa: '4.0',
            achievements: [],
          },
          {
            degree: 'Bachelor of Computer Science',
            school: 'Northeastern University',
            year: '09/2019 - 07/2022',
            location: 'Boston, MA',
            gpa: '4.0',
            achievements: [
              'Performed software development and testing of 10 project websites',
              'Learned how to operate with databases and performed data modeling',
              'Worked with a team of 5 colleagues to deliver an innovative e-commerce application',
              'Took additional courses on the development of AI programs and blockchain technology',
              'Learned how to install, modify and make minor repairs on personal and business computers',
              'Built 4 professional websites',
              'Excelled in mathematics, intelligent systems and algorithms and complexity',
              'Learned how to perform troubleshooting and fix bugs',
            ],
          },
        ],
      },
    },
    technicalSkills: {
      base: {
        items: [
          'Python',
          'Java',
          'JavaScript',
          'HTML',
          'CSS',
          'Visualforce',
          'Windows',
          'Web Services',
          'Computer Systems',
          'AWS',
          'C++',
          'Troubleshooting',
        ],
      },
    },
    volunteer: {
      base: {
        items: [
          {
            title: 'Educator and Social Worker',
            organization: 'EduTech',
            year: '01/2018 - 01/2019',
            location: 'Boston, MA',
            achievements: [
              'Educated 100+ street children in computer systems and how to work with OS',
              'Social worker in the streets of Boston, MA',
              'Coordinated 30+ volunteers',
            ],
          },
        ],
      },
    },
    experience: {
      base: {
        items: [
          {
            title: 'Software Intern',
            company: 'Salesforce',
            year: '06/2021 - 12/2021',
            location: 'Little Rock, AK',
            companyDescription:
              'Salesforce is an American cloud-based software company headquartered in San Francisco, California.',
            achievements: [
              'Contributed to the development of 1 project of web development',
              'Resolved 20 assigned job requests and incident tickets',
              'Assisted in handling 11 execution proceedings',
              'Assisted in product development from conception to end-user stage with a success rate of over 95%',
            ],
          },
          {
            title: 'IT Intern',
            company: 'Microsoft',
            year: '11/2020 - 04/2021',
            location: 'Boston, MA',
            companyDescription:
              'Microsoft is one of the biggest tech companies in the world.',
            achievements: [
              'Personally provided tier 1 technical support to clients for their computer and software issues',
              'Participated in performing a web database testing of measurements for over 2M+ clients to enhance the management of customer data',
              'Installed Windows and hardware systems components for 1000+ college staff and students',
              'Operated a help desk that supports 2000+ remote associates',
            ],
          },
        ],
      },
    },
    strengths: {
      base: {
        items: [
          {
            title: 'Curiosity',
            description:
              'Never done reading about technology and innovations in AI, Blockchain and Cloud Computing.',
          },
          {
            title: 'Critical Thinking',
            description:
              'Actively and skillfully evaluate and apply new ideas in my daily and professional tasks.',
          },
        ],
      },
    },
    references: {
      base: {
        items: [
          {
            name: 'Sara Fenton, HR at Salesforce',
            details: '+1-566-798-1004',
          },
          {
            name: 'Jo Ben, Sr Java Developer at Microsoft',
            details: '+1-776-012-2975',
          },
        ],
      },
    },
  },
  sectionLayout: {
    sidebar: [
      { id: 'summary', type: 'summary' },
      { id: 'education', type: 'education' },
      { id: 'technicalSkills', type: 'technicalSkills' },
      { id: 'volunteer', type: 'volunteer' },
    ],
    main: [
      { id: 'experience', type: 'experience' },
      { id: 'strengths', type: 'strengths' },
      { id: 'references', type: 'references' },
    ],
  },
};

export default defaultFormData;