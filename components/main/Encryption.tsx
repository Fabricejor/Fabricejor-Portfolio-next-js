"use client";
import React, { memo, useMemo } from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromTop, slideInFromRight } from '@/utils/motion'


const Encryption = memo(() => {
  // Mémorisation des variants d'animation
  const variants = useMemo(() => ({
    top: slideInFromTop,
    left: slideInFromLeft(0.5),
    leftSlow: slideInFromLeft(0.8),
    leftSlower: slideInFromLeft(1),
    right: slideInFromRight(0.8)
  }), []);

  // Mémorisation des données de formation
  const formations = useMemo(() => [
    {
      title: "Bootcamp Fullstack Js, Gomycode, Dakar",
      period: "Novembre 2023 - Mai 2024",
      description: "J'ai suivi un bootcamp intensif de 5 mois en développement full-stack JavaScript, couvrant à la fois le front-end et le back-end. J'y ai acquis une solide maîtrise des fondamentaux du développement web, des bases de données, et de la création d'applications dynamiques, tout en mettant en pratique mes compétences à travers des projets concrets.",
      link: "https://gomycode.com/sn/fr/courses/bootcamp-developpeur-logiciel/",
      linkText: "Gomycode.sn",
      image: "/gomycode.jpg",
      imageClass: "rounded-[40%]"
    },
    {
      title: "Licence Professionnelle en Génie Logicielle, École supérieur Polytechnique, Dakar",
      period: "Decembre 2020 — Juillet 2023",
      description: "J'ai obtenu une Licence Professionnelle en Génie Logiciel, qui m'a permis de développer des compétences avancées en développement d'applications, gestion de projets informatiques, et en ingénierie logicielle. Cette formation m'a préparé à concevoir des solutions informatiques innovantes en utilisant des technologies récentes, tout en m'adaptant aux évolutions rapides du secteur.",
      link: "https://esp.sn/formations/licence-professionnelle-en-genie-logiciel/",
      linkText: "Esp.sn",
      image: "/esp.png",
      imageClass: "rounded-[4%] p-5 bg-white"
    }
  ], []);

  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={variants.top}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Formations
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-300">
            {" "}
            &{" "}
          </span>
          Diplômes
        </motion.div>
      </div>
      {/* les diplomes */} 
      <div className="w-full flex flex-col items-center mt-[25%] px-9 max-sm:px-0 max-sm:mt-[850px]">
      {/* ? premier diplome */}
      {formations.map((formation, index) => (
        <motion.div
          key={formation.title}
          animate='visible'
          className='flex flex-row items-center justify-center px-20 mt-0 w-full z-[20] max-sm:flex-col max-sm:px-8 max-sm:mt-[0px]'
        >
          <div className='h-full w-full flex flex-col justify center m-auto text-start'>
            <motion.div
              variants={variants.left}
              className="flex flex-col mt-6 font-bold text-white max-w-[500px] w-auto"
            >
              <span className="TitredelaFormation text-justify text-2xl">
                {formation.title}
              </span>
              <span className="text-gray-400 text-1x1 italic">
                {formation.period}
              </span>
            </motion.div>
            <motion.p
              variants={variants.leftSlow}
              className="text-1x1 text-gray-200 my-5 max-w-[600px] text-justify"
            >
              {formation.description}
            </motion.p>
            <motion.a
              variants={variants.leftSlower}
              className="p-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-max"
              href={formation.link}
              target="_Blank"
              title='Ma certfication'
            >
              <span>{formation.linkText}</span>
            </motion.a>
          </div>
          <motion.div
            variants={variants.right}
            className="w-full h-full flex justify-center items-center max-sm:mt-8 max-sm:w-[150px]"
          >
            <Image
              src={formation.image}
              alt="profile"
              height={150}
              width={150}
              className={`${formation.imageClass} filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000`}
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      ))}
      </div>
      {/* video */}
      <div className="w-full h-full flex items-start justify-center absolute max-sm:hidden">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="none"
          className="w-full h-auto"
          src="/Loading b.mp4"
        />
      </div>
    </div>
  );
});

export default Encryption;