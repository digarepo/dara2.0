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

// ይህ ተግባር Request ን ይቀበላል
export async function getSession(request: Request) {
  return sessionStorage.getSession(request.headers.get('Cookie'));
}

// ... ሌሎች ተግባራት (createSession, requireUserId, destroySession) እንዳሉ ይቆዩ
