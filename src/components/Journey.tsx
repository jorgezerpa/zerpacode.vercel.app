import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import {AiFillHeart} from 'react-icons/ai'
import {BsDot} from 'react-icons/bs'

const journyCards = [
    { 
      date:"2020", 
      hilights:[
        'Start my journey to learn software development.',
        'Build my first projects as a creative developer.',
      ]
    },
    { 
      date:"January 2022", 
      hilights:[
        "First freelance jobs for Voral VE (ecommerce and delivery app).",
        'Build my first projects as a creative developer.',
      ]
    },
    { 
      date:"February 2022", 
      hilights:[
        <div className='inline-block'>Start studying at Platzi (One of the best decissions of my life)<span className='inline'><AiFillHeart className='inline-block' color='#7AB800' size={20}/></span></div>,
        "New freelance job for Bocadictos Bakery",
        "Learn mobile development with React Native to create Bocadictos' app.",
      ]
    },
    { 
      date:"August 2022", 
      hilights:[
        'First job for an US based company, Restoration Control.',
      ]
    },
    { 
      date:"March 2023", 
      hilights:[
        'Build the Vagary Sports website. (USA-Spain company)',
        'Build the flight booking web application for First-shuttle (French company).',
      ]
    },
    { 
      date:"Present", 
      hilights:[
        'Learning ThreeJS and web animation to create amazing inmersive experiences on Web.',
        'Start exploring web3 and AI',
      ]
    },
   
  ]

export const Journey = () => {
  const linesRef = useRef<Array<HTMLDivElement>>([]);
  const timelineItemsRef = useRef<Array<HTMLDivElement>>([]);

  useEffect(() => {
    linesRef.current.forEach((element: HTMLDivElement, index) => {
      gsap.from(element, {
        scaleY:0,
        ease: 'linear',
        transformOrigin:"top",
        scrollTrigger: {
          trigger: element,
          start: "top 40%",
          end: element.offsetHeight+" 40%",
          scrub:true
        },
      });
    });

    timelineItemsRef.current.forEach((element: HTMLDivElement, index) => {
      let xDirection = index%2===0 ? -1 : 1
      gsap.from(element, {
        duration:.5,
        opacity:0,
        y:100,
        x:100*xDirection,
        // ease: 'linear',
        transformOrigin:"top",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          // end: element.offsetHeight+" 40%",
        },
      });
    });
  
   
  }, [])
  


  return (
    <section>
    <div className="text-white py-8 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
      <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
          <p className="ml-2 text-purple-100 font-bold uppercase tracking-loose">My Journey or,</p>
          <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">My Life's Bytes</p>
          <p className="text-sm md:text-base text-gray-50 mb-4">
            The journey of a thousand bytes begins with one "hello World". Here is the line by line of How 
            have I been coding my life the last few years.
          </p>
          {/* <a href="#" className="bg-transparent mr-auto hover:bg-purple-300 text-purple-100 font-bold hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-purple-300 hover:border-transparent">
            Explore Now</a> */}
        </div>
        <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden py-10 px-3 sm:p-10 h-full">
              <div className="border-2-2 border-purple-500 absolute h-full border" style={{right: '50%', border: '2px solid #6B46C1', borderRadius: '1%'}} />
              <div className="border-2-2 border-purple-500 absolute h-full border" style={{left: '50%', border: '2px solid #6B46C1', borderRadius: '1%'}} />
              
              <div ref={(el:HTMLDivElement) => (linesRef.current[0] = el)} className="border-2-2 border-purple-500 absolute h-full border" style={{right: '50%', border: '2px solid #ff0', borderRadius: '1%'}} />
              <div ref={(el:HTMLDivElement) => (linesRef.current[1] = el)} className="border-2-2 border-purple-500 absolute h-full border" style={{left: '50%', border: '2px solid #ff0', borderRadius: '1%'}} />
              
                { journyCards.map((card, index)=>(
                    <div ref={(el:HTMLDivElement) => (timelineItemsRef.current[index] = el)} key={'perpro'+card.date.replace(/\s+/g, '')} className={`mb-8 flex justify-between ${index%2===0 ? "flex-row-reverse" : "flex-row"} items-center w-full left-timeline`}>
                        <div className="order-1 w-5/12" />
                        <div className={`order-1 w-5/12 px-1 py-4 ${index%2===0 ? "text-left" : "text-left"} `}>
                            {/* <p className="mb-3 text-base text-purple-100 font-bold">{card.date}</p> */}
                            <h4 className="mb-3 sm:font-bold text-sm sm:text-lg md:text-2xl">{card.date}</h4>
                            <div className="text-xs sm:text-base leading-snug text-gray-50 text-opacity-100">
                                {card.hilights.map((item, index)=>(
                                    <div key={'perproitem'+index}><BsDot size={30} color='#fff' className='inline-block' />{item}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                )) }

              
              
             
            </div>
            <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
