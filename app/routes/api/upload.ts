import { type ActionFunctionArgs } from 'react-router';
import { requireAuth } from '~/middleware/auth.server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function action({ request }: ActionFunctionArgs) {
  await requireAuth(request);
  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return new Response(JSON.stringify({ error: 'No file provided' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const fileName = `${Date.now()}-${file.name}`;
  const filePath = join(process.cwd(), 'public', 'uploads', fileName);

  await writeFile(filePath, buffer);

  return new Response(JSON.stringify({ url: `/uploads/${fileName}` }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
