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
          productImageGroup: {
            include: {
              productImg: true,
            },
          },
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
            <div className='text-xl font-bold'>{product.title}</div>
            <ul>
              {product.productColor.map((color, index) => (
                <Fragment key={index}>
                  <li>
                    <p style={{ backgroundColor: color.color }}>
                      {color.color}
                    </p>
                    {color.productImageGroup.map((images, index) => (
                      <Fragment key={index}>
                        <ul>
                          {images.productImg.map((image, index) => {
                            const i = ref(storage, image.imageFullPath)
                            return (
                              <Fragment key={index}>
                                {getDownloadURL(i).then((url) => (
                                  <li>
                                    <Image
                                      alt=''
                                      src={url}
                                      height={300}
                                      width={200}
                                    />
                                  </li>
                                ))}
                              </Fragment>
                            )
                          })}
                        </ul>
                      </Fragment>
                    ))}
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
