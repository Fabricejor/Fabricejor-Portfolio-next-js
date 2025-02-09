'use client'
import React, { memo, useMemo, useState, useEffect } from 'react'
import Image from 'next/image';
import { Socials } from "@/constants";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from "react-icons/fa"; // Import burger and close icons

const Navbar = memo(() => {
  const pathname = usePathname();
  const [bgColor, setBgColor] = useState('');
  const [navOpen, setNavOpen] = useState(false); // State to toggle menu visibility

  // Mémorisation des classes CSS communes
  const navbarClasses = useMemo(() => ({
    container: "w-full h-[65px] fixed top-0 shadow-lg shadow-[#2AOE61]/50 backdrop-blur-md z-50 px-10 max-sm:px-[10px]",
    innerContainer: "w-full h-full flex flex-row items-center justify-between m-auto px-[10px] max-sm:px-[0px]",
    logo: "h-auto w-auto flex flex-row items-center",
    desktopLinks: "hidden md:flex flex-row items-center justify-between w-[500px] h-auto border border-[#00B1A8] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200",
    mobileMenu: "md:hidden flex flex-col items-center bg-[#0300145e] border border-[#00B1A8] px-[20px] py-[10px] rounded-lg mt-2",
    socialLinks: "flex flex-row gap-5 max-sm:w-[50%]"
  }), []);

  useEffect(() => {
    setBgColor(pathname === "/Inspiration" ? "bg-[#191717]" : "bg-[#03001417]");
  }, [pathname]); // Ajout de la dépendance pathname

  // Mémorisation des liens de navigation
  const navigationLinks = useMemo(() => [
    { href: "/", label: "Home" },
    { href: "/AllProjects", label: "Projects" },
    { href: "#Contact-me", label: "Contact" }
  ], []);

  const toggleNav = () => setNavOpen(!navOpen); // Function to toggle burger icon
  return (
    <div className={`${navbarClasses.container} ${bgColor}`}>
      <div className={navbarClasses.innerContainer}>
        <a 
          title="More about me" 
          href="/" 
          className={navbarClasses.logo}
        >
          <Image
            src="/hakari handsign.png"
            alt="logo"
            height={70}
            width={70}
            className="cursor-pointer hover:animate-spin-slow"
            priority
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
        <div className={navbarClasses.desktopLinks}>
          {navigationLinks.map(({ href, label }) => (
            <a key={href} href={href} className="cursor-pointer">{label}</a>
          ))}
        </div>

        {/* Social Links */}
        <div className={navbarClasses.socialLinks}>
          {Socials.map((social) => (
            <Link href={social.linked} key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Links (Burger Menu) */}
      {navOpen && (
        <div className={navbarClasses.mobileMenu}>
          {navigationLinks.map(({ href, label }) => (
            <a key={href} href={href} className="py-2 text-gray-200 cursor-pointer">{label}</a>
          ))}
        </div>
      )}
    </div>
  )
})

Navbar.displayName= 'Navbar';
export default Navbar
