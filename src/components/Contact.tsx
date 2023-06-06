import React from 'react'
import { useInView } from 'react-intersection-observer'

export const Contact = () => {
    const { ref:refIcon1, inView:inViewIcon1 } = useInView({ threshold: 1, triggerOnce:true })
    const { ref:refIcon2, inView:inViewIcon2 } = useInView({ threshold: 1, triggerOnce:true })
    const { ref:refIcon3, inView:inViewIcon3 } = useInView({ threshold: 1, triggerOnce:true })
    const { ref:refIcon4, inView:inViewIcon4 } = useInView({ threshold: 1, triggerOnce:true })
    const { ref:refBlog, inView:inViewBlog } = useInView({ threshold: .5, triggerOnce:true })
  return (
    <div className='flex flex-col items-center mt-20'>
        <h2 className="text-gray-900 font-black text-center text-3xl md:text-4xl lg:text-5xl">Contact me</h2>
        <section className="max-w-[800px] w-full flex flex-col md:flex-row min-h-[70vh]">
            <div className="flex-1 flex justify-center items-start md:items-center">
                <div className="inline-block text-white">
                    <a ref={refIcon1} target='black' href="https://www.linkedin.com/in/jorge-zerpa-code/" className="flex gap-1 mt-2 font-bold rounded-lg">
                        <span className={`${inViewIcon1 && 'animate-zoomInSpin'} opacity-0`}><img width="30px" src="/icons/linkedin.png" alt="" /></span>
                        <span className={`${inViewIcon1 && 'animate-[scaleX_1s_ease_forwards_1s]'} origin-left opacity-0`}>jorge-zerpa-code</span>
                    </a>
                    <a ref={refIcon2} target='black' href="https://www.instagram.com/zerpacode/" className="flex gap-1 mt-2 font-bold rounded-lg">
                        <span className={`${inViewIcon2 && 'animate-zoomInSpin'} opacity-0`}><img width="30px" src="/icons/instagram.png" alt="" /></span>
                        <span className={`${inViewIcon2 && 'animate-[scaleX_1s_ease_forwards_1s]'} origin-left opacity-0`}>@zerpacode</span>
                    </a>
                    <a ref={refIcon3} target='black' href="#" className="flex gap-1 mt-2 font-bold rounded-lg">
                        <span className={`${inViewIcon3 && 'animate-zoomInSpin'} opacity-0`}><img width="30px" src="/icons/email.png" alt="" /></span>
                        <span className={`${inViewIcon3 && 'animate-[scaleX_1s_ease_forwards_1s]'} origin-left opacity-0`}>contact@zerpacode.com</span>
                    </a>
                    <a ref={refIcon4} target='black' href="https://api.whatsapp.com/send/?phone=584126436269&text&type=phone_number&app_absent=0" className="flex gap-1 mt-2 font-bold rounded-lg">
                        <span className={`${inViewIcon4 && 'animate-zoomInSpin'} opacity-0`}><img width="30px" src="/icons/whatsapp.png" alt="" /></span>
                        <span className={`${inViewIcon4 && 'animate-[scaleX_1s_ease_forwards_1s]'} origin-left opacity-0`}>+58 412 643 6269</span>
                    </a>
                </div>
            </div>
            <div ref={refBlog} className={`flex-1 flex justify-center items-center py-14 md:py-0 ${inViewBlog && 'animate-[zoomIn_1s_ease_forwards_2s]'} opacity-0`}>
                <div className="w-[200px] h-[200px] rounded-[50%]">
                    <div className="w-full flex justify-center">
                        <img width="90px" src="icons/medium.png" alt="" />
                    </div>
                    <p className="text-center font-bold mt-2 text-gray-200">I also love to write, you can see my articles about coding on Medium</p>
                    <div className="mt-2 flex justify-center">
                        <a href="https://medium.com/@jorgelzd181102" target='black' className="rounded-xl py-2 px-5 font-bold bg-[#a252df] mt-2 text-white">See my articles</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
