import express from "express";

import cookieParser from "cookie-parser";
import { requireAuth } from "./auth.middleware";

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Public route
app.get("/", (req, res) => {
  console.log("Request method:", req.method);
  console.log("Request headers:", req.headers);
  res.send("Backend is running! two");
});
export { app };

// Protected admin route
app.get("/admin/users", requireAuth(["ADMIN"]), async (req, res) => {
   console.log("Request method:", req.method);
  console.log("Request headers:", req.headers);
  res.json({ message: "Only admins can see this" });
});

// Server start
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
