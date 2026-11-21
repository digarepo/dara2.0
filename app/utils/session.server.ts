import { createCookieSessionStorage } from "@remix-run/node";

// Use a strong secret in production
const sessionSecret = process.env.SESSION_SECRET || "dev-secret";

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      secrets: [sessionSecret],
      maxAge: 60 * 60 * 24, // 1 day
    },
  });