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
        />x
      </div>
    </div>
  )
}

export default Navbar
