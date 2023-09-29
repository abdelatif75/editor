import { prisma } from '@/lib/db'
import { Fragment } from 'react'
import { AddCategory, DeleteCategory } from './_action/Category'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { AiOutlinePlus, AiTwotoneDelete } from 'react-icons/ai'
//import { trpc } from '@/utils/client'

export default async function page() {
  const data = await prisma.productCategory.findMany({
    where: {
      tier: 1,
    },
    include: {
      productCategory: true,
    },
  })

  //const deleteCategory = trpc.DeleteCategory.useMutation()

  return (
    <div className='m-auto w-1/2 '>
      <Dialog>
        <DialogTrigger>
          <AiOutlinePlus />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>add super category</DialogTitle>
          </DialogHeader>
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
        </DialogContent>
      </Dialog>

      <ul>
        {data.map((i, index) => (
          <Fragment key={index}>
            <li>
              <div className='collapse collapse-plus bg-base-200'>
                <input type='radio' name='my-accordion-1' />
                <div className='collapse-title text-xl font-medium'>
                  {i.name}
                </div>

                <div className='collapse-content'>
                  <section className='flex items-center'>
                    {i.productCategory.length == 0 ? (
                      <div>
                        <form action={DeleteCategory}>
                          <input type='text' hidden name='id' value={i.id} />
                          <button type='submit'>
                            <AiTwotoneDelete />
                          </button>
                        </form>
                      </div>
                    ) : undefined}
                    <Dialog>
                      <DialogTrigger>
                        <AiOutlinePlus />
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>add super category</DialogTitle>
                        </DialogHeader>
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
                          <button
                            type='submit'
                            className='btn btn-primary btn-outline'>
                            add
                          </button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </section>
                  <ul>
                    {i.productCategory.map((i, index) => (
                      <Fragment key={index}>
                        <li>
                          <div className='collapse-plus collapse'>
                            <input type='radio' name='my-accordion-3' />
                            <div className='collapse-title text-xl font-medium'>
                              {i.name}
                            </div>
                            <div className='collapse-content'>
                              <section className='flex items-center'>
                                <div>
                                  <form action={DeleteCategory}>
                                    <input
                                      type='text'
                                      hidden
                                      name='id'
                                      value={i.id}
                                    />
                                    <button type='submit'>
                                      <AiTwotoneDelete />
                                    </button>
                                  </form>
                                </div>
                                <Dialog>
                                  <DialogTrigger>
                                    <AiOutlinePlus />
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>
                                        add super category
                                      </DialogTitle>
                                    </DialogHeader>
                                    <form
                                      action={AddCategory}
                                      className='flex gap-2'>
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
                                      <button
                                        type='submit'
                                        className='btn btn-primary btn-outline'>
                                        add
                                      </button>
                                    </form>
                                  </DialogContent>
                                </Dialog>
                              </section>

                              <Sub3categories id={i.id} />
                            </div>
                          </div>
                        </li>
                      </Fragment>
                    ))}
                  </ul>
                </div>
              </div>
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
              <li className='flex items-center gap-4'>
                <span>
                  <form action={DeleteCategory}>
                    <input type='text' hidden name='id' value={i.id} />
                    <button type='submit'>
                      <AiTwotoneDelete />
                    </button>
                  </form>
                </span>
                {i.name}
              </li>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </ul>
  )
}
