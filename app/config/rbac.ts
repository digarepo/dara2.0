import { Permission } from "./permissions";

export const RolePermissions = {
  ADMIN: [
    Permission.ADMIN_ACCESS,
    Permission.BLOG_READ,
    Permission.BLOG_CREATE,
    Permission.BLOG_UPDATE,
    Permission.BLOG_DELETE,
    Permission.PORTFOLIO_READ,
    Permission.PORTFOLIO_CREATE,
    Permission.PORTFOLIO_UPDATE,
    Permission.PORTFOLIO_DELETE,
    Permission.USER_READ,
    Permission.USER_MANAGE,
  ],

  EDITOR: [
    Permission.BLOG_READ,
    Permission.BLOG_CREATE,
    Permission.BLOG_UPDATE,
    Permission.PORTFOLIO_READ,
    Permission.PORTFOLIO_UPDATE,
  ],

  AUTHOR: [
    Permission.BLOG_READ,
    Permission.BLOG_CREATE,
    Permission.BLOG_UPDATE, // own posts only (logic enforced separately)
  ],

  USER: [
    Permission.BLOG_READ,
    Permission.PORTFOLIO_READ,
  ],

  GUEST: [
    Permission.BLOG_READ,
    Permission.PORTFOLIO_READ,
  ],
} as const;
