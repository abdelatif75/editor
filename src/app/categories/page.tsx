import { prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { Fragment } from 'react'

export default async function page() {
  const data = await prisma.productCategory.findMany({
    where: {
      tier: 1,
    },
    include: {
      productCategory: true,
    },
  })

  async function sub(id: string) {
    return await prisma.productCategory.findMany({
      where: {
        parentCategoryId: id,
      },
    })
  }

  async function AddCategory(formData: FormData) {
    'use server'

    try {
      await prisma.productCategory.create({
        data: {
          name: formData.get('name') as string,
          tier: Number(formData.get('tier')),
          parentCategoryId: formData.get('id') as string | null,
        },
      })
    } catch (error) {
      console.log(error)
    }
    revalidatePath('/categories')
  }

  return (
    <div>
      <form action={AddCategory} className='flex gap-2'>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered input-primary w-full max-w-xs'
          name='name'
          required
        />
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered input-primary w-full max-w-xs'
          name='tier'
          value='1'
          hidden
        />
        <button type='submit' className='btn btn-primary btn-outline'>
          add
        </button>
      </form>
      <ul className='menu min-h-full w-80 bg-base-200 p-4 text-base-content'>
        {data.map((i, index) => (
          <Fragment key={index}>
            <li>
              <div>{i.name}</div>
              <form action={AddCategory} className='flex gap-2'>
                <input
                  type='text'
                  placeholder='Type here'
                  className='input input-bordered input-primary w-full max-w-xs'
                  name='name'
                  required
                />
                <input
                  type='text'
                  placeholder='Type here'
                  className='input input-bordered input-primary w-full max-w-xs'
                  name='tier'
                  value='2'
                  hidden
                />
                <input
                  type='text'
                  placeholder='Type here'
                  className='input input-bordered input-primary w-full max-w-xs'
                  name='id'
                  value={i.id}
                  hidden
                />
                <button type='submit' className='btn btn-primary btn-outline'>
                  add
                </button>
              </form>
              <ul>
                {i.productCategory.map((i, index) => (
                  <Fragment key={index}>
                    <li>
                      <div>{i.name}</div>
                      <ul>
                        {sub(i.id).then((i) => (
                          <Fragment>
                            {i.map((i, index) => (
                              <Fragment key={index}>
                                <li>{i.name}</li>
                              </Fragment>
                            ))}
                          </Fragment>
                        ))}
                      </ul>
                    </li>
                  </Fragment>
                ))}
              </ul>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  )
}
