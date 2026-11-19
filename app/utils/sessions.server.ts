// app/utils/session.server.ts
import { createCookieSessionStorage, redirect } from 'react-router';
import { env } from '~/config/env';

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secrets: [env.SESSION_SECRET],
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  },
});

export async function createSession(
  request: Request,
  userId: number,
  roleId: number,
) {
  const session = await sessionStorage.getSession(
    request.headers.get('Cookie'),
  );
  session.set('userId', userId);
  session.set('roleId', roleId);

  return redirect('/admin', {
    headers: {
      'Set-Cookie': await sessionStorage.commitSession(session),
    },
  });
}

export async function getSession(request: Request) {
  return sessionStorage.getSession(request.headers.get('Cookie'));
}

export async function requireUserId(request: Request) {
  const session = await getSession(request);
  const userId = session.get('userId');
  if (!userId) {
    throw redirect('/login');
  }
  return userId;
}

export async function destroySession(request: Request) {
  const session = await getSession(request);
  return redirect('/', {
    headers: {
      'Set-Cookie': await sessionStorage.destroySession(session),
    },
  });
}
