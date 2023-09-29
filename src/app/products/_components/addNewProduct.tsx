import { serverClient } from '@/utils/serverClient'
export const revalidate = 3600

export default async function AddNewProduct() {
  const category = await serverClient.GetCategory()
  return <div>test</div>
}
