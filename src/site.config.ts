/**
 * Site-wide settings. Edit this file to change your name, links, and the
 * short bio shown on the homepage. Longer content lives in `src/content/`
 * (Markdown) and `src/data/` (YAML).
 */
export const site = {
  name: 'Ashley B. Hart',
  shortName: 'Ashley Hart',
  title: 'Ph.D. Student in Computer Science',
  affiliation: 'University of Florida',
  lab: 'Computing for Social Good Lab',
  advisor: 'Dr. Juan E. Gilbert',
  description:
    'Ashley B. Hart is a Computer Science Ph.D. student at the University of Florida researching artificial intelligence, games and simulation, procedural content generation, and human-centered AI.',
  url: 'https://ashleybhart.com',
  email: 'ashley.hart@ufl.edu',
  cvPdf: '/cv/ashley-hart-cv.pdf',
  /** Shown as a short callout on the homepage. Set `enabled: false` to hide it. */
  jobMarket: {
    enabled: true,
    message:
      'I am currently exploring tenure-track assistant professor positions in computer science. I would be glad to connect.',
  },
  interests: [
    'Artificial Intelligence',
    'Procedural Content Generation',
    'Games & Simulation',
    'Large Language Models',
    'Human-Centered & Explainable AI',
    'Culturally Relevant Computing',
  ],
  /** Leave `url` empty to hide a link. */
  links: [
    { label: 'Email', url: 'mailto:ashley.hart@ufl.edu', icon: 'mail' },
    { label: 'Google Scholar', url: '', icon: 'scholar' }, // TODO: add Google Scholar profile URL
    { label: 'ORCID', url: '', icon: 'orcid' }, // TODO: add ORCID URL
    { label: 'GitHub', url: 'https://github.com/ashley-hart', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ashley-b-hart/', icon: 'linkedin' },
    { label: 'itch.io', url: 'https://ashley-hart.itch.io/', icon: 'gamepad' },
  ],
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/research/', label: 'Research' },
  { href: '/teaching/', label: 'Teaching' },
  { href: '/cv/', label: 'CV' },
  { href: '/blog/', label: 'Blog' },
  { href: '/games/', label: 'Games' },
] as const;
