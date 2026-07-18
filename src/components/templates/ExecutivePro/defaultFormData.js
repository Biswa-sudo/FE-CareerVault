const defaultFormData = {
  personalInfo: {
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500',
    fullName: 'Ava Brown',
    title: 'Job',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
    email: 'ava.brown@email.com',
    phone: '+1 202 555 0114',
    location: 'San Francisco, CA, USA',
    linkedin: 'linkedin.com/in/avabrown',
    github: 'github.com/avabrown',
  },
  sectionHeadings: {
    summary: 'About me',
    contact: 'Details',
    skills: 'Skills',
    certifications: 'Languages',
    projects: 'Hobbies',
    experience: 'Professional experience',
    education: 'Education',
  },
  sectionContent: {
    contact: {
      base: {
        location: '221B Baker Street, London',
        email: 'ava.brown@email.com',
        phone: '+1 202 555 0114',
        dob: '01/01/2000',
        license: 'Driving licence B',
      },
    },
    skills: {
      base: {
        items: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'],
      },
    },
    certifications: {
      base: {
        items: ['Language 1', 'Language 2'],
      },
    },
    projects: {
      base: {
        items: ['Hobby 1', 'Hobby 2', 'Hobby 3', 'Hobby 4', 'Hobby 5', 'Hobby 6'],
      },
    },
    summary: {
      base: {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
      },
    },
    experience: {
      base: {
        items: [
          {
            title: 'Position Held',
            company: 'Company',
            duration: 'Date',
            location: '',
            achievements: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              'Sed diam nonummy nibh euismod tincidunt ut laoreet.',
              'Minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
            ],
          },
          {
            title: 'Position Held',
            company: 'Company',
            duration: 'Date',
            location: '',
            achievements: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
              'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              'Sed diam nonummy nibh euismod tincidunt ut laoreet.',
              'Minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
            ],
          },
        ],
      },
    },
    education: {
      base: {
        items: [
          {
            degree: 'Degree / Qualification',
            school: 'Institution',
            year: '',
          },
          {
            degree: 'Degree / Qualification',
            school: 'Institution',
            year: '',
          },
        ],
      },
    },
  },
  sectionLayout: {
    sidebar: [
      { id: 'contact', type: 'contact' },
      { id: 'skills', type: 'skills' },
      { id: 'certifications', type: 'certifications' },
      { id: 'projects', type: 'projects' },
    ],
    main: [
      { id: 'experience', type: 'experience' },
      { id: 'education', type: 'education' },
    ],
  },
}

export default defaultFormData
