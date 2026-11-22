// app/middleware/auth.server.ts
import { redirect } from 'react-router';
import { getSession } from '~/utils/session.server';

export async function requireAuth(request: Request) {
  const session = await getSession(request);
  const userId = session.get('userId');
  if (!userId) {
    throw redirect('/login');
  }
  return { userId: userId as number, roleId: session.get('roleId') as number };
}
