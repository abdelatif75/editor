"use server"
import { prisma } from "@/lib/db"
import { storage } from "@/lib/firebase"
import { ref, uploadBytes } from "firebase/storage"
import { revalidatePath } from "next/cache"

export async function addNewProduct(formData: FormData) {
  const file: File | null = (await formData.get("file")) as unknown as File
  if (!file) {
    return false
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const storageRef = ref(storage, "/products/" + file.name)
  uploadBytes(storageRef, buffer).then(async (snapshot) => {
    try {
      await prisma.products.create({
        data: {
          title: formData.get("title") as string,
          categoryId: formData.get("category") as string,
          discription: formData.get("discription") as string | null,
          productColor: {
            create: {
              color: formData.get("color") as string,
              productImg: {
                create: {
                  title: formData.get("name") as string,
                  imageFullPath: snapshot.metadata.fullPath,
                },
              },
            },
          },
        },
      })
    } catch (error) {
      console.log(error)
    }
  })

  revalidatePath("/products")
}

export async function addColorProduct(formData: FormData) {
  const file: File | null = (await formData.get("file")) as unknown as File
  if (!file) {
    return false
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const storageRef = ref(storage, "/products/" + file.name)
  uploadBytes(storageRef, buffer).then(async (snapshot) => {
    try {
      await prisma.productColor.create({
        data: {
          color: formData.get("color") as string,
          productId: formData.get("id") as string,
          productImg: {
            create: {
              title: formData.get("name") as string,
              imageFullPath: snapshot.metadata.fullPath,
            },
          },
        },
      })
    } catch (error) {
      console.log(error)
    }
  })

  revalidatePath("/products")
}
