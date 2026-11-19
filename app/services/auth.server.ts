import bcrypt from "bcryptjs";
import { redirect } from "react-router";
import { getSession } from "~/utils/sessions.server";
import { Role } from "~/constants/roles";

/* ===========================
   PASSWORD
=========================== */

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

/* ===========================
   AUTH (Login required)
=========================== */

export type SessionUser = {
  id: number;
  email: string;
  role: Role;
};

export async function requireUser(request: Request): Promise<SessionUser> {
  const session = await getSession(request.headers.get("Cookie"));
  const user = session.get("user");

  if (!user) {
    throw redirect("/login");
  }

  return user as SessionUser;
}

/* ===========================
   RBAC (Role-based access)
=========================== */

export async function requireRole(
  request: Request,
  allowedRoles: Role[]
): Promise<SessionUser> {
  const user = await requireUser(request);

  if (!allowedRoles.includes(user.role)) {
    throw new Response("Forbidden", { status: 403 });
  }

  return user;
}