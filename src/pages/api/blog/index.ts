import { getSessionUser } from '@/libs/auth';
import { json, jsonError } from '@/libs/crud';
import { decodeRows, getDb, insertRow, tables } from '@/libs/d1';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url, locals }) => {
  const searchParams = new URL(url).searchParams;
  const published = searchParams.get('published') !== 'false';
  const limit = parseInt(searchParams.get('limit') || '10');
  const offset = parseInt(searchParams.get('offset') || '0');
  const tag = searchParams.get('tag');

  const conditions: string[] = [];
  const bindings: unknown[] = [];

  if (published) {
    conditions.push('published = 1');
  }

  if (tag) {
    conditions.push(
      'EXISTS (SELECT 1 FROM json_each(blog_posts.tags) WHERE json_each.value = ?)'
    );
    bindings.push(tag);
  }

  const where = conditions.length ? ` WHERE ${conditions.join(' AND ')}` : '';

  try {
    const { results } = await getDb(locals)
      .prepare(
        `SELECT * FROM blog_posts${where} ORDER BY (published_at IS NULL), published_at DESC, created_at DESC LIMIT ? OFFSET ?`
      )
      .bind(...bindings, limit, offset)
      .all();
    return json(decodeRows(tables.blog_posts, results));
  } catch (error) {
    return jsonError((error as Error).message);
  }
};

export const POST: APIRoute = async ({ request, locals, cookies }) => {
  const user = await getSessionUser(locals, cookies);
  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }
  try {
    const body = await request.json();
    if (body.published && !body.published_at) {
      body.published_at = new Date().toISOString();
    }
    const row = await insertRow(getDb(locals), 'blog_posts', body, {
      author_id: user.id,
    });
    return json(row, 201);
  } catch (error) {
    return jsonError((error as Error).message);
  }
};
