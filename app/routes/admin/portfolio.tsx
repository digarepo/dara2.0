import { type LoaderFunctionArgs } from 'react-router';
import { requireAuth } from '~/middleware/auth.server';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);
  return null;
}

export default function AdminPortfolio() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Manage Portfolio</h1>
    </div>
  );
}
