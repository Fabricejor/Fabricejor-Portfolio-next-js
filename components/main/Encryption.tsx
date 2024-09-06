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
      <div className="w-full flex flex-col items-center mt-[30%] px-9 max-sm:px-0 max-sm:mt-[850px]">
      {/* ? premier diplome */}
      <motion.div
    animate='visible'
    className='flex flex-row items-center justify-center px-20 mt-0 w-full z-[20] max-sm:flex-col max-sm:px-8 max-sm:mt-[0px]'>
      <div className='h-full w-full flex flex-col justify center m-auto text-start'>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col  mt-6  font-bold text-white max-w-[500px] w-auto"
        >
          <span className="TitredelaFormation text-justify text-2xl">
          Bootcamp Fullstack Js, Gomycode, Dakar
          </span>
          <span className="text-gray-400 text-1x1 italic">
            Novembre 2023 - Mai 2024
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-1x1 text-gray-200 my-5 max-w-[600px] text-justify"
        >
          J'ai suivi un bootcamp intensif de 5 mois en développement full-stack JavaScript, couvrant à la fois le front-end et le back-end. J'y ai acquis une solide maîtrise des fondamentaux du développement web, des bases de données, et de la création d'applications dynamiques, tout en mettant en pratique mes compétences à travers des projets concrets.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[100px]"
          href='https://gomycode.com/sn/fr/courses/bootcamp-developpeur-logiciel/'
          target="_Blank"
          title='Ma certfication'
        >
         <span >voir plus</span>
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
    animate='visible'
    className='flex flex-row items-center justify-center px-20 mt-4 w-full z-[20] max-sm:flex-col max-sm:mb-[10%] max-sm:mt-4 max-sm:px-8'>
      <div className='h-full w-full flex flex-col justify center m-auto text-start'>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col  mt-0  font-bold text-white max-w-[550px] w-auto"
        >
          <span className="TitredelaFormation  text-justify text-2xl">
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
          J'ai obtenu une Licence Professionnelle en Génie Logiciel, qui m'a permis de développer des compétences avancées en développement d'applications, gestion de projets informatiques, et en ingénierie logicielle. Cette formation m'a préparé à concevoir des solutions informatiques innovantes en utilisant des technologies récentes, tout en m'adaptant aux évolutions rapides du secteur.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center justify-center text-white cursor-pointer rounded-lg max-w-[100px]"
          href='https://esp.sn/formations/licence-professionnelle-en-genie-logiciel/'
          target="_Blank"
          title='Intitulé de mon diplôme'
        >
         <span  >Esp.sn</span>
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center  max-sm:mt-8  max-sm:w-[150px]"
      >
        <Image
          src={'/esp.png'}
          alt="profile"
          height={150}
          width={150}
          className='rounded-[4%] p-5 bg-white filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000'
        />
      </motion.div>
    </motion.div>
    </div>
    {/* video */}
      <div className="w-full h-full flex items-start justify-center absolute max-sm:hidden">
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