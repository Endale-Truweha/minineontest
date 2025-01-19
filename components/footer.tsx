'use client'
import React from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

function Footer() {
    const pathname = usePathname()
  return (
    <div>
      <div className="fixed bottom-0  w-full  bg-[#272a2f] flex justify-around items-center z-40 rounded-3xl text-xs p-2">
      
        <div className={`text-center  w-1/5 ${pathname.includes('/protected')  ? ' bg-[#1c1f24]  text-ethYellow-600' : ' text-ethYellow-300'}      m-1 p-2 rounded-2xl`}>
        <Link href="/protected">
     

          <p className="mt-1 text-lg font-extrabold ">Status</p>
          </Link>
        </div>
        <div className={`text-center  w-1/5  ${pathname.includes('/compleat')  ? ' bg-[#1c1f24] text-ethGray-100' : 'text-[#85827d]'} `}>
        <Link href="/protected/compleat">
    
        
          <p className="mt-1">compleat</p>
          </Link>
        </div>
      
        <div className={`text-center  w-1/5  ${pathname.includes('/follow')  ? ' bg-[#1c1f24] text-ethGray-100 ' : 'text-[#85827d]'} `}>
        <Link href="/protected/follow">
       
          <p className="mt-1">follow</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
