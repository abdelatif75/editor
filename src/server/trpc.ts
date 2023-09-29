import { initTRPC, TRPCError } from "@trpc/server"
import { type CreateNextContextOptions } from "@trpc/server/adapters/next"
import { type Session } from "next-auth"

import { ZodError } from "zod"

import { getServerAuthSession } from "@/app/api/auth/[...nextauth]/route"

interface CreateContextOptions {
  session: Session | null
}

const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
  }
}

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts

  const session = await getServerAuthSession({ req, res })

  return createInnerTRPCContext({
    session,
  })
}

export const t = initTRPC.context<typeof createTRPCContext>().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }
  },
})

export const createTRPCRouter = t.router

export const publicProcedure = t.procedure

const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" })
  }
  return next({
    ctx: {
      session: { ...ctx.session, user: ctx.session.user },
    },
  })
})

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed)
