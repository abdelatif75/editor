import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@/server/trpc"

export const productRouter = createTRPCRouter({
  productsGet: publicProcedure.query(() => {
    return {
      product: [
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
          price: 4144,
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
          price: 4144,
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
          price: 4144,
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
          price: 4144,
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
          price: 4144,
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
          price: 4144,
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
          price: 4144,
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
          price: 4144,
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
          price: 4144,
        },
      ],
    }
  }),
  productUpload: publicProcedure.query(({ ctx }) => {
    return ctx.session?.user.id
  }),
  productAttrGet: publicProcedure.query(() => {
    return {
      attr: [
        {
          key: "color",
          default: "black",
          indexOfDefault: undefined,
          newIndex: undefined,
          content: ["black", "whate"],
        },
        {
          key: "saze",
          default: "2", //object have id and attr
          indexOfDefault: undefined,
          newIndex: undefined,
          content: ["21", "2"],
        },
        {
          key: "test",
          default: "2", //object have id and attr
          indexOfDefault: undefined,
          newIndex: undefined,
          content: ["21", "2"],
        },
      ],
    }
  }),
  featuredProducts: publicProcedure.query(() => {
    return {
      product: [
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
          price: 4144,
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
          price: 4144,
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
          price: 4144,
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
          price: 4144,
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
          price: 4144,
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
          price: 4144,
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
          price: 4144,
        },
        {
          src: "/1.jpg",
          alt: "test",
          title: "hfie",
          by: "skdjfgwe",
          price: 4144,
        },
      ],
    }
  }),
})
