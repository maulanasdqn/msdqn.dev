export const SITE_URL = 'https://msdqn.dev';
export const SITE_NAME = 'Maulana Sodiqin';
export const OG_IMAGE = `${SITE_URL}/og-image.png?v=2`;
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const DEFAULT_DESCRIPTION =
  'Senior software engineer with 7 years of experience building production web platforms in Rust and TypeScript. Based in Bandung, Indonesia, open to remote and relocation.';

export const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Maulana Sodiqin',
  givenName: 'Maulana',
  familyName: 'Sodiqin',
  url: `${SITE_URL}/`,
  image: OG_IMAGE,
  email: 'mailto:maulanasdqn@gmail.com',
  jobTitle: 'Senior Software Engineer',
  description:
    'Senior software engineer with 7 years of experience building production web platforms in Rust and TypeScript. Sole engineer behind a rebuilt web scraping engine (400 jobs/s sustained, anti-bot unblocking), and delivers full-stack client platforms end to end.',
  sameAs: [
    'https://www.linkedin.com/in/maulana-sodiqin/',
    'https://github.com/maulanasdqn',
  ],
  knowsAbout: [
    'Rust',
    'TypeScript',
    'JavaScript',
    'SQL',
    'Axum',
    'Tokio',
    'gRPC',
    'Hono',
    'oRPC',
    'React',
    'TanStack',
    'Next.js',
    'Vue',
    'PostgreSQL',
    'Redis',
    'RabbitMQ',
    'BigQuery',
    'Docker',
    'Kubernetes',
    'Cloudflare Workers',
    'Chromium',
    'Web scraping',
    'Browser automation',
    'Anti-bot bypass',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universitas Islam Nusantara',
  },
  worksFor: [
    {
      '@type': 'Organization',
      name: 'PT Pena Teknologi Indonesia (MrScraper)',
      url: 'https://mrscraper.com',
    },
    { '@type': 'Organization', name: 'Strata52' },
  ],
  memberOf: { '@type': 'Organization', name: 'IMPHNEN' },
  homeLocation: {
    '@type': 'Place',
    name: 'Bandung, Indonesia',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bandung',
      addressRegion: 'West Java',
      addressCountry: 'ID',
    },
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Senior Software Engineer',
    skills:
      'Rust, TypeScript, React, PostgreSQL, Kubernetes, Cloudflare Workers',
  },
};

export const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  inLanguage: 'en',
  publisher: { '@id': PERSON_ID },
};

export const breadcrumbs = (name: string, path: string) => ({
  '@type': 'BreadcrumbList',
  '@id': `${SITE_URL}${path}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
  ],
});

export const graph = (...nodes: object[]) =>
  JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
