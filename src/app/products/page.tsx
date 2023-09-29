import React, { Fragment } from 'react'
import AddNewProduct from './_components/addNewProduct'
import { prisma } from '@/lib/db'

export default async function page() {
  const data = await prisma.products.findMany({
    include: {
      productImg: true,
    },
  })

  return (
    <div>
      {/**add new product */}
      <section>
        <AddNewProduct />
      </section>
      {/**product image */}
      <section>
        {data.map((product, index) => (
          <Fragment key={index}>
            <div>{product.title}</div>
          </Fragment>
        ))}
      </section>
    </div>
  )
}
