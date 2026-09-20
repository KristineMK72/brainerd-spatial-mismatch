/**
 * Auth helpers for Spatialytics.
 * Clerk handles identity. Scope every DB query by orgId from getSession().
 */

import { auth, currentUser } from "@clerk/nextjs/server";

export type SessionUser = {
  id: string;
  email: string | undefined;
  orgId: string | null;
  name: string | null;
};

export async function getSession(): Promise<SessionUser | null> {
  const { userId, orgId } = await auth();
  if (!userId) return null;

  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress;
  const name =
    user?.fullName ||
    [user?.firstName, user?.lastName].filter(Boolean).join(" ") ||
    null;

  return {
    id: userId,
    email,
    orgId: orgId ?? (user?.privateMetadata?.orgId as string | undefined) ?? null,
    name,
  };
}

export async function requireSession(): Promise<SessionUser> {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  return session;
}
