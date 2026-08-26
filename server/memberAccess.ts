import { eq } from "drizzle-orm";
import { MemberAccess, User, memberAccess } from "../drizzle/schema";
import { getDb } from "./db";

export type NetworkAccess = "active" | "pending" | "suspended";

export async function getMemberAccessForUser(userId: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db
    .select()
    .from(memberAccess)
    .where(eq(memberAccess.userId, userId))
    .limit(1);

  return result[0];
}

export function resolveNetworkAccess(
  user: Pick<User, "role">,
  membership?: Pick<MemberAccess, "accessStatus">
): NetworkAccess {
  if (user.role === "admin") return "active";
  return membership?.accessStatus ?? "pending";
}
