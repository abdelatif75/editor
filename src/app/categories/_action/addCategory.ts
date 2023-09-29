import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function AddCategory(formData: FormData) {
  "use server"

  try {
    await prisma.productCategory.create({
      data: {
        name: formData.get("name") as string,
        tier: Number(formData.get("tier")),
        parentCategoryId: formData.get("id") as string | null,
      },
    })
  } catch (error) {
    console.log(error)
  }
  revalidatePath("/categories")
}
