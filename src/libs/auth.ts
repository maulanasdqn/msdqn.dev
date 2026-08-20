import type { AstroCookies } from 'astro';
import { getDb } from './d1';

const SESSION_COOKIE = 'session';
const SESSION_DURATION_SECONDS = 60 * 60 * 24 * 7;
const PBKDF2_ITERATIONS = 100000;

const toHex = (buffer: ArrayBuffer) =>
  [...new Uint8Array(buffer)]
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');

const deriveHash = async (
  password: string,
  salt: Uint8Array,
  iterations: number
) => {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveBits']
  );
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', hash: 'SHA-256', salt, iterations },
    key,
    256
  );
  return toHex(bits);
};

export const hashPassword = async (password: string) => {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await deriveHash(password, salt, PBKDF2_ITERATIONS);
  return `pbkdf2:${PBKDF2_ITERATIONS}:${toHex(salt.buffer)}:${hash}`;
};

export const verifyPassword = async (password: string, stored: string) => {
  const [scheme, iterations, saltHex, expected] = stored.split(':');
  if (scheme !== 'pbkdf2' || !iterations || !saltHex || !expected) {
    return false;
  }
  const salt = Uint8Array.from(
    saltHex.match(/.{2}/g)?.map(byte => parseInt(byte, 16)) ?? []
  );
  const hash = await deriveHash(password, salt, parseInt(iterations));
  if (hash.length !== expected.length) return false;
  let mismatch = 0;
  for (let i = 0; i < hash.length; i++) {
    mismatch |= hash.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return mismatch === 0;
};

export type SessionUser = {
  id: string;
  email: string;
};

export const findUserByEmail = async (db: D1Database, email: string) =>
  db
    .prepare('SELECT * FROM users WHERE email = ?')
    .bind(email.trim().toLowerCase())
    .first<{ id: string; email: string; password_hash: string }>();

export const createSession = async (db: D1Database, userId: string) => {
  const token = toHex(crypto.getRandomValues(new Uint8Array(32)).buffer);
  const expiresAt = new Date(
    Date.now() + SESSION_DURATION_SECONDS * 1000
  ).toISOString();
  await db
    .prepare(
      'INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)'
    )
    .bind(token, userId, expiresAt)
    .run();
  return token;
};

export const getSessionUser = async (
  locals: App.Locals,
  cookies: AstroCookies
): Promise<SessionUser | null> => {
  const token = cookies.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const db = getDb(locals);
  const row = await db
    .prepare(
      'SELECT users.id AS id, users.email AS email, sessions.expires_at AS expires_at FROM sessions JOIN users ON users.id = sessions.user_id WHERE sessions.token = ?'
    )
    .bind(token)
    .first<{ id: string; email: string; expires_at: string }>();
  if (!row) return null;
  if (new Date(row.expires_at).getTime() < Date.now()) {
    await db.prepare('DELETE FROM sessions WHERE token = ?').bind(token).run();
    return null;
  }
  return { id: row.id, email: row.email };
};

export const setSessionCookie = (cookies: AstroCookies, token: string) => {
  cookies.set(SESSION_COOKIE, token, {
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: SESSION_DURATION_SECONDS,
  });
};

export const clearSession = async (
  locals: App.Locals,
  cookies: AstroCookies
) => {
  const token = cookies.get(SESSION_COOKIE)?.value;
  if (token) {
    await getDb(locals)
      .prepare('DELETE FROM sessions WHERE token = ?')
      .bind(token)
      .run();
  }
  cookies.delete(SESSION_COOKIE, { path: '/' });
};
