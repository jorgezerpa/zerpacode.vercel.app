import React, { useEffect, useState } from 'react'
import '../styles/cube.css'

export const Header = () => {
    const [displayAnimation, setDisplayAnimation] = useState(false)

    useEffect(()=>{
        setDisplayAnimation(true)
    },[])

  return (
     <section className="w-full flex flex-col md:flex-row min-h-[70vh]">
        <div className="flex-1 flex justify-start md:justify-center items-start md:items-center">
            <div className="inline-block px-6 sm:px-0 sm:pl-36">
                <p className={`text-gray-600 text-md font-semibold opacity-0 ${displayAnimation && 'animate-zoomIn origin-top-left'}`}>Hi! I am Jorge and I am a</p>
                <h2 className={`text-gray-900 font-black text-3xl md:text-4xl lg:text-5xl mb-5 opacity-0 ${displayAnimation && 'animate-zoomIn1 origin-top-left'}`}>Full Stack <br />Web Developer</h2>
                <p className={`text-gray-500 font-semibold text-md max-w-[420px] opacity-0 ${displayAnimation && 'animate-zoomIn2  origin-top-left'}`}>I love to help people and solve problems, and coding satisfy both necessities.</p>
                <a href="#contact" className={`hover:scale-95 hover:shadow-md hover:shadow-gray-700 shadow-sm shadow-gray-400 mt-5 inline-block bg-blue-700 text-white px-4 py-2 font-bold rounded-sm opacity-0 ${displayAnimation && 'animate-slideTL  origin-center'}`}>contact me</a>
            </div>
        </div>
        <div className="overflow-hidden relative flex-1 flex justify-center items-center py-14 md:py-0">
            <div className={`${displayAnimation && 'animate-zoomIn4'} opacity-0 origin-top-center`}>
                <div className="relative w-[200px] h-[200px] rounded-[50%] animate-orbit border-gray-600 border-[1px]">
                    <div className="top-0 left-0 w-[50px] h-[50px] rounded-[50%] bg-gradient-to-b from-green-500 to-green-700"></div>
                </div>
            </div>
            <div className="scene absolute top-1/2 left-1/2 w-[80px] h-[80px] translate-x-[-40px] translate-y-[-40px]">
                <div className="scene">
                    <div className="cube">
                        <div className="front"></div>
                        <div className="back"></div>
                        <div className="left"></div>
                        <div className="right"></div>
                        <div className="top"></div>
                        <div className="shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

