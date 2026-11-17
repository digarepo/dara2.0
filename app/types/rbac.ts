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
