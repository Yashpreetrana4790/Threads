'use client'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './Modetoggle'

const Navbar = () => {
  return (
    <div className='bg-slate-800 drop-shadow-xl py-[20px] px-5 flex justify-between'>
      <div>
        <Link href="/" className='font-bold text-2xl text-white flex gap-3  '>
          <p className='text-2xl  font-serif font-thin p-3'>
            Rambler X
          </p>
        </Link>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar