// app/routes/login.tsx
import { type ActionFunctionArgs } from 'react-router';
import { verifyPassword } from '~/utils/password.server';
import { createSession } from '~/utils/session.server';
import { queryOne } from '~/db';
import { loginSchema } from '~/validators/auth';
import { Form, useActionData } from 'react-router';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const rawData = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const result = loginSchema.safeParse(rawData);
  if (!result.success) {
    return new Response(
      JSON.stringify({ errors: result.error.flatten().fieldErrors }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  const { email, password } = result.data;

  const user = await queryOne<{
    id: number;
    email: string;
    password_hash: string;
    role_id: number;
  }>(
    'SELECT id, email, password_hash, role_id FROM users WHERE email = ? AND is_active = TRUE',
    [email],
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
  const actionData = useActionData<{
    errors?: Record<string, string[]>;
    error?: string;
  }>();

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      {actionData?.error && (
        <p className="text-red-500 mb-4">{actionData.error}</p>
      )}
      <Form method="post" className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full border rounded p-2"
            required
          />
          {actionData?.errors?.email && (
            <p className="text-red-500 text-sm">{actionData.errors.email[0]}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            className="mt-1 block w-full border rounded p-2"
            required
          />
          {actionData?.errors?.password && (
            <p className="text-red-500 text-sm">
              {actionData.errors.password[0]}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </Form>
    </div>
  );
}
