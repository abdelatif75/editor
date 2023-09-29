"use server"
import { ref, uploadBytes } from "firebase/storage"
import { storage } from "@/lib/firebase"
import { prisma } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function upload(formData: FormData) {
  const file: File | null = (await formData.get("file")) as unknown as File
  const productId = formData.get("productId") as string
  const title = formData.get("title") as string
  if (!file) {
    return false
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const storageRef = ref(storage, "/products/" + file.name)

  uploadBytes(storageRef, buffer).then(async (snapshot) => {
    await prisma.productImg.create({
      data: {
        productId: productId,
        title: title,
        imageFullPath: snapshot.metadata.fullPath,
      },
    })
  })

  revalidatePath("/products")
}
