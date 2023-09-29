import { z } from "zod"
import { prisma } from "@/lib/db"
import { createTRPCRouter, publicProcedure } from "@/server/trpc"

export const CategoriesRouter = createTRPCRouter({
  DeleteCategory: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async (opts) => {
      try {
        await prisma.productCategory.delete({
          where: {
            id: opts.input.id,
          },
        })
        return true
      } catch (error) {
        return error
      }
    }),
})
