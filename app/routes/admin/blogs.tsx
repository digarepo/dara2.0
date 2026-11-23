// app/routes/admin/blogs.tsx
import { type LoaderFunctionArgs, type ActionFunctionArgs } from 'react-router';
import { requireAuth } from '~/middleware/auth.server';
import { query } from '~/db';
import { Form, useLoaderData } from 'react-router';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);
  const blogs = await query('SELECT * FROM blogs ORDER BY created_at DESC');
  return { blogs };
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAuth(request);
  const formData = await request.formData();
  const intent = formData.get('intent');
  const id = formData.get('id');

  if (intent === 'approve') {
    await query("UPDATE blogs SET status = 'approved' WHERE id = ?", [id]);
  } else if (intent === 'reject') {
    await query("UPDATE blogs SET status = 'rejected' WHERE id = ?", [id]);
  } else if (intent === 'delete') {
    await query('DELETE FROM blogs WHERE id = ?', [id]);
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

interface Blog {
  id: number;
  title: string;
  status: string;
  created_at: string;
}

export default function AdminBlogs() {
  const { blogs } = useLoaderData<{ blogs: Blog[] }>();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Manage Blogs</h1>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-500">Status: {blog.status}</p>
            </div>
            <div className="flex gap-2">
              <Form method="post">
                <input type="hidden" name="intent" value="approve" />
                <input type="hidden" name="id" value={blog.id} />
                <button
                  type="submit"
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Approve
                </button>
              </Form>
              <Form method="post">
                <input type="hidden" name="intent" value="reject" />
                <input type="hidden" name="id" value={blog.id} />
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Reject
                </button>
              </Form>
              <Form method="post">
                <input type="hidden" name="intent" value="delete" />
                <input type="hidden" name="id" value={blog.id} />
                <button
                  type="submit"
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </Form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
