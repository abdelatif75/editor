import { serverClient } from '@/utils/serverClient'
//export const revalidate = 30000
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { AiOutlinePlus } from 'react-icons/ai'
import { Fragment } from 'react'
import { addNewProduct } from '../_action/product'

export default async function AddNewProduct() {
  const category = await serverClient.GetCategory()
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <AiOutlinePlus />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>add super category</DialogTitle>
          </DialogHeader>
          <form
            action={addNewProduct}
            className='flex flex-col items-center gap-3'>
            <input
              type='text'
              name='title'
              placeholder='title'
              className='input input-bordered input-primary w-full max-w-xs'
            />
            <input
              type='text'
              name='discription'
              placeholder='discription'
              className='input input-bordered input-primary w-full max-w-xs'
            />
            <select
              className='select select-bordered w-full max-w-xs'
              name='category'>
              <option disabled selected>
                shose category
              </option>
              {category?.map((category, index) => (
                <Fragment key={index}>
                  <option value={category.id}>{category.name}</option>
                </Fragment>
              ))}
            </select>
            <input
              type='text'
              name='name'
              placeholder='discription'
              className='input input-bordered input-primary w-full max-w-xs'
            />
            <input type='file' name='file' placeholder='file ..' />
            <input type='color' name='color' />
            <button type='submit' className='btn btn-primary'>
              add product
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
