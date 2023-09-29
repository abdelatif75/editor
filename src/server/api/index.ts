import { t } from "@/server/trpc"
import { userRouter } from "./routers/userRouter"
import { productRouter } from "./routers/productRouter"
import { CategoriesRouter } from "./routers/categoryRouter"
import { DesignRouter } from "./routers/designRouter"

export const appRouter = t.mergeRouters(
  userRouter,
  productRouter,
  CategoriesRouter,
  DesignRouter,
)

export type AppRouter = typeof appRouter
