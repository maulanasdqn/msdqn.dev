import type { APIRoute } from 'astro';
import { getSessionUser } from './auth';
import {
  deleteRow,
  getDb,
  getRowById,
  insertRow,
  listRows,
  updateRow,
} from './d1';

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const jsonError = (message: string, status = 500) =>
  json({ error: message }, status);

export const createCollectionRoutes = (table: string) => {
  const GET: APIRoute = async ({ locals }) => {
    try {
      return json(await listRows(getDb(locals), table));
    } catch (error) {
      return jsonError((error as Error).message);
    }
  };

  const POST: APIRoute = async ({ request, locals, cookies }) => {
    const user = await getSessionUser(locals, cookies);
    if (!user) {
      return new Response('Unauthorized', { status: 401 });
    }
    try {
      const body = await request.json();
      return json(await insertRow(getDb(locals), table, body));
    } catch (error) {
      return jsonError((error as Error).message);
    }
  };

  return { GET, POST };
};

export const createItemRoutes = (table: string) => {
  const GET: APIRoute = async ({ params, locals, cookies }) => {
    const user = await getSessionUser(locals, cookies);
    if (!user) {
      return new Response('Unauthorized', { status: 401 });
    }
    try {
      const row = await getRowById(getDb(locals), table, params.id!);
      if (!row) {
        return jsonError('Not found', 404);
      }
      return json(row);
    } catch (error) {
      return jsonError((error as Error).message);
    }
  };

  const PUT: APIRoute = async ({ params, request, locals, cookies }) => {
    const user = await getSessionUser(locals, cookies);
    if (!user) {
      return new Response('Unauthorized', { status: 401 });
    }
    try {
      const body = await request.json();
      const row = await updateRow(getDb(locals), table, params.id!, body);
      if (!row) {
        return jsonError('Not found', 404);
      }
      return json(row);
    } catch (error) {
      return jsonError((error as Error).message);
    }
  };

  const DELETE: APIRoute = async ({ params, locals, cookies }) => {
    const user = await getSessionUser(locals, cookies);
    if (!user) {
      return new Response('Unauthorized', { status: 401 });
    }
    try {
      await deleteRow(getDb(locals), table, params.id!);
      return json({ success: true });
    } catch (error) {
      return jsonError((error as Error).message);
    }
  };

  return { GET, PUT, DELETE };
};

export { json, jsonError };
