import React, { Fragment } from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { links } from './slideBar'
import Link from 'next/link'

export default function navbar() {
  return (
    <>
      <div className=' navbar'>
        <p className='navbar-start'>admin</p>
        <div className='navbar-end hidden md:flex md:items-end'>test</div>
        <Sheet>
          <SheetTrigger className='navbar-end flex items-end md:hidden'>
            Open
          </SheetTrigger>
          <SheetContent className='w-[400px] bg-slate-900 sm:w-[540px]'>
            <SheetHeader>
              <SheetTitle>route</SheetTitle>
            </SheetHeader>
            <ul className='menu h-screen w-full items-center text-base-content'>
              {links.map((link, index) => (
                <Fragment key={index}>
                  <li>
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                </Fragment>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
