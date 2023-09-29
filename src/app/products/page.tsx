import { upload } from './_action/uploads'

export default async function page() {
  return (
    <div>
      <form action={upload}>
        <input type='file' name='file' />
        <input type='text' name='id' hidden />
        <button type='submit'>add product image</button>
      </form>
    </div>
  )
}
