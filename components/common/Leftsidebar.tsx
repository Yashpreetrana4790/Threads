'use client'
import Image from 'next/image'
import React from 'react'

import { LeftsidebarLinks } from "@/constants/index"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
const Leftsidebar = () => {

  const pathname = usePathname()

  return (

    <div className='sticky justify-between left-0 top-0 z-20 flex h-screen w-fit flex-col p-5 overflow-auto border-r 
    border-r-dark-4 bg-dark-2 
     max-md:hidden    bg-slate-800  max-md:w-full 
    md:min-w-[260px] border-t-0  border-l-0 border-b-0  border border-r-[#09090A] custom-scrollbar'>
      <div>

        <Link href="/" className='font-bold text-2xl text-white flex gap-3  '>
          <p className='text-2xl  font-serif font-thin p-3'>
            Rambler X
          </p>
        </Link>
        <div className='mt-20'>
          {LeftsidebarLinks.map((x) =>
            <div key={x.label} className='flex flex-col mt-5 '>
              <Link href={x.route} className={cn('p-3 text-xl flex gap-2  rounded-md ', pathname === x.route
                ? "bg-slate-500"
                : "hover:bg-transparent hover:text-gray-600",)}>
                <Image src={x.imgURL} width={22} height={22} alt='sidebarlinks logo' />
                <p className='text-white md:block hidden text-sm'>
                  {x.label}
                </p>
              </Link>
            </div>
          )
          }
        </div>
      </div>
      <div className='mt-10 p-3'>
        <div className='flex cursor-pointer  gap-2 items-center'>
          <Image
            src='/assets/logout.svg'
            alt='logout'
            width={24}
            height={24}
          />

          <p className='text-light-2  text-white max-lg:hidden'>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default Leftsidebar