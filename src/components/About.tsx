import { useInView } from 'react-intersection-observer'
import { SiReact, SiFlutter, SiTailwindcss, SiCss3, SiJavascript, SiTypescript, SiAngularjs } from 'react-icons/si'
import { TbBrandNextjs, TbBrandHtml5 } from 'react-icons/tb'
import { FaNodeJs, FaAws, FaLaravel, FaWordpressSimple, FaFigma } from 'react-icons/fa'
import { BsBootstrap } from 'react-icons/bs'
import { DiPhp } from 'react-icons/di'


let journyCards = [
  { 
    date:2020, 
    hilights:[
      'Start my journey to learn web development.',
    ]
  },
  { 
    date:2022, 
    hilights:[
      'First freelance jobs for Bocadictos and Voral.',
      "Learn mobile development to create Bocadictos' app.",
      'Build my first projects as a creative developer.',
      'First job for an US based company.',
    ]
  },
  { 
    date:2023, 
    hilights:[
      'Build the Vagary Sports website. (USA-Spain company)',
      'Build the flight booking web application for First-shuttle (French company).',
    ]
  },
 
]

let skills = [
  { type: 'lang',name:'HTML', icon:<TbBrandHtml5 size={24}  /> },
  { type: 'lang',name:'CSS', icon:<SiCss3 size={24}  /> },
  { type: 'lang',name:'Javascript', icon:<SiJavascript size={24}  /> },
  { type: 'lang',name:'Typescript', icon:<SiTypescript size={24}  /> },
  { type: 'lang',name:'PHP', icon:<DiPhp size={24}  /> },
  { type: 'cloud',name:'AWS', icon:<FaAws size={24}  /> },
  { type: 'framework',name:'React', icon:<SiReact size={24}  /> },
  { type: 'framework',name:'Next', icon:<TbBrandNextjs size={24}  /> },
  { type: 'framework',name:'Node', icon:<FaNodeJs size={24}  /> },
  { type: 'framework',name:'Qwik', icon:'/icons/quik.svg' },
  { type: 'framework',name:'Angular', icon:<SiAngularjs size={24}  /> },
  { type: 'framework',name:'Laravel', icon:<FaLaravel size={24}  /> },
  { type: 'mobile',name:'Flutter', icon:<SiFlutter size={24}  /> },
  { type: 'mobile',name:'React Native', icon:<SiReact size={24}  /> },
  { type: 'styles',name:'TailwindCSS', icon:<SiTailwindcss size={24}  /> },
  { type: 'styles',name:'MaterialUI', icon:'/icons/mui.svg' },
  { type: 'styles',name:'Bootstrap', icon:<BsBootstrap size={24}  /> },
  { type: 'cms',name:'Wordpress', icon: <FaWordpressSimple size={24}  /> },
  { type: 'design',name:'Figma', icon:<FaFigma size={24}  /> },
]

// #dfe352 (yellow)
// #52dfe3 (blue-green)
// #e352df (pink)
// #52e3b8 (green)
// #e35a52 (orange)
// #52df8a (teal)
// #df52ab (magenta)
const colorCodes:any = {
  lang:'#2bbabe',
  framework:'#2ea55e',
  mobile:'#e35a52',
  cloud:'#df52ab',
  styles:'#e352df',
  cms:'#52e3b8',
  design:'#979b23',
}



export const About = () => {
  const { ref:refImage, inView:inViewImage } = useInView({ threshold: 1, triggerOnce:true })
  const { ref:refText, inView:inViewText  } = useInView({ threshold: 1, triggerOnce:true })
  const { ref:refSkills, inView:inViewSkills } = useInView({ threshold: 1, triggerOnce:true })
  const { ref:myJournyTitleRef, inView:inViewmyJournyTitle } = useInView({ threshold: 1, triggerOnce:true, delay:1000 })
  const { ref:myJournyItemsRef, inView:inViewmyJournyItems } = useInView({ threshold: 1, triggerOnce:true, delay:1500 })


  return (
    <>
      <section className="w-full flex flex-col md:flex-row min-h-[70vh] mt-14 py-14  bg-gray-900">
          <div className="w-full h-full flex flex-col justify-center items-center pl-0 md:pl-16">
              <div ref={refImage} className={`opacity-0 ${ inViewImage && 'animate-zoomInSpin' }  w-[200px] h-[200px] rounded-[50%] mb-2 bg-center bg-no-repeat bg-cover`} style={{ backgroundImage:`url('/images/profile.jpg')` }} ></div>
              <p ref={refText} className={`${inViewText && 'animate-scaleY'} origin-top opacity-0 text-gray-300 font-semibold text-md max-w-[400px] px-5 sm:px-0`}>
              Hello! I'm Jorge, a full stack web developer. I can help you in your projects with the construction of Web applications, working from the initial design to production and maintenance. I specialize in the frontend area, although I can develop complete applications that range from eCommerce to incredible personal portfolios to specific tools for your business or occupation. Whatever you need! ask for it and I build it.
              </p>
          </div>
          <div className='w-full mt-10 md:mt-0 pl-5 md:pl-0 text-white'>
            <h2 ref={myJournyTitleRef} className={`opacity-0 ${inViewmyJournyTitle && 'animate-slideFR'} text-4xl sm:text-5xl font-bold text-left text-[#a252df]`}>My Journy</h2>
            <div ref={myJournyItemsRef} className='h-10'></div>
              { journyCards.map((item, key)=>(
                <div key={'journyItem'+key} className={`${inViewmyJournyItems && 'animate-scaleY2'} opacity-0 origin-top mt-4`}>
                  <h4 className='font-bold text-lg'>{item.date}</h4>
                  { item.hilights.map((text, i)=>(
                    <div className='pl-4'>
                      <p key={text+i} className='text-gray-400 font-medium pr-1'>
                        <span className='inline-block w-1 h-1 mr-1 rounded-lg bg-[#a252df] relative -translate-y-1'></span>
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              ))}    
          </div>
      </section>
      <section id='skills' className="w-full mt-10 py-20 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
          <h2 className="text-white font-bold text-2xl lg:text-3xl mb-10 text-center">Skills & technologies</h2>
          <div className='flex w-full justify-center'>
            <ul ref={refSkills} className={`max-w-[800px] flex justify-center gap-4 flex-wrap`} id="skillsGrid">
              {skills.map((skill, index)=>(
                  <li 
                  key={'skills'+skill.name+index} 
                  style={{ backgroundColor:colorCodes[skill.type] }}
                  className={`
                    ${inViewSkills && `animate-scaleY`} 
                    origin-bottom opacity-0 rounded-md w-[120px] h-[60px] bg-clip-padding 
                    backdrop-filter backdrop-blur-xl 
                    text-white text-xs sm:text-base shadow-md shadow-black
                    flex flex-col justify-center items-center
                  `}>
                      <div className="font-semibold w-full flex justify-center items-center">{skill.name}</div>
                      <div>
                        {typeof skill.icon==='string'   
                          ? <img alt="" src={skill.icon} width={25} height={25} /> 
                          : skill.icon
                        }
                      </div>
                  </li>
              ))}
            </ul>
          </div>
      </section>
    </>
  )
}
