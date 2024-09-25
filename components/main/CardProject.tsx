"use client"
import React ,{useState} from 'react'
import { IoIosGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import TestCarousel from './TestCarousel';
import Image from 'next/image';
import Link from 'next/link';
interface Props {
  titre: string;
  logo: string;
  description : string;
  demo :string;
  source: string;
  technologies: string;
  slides: any;
  
}

export default function CardProject({ titre, logo,description ,demo,source, technologies, slides } :Props) {
    // Un usestate pour montrer les screenshots
    const [showScreenshot, setShowScreenshot] =useState(false);
    // Fonction pour gérer le clic du bouton
  const toggleCarousel = () => {
    setShowScreenshot(!showScreenshot);
    console.log(showScreenshot);
  
  };

  
  return (
    <div className='Projet_CONTAINER p-3 mt-3 flex flex-col px-5 rounded-lg bg-gray-800  bg-opacity-90   border-8 border-slate-300 border-opacity-20 shadow-lg"'>
      <div className='flex flex-row justify-around items-center my-4 max-md:flex-col-reverse'>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#D91656] to-[#EE66A6] text-4xl dmsans text-wrap  '>{titre}</h1>
        <Image src={logo} className='max-w-[15%] max-sm:max-w-[50%] h-auto mt-0' width={100} height={30} alt="logo" />
      </div>
      <div className='flex flex-row items-center justify-between  max-md:flex-col'>
        <div className='paragraphe_CONTAINER ml-10 max-sm:ml-0'>
            <p className='text-white max-w-[90%] text-wrap text-justify max-sm:max-w-[100%]'>{description}</p>
        </div>
        <div className='btn_CONTAINER flex flex-col mr-24 max-sm:mr-0 max-sm:flex-row max-sm:my-4'>
          {demo.length >0 &&
        <Link
        href={demo}
        target='_blank'
        className='Welcome-box py-[8px] px-[7px] border-[3px] bg-transparent border-[#FFffff] opacity-[0.9] 
         w-[50%]
        hover:border-[#ffbdbd] hover:bg-[#E50914]'
        >
            <IoIosGlobe className="text-[#ffffff] mr-[10px] h-5 w-5 "/>
            <h1 className='text-white text-[13px] max-sm:text-[10px] '>Demo</h1>
        </Link>}
        <Link
        href={source}
        target='_blank'
        className='Welcome-box github py-[8px] mt-4 max-sm:mt-0 px-[7px] border-[3px] bg-black border-[#ffffff] opacity-[0.9] 
        hover:border-[#353535]'
        >
            <FaGithub className="text-[#ffffff]   mr-[10px] h-5 w-5 "/>
            <h1 className=' text-white  text-[13px] max-sm:text-[10px]'>Source</h1>
        </Link>
        </div>
      </div>
      <div className='Technologie_CONTAINER flex flex-row max-sm:flex-col my-4  ml-10 max-sm:my-4 max-sm:ml-0'>
            <strong className='text-white underline mr-2'>Technologies: </strong>
            <p className='text-white max-w-[80%] text-wrap text-justify max-sm:max-w-[100%]'>{technologies}</p>
      </div>
       {/* Bouton pour afficher/masquer le carousel */}
       { slides.length >0 && <button
        onClick={toggleCarousel}
        className="px-4 py-2 bg-[#CD262A] self-center max-w-[50%] max-sm:max-w-[100%] text-white rounded-md my-4 duration-150 hover:bg-[#d83937] hover:ring-4 hover:ring-white transition"
      >
        {showScreenshot ? "Hide Screenshot" : "Show Screenshot"}
      </button>}
    {/* Bloc de code contenant le carousel, affiché conditionnellement */}
    {showScreenshot && (
        <div className="w-full h-full flex justify-center">
          <TestCarousel slides={slides}  />
        </div>
      )}
    </div>
  )
}
