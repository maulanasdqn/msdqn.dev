import { json, jsonError } from '@/libs/crud';
import { decodeRow, getDb, tables } from '@/libs/d1';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, locals }) => {
  const slug = params.slug;

  if (!slug) {
    return jsonError('Blog post slug required', 400);
  }

  try {
    const row = await getDb(locals)
      .prepare('SELECT * FROM blog_posts WHERE slug = ? AND published = 1')
      .bind(slug)
      .first();
    if (!row) {
      return jsonError('Blog post not found', 404);
    }
    return json(decodeRow(tables.blog_posts, row));
  } catch (error) {
    return jsonError((error as Error).message);
  }
};
