'use client'
import React from 'react'
import Image from 'next/image';
import { Socials } from "@/constants";
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2AOE61]/50  bg-[#03001417] backdrop-blur-md z-50 px-10 max-sm:px-[10px]'>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] max-sm:px-[0px] ">
        <a title='More about me' href="/" className='h-auto w-auto flex flex-row items-center'>
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
        </a>
        <div className='w-[500px] flex flex-row items-center justify-between md:mr-20 max-sm:flex-col'>
          <div className='flex items-center justify-between w-full h-auto border border-[#00B1A8] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
         
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a> 
            <Link href={"/Contact-me"} className="cursor-pointer">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5 max-sm:w-[50%]">
          {Socials.map((social) => ( 
             <Link href={social.linked} key={social.name}>
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            /></Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
