export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

export const ROLES = {
  ADMIN: Role.ADMIN,
  USER: Role.USER,
} as const;