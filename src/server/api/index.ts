import { t } from "@/server/trpc"
import { CategoriesRouter } from "./routers/categoryRouter"

export const appRouter = t.mergeRouters(CategoriesRouter)

export type AppRouter = typeof appRouter
