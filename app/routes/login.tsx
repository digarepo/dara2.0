// app/routes/login.tsx
import { type ActionFunctionArgs } from 'react-router';
import { verifyPassword } from '~/utils/password.server';
import { createSession } from '~/utils/session.server';
import { queryOne } from '~/db';

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

export default function Login() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form method="post" className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            name="username"
            className="mt-1 block w-full border rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            className="mt-1 block w-full border rounded p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
