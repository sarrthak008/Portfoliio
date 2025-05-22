// import React from 'react'
// import styles from "@/styles/main.module.css"

const Shdows = ({color1="red",color2="blue",intencity=90}) => {

     const COLORS = {
         red :  "bg-red-500",
         green : "bg-green-500",
         blue : "bg-blue-500",
         pink : "bg-pink-500",
         yellow : "bg-yellow-500",
         orange : "bg-orange-500",
         purple : "bg-purple-500",
         teal : "bg-teal-500",
         cyan : "bg-cyan-500",
         indigo : "bg-indigo-500",
         lime : "bg-lime-500",
         emerald : "bg-emerald-500",
         fuchsia : "bg-fuchsia-500",
         rose : "bg-rose-500",
         sky : "bg-sky-500",
         violet : "bg-violet-500",
         amber : "bg-amber-500",

     }

  return (
    <>
     <div className={`${COLORS[color1]} h-1/3 w-full `} style={{ filter: `blur(${intencity}px)` }}></div>
     <div className={`${COLORS[color2]} h-1/3 w-full `} style={{ filter: `blur(${intencity}px)` }}></div>
    </>
  )
}

export default Shdows