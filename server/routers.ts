import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { getMemberAccessForUser, resolveNetworkAccess } from "./memberAccess";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  memberNetwork: router({
    status: protectedProcedure.query(async ({ ctx }) => {
      const membership = await getMemberAccessForUser(ctx.user.id);
      return {
        access: resolveNetworkAccess(ctx.user, membership),
        memberSince: membership?.joinedAt ?? null,
        professionalCategory: membership?.professionalCategory ?? null,
      };
    }),
  }),
});

export type AppRouter = typeof appRouter;
