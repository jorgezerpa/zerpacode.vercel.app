import React from 'react'
import { TESTIMONIES } from '../constants/testimonies'
import { useInView } from 'react-intersection-observer'

export const Testimonies = () => {
  const { ref, inView } = useInView({ threshold: 1, triggerOnce:true })

  return (
    <section ref={ref} id="testimonies" className="pt-20 md:mt-0 px-2 sm:px-5 min-h-[50vh] w-full flex flex-wrap flex-col md:flex-row justify-center items-center gap-10">
    <div className={` flex justify-center items-start flex-wrap gap-0 md:gap-32`}>
      { TESTIMONIES.map((testimony:any, index:number)=>(
          <div className="relative w-[220px] sm:w-[250px] min-h-[300px] rounded-2xl p-5" key={'testimonies'+testimony.name+index}>
              <svg className='my-5' width="30" viewBox="0 0 64 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 43.8652L52 27.9142H36V0H64V27.9142L56 43.8652H44ZM8 43.8652L16 27.9142H0V0H28V27.9142L20 43.8652H8Z" fill="#C5C3C3"/>
              </svg>

              <p className="font-normal text-gray-100 text-sm mb-4 italic">{testimony.message}</p>
              <p className=" text-gray-200 text-xs text-right font-bold mt-3 italic">{testimony.name}</p>
              <p className="font-normal text-gray-300 text-xs text-right mt-1 italic">{testimony.position}</p>
          </div>
      ))}
    </div>
    </section>
  )
}
