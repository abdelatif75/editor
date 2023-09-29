import Link from 'next/link'
import React, { Fragment } from 'react'

export const links = [
  {
    link: '/',
    name: 'home',
  },
  {
    link: '/categories',
    name: 'categories',
  },
]

export default function slideBar({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='flex gap-3'>
        <section className='menu hidden h-screen min-h-full w-80 bg-base-200 p-4 text-base-content lg:flex'>
          <ul className='w-full'>
            {links.map((link, index) => (
              <Fragment key={index}>
                <li>
                  <Link href={link.link}>{link.name}</Link>
                </li>
              </Fragment>
            ))}
          </ul>
        </section>
        <main className='w-full'>{children}</main>
      </div>
    </>
  )
}
