'use client'
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";


const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center  py-0 mt-14 max-sm:mt-[70vh]"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-300 py-20">
        Mes Projects 
      </h1>
      <Link 
      href={"/AllProjects"}
         className="py-2 z-30 cursor-pointer px-2 button-primary text-center text-white rounded-lg max-w-[100%] mb-10 mt-[-20px]"
      >
        All Projects
      </Link>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/CalameRedaction.png"
          title="Calame Rédaction - site vitrine"
          description="Création d'un site vitrine pour promouvoir les services de l'entreprise, utilisant HTML, CSS, et JavaScript. Un système d'e-mails automatiques a été intégré avec PHP."
          demo="https://calame-redaction.infinityfreeapp.com/"
          source="https://github.com/Fabricejor/Calame-Redaction"
          
        />
        <ProjectCard
          src="/Bondprice.png"
          title="BondPrice - Plateforme de Téléchargement"
          description="Développement d'une application web sécurisée pour Bondprice Tool, avec une interface administrateur pour gérer les utilisateurs. Utilisation de HTML, CSS, JS, et PHP pour la sécurité et l'intégration de données CSV."
          demo="https://bondpricer.000webhostapp.com"
          source="https://github.com/Fabricejor/BondPricer-Pro"
        />
        <ProjectCard
          src="/MyCodeAirline.png"
          title="Airline- appli réservation de billets"
          description="Développement d'une application de réservation de billets d'avion en ligne avec gestion des utilisateurs et des vols. Utilisation du stack MERN : MongoDB, Express, React, et Node.js."
          demo=""
          source="https://github.com/Fabricejor/My-Code-Airlines"
        />
      </div>
    </div>
  );
};

export default Projects;