import { z } from "zod"

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/trpc"
import { prisma } from "@/lib/db"

export const userRouter = createTRPCRouter({
  UserProduct: publicProcedure.query(() => {
    return {
      productGategories: prisma.user.findMany(),
    }
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!"
  }),
})
