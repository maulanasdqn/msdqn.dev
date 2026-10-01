import type { APIRoute } from 'astro';
import { getDb } from '@/libs/d1';

const blogHasPosts = async (locals: App.Locals): Promise<boolean> => {
  try {
    const row = await getDb(locals)
      .prepare('SELECT 1 FROM blog_posts WHERE published = 1 LIMIT 1')
      .first();
    return row !== null;
  } catch {
    return false;
  }
};

export const GET: APIRoute = async ({ locals }) => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const pages = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/hire-me', priority: '0.9', changefreq: 'monthly' },
    ...((await blogHasPosts(locals))
      ? [{ path: '/blog', priority: '0.8', changefreq: 'weekly' }]
      : []),
    { path: '/resume.pdf', priority: '0.7', changefreq: 'monthly' },
  ];
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
