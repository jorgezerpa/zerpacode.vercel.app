import React, { useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaCodepen, FaYoutube } from 'react-icons/fa'

export const Hero = () => {

    const [hoveredIcon, setHoveredIcon] = useState<null|string>(null)

  return (
    <>
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <div className='text-center font-bold text-gray-600'>Jorge Zerpa</div>
                <div className='flex w-full justify-center py-2'>
                    <div className='w-[200px] h-[200px] rounded-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage:`url('/images/profile.jpg')` }}>
                </div>

                </div>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Fullstack Developer</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Hi, nice to meet you! I love web development, creating unique interfaces, and immersive experiences on the web. And of course, meeting amazing people along the way.</p>

                <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                    <span className="font-semibold text-gray-400 uppercase">FEATURED IN</span>
                
                <div className="">
                    <ul className="flex justify-center items-center gap-4 w-full mt-6">
                        <li onMouseLeave={()=>setHoveredIcon(null)} onMouseEnter={()=>setHoveredIcon('github')} ><a href="https://github.com/jorgezerpa" target="blank" className="flex justify-center items-center rounded-full w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] shadow-lg shadow-[#333] transition-all hover:bg-gray-400"><FaGithub size={30} color={hoveredIcon==="github" ? "#fff" : "#333"} /></a></li>
                        <li onMouseLeave={()=>setHoveredIcon(null)} onMouseEnter={()=>setHoveredIcon('instagram')} ><a href="https://www.instagram.com/zerpacode/" target="blank" className="flex justify-center items-center rounded-full w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] shadow-lg shadow-[#333] transition-all hover:bg-red-400"><FaInstagram size={30} color={hoveredIcon==="instagram" ? "#fff" : "#333"} /></a></li>
                        <li onMouseLeave={()=>setHoveredIcon(null)} onMouseEnter={()=>setHoveredIcon('linkedin')} ><a href="https://www.linkedin.com/in/jorge-zerpa-code/" target="blank" className="flex justify-center items-center rounded-full w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] shadow-lg shadow-[#333] transition-all hover:bg-blue-400"><FaLinkedinIn size={30} color={hoveredIcon==="linkedin" ? "#fff" : "#333"} /></a></li>
                        <li onMouseLeave={()=>setHoveredIcon(null)} onMouseEnter={()=>setHoveredIcon('codepen')} ><a href="https://codepen.io/zerpa_code" target="blank" className="flex justify-center items-center rounded-full w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] shadow-lg shadow-[#333] transition-all hover:bg-green-400"><FaCodepen size={30} color={hoveredIcon==="codepen" ? "#fff" : "#333"} /></a></li>
                        <li onMouseLeave={()=>setHoveredIcon(null)} onMouseEnter={()=>setHoveredIcon('youtube')} ><a href="https://www.youtube.com/channel/UCH3rS7ZgYS-h7eYKoqKsU-g" target="blank" className="flex justify-center items-center rounded-full w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] shadow-lg shadow-[#333] transition-all hover:bg-red-600"><FaYoutube size={30} color={hoveredIcon==="youtube" ? "#fff" : "#333"} /></a></li>
                    </ul>
                </div>



                </div> 
            </div>
        </section>
    </>
  )
}


