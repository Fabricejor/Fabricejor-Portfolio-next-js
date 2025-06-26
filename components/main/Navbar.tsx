'use client'
import React, { memo, useMemo, useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from "react-icons/fa"; // Import burger and close icons

const Navbar = memo(() => {
  const pathname = usePathname();
  const [bgColor, setBgColor] = useState('');
  const [navOpen, setNavOpen] = useState(false); // State to toggle menu visibility

  // Mémorisation des classes CSS communes
  const navbarClasses = useMemo(() => ({
    container: `w-full h-[80px] fixed top-0 z-40 px-6 max-sm:px-4`,
    innerContainer: `max-w-7xl mx-auto h-full flex flex-row items-center justify-between`,
    navWrapper: `w-full h-[65px] bg-[#0300145e] backdrop-blur-md border border-cyan-400/30 rounded-2xl px-8 max-sm:px-4 
                 shadow-lg shadow-cyan-400/20 
                 relative overflow-hidden
                 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] 
                 before:bg-gradient-to-r before:from-transparent before:via-cyan-400 before:to-transparent 
                 before:shadow-[0_0_20px_cyan] before:animate-pulse`,
    logo: "h-auto w-auto flex flex-row items-center",
    desktopLinks: "hidden md:flex flex-row items-center justify-center gap-8 flex-1",
    mobileMenuButton: "md:hidden cursor-pointer z-10",
    mobileMenu: `md:hidden absolute top-full left-0 right-0 mt-2 mx-6 
                 bg-[#0300145e] backdrop-blur-md border border-cyan-400/30 rounded-xl px-6 py-4
                 shadow-lg shadow-cyan-400/20`,
    link: "relative text-gray-200 hover:text-cyan-400 transition-all duration-300 cursor-pointer group",
    linkGlow: `after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] 
               after:bg-cyan-400 after:transition-all after:duration-300 
               group-hover:after:w-full group-hover:after:shadow-[0_0_8px_cyan]`
  }), []);

  useEffect(() => {
    setBgColor(pathname === "/Inspiration" ? "" : "");
  }, [pathname]);

  // Mémorisation des liens de navigation
  const navigationLinks = useMemo(() => [
    { href: "/", label: "Accueil" },
    { href: "/AllProjects", label: "Projets" },
    { href: "/Inspiration", label: "Inspiration" },
    { href: "/test", label: "Sandbox" },
    { href: "#Contact-me", label: "Contact" }
  ], []);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div className={`${navbarClasses.container} ${bgColor}`}>
      <div className={navbarClasses.navWrapper}>
        <div className={navbarClasses.innerContainer}>
          {/* Logo */}
          <a 
            title="More about me" 
            href="/" 
            className={navbarClasses.logo}
          >
            <Image
              src="/hakari handsign.png"
              alt="logo"
              height={60}
              width={60}
              className="cursor-pointer hover:animate-spin-slow"
              priority
            />
            <span className="font-bold ml-[10px] hidden md:block text-gray-100">
              Fabricejor DEV FS
            </span>
          </a>

          {/* Links for Desktop */}
          <div className={navbarClasses.desktopLinks}>
            {navigationLinks.map(({ href, label }) => (
              <a 
                key={href} 
                href={href} 
                className={`${navbarClasses.link} ${navbarClasses.linkGlow} ${
                  pathname === href ? 'text-cyan-400' : ''
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Burger Icon for Mobile View */}
          <div className={navbarClasses.mobileMenuButton} onClick={toggleNav}>
            {navOpen ? (
              <FaTimes size={28} className="text-gray-100 hover:text-cyan-400 transition-colors" />
            ) : (
              <FaBars size={28} className="text-gray-100 hover:text-cyan-400 transition-colors" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Links (Burger Menu) */}
      {navOpen && (
        <div className={navbarClasses.mobileMenu}>
          {navigationLinks.map(({ href, label }) => (
            <a 
              key={href} 
              href={href} 
              className={`block py-3 text-gray-200 hover:text-cyan-400 transition-all duration-300 cursor-pointer ${
                pathname === href ? 'text-cyan-400' : ''
              }`}
              onClick={() => setNavOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
})

Navbar.displayName = 'Navbar';
export default Navbar
