import React from 'react'

export default function slideBar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='flex'>
        <section className='hidden h-screen min-h-full w-80 bg-base-200 p-4 text-base-content lg:menu'></section>
        <main>{children}</main>
      </div>
    </>
  )
}
