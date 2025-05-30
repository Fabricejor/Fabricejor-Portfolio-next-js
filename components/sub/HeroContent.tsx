"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop ,slideInFromRight } from '@/utils/motion'
import { SparklesIcon } from "@heroicons/react/24/solid"
import Image from "next/image";
// import Link from 'next/link';
import { MorphingText } from '@/components/ui/morphing-text';
import { ShiningText } from '@/components/ui/shining-text';
import { GlowEffect } from '@/components/ui/glow-effect';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

// Lien de référence : https://diploma.gomycode.app/?id=31716817358394535
const HeroContent = () => {
  // Image statique (aucune modification au survol étant pour l'instant désactivée)
  const imageSrc = '/photoprofilIA.jpeg';

  // Textes pour l'effet morphing
  const morphingTexts = [
    "Fullstack",
    "Frontend", 
    "Backend",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "MERN Stack",
    "Web",
    "Mobile"
  ];

  const descriptionText = "Développeur Full Stack passionné par le numérique et les nouvelles technologies, j'ai une solide expérience en développement web et mobile. Toujours à l'affût de nouveaux défis, je cherche sans cesse à perfectionner mes compétences techniques. Mon objectif est de contribuer activement à la réussite de vos projets.";

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      className='flex flex-row items-center justify-center px-20 mt-28 w-full z-[20] max-sm:flex-col max-sm:mb-[10%] max-sm:mt-[30vh] max-sm:px-10'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.a
          variants={slideInFromTop}
          href='https://diploma.gomycode.app/?id=31716817358394535'
          className='Welcome-box py-[8px] px-[7px] border border-[#00B1A8] opacity-[0.9] 
          max-sm:border-[#5be6dc]
          hover:border-[#E50914]'
        >
          <SparklesIcon className="text-[#5be6dc] mr-[10px] h-5 w-5" />
          <h1 className='Welcome-text text-[13px] max-sm:text-[10px]'>My Fullstack js Certification</h1>
        </motion.a>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl max-sm:text-4xl font-bold text-white max-w-[600px] w-auto h-auto"
          id='hero-title'
        >
          <span className='text-5xl max-sm:text-4xl  mx-0 mt-0'> Développeur </span>
          <MorphingText
            texts={morphingTexts}
            useGradient={true}
            gradientClasses="bg-gradient-to-r from-blue-700 to-cyan-300"
            className="h-16 w-full max-w-[600px] text-left font-bold text-6xl max-sm:text-4xl mx-0 mt-0"
          />
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
          id='hero-description'
        >
          <ShiningText
            text={descriptionText}
            className="text-lg text-justify"
            duration={10}
          />
        </motion.div>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] relative overflow-visible"
          href='#skills'
          id='voir-skills'
        >
          <GlowEffect 
            colors={['#00B1A8', '#67E8F9', '#2563EB']}
            mode="pulse"
            blur="medium"
            scale={1.2}
            duration={5}
          />
          {/* <Link href="#skills"> Voir plus!</Link> */}
          <span title='mes skills' className="relative z-10">voir plus</span>
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center max-sm:mt-8 max-sm:w-[250px]"
        id='hero-image'
      >
        <CardContainer
          containerClassName="w-full h-full flex items-center justify-center !p-0"
          className="!bg-transparent"
        >
          <CardBody className="!w-[350px] !h-[350px] max-sm:!w-[250px] max-sm:!h-[250px] relative !bg-transparent">
            <CardItem
              translateZ="30"
              className="w-full h-full"
      >
        <Image
          src={imageSrc}
          alt="profile"
          height={350}
          width={350}
          priority
                className='rounded-[40%] filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 object-cover w-full h-full'
        />
            </CardItem>
          </CardBody>
        </CardContainer>
      </motion.div>
    </motion.div>
  )
}

export default React.memo(HeroContent)
