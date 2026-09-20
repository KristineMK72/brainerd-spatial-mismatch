/**
 * Auth placeholder.
 *
 * Next steps:
 * 1. Add Clerk, Auth.js, or Supabase Auth
 * 2. Require session on all protected routes
 * 3. Scope every query by org_id (multi-tenant)
 */

export type SessionUser = {
  id: string;
  email: string;
  orgId: string;
  name?: string;
};

/** Demo user until real auth is wired */
export function getDemoSession(): SessionUser {
  return {
    id: "demo-user-1",
    email: "owner@brainerd-demo.local",
    orgId: "org-brainerd-demo",
    name: "Demo Owner",
  };
}
