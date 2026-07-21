const modernAccentDefaults = {
  personalInfo: {
    fullName: "JORDAN SMITH",
    title: "Senior Marketing Manager",
    summary: "Dynamic and results-driven Senior Marketing Manager with over 8 years of experience leading comprehensive digital marketing strategies. Proven ability to drive brand growth, optimize conversion rates, and manage high-performing cross-functional teams. Adept at leveraging data analytics to craft compelling campaigns that resonate with target audiences and deliver measurable ROI.",
    email: "jordan.smith@example.com",
    phone: "+1 (555) 987-6543",
    location: "Chicago, IL",
    linkedin: "linkedin.com/in/jordansmith",
    github: "portfolio.com/jordansmith",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
  },

  experience: [
    {
      title: "Senior Marketing Manager",
      company: "Apex Innovations",
      location: "Chicago, IL",
      duration: "2020 - Present",
      achievementsText: "Directed a $2M annual marketing budget across social, search, and display channels, achieving a 35% increase in lead generation year-over-year.\nLed the rebranding initiative for the flagship SaaS product, resulting in a 20% boost in brand recall and customer engagement.\nManaged and mentored a team of 6 marketing specialists, fostering a culture of continuous learning and data-driven decision making.\nImplemented automated email nurturing campaigns that improved lead-to-customer conversion rates by 18%.",
    },
    {
      title: "Digital Marketing Strategist",
      company: "Creative Pulse Agency",
      location: "Austin, TX",
      duration: "2016 - 2020",
      achievementsText: "Developed and executed comprehensive SEO and SEM strategies for 15+ B2B clients, consistently exceeding target KPIs by over 25%.\nOrchestrated influencer marketing campaigns that generated over 5 million organic impressions and drove a 12% increase in sales for e-commerce clients.\nAnalyzed web traffic metrics and user behavior to optimize landing page performance, reducing bounce rates by 15%.",
    }
  ],

  education: [
    {
      degree: "MBA, Marketing Specialization",
      school: "Northwestern University",
      year: "2014 - 2016",
    },
    {
      degree: "B.S. in Communications",
      school: "University of Texas",
      year: "2010 - 2014",
    }
  ],

  skills: [
    { value: "Digital Strategy" },
    { value: "SEO & SEM" },
    { value: "Content Marketing" },
    { value: "Brand Management" },
    { value: "Data Analytics" },
    { value: "Team Leadership" },
    { value: "Budget Allocation" }
  ],

  technicalSummary: {
    languages: "HTML, CSS, Basic SQL",
    tools: "HubSpot, Salesforce, Google Analytics, Tableau, SEMrush, Hootsuite",
    frameworks: "Agile Marketing, Inbound Marketing",
    databases: "",
    cloud: "",
    additional: [],
  },

  certifications: [
    { value: "Google Analytics Individual Qualification" },
    { value: "HubSpot Inbound Marketing Certified" }
  ],

  projects: [
    {
      title: "Product Launch: VisionTrack App",
      description: "Spearheaded the go-to-market strategy for a new B2B tracking application. Coordinated PR, paid media, and a virtual launch event that attracted 2,000+ attendees and generated $500K in pipeline within 30 days."
    }
  ],

  sectionHeadings: {
    contact: "CONTACT INFO",
    skills: "CORE SKILLS",
    education: "EDUCATION",
    certifications: "CERTIFICATIONS",
    experience: "WORK EXPERIENCE",
    projects: "KEY INITIATIVES",
    technicalSummary: "TOOLS & TECH",
  },

  sectionLayout: {
    sidebar: [
      { id: 'contact-base', type: 'contact', source: 'base' },
      { id: 'skills-base', type: 'skills', source: 'base' },
      { id: 'technicalSummary-base', type: 'technicalSummary', source: 'base' },
      { id: 'education-base', type: 'education', source: 'base' },
      { id: 'certifications-base', type: 'certifications', source: 'base' },
    ],
    main: [
      { id: 'experience-base', type: 'experience', source: 'base' },
      { id: 'projects-base', type: 'projects', source: 'base' },
    ],
  },
};

export default modernAccentDefaults;