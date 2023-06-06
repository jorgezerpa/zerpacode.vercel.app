"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import {IoMdCloseCircle} from 'react-icons/io'

export const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const lastScrollRef = useRef(0)

  useEffect(()=>{
    lastScrollRef.current = window.pageYOffset
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScrollRef.current) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      lastScrollRef.current = currentScroll
    });
  },[])

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  const handleScrolledRoute = (route:string) => {
    showMobileMenu && setShowMobileMenu(false)
    if(pathname==="/"){
      const element = document.getElementById(route)
      element?.scrollIntoView({behavior:'smooth'})
    } else {
      router.push('/#'+route)
    }
  }

  return (
<nav className="z-50 bg-white transition-all flex items-center justify-between p-6 lg:px-8 fixed left-0 right-0" style={{top:showNavbar?0 : -200}} aria-label="Global">
      <div className="flex lg:flex-1">
        <div onClick={()=>{router.push('/')}} className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <div className="h-6 sm:h-8 w-24 relative">
            <Image
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
            src="/icons/logo.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="flex lg:hidden">
        <button onClick={toggleMobileMenu} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <div onClick={()=>{router.push('/')}} className="text-sm font-semibold leading-6 text-gray-900">Home</div>
        <div onClick={()=>handleScrolledRoute('about')} className="text-sm font-semibold leading-6 text-gray-900">About</div>
        <div onClick={()=>handleScrolledRoute('skills')} className="text-sm font-semibold leading-6 text-gray-900">Skills</div>
        <div onClick={()=>handleScrolledRoute('testimonies')} className="text-sm font-semibold leading-6 text-gray-900">Testimonies</div>
        <div onClick={()=>handleScrolledRoute('portfolio')} className="text-sm font-semibold leading-6 text-gray-900">portfolio</div>
      </div>

      <div className={`bg-white z-50 fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center gap-3 origin-bottom transition-all ${showMobileMenu ? "scale-y-100":"scale-y-0"}`}>
        <div onClick={toggleMobileMenu} >
          <IoMdCloseCircle size={30} color='#000' />
        </div>
          <div onClick={()=>{router.push('/'); toggleMobileMenu()}} className="text-sm font-semibold leading-6 text-gray-900">Home</div>
          <div onClick={()=>handleScrolledRoute('about')}  className="text-sm font-semibold leading-6 text-gray-900">About</div>
          <div onClick={()=>handleScrolledRoute('skills')}  className="text-sm font-semibold leading-6 text-gray-900">Skills</div>
          <div onClick={()=>handleScrolledRoute('testimonies')}  className="text-sm font-semibold leading-6 text-gray-900">Testimonies</div>
          <div onClick={()=>handleScrolledRoute('portfolio')}  className="text-sm font-semibold leading-6 text-gray-900">portfolio</div>
      </div>

      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a> */}
      </div>
    </nav>
  )
}
