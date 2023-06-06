import React from 'react'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export const Portfolio = () => {
  const { ref:refS1, inView:inViewS1 } = useInView({ threshold: .5, triggerOnce:true })
  const { ref:refS2, inView:inViewS2  } = useInView({ threshold: .3, triggerOnce:true })
  const { ref:refS3, inView:inViewS3  } = useInView({ threshold: .3, triggerOnce:true })

  return (
    <div className='bg-white py-20'>
  <h2 id="portfolio" className="text-gray-800 font-black text-center text-4xl md:text-4xl lg:text-5xl mb-10">My Portfolio</h2>
  <div className='flex flex-col items-center justify-start gap-20'>
    <section ref={refS1} className={`${inViewS1 && 'animate-scaleX'} relative shadow-lg shadow-gray-400 rounded-xl opacity-0 origin-left w-[90%] pb-5 md:pb-0 flex flex-col-reverse md:flex-row min-h-[50vh] bg-white`}>
      <div className="flex-1 flex justify-center items-start md:items-center">
        <div className="inline-block px-6">
          <h2 className="text-gray-800 text-center md:text-left font-black text-2xl lg:text-3xl mb-5">Projects</h2>
          <p className="text-gray-600 text-center md:text-left font-semibold text-md max-w-[420px]">
            A list of my top projects either personal and for my clients.                  
          </p>
          <Link href={'/projects'} className="flex justify-center md:justify-start">
            <div className="hover:scale-105 hover:shadow-md hover:shadow-gray-700 mt-5 inline-block bg-purple-700 text-white px-4 py-2 font-bold rounded-lg">See projects</div>
          </Link>
        </div>
      </div>
      <div className="mr-0 md:mr-2 rounded-xl border-[3px] flex-1 min-h-[300px] mt-5 md:mt-0 flex justify-center items-center py-14 md:py-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('/images/personalProjects.png')` }}></div>
    </section>

    <section ref={refS3} className={`${inViewS3 && 'animate-scaleX'} relative shadow-lg pb-5 md:pb-0 shadow-gray-400 rounded-xl opacity-0 origin-right w-[90%] flex flex-col-reverse md:flex-row-reverse min-h-[50vh] bg-white`}>
      <div className="flex-1 flex justify-center items-start md:items-center">
        <div className="inline-block px-6">
          <h2 className="mt-20 md:mt-0 text-gray-800 text-center md:text-left font-black text-2xl lg:text-3xl mb-5">Quick Projects</h2>
          <p className="text-gray-600 text-center md:text-left font-semibold text-md max-w-[420px]">
          &quot;Sunday made&quot; projects. This Section is a laboratory of Crazy design ideas, videogames, etc.                 
          </p>
          <Link href={'/quick-projects'} className="flex justify-center md:justify-start">
            <div className="hover:scale-105 hover:shadow-md hover:shadow-gray-700 mt-5 inline-block bg-purple-700 text-white px-4 py-2 font-bold rounded-lg">See projects</div>
          </Link>
        </div>
      </div>
      <div className="mr-0 md:mr-2 rounded-xl border-[3px] flex-1 min-h-[300px] mt-5 md:mt-0 flex justify-center items-center py-14 md:py-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('/images/quickgames.png')` }}></div>
    </section>

    <section ref={refS2} className={`${inViewS2 && 'animate-scaleX'} relative opacity-0 shadow-lg shadow-gray-400 rounded-xl origin-left w-[90%] pb-5 md:pb-0 flex flex-col-reverse md:flex-row min-h-[50vh] bg-white`}>
      <div className="flex-1 flex justify-center items-start md:items-center">
        <div className="inline-block px-6">
          <h2 className="text-gray-800 text-center md:text-left mt-20 md:mt-0 font-black text-2xl lg:text-3xl mb-5">Art & animations</h2>
          <p className="text-gray-600 text-center md:text-left font-semibold text-md max-w-[420px]">
            In my free time, I love to do some creative coding, feel free to take a look and useany piece on your projects if you like it.                    
          </p>
          <div className="flex justify-center md:justify-start ">
            <a href="https://codepen.io/zerpa_code" target='blank' className="hover:scale-105 hover:shadow-md hover:shadow-gray-700 mt-5 inline-block bg-purple-700 text-white px-4 py-2 font-bold rounded-lg">See on CodePen</a>
          </div>
        </div>
      </div>
      <div className="min-h-[300px] mt-5 md:mt-0 rounded-xl ml-0 md:ml-2 flex-1 flex justify-center items-center py-14 md:py-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('/images/codepen.png')` }}></div>
    </section>
  </div>
</div>
  )
}






    // <>
    //   <h2 id="portfolio" className="text-white font-black text-center text-4xl md:text-4xl lg:text-5xl mb-10 md:mt-36 mt-20">My Portfolio</h2>
    //   <div className='flex flex-col items-center justify-start gap-20'>
    //     <section ref={refS1} className={`${inViewS1 && 'animate-scaleX'} relative  shadow-lg shadow-gray-400 rounded-xl opacity-0 origin-left w-[90%] flex flex-col md:flex-row min-h-[50vh]`}>
    //           <div className='absolute w-[150px] h-[150px] bg-white blur-[130px] animate-pulse rounded-full'></div>
    //           <div className="flex-1 flex justify-center items-start md:items-center">
    //             <div className="inline-block px-6">
    //                 <h2 className="text-gray-100 text-center md:text-left font-black text-2xl lg:text-3xl mb-5">Projects</h2>
    //                 <p className="text-gray-300 text-center md:text-left font-semibold text-md max-w-[420px]">
    //                   A list of my top projects either personal and for my clients.                  
    //                 </p>
    //                 <Link href={'/projects'} className="flex justify-center md:justify-start">
    //                   <div className="hover:scale-105 hover:shadow-md hover:shadow-gray-700 mt-5 inline-block bg-[#a252df] text-white px-4 py-2 font-bold rounded-lg">see projects</div>
    //                 </Link>
    //             </div>
    //         </div>
    //         <div className="mr-0 md:mr-2 rounded-xl border-[3px] flex-1 min-h-[300px] mt-5 md:mt-0 flex justify-center items-center py-14 md:py-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('/images/personalProjects.png')` }}>
        
    //         </div>
    //     </section>


    //     <section ref={refS3} className={`${inViewS3 && 'animate-scaleX'} relative shadow-lg shadow-gray-400 rounded-xl opacity-0 origin-right w-[90%] flex flex-col-reverse md:flex-row min-h-[50vh]`}>
    //     <div className='absolute right-0 w-[150px] h-[150px] bg-white blur-[130px] animate-pulse rounded-full'></div>
    //         <div className="mr-0 md:mr-2 rounded-xl border-[3px] flex-1 min-h-[300px] mt-5 md:mt-0 flex justify-center items-center py-14 md:py-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('/images/quickgames.png')` }}>
        
    //         </div>
    //           <div className="flex-1 flex justify-center items-start md:items-center">
    //             <div className="inline-block px-6">
    //                 <h2 className="mt-20 md:mt-0 text-white text-center md:text-left font-black text-2xl lg:text-3xl mb-5">Quick Projects</h2>
    //                 <p className="text-gray-300 text-center md:text-left font-semibold text-md max-w-[420px]">
    //                   "Sunday made" projects. This Section is a laboratory of Crazy design ideas, videogames, etc.                 
    //                 </p>
    //                 <Link href={'/quick-projects'} className="flex justify-center md:justify-start">
    //                   <div className="hover:scale-105 hover:shadow-md hover:shadow-gray-700 mt-5 inline-block bg-[#a252df] text-white px-4 py-2 font-bold rounded-lg">see projects</div>
    //                 </Link>
    //             </div>
    //         </div>
    //     </section>


    //     <section ref={refS2} className={`${inViewS2 && 'animate-scaleX'} reltive opacity-0 shadow-lg shadow-gray-400 rounded-xl origin-left w-[90%] flex flex-col md:flex-row min-h-[50vh]`}>
    //         <div className='absolute left-[50%] w-[150px] h-[150px] bg-white blur-[90px] animate-pulse rounded-full'></div>
    //         <div className="flex-1 flex justify-center items-start md:items-center">
    //             <div className="inline-block px-6">
    //                 <h2 className="text-center md:text-left mt-20 md:mt-0 text-white font-black text-2xl lg:text-3xl mb-5">Art & animations</h2>
    //                 <p className="text-center md:text-left text-gray-300 font-semibold text-md max-w-[420px]">
    //                 In my free time, I love to do some creative coding, feel free to take a look and use any piece on your projects if you like it.                    
    //                 </p>
    //                 <div className="flex justify-center md:justify-start ">
    //                   <a href="https://codepen.io/zerpa_code" target='blank' className="hover:scale-105 hover:shadow-md hover:shadow-gray-700 mt-5 inline-block bg-[#a252df] text-white px-4 py-2 font-bold rounded-lg">see on codepen</a>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="min-h-[300px] mt-5 md:mt-0 rounded-xl ml-0 md:ml-2 flex-1 flex justify-center items-center py-14 md:py-0 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url('/images/codepen.png')`}}>
    
    //         </div>
    //     </section>
    //   </div>
    // </>