import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = "YOUR_SECRET_KEY";

export const requireAuth = (roles: string[] = []) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.session;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
      const payload: any = jwt.verify(token, JWT_SECRET);
      if (roles.length && !roles.includes(payload.roleId)) {
        return res.status(403).json({ message: "Forbidden" });
      }
      (req as any).user = payload;
      next();
    } catch {
      return res.status(401).json({ message: "Invalid session" });
    }
  };
};