import { z } from "zod"
import { prisma } from "@/lib/db"
import { createTRPCRouter, publicProcedure } from "@/server/trpc"

export const CategoriesRouter = createTRPCRouter({
  GetCategory: publicProcedure.query(async () => {
    try {
      return await prisma.productCategory.findMany({
        where:{
          tier: 3,
        }
      })
    } catch (error) {
      console.log(error)
    }
    return null
  }),
})
