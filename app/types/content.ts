export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  imageUrl?: string;
  publishedAt: Date;
  updatedAt: Date;
}

export interface Portfolio {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  technologies: string[];
  createdAt: Date;
}
