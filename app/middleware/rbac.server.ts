// app/middleware/rbac.server.ts
import { redirect } from 'react-router';
import { requireAuth } from './auth.server';
import { hasPermission, type Permission } from '~/types/rbac';

export async function requirePermission(
  request: Request,
  permission: Permission,
) {
  const { userId, roleId } = await requireAuth(request);

  // Map roleId to role name (simplified)
  const roleMap: Record<number, 'admin' | 'editor' | 'viewer'> = {
    1: 'admin',
    2: 'editor',
    3: 'viewer',
  };

  const role = roleMap[roleId] || 'viewer';

  if (!hasPermission(role, permission)) {
    throw redirect('/unauthorized');
  }

  return { userId, role };
}
