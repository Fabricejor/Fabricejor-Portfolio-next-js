"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromTop ,slideInFromRight } from '@/utils/motion'


const Encryption = () => {
  const handleClick1 = () => {
    // Rediriger vers une autre page
    window.location.href = 'https://gomycode.com/';
  };

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
    className='flex flex-row items-center justify-center px-20 mt-0 w-full z-[20] max-sm:flex-col max-sm:mb-[10%] max-sm:mt-[200px]'>
      <div className='h-full w-full flex flex-col justify center m-auto text-start'>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col  mt-6  font-bold text-white max-w-[500px] w-auto"
        >
          <span className="TitredelaFormation  text-2xl">
          Bootcamp Fullstack Js, Gomycode, Dakar
          </span>
          <span className="text-gray-400 text-1x1 italic">
            Novembre 2023 - Mai 2024
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-1x1 text-gray-200 my-5 max-w-[500px] text-justify"
        >
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[100px]"
          href='https://diploma.gomycode.app/?id=31716817358394535'
          target="_Blank"
        >
         <span  title='mes skills' onClick={handleClick1}>voir plus</span>
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center  max-sm:mt-8  max-sm:w-[150px]"
      >
        <Image
          src={'/gomycode.jpg'}
          alt="profile"
          height={150}
          width={150}
          className='rounded-[40%] filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000'
        />
      </motion.div>
    </motion.div>
    {/* 2eme diplome */}
    <motion.div
    initial='hidden'
    animate='visible'
    className='flex flex-row items-center justify-center px-20 mt-10 w-full z-[20] max-sm:flex-col max-sm:mb-[10%] max-sm:mt-[200px]'>
      <div className='h-full w-full flex flex-col justify center m-auto text-start'>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col  mt-6  font-bold text-white max-w-[550px] w-auto"
        >
          <span className="TitredelaFormation  text-2xl">
          Licence Professionnelle en Génie Logicielle, École supérieur
          Polytechnique, Dakar
          </span>
          <span className="text-gray-400 text-1x1 italic">
          Decembre 2020 — Juillet 2023
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-1x1 text-gray-200 my-5 max-w-[500px] text-justify"
        >
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[100px]"
          href='https://diploma.gomycode.app/?id=31716817358394535'
          target="_Blank"
        >
         <span  title='mes skills' onClick={handleClick1}>voir plus</span>
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center  max-sm:mt-8  max-sm:w-[150px]"
      >
        <Image
          src={'/gomycode.jpg'}
          alt="profile"
          height={150}
          width={150}
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