import { getSessionUser } from '@/libs/auth';
import { json, jsonError } from '@/libs/crud';
import { decodeRow, deleteRow, getDb, tables, updateRow } from '@/libs/d1';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, url, locals }) => {
  const searchParams = new URL(url).searchParams;
  const bySlug = searchParams.get('by') === 'slug';
  const identifier = params.id;

  if (!identifier) {
    return jsonError('Blog post identifier required', 400);
  }

  try {
    const row = await getDb(locals)
      .prepare(`SELECT * FROM blog_posts WHERE ${bySlug ? 'slug' : 'id'} = ?`)
      .bind(identifier)
      .first();
    if (!row) {
      return jsonError('Blog post not found', 404);
    }
    return json(decodeRow(tables.blog_posts, row));
  } catch (error) {
    return jsonError((error as Error).message);
  }
};

export const PUT: APIRoute = async ({ params, request, locals, cookies }) => {
  const user = await getSessionUser(locals, cookies);
  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }
  try {
    const body = await request.json();
    if (body.published && !body.published_at) {
      body.published_at = new Date().toISOString();
    }
    const row = await updateRow(getDb(locals), 'blog_posts', params.id!, body);
    if (!row) {
      return jsonError('Blog post not found or unauthorized', 404);
    }
    return json(row);
  } catch (error) {
    return jsonError((error as Error).message);
  }
};

export const DELETE: APIRoute = async ({ params, locals, cookies }) => {
  const user = await getSessionUser(locals, cookies);
  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }
  try {
    await deleteRow(getDb(locals), 'blog_posts', params.id!);
    return json({ success: true });
  } catch (error) {
    return jsonError((error as Error).message);
  }
};
