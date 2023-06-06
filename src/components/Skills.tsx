import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { SiReact, SiFlutter, SiTailwindcss, SiCss3, SiJavascript, SiTypescript, SiThreedotjs } from 'react-icons/si'
import { FaRust } from 'react-icons/fa'
import { TbBrandNextjs, TbBrandHtml5 } from 'react-icons/tb'
import { FaNodeJs, FaWordpressSimple, FaFigma } from 'react-icons/fa'
import { BsBootstrap } from 'react-icons/bs'

let skills = [
  { type: 'lang',name:'HTML', icon:<TbBrandHtml5 size={24}  /> },
  { type: 'lang',name:'CSS', icon:<SiCss3 size={24}  /> },
  { type: 'lang',name:'Javascript', icon:<SiJavascript size={24}  /> },
  { type: 'lang',name:'Typescript', icon:<SiTypescript size={24}  /> },
  { type: 'lang',name:'Rust', icon:<FaRust size={24}  /> },
  { type: 'framework',name:'React', icon:<SiReact size={24}  /> },
  { type: 'framework',name:'Next', icon:<TbBrandNextjs size={24}  /> },
  { type: 'framework',name:'Node', icon:<FaNodeJs size={24}  /> },
  { type: 'framework',name:'ThreeJS', icon:<SiThreedotjs size={24}  /> },
  { type: 'framework',name:'Qwik', icon:'/icons/quik.svg' },
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



export const Skills = () => {
  const { ref:refSkills, inView:inViewSkills } = useInView({ threshold: .3, triggerOnce:true })

  return (
    <>
      <section id='skills' className="w-full py-20 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
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
                          ? <Image alt="" src={skill.icon} width={25} height={25} /> 
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
