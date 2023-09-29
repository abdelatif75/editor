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

export default async function page() {
  const data = await prisma.productCategory.findMany({
    where: {
      tier: 1,
    },
    include: {
      productCategory: {
        include: {
          productCategory: true,
        },
      },
    },
  })

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
          <FormAddCategory id='null' tier='1' />
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
                        <FormAddCategory id={i.id} tier='2' />
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
                                {i.productCategory.length == 0 ? (
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
                                ) : undefined}
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
                                    <FormAddCategory id={i.id} tier='3' />
                                  </DialogContent>
                                </Dialog>
                              </section>
                              <ul>
                                <Fragment>
                                  {i.productCategory.map((i, index) => (
                                    <Fragment key={index}>
                                      <li className='flex items-center gap-4'>
                                        <span>
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
                                        </span>
                                        {i.name}
                                      </li>
                                    </Fragment>
                                  ))}
                                </Fragment>
                              </ul>
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

function FormAddCategory({ tier, id }: { tier: string; id: string }) {
  return (
    <>
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
          value={tier}
          hidden
        />
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered input-primary w-full max-w-xs'
          name='id'
          value={id}
          hidden
        />
        <button type='submit' className='btn btn-primary btn-outline'>
          add
        </button>
      </form>
    </>
  )
}
