import { t } from "@/server/trpc"
import { CategoriesRouter } from "./routers/categoryRouter"
import { ProductRouter } from "./routers/productRouter"

export const appRouter = t.mergeRouters(CategoriesRouter, ProductRouter)

export type AppRouter = typeof appRouter
