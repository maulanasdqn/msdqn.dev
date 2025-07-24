import { supabase } from '@/libs/supabase';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, url }) => {
  const searchParams = new URL(url).searchParams;
  const bySlug = searchParams.get('by') === 'slug';
  const identifier = params.id;

  if (!identifier) {
    return new Response(JSON.stringify({ error: 'Blog post identifier required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let query = supabase
    .from('blog_posts')
    .select('*');

  if (bySlug) {
    query = query.eq('slug', identifier);
  } else {
    query = query.eq('id', identifier);
  }

  const { data, error } = await query.single();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.code === 'PGRST116' ? 404 : 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const PUT: APIRoute = async ({ params, request, cookies }) => {
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
    .update(body)
    .eq('id', params.id)
    .eq('author_id', userId)
    .select();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!data.length) {
    return new Response(JSON.stringify({ error: 'Blog post not found or unauthorized' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(data[0]), {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const DELETE: APIRoute = async ({ params, cookies }) => {
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

  const userId = session.data.user?.id;

  if (!userId) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', params.id)
    .eq('author_id', userId);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
};