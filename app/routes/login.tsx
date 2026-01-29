import { Form, redirect } from "react-router";
import { findUserByEmail } from "~/services/user.server";
import { verifyPassword } from "~/services/auth.server";
import { getSession, commitSession } from "~/utils/sessions.server";
import { Role } from "~/constants/roles";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const user = await findUserByEmail(email);

  if (!user || !(await verifyPassword(password, user.password_hash))) {
    return new Response("Invalid credentials", { status: 401 });
  }

  const roleMap: Record<number, Role> = {
    1: Role.ADMIN,
    2: Role.USER,
  };

  const session = await getSession(request.headers.get("Cookie"));
  session.set("user", {
    id: user.id,
    email: user.email,
    role: roleMap[user.role_id],
  });

  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export default function LoginPage() {
  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>Login</h1>
      <Form method="post">
        <input name="email" type="email" required />
        <input name="password" type="password" required />
        <button type="submit">Login</button>
      </Form>
    </div>
  );
}