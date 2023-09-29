import { prisma } from '@/lib/db'
import { Fragment } from 'react'
import { AddCategory } from './_action/addCategory'

export default async function page() {
  const data = await prisma.productCategory.findMany({
    where: {
      tier: 1,
    },
    include: {
      productCategory: true,
    },
  })

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
                      <Sub3categories id={i.id} />
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

function Sub3categories({ id }: { id: string }) {
  async function sub(id: string) {
    return await prisma.productCategory.findMany({
      where: {
        parentCategoryId: id,
      },
    })
  }

  return (
    <ul>
      {sub(id).then((i) => (
        <Fragment>
          {i.map((i, index) => (
            <Fragment key={index}>
              <li>{i.name}</li>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </ul>
  )
}
