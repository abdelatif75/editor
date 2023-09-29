import { z } from "zod"
import { prisma } from "@/lib/db"
import { createTRPCRouter, publicProcedure } from "@/server/trpc"

export const CategoriesRouter = createTRPCRouter({
  GetAllCategories: publicProcedure.query(async () => {
    

    return true
  }),
  
})
