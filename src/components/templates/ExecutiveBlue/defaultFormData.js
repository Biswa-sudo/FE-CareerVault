const executiveBlueDefaults = {
	personalInfo: {
		fullName: 'ALEXANDRA REED',
		title: 'SENIOR PRODUCT MANAGER',
		summary:
			'Strategic product leader with 9+ years of experience launching B2B and consumer digital products. Strong track record of partnering with engineering, design, and go-to-market teams to deliver measurable business outcomes.',
		email: 'alex.reed@email.com',
		phone: '+1 (555) 234-8890',
		location: 'Austin, TX, USA',
		linkedin: 'linkedin.com/in/alexandrareed',
		github: 'github.com/alexreed',
		image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
	},

	skills: [
		{ value: 'Product Strategy' },
		{ value: 'Roadmapping & Prioritization' },
		{ value: 'User Research' },
		{ value: 'A/B Testing' },
		{ value: 'Agile Delivery' },
		{ value: 'Stakeholder Management' },
		{ value: 'SQL & Product Analytics' },
		{ value: 'Jira / Confluence' },
		{ value: 'Figma' },
	],

	education: [
		{
			degree: 'MBA, Product Management',
			school: 'The University of Texas at Austin',
			year: '2015 - 2017',
		},
		{
			degree: 'BSc, Information Systems',
			school: 'University of Florida',
			year: '2010 - 2014',
		},
	],

	certifications: [
		{ value: 'Professional Scrum Product Owner (PSPO I)' },
		{ value: 'Google Analytics Certification' },
	],

	experience: [
		{
			title: 'Senior Product Manager',
			company: 'Northstar Cloud',
			location: 'Austin, TX',
			duration: 'Mar 2021 - Present',
			achievementsText:
				'Own product roadmap for enterprise workflow suite used by 45k+ monthly users.\nLed cross-functional launch of collaboration module, increasing paid conversions by 18%.\nImplemented experimentation framework that reduced feature decision cycles by 35%.',
		},
		{
			title: 'Product Manager',
			company: 'BrightScale',
			location: 'Remote',
			duration: 'Jul 2018 - Feb 2021',
			achievementsText:
				'Managed onboarding and activation funnels for SMB product line.\nPartnered with design and engineering to improve first-week retention by 22%.\nBuilt KPI dashboards for executive reviews and quarterly planning.',
		},
	],

	projects: [
		{
			title: 'Usage Intelligence Dashboard',
			description:
				'Defined and launched a self-serve analytics dashboard that helped customers track adoption and ROI signals.',
		},
		{
			title: 'Lifecycle Messaging Revamp',
			description:
				'Redesigned lifecycle messaging triggers and content strategy to improve activation and reduce churn.',
		},
	],

	technicalSummary: {
		languages: 'SQL, Python, JavaScript',
		frameworks: 'React (working knowledge)',
		databases: 'PostgreSQL, BigQuery',
		cloud: 'AWS, GCP',
		tools: 'Amplitude, Mixpanel, Jira, Confluence, Figma',
		additional: [
			{
				label: 'Domain Focus',
				value: 'SaaS, workflow automation, collaboration products',
			},
		],
	},

	sectionHeadings: {
		contact: 'CONTACT',
		skills: 'CORE SKILLS',
		education: 'EDUCATION',
		certifications: 'CERTIFICATIONS',
		experience: 'PROFESSIONAL EXPERIENCE',
		projects: 'KEY INITIATIVES',
		technicalSummary: 'TECHNICAL SUMMARY',
	},

	technicalSummaryLabels: {
		languages: 'Languages',
		frameworks: 'Frameworks',
		databases: 'Databases',
		cloud: 'Cloud',
		tools: 'Tools',
	},
}

export default executiveBlueDefaults
