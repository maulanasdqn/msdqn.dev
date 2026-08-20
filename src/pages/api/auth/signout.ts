import { clearSession } from '@/libs/auth';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ cookies, locals, redirect }) => {
  await clearSession(locals, cookies);
  return redirect('/login');
};
