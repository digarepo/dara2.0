// app/routes/api/login.ts
import { type ActionFunctionArgs } from 'react-router';
import { queryOne } from '~/db';
import { verifyPassword } from '~/utils/password.server';
import { createSession } from '~/utils/session.server';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  if (!username || !password) {
    return new Response(
      JSON.stringify({ error: 'Username and password are required' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  const user = await queryOne<{
    id: number;
    username: string;
    password_hash: string;
    role_id: number;
  }>(
    'SELECT id, username, password_hash, role_id FROM users WHERE username = ? AND is_active = TRUE',
    [username],
  );

  if (!user) {
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const isValid = await verifyPassword(password, user.password_hash);
  if (!isValid) {
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return createSession(request, user.id, user.role_id);
}
