import { getSessionUser } from '@/libs/auth';
import { json, jsonError } from '@/libs/crud';
import { getDb, getSingleton, upsertSingleton } from '@/libs/d1';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals }) => {
  try {
    const row = await getSingleton(getDb(locals), 'home_content');
    if (!row) {
      return jsonError('Not found', 404);
    }
    return json(row);
  } catch (error) {
    return jsonError((error as Error).message);
  }
};

export const PUT: APIRoute = async ({ request, locals, cookies }) => {
  const user = await getSessionUser(locals, cookies);
  if (!user) {
    return new Response('Unauthorized', { status: 401 });
  }
  try {
    const body = await request.json();
    return json(await upsertSingleton(getDb(locals), 'home_content', body));
  } catch (error) {
    return jsonError((error as Error).message);
  }
};
