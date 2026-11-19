// app/types/index.ts (ወይም app/types/content.ts)

// ==========================================
// 1. Content Types (ለብሎግ እና ፖርትፎሊዮ)
// ==========================================

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

// ==========================================
// 2. RBAC Types (ለስራ ፈቃዶች እና ሚናዎች)
// ==========================================

export type Role = 'admin' | 'editor' | 'viewer';

export type Permission =
  | 'create:blog'
  | 'edit:blog'
  | 'delete:blog'
  | 'create:portfolio'
  | 'edit:portfolio'
  | 'delete:portfolio'
  | 'manage:users';

export const rolePermissions: Record<Role, Permission[]> = {
  admin: [
    'create:blog',
    'edit:blog',
    'delete:blog',
    'create:portfolio',
    'edit:portfolio',
    'delete:portfolio',
    'manage:users',
  ],
  editor: ['create:blog', 'edit:blog', 'create:portfolio', 'edit:portfolio'],
  viewer: [],
};

export function hasPermission(role: Role, permission: Permission): boolean {
  return rolePermissions[role]?.includes(permission) || false;
}
