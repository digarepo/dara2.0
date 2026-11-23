// app/validators/blog.ts
import { z } from 'zod';

export const blogSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').max(255),
  slug: z.string().min(3, 'Slug must be at least 3 characters').max(255),
  content: z.string().min(10, 'Content must be at least 10 characters'),
  imageUrl: z.string().url('Invalid image URL').optional().or(z.literal('')),
  status: z.enum(['draft', 'pending', 'approved', 'rejected']).default('draft'),
});

export type BlogInput = z.infer<typeof blogSchema>;
