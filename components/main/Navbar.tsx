'use client'
import React from 'react'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2AOE61]/50  bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] ">
        <a title='More about me' href="#about-me" className='h-auto w-auto flex flex-row items-center'></a>
        <Image
          src="/hakari handsign.png"
          alt="logo"
          height={70}
          width={70}
          className='cursor-pointer hover:animate-spin-slow '
        />
        <span className='font-bold ml-[10px] hidden md:block text-gray-100'>
          Fabricejor DEV FS
        </span>
        <div className='w-[500px] flex flex-row items-center justify-between md:mr-20'>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
         
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a> 
            <a href="#about-me" className="cursor-pointer">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
