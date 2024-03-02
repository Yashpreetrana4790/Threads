import { Menu } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const MobileNav = () => {
  return (
    <div className='py-2 px-10 flex justify-between drop-shadow-lg  items-center md:hidden bg-slate-800'>
      <div>
        <span className='text-xl text-white font-extrabold'>Rambler X</span>
      </div>
      <div className='flex items-center'>
        <Menu width={30} height={30} color='white' />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" className='w-10 h-10' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

      </div>
    </div>
  )
}

export default MobileNav