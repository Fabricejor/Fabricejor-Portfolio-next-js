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

  // Define theme colors based on the current path
  const theme = useMemo(() => {
    const isAllProjects = pathname === '/AllProjects';
    const isInspiration = pathname === '/Inspiration';

    if (isAllProjects) {
      return {
        borderColor: 'border-orange-500/30',
        shadowColor: 'shadow-orange-500/20',
        beforeViaColor: 'before:via-orange-500',
        beforeShadow: 'before:shadow-[0_0_20px_orange]',
        hoverTextColor: 'hover:text-orange-500',
        afterBgColor: 'after:bg-orange-500',
        afterShadow: 'group-hover:after:shadow-[0_0_8px_orange]',
        activeTextColor: 'rounded-lg px-3 py-2 bg-black/50 text-orange-400 font-bold shadow-orange-300 [text-shadow:0_0_8px_var(--tw-shadow-color)] transition-all duration-300'
      };
    }

    if (isInspiration) {
      return {
        borderColor: 'border-purple-500/30',
        shadowColor: 'shadow-purple-500/20',
        beforeViaColor: 'before:via-purple-500',
        beforeShadow: 'before:shadow-[0_0_20px_purple]',
        hoverTextColor: 'hover:text-purple-500',
        afterBgColor: 'after:bg-purple-500',
        afterShadow: 'group-hover:after:shadow-[0_0_8px_purple]',
        activeTextColor: 'rounded-lg px-3 py-2 bg-black/50 text-purple-400 font-bold   shadow-purple-300 [text-shadow:0_0_8px_var(--tw-shadow-color)] transition-all duration-300'
      };
    }

    // Default theme
    return {
      borderColor: 'border-cyan-400/30',
      shadowColor: 'shadow-cyan-400/20',
      beforeViaColor: 'before:via-cyan-400',
      beforeShadow: 'before:shadow-[0_0_20px_cyan]',
      hoverTextColor: 'hover:text-cyan-400',
      afterBgColor: 'after:bg-cyan-400',
      afterShadow: 'group-hover:after:shadow-[0_0_8px_cyan]',
      activeTextColor: 'rounded-lg px-3 py-2 bg-black/50 text-cyan-400 font-bold shadow-cyan-300 [text-shadow:0_0_8px_var(--tw-shadow-color)] transition-all duration-300'
    };
  }, [pathname]);

  // Mémorisation des classes CSS communes
  const navbarClasses = useMemo(() => ({
    container: `w-full h-[80px] fixed top-0 z-40 px-6 max-sm:px-4`,
    innerContainer: `max-w-7xl mx-auto h-full flex flex-row items-center justify-between`,
    navWrapper: `w-full h-[65px] bg-[#0300145e] backdrop-blur-md ${theme.borderColor} rounded-2xl px-8 max-sm:px-4 
                 shadow-lg ${theme.shadowColor} 
                 relative overflow-hidden
                 before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] 
                 before:bg-gradient-to-r before:from-transparent ${theme.beforeViaColor} before:to-transparent 
                 ${theme.beforeShadow} before:animate-pulse`,
    logo: "h-auto w-auto flex flex-row items-center",
    desktopLinks: "hidden md:flex flex-row items-center justify-center gap-8 flex-1",
    mobileMenuButton: "md:hidden cursor-pointer z-10",
    mobileMenu: `md:hidden absolute top-full left-0 right-0 mt-2 mx-6 
                 bg-[#0300145e] backdrop-blur-md ${theme.borderColor} rounded-xl px-6 py-4
                 shadow-lg ${theme.shadowColor}`,
    link: `relative text-gray-200 ${theme.hoverTextColor} transition-all duration-300 cursor-pointer group`,
    linkGlow: `after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] 
               ${theme.afterBgColor} after:transition-all after:duration-300 
               group-hover:after:w-full ${theme.afterShadow}`
  }), [theme]);

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
              Fabricejor DEV
            </span>
          </a>

          {/* Links for Desktop */}
          <div className={navbarClasses.desktopLinks}>
            {navigationLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`${navbarClasses.link} ${
                  pathname === href
                    ? theme.activeTextColor
                    : navbarClasses.linkGlow
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Burger Icon for Mobile View */}
          <div className={navbarClasses.mobileMenuButton} onClick={toggleNav}>
            {navOpen ? (
              <FaTimes size={28} className={`text-gray-100 ${theme.hoverTextColor} transition-colors`} />
            ) : (
              <FaBars size={28} className={`text-gray-100 ${theme.hoverTextColor} transition-colors`} />
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
              className={`block py-3 text-gray-200 ${theme.hoverTextColor} transition-all duration-300 cursor-pointer ${
                pathname === href ? theme.activeTextColor : ''
              }`}
              onClick={() => setNavOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
});

Navbar.displayName = 'Navbar';
export default Navbar
