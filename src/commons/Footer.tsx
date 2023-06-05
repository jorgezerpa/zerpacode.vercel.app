import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-gray-900 flex justify-center items-center w-full'>
        <div className="mt-52 bg-purple-800 h-[100px] w-full flex justify-center items-center">
          <p className='text-lg font-bold text-white flex items-center gap-1'>
            Don't worry, be coder 
            <span>
              <img width={30} src="images/smile.png" alt="" />
            </span>
            </p>

        </div>
    </footer>
  )
}
