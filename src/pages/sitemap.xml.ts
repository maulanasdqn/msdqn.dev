import type { APIRoute } from 'astro';

const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/hire-me', priority: '0.9', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/resume.pdf', priority: '0.7', changefreq: 'monthly' },
];

export const GET: APIRoute = async () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map(
      page => `  <url>
    <loc>https://msdqn.dev${page.path === '/' ? '/' : page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
