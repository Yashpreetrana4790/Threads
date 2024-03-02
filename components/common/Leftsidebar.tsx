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

    <div className='sticky justify-between left-0 top-0 z-20 flex h-screen w-fit flex-col p-5 overflow-auto border-r border-r-dark-4 bg-dark-2  max-md:hidden    bg-[#2C2C2C]  max-md:w-full md:min-w-[260px] border-t-0  border-l-0 border-b-0  border border-r-[#09090A]'>
      <div>

        <div className='font-bold text-2xl text-white flex gap-3  '>
          <Image src="/assets/Logo.png" width={300} height={300} alt='logo' className='w-8 h-8' />
          <p>
            Rambler X
          </p>
        </div>
        <div className='mt-20'>
          {LeftsidebarLinks.map((x) =>
            <div key={x.label} className='flex flex-col mt-5 '>
              <Link href={x.route} className={cn('p-3 text-xl flex gap-2  rounded-md ', pathname === x.route
                ? "bg-[#877EFF]"
                : "hover:bg-transparent hover:text-gray-600",)}>
                <Image src={x.imgURL} width={22} height={22} alt='sidebarlinks logo' />
                <p className='text-white md:block hidden'>
                  {x.label}
                </p>
              </Link>
            </div>
          )
          }
        </div>
      </div>
      <div className='mt-10 '>
        <div className='flex cursor-pointer  gap-2'>
          <Image
            src='/assets/logout.svg'
            alt='logout'
            width={24}
            height={24}
          />

          <p className='text-light-2 text-xl  text-white max-lg:hidden'>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default Leftsidebar