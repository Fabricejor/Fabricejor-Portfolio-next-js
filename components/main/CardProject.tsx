"use client"
import React, { useState, memo, useMemo } from 'react'
import { IoIosGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import dynamic from 'next/dynamic'
import Image from 'next/image';
import Link from 'next/link';

// Import dynamique du carousel pour le charger uniquement quand nécessaire
const TestCarousel = dynamic(() => import('./TestCarousel'), {
  loading: () => <p className="text-white text-center">Loading carousel...</p>,
  ssr: false // Désactive le rendu côté serveur pour ce composant
})

interface Props {
  titre: string;
  logo: string;
  description: string;
  demo: string;
  source: string;
  technologies: string;
  slides: any;
}

const CardProject = memo(({ titre, logo, description, demo, source, technologies, slides }: Props) => {
  const [showScreenshot, setShowScreenshot] = useState(false);

  const toggleCarousel = () => {
    setShowScreenshot(!showScreenshot);
  };

  // Mémorisation des classes communes
  const classes = useMemo(() => ({
    container: 'Projet_CONTAINER p-3 mt-3 flex flex-col px-5 rounded-lg bg-gray-800 bg-opacity-90 border-8 border-slate-300 border-opacity-20 shadow-lg',
    header: 'flex flex-row justify-around items-center my-4 max-md:flex-col-reverse',
    title: 'text-transparent bg-clip-text bg-gradient-to-r from-[#D91656] to-[#EE66A6] text-4xl dmsans text-wrap',
    logo: 'max-w-[15%] max-sm:max-w-[50%] h-auto mt-0',
    description: 'text-white max-w-[90%] text-wrap text-justify max-sm:max-w-[100%]',
    buttonContainer: 'btn_CONTAINER flex flex-col mr-24 max-sm:mr-0 max-sm:flex-row max-sm:my-4'
  }), []);

  // Mémorisation des liens
  const buttons = useMemo(() => ({
    demo: {
      href: demo,
      className: 'Welcome-box py-[8px] px-[7px] border-[3px] bg-transparent border-[#FFffff] opacity-[0.9] w-[50%] hover:border-[#ffbdbd] hover:bg-[#E50914]',
      icon: IoIosGlobe,
      text: 'Demo'
    },
    source: {
      href: source,
      className: 'Welcome-box github py-[8px] mt-4 max-sm:mt-0 px-[7px] border-[3px] bg-black border-[#ffffff] opacity-[0.9] hover:border-[#353535]',
      icon: FaGithub,
      text: 'Source'
    }
  }), [demo, source]);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.title}>{titre}</h1>
        <Image 
          src={logo} 
          className={classes.logo}
          width={100} 
          height={30} 
          alt="logo"
          loading="lazy"
        />
      </div>

      <div className='flex flex-row items-center justify-between max-md:flex-col'>
        <div className='paragraphe_CONTAINER ml-10 max-sm:ml-0'>
          <p className={classes.description}>{description}</p>
        </div>
        <div className={classes.buttonContainer}>
          {demo.length > 0 && (
            <Link
              href={buttons.demo.href}
              target='_blank'
              className={buttons.demo.className}
            >
              <buttons.demo.icon className="text-[#ffffff] mr-[10px] h-5 w-5"/>
              <h1 className='text-white text-[13px] max-sm:text-[10px]'>{buttons.demo.text}</h1>
            </Link>
          )}
          <Link
            href={buttons.source.href}
            target='_blank'
            className={buttons.source.className}
          >
            <buttons.source.icon className="text-[#ffffff] mr-[10px] h-5 w-5"/>
            <h1 className='text-white text-[13px] max-sm:text-[10px]'>{buttons.source.text}</h1>
          </Link>
        </div>
      </div>

      <div className='Technologie_CONTAINER flex flex-row max-sm:flex-col my-4  ml-10 max-sm:my-4 max-sm:ml-0'>
        <strong className='text-white underline mr-2'>Technologies: </strong>
        <p className='text-white max-w-[80%] text-wrap text-justify max-sm:max-w-[100%]'>{technologies}</p>
      </div>

      {slides.length > 0 && (
        <>
          <button
            onClick={toggleCarousel}
            className="px-4 py-2 bg-[#CD262A] self-center max-w-[50%] max-sm:max-w-[100%] text-white rounded-md my-4 duration-150 hover:bg-[#d83937] hover:ring-4 hover:ring-white transition"
          >
            {showScreenshot ? "Hide Screenshot" : "Show Screenshot"}
          </button>
          {showScreenshot && (
            <div className="w-full h-full flex justify-center">
              <TestCarousel slides={slides} />
            </div>
          )}
        </>
      )}
    </div>
  );
});

// Ajout du displayName
CardProject.displayName = 'CardProject';

export default CardProject;
