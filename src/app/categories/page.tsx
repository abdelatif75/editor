import { CategoryPage } from '@/components'
import { serverClient } from '@/utils/serverClient'
import React from 'react'

export default async function page() {
  const data = await serverClient.GetAllCategories()

  return (
    <div>
      <CategoryPage initialCategory={data} />
    </div>
  )
}
