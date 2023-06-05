"use client";
import React from "react"
import { About } from '../components/About'
import { Portfolio } from '../components/Portfolio'
import { Contact } from '../components/Contact'
import { Testimonies } from '../components/Testimonies'
import { Hero } from '../components/Hero'



export default function Page() {
  return (
    <div className='bg-gray-900'>
      <div id="home"><Hero /></div>
      <div id='about'><About /></div>
      <div id="testimonies"><Testimonies /></div> 
      <div id='project'><Portfolio /></div>
      <div id='contact'><Contact /></div>
    </div>
  )
}