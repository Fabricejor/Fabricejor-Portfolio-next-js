'use client'
import React from 'react'
import Image from 'next/image';
import { Socials } from "@/constants";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"; // Import burger and close icons


const Navbar = () => {
  const pathname = usePathname();
  const [bgColor, setBgColor] = useState('');

  useEffect (()=> {
    switch (pathname) {
      case "/Inspiration":
        setBgColor("bg-[#191717]");
        break;
    
      default:
        setBgColor("bg-[#03001417]");
        break;
    }
  })
  const [navOpen, setNavOpen] = useState(false); // State to toggle menu visibility

  const toggleNav = () => setNavOpen(!navOpen); // Function to toggle burger icon
  return (
    <div className={`w-full h-[65px] fixed top-0 shadow-lg shadow-[#2AOE61]/50 ${bgColor} backdrop-blur-md z-50 px-10 max-sm:px-[10px]`}>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] max-sm:px-[0px]">
        <a title="More about me" href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/hakari handsign.png"
            alt="logo"
            height={70}
            width={70}
            className="cursor-pointer hover:animate-spin-slow"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-100">
            Fabricejor DEV FS
          </span>
        </a>

        {/* Burger Icon for Mobile View */}
        <div className="md:hidden cursor-pointer" onClick={toggleNav}>
          {navOpen ? <FaTimes size={30} className="text-gray-100" /> : <FaBars size={30} className="text-gray-100" />}
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex flex-row items-center justify-between w-[500px] h-auto border border-[#00B1A8] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          <a href="/" className="cursor-pointer">Home</a>
          <a href="/AllProjects" className="cursor-pointer">Projects</a>
          <a href="#Contact-me" className="cursor-pointer">Contact</a>
        </div>

        {/* Social Links */}
        <div className="flex flex-row gap-5 max-sm:w-[50%]">
          {Socials.map((social) => (
            <Link href={social.linked} key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Links (Burger Menu) */}
      {navOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#0300145e] border border-[#00B1A8] px-[20px] py-[10px] rounded-lg mt-2">
          <a href="/" className="py-2 text-gray-200 cursor-pointer">Home</a>
          <a href="/AllProjects" className="py-2 text-gray-200 cursor-pointer">Projects</a>
          <a href="#Contact-me" className="py-2 text-gray-200 cursor-pointer">Contact</a>
        </div>
      )}
    </div>
  )
}

export default Navbar
