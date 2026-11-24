// app/routes/admin/portfolio.tsx
import { type LoaderFunctionArgs, type ActionFunctionArgs } from 'react-router';
import { requireAuth } from '~/middleware/auth.server';
import { query } from '~/db';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);
  const portfolios = await query(
    'SELECT * FROM portfolios ORDER BY created_at DESC',
  );
  return { portfolios };
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAuth(request);
  const formData = await request.formData();
  const intent = formData.get('intent');

  if (intent === 'delete') {
    const id = formData.get('id');
    await query('DELETE FROM portfolios WHERE id = ?', [id]);
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ error: 'Invalid action' }), {
    status: 400,
    headers: { 'Content-Type': 'application/json' },
  });
}

export default function AdminPortfolio() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Portfolio</h1>
      <p>Portfolio CRUD implementation will go here.</p>
    </div>
  );
}
