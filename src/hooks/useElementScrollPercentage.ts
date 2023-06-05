import React, { useEffect, useRef, useState } from 'react'

export const useElementScrollPercentage = () => {
    const containerRef = useRef<HTMLDivElement|null>(null)
    const [percentage, setPercentage] = useState<string|number>(0)

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if(!containerRef.current) return 
            let elementDistanceToTop = window.pageYOffset+containerRef.current.getBoundingClientRect().top
            if((window.scrollY-elementDistanceToTop)<=containerRef.current.offsetHeight && (window.scrollY-elementDistanceToTop)>0){
                setPercentage(
                  ((window.scrollY-elementDistanceToTop)/containerRef.current.offsetHeight).toFixed(2)
                )
            }          
        });   
    }, [])

    return [ containerRef, percentage ]
}


