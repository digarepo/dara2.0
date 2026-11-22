import { type LoaderFunctionArgs } from 'react-router';
import { requireAuth } from '~/middleware/auth.server';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);
  return null;
}

export default function AdminBlogs() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Manage Blogs</h1>
    </div>
  );
}
