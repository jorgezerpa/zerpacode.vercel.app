import React from 'react'
import { personalProjects } from '@/constants/projects'

const page = () => {
  return (
    <div className='flex justify-center gap-5 flex-wrap py-20 px-2 sm:px-5'>
        {personalProjects.map((project)=>(
            <div key={'perpro'+project.title.replace(/\s+/g, '')} className='relative max-w-[300px] w-[95%] sm:w-[300px] h-[510px] sm:h-[450px] mb-4 shadow-xl shadow-[#ccc]'>
                <div className='w-full h-[170px] mb-2 bg-center bg-cover bg-no-repeat' style={{ backgroundImage:`url(/images/projects/${project.image})` }}></div>
                <div className='px-2'>
                    <h2 className='text-xl font-bold text-gray-900 mb-2'>{project.title}</h2>
                    <p className=' text-gray-700 mb-4'>{project.description}</p>
                    <div className='absolute bottom-0 left-0 right-0 flex'>
                        <a href={project.github} target='_blank' className='w-full border border-gray-200 text-center py-2 font-bold text-gray-800 hover:bg-gray-200 hover:text-sm transition-all'>Github</a>
                        { project.project && 
                            <a href={project.project} className='w-full border border-gray-200 text-center py-2 font-bold text-gray-800 hover:bg-gray-200 hover:text-sm transition-all'>Project</a>
                        }
                    </div>
                </div>
            </div>
        ))}
        
    </div>
  )
}

export default page