import { trpc } from '@/utils/client'
import { serverClient } from '@/utils/serverClient'
import React from 'react'

export default function categoryPage({
  initialCategory,
}: {
  initialCategory: Awaited<
    ReturnType<(typeof serverClient)['GetAllCategories']>
  >
}) {
  const data = trpc.GetAllCategories.useQuery(undefined, {
    initialData: initialCategory,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })
  return <div></div>
}
