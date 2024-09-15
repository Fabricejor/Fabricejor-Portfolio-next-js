'use client'
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";


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
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/Bondprice.png"
          title="BondPrice - Plateforme de Téléchargement"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/MyCodeAirline.png"
          title="Airline- appli réservation de billets"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Projects;