import { redirect } from "react-router";
import { getSession } from "./session.server";

export async function requireUser(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");

  if (!userId) {
    throw redirect("/login");
  }

  return userId as number;
}

export async function getOptionalUser(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  return session.get("userId") as number | null;
}
