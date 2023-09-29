import React, { Fragment } from 'react'
import AddNewProduct from './_components/addNewProduct'
import { prisma } from '@/lib/db'
import Image from 'next/image'
import { storage } from '@/lib/firebase'
import { getDownloadURL, ref } from 'firebase/storage'

export default async function page() {
  const data = await prisma.products.findMany({
    include: {
      productColor: {
        include: {
          productImg: true,
        },
      },
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
            <div>{product.title}</div>{' '}
            <ul>
              {product.productColor.map((color, index) => (
                <Fragment key={index}>
                  <li>
                    <p style={{ backgroundColor: color.color }}>
                      {color.color}
                    </p>
                    {color.productImg.map((imageProduct, index) => {
                      const storageRef = ref(
                        storage,
                        imageProduct.imageFullPath,
                      )
                      return (
                        <Fragment key={index}>
                          {getDownloadURL(storageRef).then((url) => {
                            return (
                              <Fragment>
                                <Image
                                  alt=''
                                  src={url}
                                  width={200}
                                  height={300}
                                />
                              </Fragment>
                            )
                          })}
                        </Fragment>
                      )
                    })}
                  </li>
                </Fragment>
              ))}
            </ul>
          </Fragment>
        ))}
      </section>
    </div>
  )
}
