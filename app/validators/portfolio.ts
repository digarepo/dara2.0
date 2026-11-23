// app/validators/portfolio.ts
import { z } from 'zod';

export const portfolioSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').max(255),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  imageUrl: z.string().url('Invalid image URL'),
  projectUrl: z
    .string()
    .url('Invalid project URL')
    .optional()
    .or(z.literal('')),
});

export type PortfolioInput = z.infer<typeof portfolioSchema>;
