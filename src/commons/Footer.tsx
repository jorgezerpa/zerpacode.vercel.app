import React from 'react'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='bg-gray-900 flex justify-center items-center w-full'>
        <div className="mt-52 bg-purple-800 h-[100px] w-full flex justify-center items-center">
          <p className='text-lg font-bold text-white flex items-center gap-1'>
            Don&apos;t worry, be coder 
            <span>
              <Image width={30} height={30} src="/images/smile.png" alt="" />
            </span>
            </p>

        </div>
    </footer>
  )
}
