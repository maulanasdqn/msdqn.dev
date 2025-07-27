import { supabase } from '@/libs/supabase';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
  const searchParams = new URL(url).searchParams;
  const published = searchParams.get('published') !== 'false';
  const limit = parseInt(searchParams.get('limit') || '10');
  const offset = parseInt(searchParams.get('offset') || '0');
  const tag = searchParams.get('tag');

  let query = supabase.from('blog_posts').select('*');

  if (published) {
    query = query.eq('published', true);
  }

  if (tag) {
    query = query.contains('tags', [tag]);
  }

  query = query
    .order('published_at', { ascending: false, nullsFirst: false })
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  const { data, error } = await query;

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ request, cookies }) => {
  const accessToken = cookies.get('sb-access-token');
  const refreshToken = cookies.get('sb-refresh-token');

  if (!accessToken || !refreshToken) {
    return new Response('Unauthorized', { status: 401 });
  }

  const session = await supabase.auth.setSession({
    access_token: accessToken.value,
    refresh_token: refreshToken.value,
  });

  if (session.error) {
    return new Response('Unauthorized', { status: 401 });
  }

  const body = await request.json();
  const userId = session.data.user?.id;

  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .insert([{ ...body, author_id: userId }])
    .select();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(data[0]), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
};
