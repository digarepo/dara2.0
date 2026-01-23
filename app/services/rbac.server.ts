import { RolePermissions } from "~/config/rbac";
import { Permission } from "~/config/permissions";

export function hasPermission(
  role: keyof typeof RolePermissions,
  permission: Permission
): boolean {
  return RolePermissions[role]?.includes(permission);
}

export function requirePermission(
  role: keyof typeof RolePermissions,
  permission: Permission
) {
  if (!hasPermission(role, permission)) {
    throw new Response("Forbidden", { status: 403 });
  }
}
