import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const openAnimation =(element_class)=>{

    useGSAP(()=>{
         gsap.to(`.${element_class}`,{
            width:"95vw",
            height:"95vh",
            duration:0.4,
            ease: "power3.out",
            transformOrigin: "center center"
         })
         
     },[])

    }

export {openAnimation};