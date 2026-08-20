import { getDb, getSingleton, listRows } from '@/libs/d1';
import type { APIRoute } from 'astro';

const formatPeriod = (start: unknown, end: unknown) => {
  const fmt = (value: unknown) =>
    typeof value === 'string' && value
      ? new Date(value).toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric',
        })
      : null;
  const from = fmt(start);
  const to = fmt(end) ?? 'Present';
  return from ? `${from} – ${to}` : '';
};

export const GET: APIRoute = async ({ locals }) => {
  const db = getDb(locals);
  const [about, experiences, projects, caseStudies] = await Promise.all([
    getSingleton(db, 'about_content'),
    listRows(db, 'experiences'),
    listRows(db, 'projects'),
    listRows(db, 'case_studies'),
  ]);

  const lines: string[] = [
    '# Maulana Sodiqin — Full Profile',
    '',
    '> Senior Software Engineer specializing in Rust, web scraping, AI agent tooling, and Cloudflare edge infrastructure. Based in Bandung, Indonesia. Open to full-time and freelance work. Contact: maulanasdqn@gmail.com — https://msdqn.dev',
    '',
  ];

  if (about) {
    lines.push('## About', '');
    if (about.description_1) lines.push(String(about.description_1), '');
    if (about.description_2) lines.push(String(about.description_2), '');
    const categories = about.skills_categories;
    if (Array.isArray(categories) && categories.length) {
      lines.push('### Skills', '');
      for (const category of categories) {
        lines.push(`- ${category.name}: ${category.skills.join(', ')}`);
      }
      lines.push('');
    }
  }

  lines.push('## Experience', '');
  for (const exp of experiences) {
    lines.push(
      `### ${exp.title} — ${exp.company} (${formatPeriod(exp.start_date, exp.end_date)})`
    );
    if (exp.location) lines.push(`Location: ${exp.location}`);
    if (Array.isArray(exp.responsibilities)) {
      for (const item of exp.responsibilities) lines.push(`- ${item}`);
    }
    if (Array.isArray(exp.technologies) && exp.technologies.length) {
      lines.push(`Technologies: ${exp.technologies.join(', ')}`);
    }
    lines.push('');
  }

  lines.push('## Projects', '');
  for (const project of projects) {
    lines.push(`### ${project.title}`);
    if (project.category) lines.push(`Category: ${project.category}`);
    if (project.description) lines.push(String(project.description));
    if (Array.isArray(project.technologies) && project.technologies.length) {
      lines.push(`Technologies: ${project.technologies.join(', ')}`);
    }
    if (project.github_url) lines.push(`GitHub: ${project.github_url}`);
    if (project.live_url) lines.push(`Live: ${project.live_url}`);
    lines.push('');
  }

  lines.push('## Case Studies', '');
  for (const cs of caseStudies) {
    lines.push(`### ${cs.title}`);
    if (cs.client) lines.push(`Client: ${cs.client}`);
    if (cs.duration) lines.push(`Duration: ${cs.duration}`);
    if (cs.challenge) lines.push(`Challenge: ${cs.challenge}`);
    if (cs.solution) lines.push(`Solution: ${cs.solution}`);
    if (Array.isArray(cs.results) && cs.results.length) {
      lines.push('Results:');
      for (const result of cs.results) lines.push(`- ${result}`);
    }
    if (Array.isArray(cs.technologies) && cs.technologies.length) {
      lines.push(`Technologies: ${cs.technologies.join(', ')}`);
    }
    lines.push('');
  }

  lines.push(
    '## Links',
    '',
    '- Portfolio: https://msdqn.dev',
    '- Hire: https://msdqn.dev/hire-me',
    '- Resume: https://msdqn.dev/resume.pdf',
    '- Infrastructure: https://infra.msdqn.dev',
    '- GitHub: https://github.com/maulanasdqn',
    '- LinkedIn: https://www.linkedin.com/in/maulana-sodiqin/',
    ''
  );

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
