import { supabase } from '@/libs/supabase';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ cookies }) => {
  const accessToken = cookies.get('sb-access-token');
  const refreshToken = cookies.get('sb-refresh-token');

  if (!accessToken || !refreshToken) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { data, error } = await supabase
    .from('about_content')
    .select('*')
    .single();

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

export const PUT: APIRoute = async ({ request, cookies }) => {
  const accessToken = cookies.get('sb-access-token');
  const refreshToken = cookies.get('sb-refresh-token');

  if (!accessToken || !refreshToken) {
    return new Response('Unauthorized', { status: 401 });
  }

  const body = await request.json();

  const { data, error } = await supabase
    .from('about_content')
    .upsert(body)
    .select();

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify(data[0]), {
    headers: { 'Content-Type': 'application/json' },
  });
};
