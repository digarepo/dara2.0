import { RolePermissions } from "~/config/rbac";
import { Permission } from "~/config/permissions";

export function hasPermission(
  role: keyof typeof RolePermissions,
  permission: Permission
): boolean {
  const allowed = RolePermissions[role] as readonly Permission[] | undefined;
  return allowed ? allowed.includes(permission) : false;
}

export function requirePermission(
  role: keyof typeof RolePermissions,
  permission: Permission
) {
  if (!hasPermission(role, permission)) {
    throw new Response("Forbidden", { status: 403 });
  }
}
