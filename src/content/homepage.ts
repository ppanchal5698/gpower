export const brand = {
  name: 'GPower Solutions',
  logo: '/logo.svg',
  tagline: 'Powering a Sustainable Tomorrow',
  email: 'info@gpowersolutions.in',
} as const

export const navItems = [
  { label: 'Home', href: '/#home', sectionId: 'home' },
  { label: 'About', href: '/#about', sectionId: 'about' },
  { label: 'Solutions', href: '/#solutions', sectionId: 'solutions' },
  { label: 'Industries', href: '/#industries', sectionId: 'industries' },
  { label: 'Projects', href: '/#projects', sectionId: 'projects' },
  { label: 'Blog', href: '/blog', sectionId: 'blog' },
] as const

export const heroSection = {
  eyebrow: 'Industrial decarbonization, engineered end to end',
  title: 'Move from high emissions to a resilient, net-zero operation.',
  body:
    'GPower Solutions designs practical clean-energy pathways around your operations, economics, and transition targets — then stays with you through implementation and optimisation.',
  primaryCta: { label: 'Start your free assessment', href: '#assessment' },
  secondaryCta: { label: 'Talk to an expert', href: '#assessment' },
  image: `${import.meta.env.BASE_URL}home.webp`,
  signals: ['Technology-agnostic', 'Industrial-scale thinking', 'Lifecycle-led delivery'],
  brief: {
    label: 'Transition brief',
    title: 'One integrated energy strategy. Clearer decisions at every stage.',
    items: [
      ['01', 'Assess', 'Energy profile, emissions baseline and business case.'],
      ['02', 'Design', 'The right mix of renewable and low-carbon technologies.'],
      ['03', 'Deliver', 'Implementation support and performance optimisation.'],
    ],
  },
} as const

export const aboutSection = {
  id: 'about',
  eyebrow: 'About GPower Solutions',
  title: 'Your End-to-End Green Transition Partner',
  image: `${import.meta.env.BASE_URL}about.webp`,
  paragraphs: [
    'The transition toward sustainable operations can be complex. Businesses face multiple technologies, changing regulations, investment decisions, and operational challenges.',
    'GPower Solutions simplifies this journey. We help organizations identify, evaluate, and implement practical sustainability solutions tailored to their operational requirements and business objectives.',
    'From initial assessments and feasibility studies to implementation and optimization, we provide complete support throughout the transition process.',
  ],
  highlights: [
    'Feasibility studies & energy audits',
    'Technology-agnostic solution design',
    'Implementation & lifecycle optimization',
  ],
  cta: 'See Our Process',
  ctaHref: '#process',
} as const

export const whySection = {
  eyebrow: 'Why GPower Solutions',
  title: 'A Clear, Four-Step Path to Your Green Transition',
  body:
    'We simplify the complexity of decarbonization into a structured journey — from understanding your operations to transforming them into a resilient, future-ready organization.',
  image: `${import.meta.env.BASE_URL}whygpower.webp`,
} as const

export const whySteps = [
  {
    number: '01',
    title: 'Understand',
    body: 'We begin by understanding your operations, energy profile, and business goals in depth.',
  },
  {
    number: '02',
    title: 'Identify',
    body: 'We uncover opportunities for efficiency improvements, cost savings, and carbon reduction.',
  },
  {
    number: '03',
    title: 'Implement',
    body: 'We connect you with the right technologies, partners, and execution strategies.',
  },
  {
    number: '04',
    title: 'Transform',
    body: 'We help build a sustainable, resilient, and future-ready organization.',
  },
] as const

export const solutionsSection = {
  id: 'solutions',
  eyebrow: 'Solutions Ecosystem',
  title: 'One Partner. Multiple Sustainable Solutions.',
  body:
    'Every business is different. The right solution starts with understanding your energy profile, operational requirements, and sustainability objectives.',
  cta: 'View All Services',
} as const

export const solutions = [
  {
    slug: 'solar',
    title: 'Solar Energy Solutions',
    body: 'Reduce electricity costs through rooftop solar, captive solar, and open-access renewable energy solutions.',
    image: `${import.meta.env.BASE_URL}solarsolutions.webp`,
    points: ['Rooftop & ground-mount', 'Captive & open access', 'PPA advisory'],
  },
  {
    slug: 'green-hydrogen',
    title: 'Green Hydrogen Solutions',
    body: 'Explore clean hydrogen opportunities for industrial decarbonization and future energy security.',
    image: `${import.meta.env.BASE_URL}greenhydrogen.webp`,
    points: ['On-site electrolysis', 'Process feedstock', 'Energy security'],
  },
  {
    slug: 'bess',
    title: 'Battery Energy Storage (BESS)',
    body: 'Improve energy management, demand optimization, and renewable integration.',
    image: `${import.meta.env.BASE_URL}batterystorage.webp`,
    points: ['Peak shaving', 'Load shifting', 'Grid balancing'],
  },
  {
    slug: 'fuel-cell',
    title: 'Fuel Cell Solutions',
    body: 'Reliable, clean, and efficient power generation for future industrial applications.',
    image: `${import.meta.env.BASE_URL}fuelcells.webp`,
    points: ['Zero-emission backup', 'Continuous power', 'Silent operation'],
  },
] as const

export const assessmentHighlights = [
  'Identify your biggest energy cost-reduction opportunities',
  'Understand which green solutions fit your operations',
  'Receive a customized sustainability pathway recommendation',
  'No obligation — completely free',
] as const

export const industriesSection = {
  id: 'industries',
  eyebrow: 'Industries We Serve',
  title: 'Decarbonization Tailored to Your Sector',
  body:
    'From heavy manufacturing to data centers, we design clean-energy pathways around the load profile, process heat, and sustainability targets of each sector.',
  image: `${import.meta.env.BASE_URL}industries.webp`,
  items: [
    'Manufacturing',
    'Chemicals & Refining',
    'Steel & Metals',
    'Cement & Materials',
    'Food & Beverage',
    'Textiles',
    'Pharmaceuticals',
    'Data Centers',
    'Logistics & Ports',
  ],
} as const

export const impactSection = {
  eyebrow: 'Measurable Impact',
  title: 'Results That Move the Needle on Net Zero',
  note: 'Portfolio metrics shown are indicative of completed deployment outcomes; site results vary by operating profile.',
  stats: [
    { value: 88, suffix: '%', label: 'Average CO₂e abatement across deployments', icon: 'abatement' },
    { value: 75, suffix: '%', label: 'Renewable energy mix achieved on site', icon: 'renewable' },
    { value: 120, suffix: '+', label: 'MWp clean capacity engineered', icon: 'capacity' },
    { value: 40, suffix: 'k', label: 'Tonnes of CO₂ avoided each year', icon: 'avoided' },
  ],
} as const

export const projectsSection = {
  id: 'projects',
  eyebrow: 'Case Studies',
  title: 'Proven Outcomes for Forward-Looking Industries',
  body:
    'Real deployments, measurable results. See how we help industries cut emissions and energy costs at the same time.',
  image: `${import.meta.env.BASE_URL}casestudies.webp`,
  featured: {
    slug: 'featured',
    tag: 'Featured Project',
    title: 'End-to-End Decarbonization Roadmap for a Manufacturing Cluster',
    body:
      'An integrated program pairing captive solar, battery storage, and energy efficiency to transform a high-emission site into a renewable-led operation.',
    metrics: [
      { value: '88%', label: 'Site CO₂e reduction' },
      { value: '75%', label: 'Site renewable mix' },
      { value: '3.5 yr', label: 'Payback' },
    ],
  },
  items: [
    {
      slug: 'rooftop-solar-bess',
      title: 'Rooftop Solar + BESS',
      sector: 'Automotive',
      icon: 'automotive',
      metric: { value: '62%', label: 'Grid draw cut' },
      result: '4.2 MWp captive solar with storage cut grid draw by 62%.',
    },
    {
      slug: 'green-hydrogen-pilot',
      title: 'Green Hydrogen Pilot',
      sector: 'Chemicals',
      icon: 'chemicals',
      metric: { value: '100%', label: 'Grey H₂ displaced' },
      result: 'On-site electrolyzer displacing grey hydrogen for process feedstock.',
    },
    {
      slug: 'fuel-cell-backup',
      title: 'Fuel Cell Backup Power',
      sector: 'Data Center',
      icon: 'datacenter',
      metric: { value: 'Zero', label: 'On-site emissions' },
      result: 'Clean, silent backup replacing diesel gensets with zero on-site emissions.',
    },
  ],
} as const

export const assessmentSection = {
  id: 'assessment',
  eyebrow: 'Free Assessment',
  title: 'Discover Your Green Transition Potential',
  body:
    'In less than two minutes, discover opportunities to reduce energy costs, lower carbon emissions, and accelerate your sustainability journey. Answer a few questions and receive a customized Green Transition Opportunity Assessment from GPower Solutions.',
  image: `${import.meta.env.BASE_URL}contactus.webp`,
} as const

export const trustSignals = [
  {
    label: 'Design principle',
    value: 'Technology-agnostic',
    detail: 'Solutions are selected for the operational context — not a product quota.',
  },
  {
    label: 'Delivery model',
    value: 'End-to-end partnership',
    detail: 'From feasibility and investment logic through implementation and optimisation.',
  },
  {
    label: 'Commercial focus',
    value: 'Measurable outcomes',
    detail: 'Energy cost, resilience and carbon reduction considered together.',
  },
] as const

type FooterSocialLink = {
  label: string
  href: string
}

type FooterLegalLink = {
  label: string
  href: string
}

type FooterInfo = {
  infoHeading: string
  infoTagline: string
  email: string
  phone: string
  address: string
  socials: FooterSocialLink[]
  certifications: string[]
  companyLinks: { label: string; href: string }[]
  legalLinks: FooterLegalLink[]
  copyright: string
  mission: string
}

export const footerInfo: FooterInfo = {
  infoHeading: 'Get in touch',
  infoTagline: 'Have an industrial transition project in mind?',
  email: 'info@gpowersolutions.in',
  phone: '+91 98765 43210',
  address: 'Unit 42, Industrial Tech Park, Mumbai, India',
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/gpowersolutions' }
  ],
  certifications: ['ISO 9001:2015', 'ISO 14001:2015'],
  companyLinks: [
    { label: 'About', href: '/#about' },
    { label: 'Our process', href: '/#process' },
    { label: 'Solutions', href: '/#solutions' },
    { label: 'Industries', href: '/#industries' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Assessment', href: '/?form=assessment#assessment' },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '/legal/privacy-policy' },
    { label: 'Terms of Service', href: '/legal/terms-of-service' }
  ],
  copyright: 'Copyright 2025 – All Rights Reserved By gpowersolutions.in',
  mission:
    'We are a strategic sustainability partner that helps businesses identify, evaluate, and implement the right green energy solutions.',
}
