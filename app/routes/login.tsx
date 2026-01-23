import { redirect } from "react-router";
import { getSession, commitSession } from "~/services/session.server";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  // TODO: replace with real DB check
  if (email !== "admin@test.com" || password !== "123456") {
    return { error: "Invalid credentials" };
  }

  const session = await getSession(request.headers.get("Cookie"));

  session.set("userId", 1);
  session.set("role", "admin");

  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
