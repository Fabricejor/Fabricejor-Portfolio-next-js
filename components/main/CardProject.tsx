"use client"
import React from 'react'
import { IoIosGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function CardProject() {
  return (
    <div className='Projet_CONTAINER mt-3 flex flex-col px-5 rounded-lg bg-gray-800  bg-opacity-90   border-8 border-slate-300 border-opacity-20 shadow-lg"'>
      <div className='flex flex-row justify-between'>
        <h1 className='text-white text-4xl'> TITRE DU PROJET</h1>
        <img src="/Logo projet 1.png" className='max-w-[15%] h-auto mt-0' alt="logo" />
      </div>
      <div className='flex flex-row justify-between'>
        <div className='paragraphe_CONTAINER ml-10'>
            <p className='text-white max-w-[80%] text-wrap text-justify'>Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, fugiat id. Vitae culpa deleniti maxime, doloremque voluptate inventore harum deserunt, quidem porro eius laboriosam doloribus laborum, sint perspiciatis architecto neque. ipsum, dolor sit amet consectetur adipisicing elit. Vitae, mollitia porro nobis ab nostrum perferendis officia animi at enim rem nulla eos provident dolores debitis quidem saepe facilis aspernatur? Corrupti?</p>
        </div>
        <div className='btn_CONTAINER mr-24'>
        <a
        href=''
        className='Welcome-box py-[8px] px-[7px] border-[3px] bg-transparent border-[#FFffff] opacity-[0.9] 
         w-[50%]
        hover:border-[#ffbdbd] hover:bg-[#E50914]'
        >
            <IoIosGlobe className="text-[#ffffff] mr-[10px] h-5 w-5 "/>
            <h1 className='text-white text-[13px] max-sm:text-[10px] '>Demo</h1>
        </a>
        <a
        href=''
        className='Welcome-box github py-[8px] mt-4 px-[7px] border-[3px] bg-black border-[#ffffff] opacity-[0.9] 
        hover:border-[#353535]'
        >
            <FaGithub className="text-[#ffffff]   mr-[10px] h-5 w-5 "/>
            <h1 className=' text-white  text-[13px] max-sm:text-[10px]'>Source</h1>
        </a>
        </div>
      </div>
      <div className='Technologie_CONTAINER flex flex-row'>
            <strong className='text-white underline mr-2'>Technologies: </strong>
            <p className='text-white max-w-[80%] text-wrap text-justify'>Java ,PHP , Typescript</p>
      </div>
      
    </div>
  )
}
