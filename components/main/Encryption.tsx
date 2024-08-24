"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromTop ,slideInFromRight } from '@/utils/motion'


const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Formations
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Diplômes
        </motion.div>
      </div>
      {/* les diplomes */} 
      <div className="w-full flex flex-col items-center mt-[10%] px-9">
      {/* ? premier diplome */}
      <motion.div
    initial='hidden'
    animate='visible'
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] max-sm:flex-col max-sm:mb-[10%] max-sm:mt-[200px]'>
      <div className='h-full w-full flex flex-col gap-5 justify center m-auto text-start'>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-2xl max-sm:text-1xl font-bold text-white max-w-[400px] w-auto "
        >
          <span className="TitredelaFormation">
          Bootcamp Fullstack Js, Gomycode, Dakar
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-1x1 text-gray-400 my-5 max-w-[400px] text-justify"
        >
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href='#skills'
        >
         {/* <Link href="#skills"> Voir plus!</Link> */}
         <span  title='mes skills'>voir plus</span>
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center  max-sm:mt-8  max-sm:w-[150px]"
      >
        <Image
          src={'/PhotoProfil.png'}
          alt="profile"
          height={350}
          width={350}
          // onMouseEnter={() => setImageSrc('/PhotoProfil.png')}
          // onMouseLeave={() => setImageSrc('/PhotoProfil.png')}
          className='rounded-[40%] filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000'
        />
      </motion.div>
    </motion.div>
    {/* 2eme diplome */}
    <motion.div
    initial='hidden'
    animate='visible'
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] max-sm:flex-col max-sm:mb-[10%] max-sm:mt-[200px]'>
      <div className='h-full w-full flex flex-col gap-5 justify center m-auto text-start'>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl max-sm:text-4xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Dévelloppeur
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Fullstack Js
              {" "}
            </span>
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] text-justify"
        >
          Développeur Full Stack passionné par le numérique et les nouvelles technologies, j'ai une solide expérience en développement web et mobile. Toujours à l'affût de nouveaux défis, je cherche sans cesse à perfectionner mes compétences techniques. Mon objectif est de contribuer activement à la réussite de vos projets.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href='#skills'
        >
         {/* <Link href="#skills"> Voir plus!</Link> */}
         <span  title='mes skills'>voir plus</span>
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center  max-sm:mt-8  max-sm:w-[250px]"
      >
        <Image
          src={'/PhotoProfil.png'}
          alt="profile"
          height={350}
          width={350}
          // onMouseEnter={() => setImageSrc('/PhotoProfil.png')}
          // onMouseLeave={() => setImageSrc('/PhotoProfil.png')}
          className='rounded-[40%] filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000'
        />
      </motion.div>
    </motion.div>
    </div>
    {/* video */}
      <div className="w-full h-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;