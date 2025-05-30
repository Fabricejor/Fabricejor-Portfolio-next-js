"use client";
import React, { memo, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromTop } from '@/utils/motion';
import { Timeline } from "@/components/ui/timeline";

const Encryption = memo(() => {
  // Mémorisation des variants d'animation
  const variants = useMemo(() => ({
    top: slideInFromTop,
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

  // Transformer les données de formations pour le composant Timeline
  const timelineData = useMemo(() => formations.map(formation => ({
    title: formation.period,
    content: (
      <div className="flex flex-col md:flex-col-reverse items-start md:items-center gap-4">
        <div className="flex-shrink-0">
          <Image
            src={formation.image}
            alt={formation.title}
            width={150}
            height={150}
            className={`${formation.imageClass} filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000`}
            loading="lazy"
          />
        </div>
        <div className="text-left">
          <h3 className="text-xl font-bold text-white mb-1">{formation.title}</h3>
          <p className="text-gray-300 my-2 text-justify">{formation.description}</p>
          <a
            href={formation.link}
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 p-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-max inline-block hover:cursor-pointer"
            title={`Lien vers ${formation.linkText}`}
          >
            {formation.linkText}
          </a>
        </div>
      </div>
    )
  })), [formations]);

  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen w-full h-full pt-20 md:pt-0">
      <div className="absolute w-auto h-auto top-10 md:top-20 z-[5]">
        <motion.div
          variants={variants.top}
          initial="hidden"
          animate="visible"
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

      <Timeline data={timelineData} />

      {/* video background - consider if this is still needed or how it fits with Timeline */}
      <div className="w-full min-h-screen h-screen flex items-start justify-center absolute -z-10 top-0 max-sm:hidden">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="none"
          className="w-full h-auto opacity-30"
          src="/Loading b.mp4"
        />
      </div>
    </div>
  );
});
// Ajout du displayName
Encryption.displayName = 'Encryption';

export default Encryption;