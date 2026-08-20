import {
  createSession,
  findUserByEmail,
  setSessionCookie,
  verifyPassword,
} from '@/libs/auth';
import { getDb } from '@/libs/d1';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({
  request,
  cookies,
  locals,
  redirect,
}) => {
  const formData = await request.formData();
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();

  if (!email || !password) {
    return new Response('Email and password are required', { status: 400 });
  }

  const db = getDb(locals);
  const user = await findUserByEmail(db, email);

  if (!user || !(await verifyPassword(password, user.password_hash))) {
    return redirect('/login?message=Invalid email or password');
  }

  const token = await createSession(db, user.id);
  setSessionCookie(cookies, token);
  return redirect('/cms');
};
