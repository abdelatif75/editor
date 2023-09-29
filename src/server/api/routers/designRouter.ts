import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/trpc"
//import { prisma } from "@/lib/db"

export const DesignRouter = createTRPCRouter({
  featuredDesigns: publicProcedure.query(() => {
    return {
      data: [
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
        },
      ],
    }
  }),
})
