// app/routes/admin/media.tsx
import { type LoaderFunctionArgs, type ActionFunctionArgs } from 'react-router';
import { requireAuth } from '~/middleware/auth.server';
import { query } from '~/db';
import { Form, useLoaderData } from 'react-router';

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAuth(request);
  const media = await query('SELECT * FROM media ORDER BY created_at DESC');
  return { media };
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAuth(request);
  const formData = await request.formData();
  const intent = formData.get('intent');

  if (intent === 'delete') {
    const id = formData.get('id');
    await query('DELETE FROM media WHERE id = ?', [id]);
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ error: 'Invalid action' }), {
    status: 400,
    headers: { 'Content-Type': 'application/json' },
  });
}

interface MediaItem {
  id: number;
  file_name: string;
  file_type: string;
  file_path: string;
  created_at: string;
}

export default function AdminMedia() {
  const { media } = useLoaderData<{ media: MediaItem[] }>();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Media Library</h1>

      <Form
        method="post"
        encType="multipart/form-data"
        className="mb-8 p-4 border rounded-lg"
      >
        <input type="file" name="file" className="mb-4" required />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Upload
        </button>
      </Form>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {media.map((item) => (
          <div key={item.id} className="border rounded-lg p-4">
            <p className="text-sm truncate">{item.file_name}</p>
            <p className="text-xs text-gray-500">{item.file_type}</p>
            <Form method="post" className="mt-2">
              <input type="hidden" name="intent" value="delete" />
              <input type="hidden" name="id" value={item.id} />
              <button
                type="submit"
                className="text-red-500 text-sm hover:underline"
              >
                Delete
              </button>
            </Form>
          </div>
        ))}
      </div>
    </div>
  );
}
