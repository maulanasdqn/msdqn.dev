import { supabase } from '@/libs/supabase';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, cookies }) => {
  const accessToken = cookies.get('sb-access-token');
  const refreshToken = cookies.get('sb-refresh-token');

  if (!accessToken || !refreshToken) {
    return new Response('Unauthorized', { status: 401 });
  }

  await supabase.auth.setSession({
    access_token: accessToken.value,
    refresh_token: refreshToken.value,
  });

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', params.id)
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

export const PUT: APIRoute = async ({ params, request, cookies }) => {
  const accessToken = cookies.get('sb-access-token');
  const refreshToken = cookies.get('sb-refresh-token');

  if (!accessToken || !refreshToken) {
    return new Response('Unauthorized', { status: 401 });
  }

  await supabase.auth.setSession({
    access_token: accessToken.value,
    refresh_token: refreshToken.value,
  });

  const body = await request.json();

  const { data, error } = await supabase
    .from('projects')
    .update(body)
    .eq('id', params.id)
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

export const DELETE: APIRoute = async ({ params, cookies }) => {
  const accessToken = cookies.get('sb-access-token');
  const refreshToken = cookies.get('sb-refresh-token');

  if (!accessToken || !refreshToken) {
    return new Response('Unauthorized', { status: 401 });
  }

  await supabase.auth.setSession({
    access_token: accessToken.value,
    refresh_token: refreshToken.value,
  });

  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', params.id);

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
