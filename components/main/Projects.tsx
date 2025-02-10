'use client'
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="projects"
      role="region"
      aria-label="Mes projets"
      className="flex flex-col items-center justify-center py-0 mt-10 max-sm:mt-[10vh]"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-300 py-20">
        Mes Projects
      </h1>
      <Link
        href={"/AllProjects"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Voir tous mes projets"
        className="py-2 z-30 cursor-pointer px-2 button-primary text-center text-white rounded-lg max-w-full mb-10 -mt-8"
      >
        Tous mes projects
      </Link>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/CalameRedaction.png"
          title="Calame Rédaction - site vitrine"
          description="Conception et développement d'un site vitrine moderne pour une entreprise de rédaction web Calame Rédaction. Interface intuitive réalisée en HTML5/CSS3 avec animations JavaScript pour une expérience utilisateur fluide. Intégration d'un système de contact par mail automatisé via PHP avec validation des données et notifications par e-mail."
          demo="https://calame-redaction.infinityfreeapp.com/"
          source="https://github.com/Fabricejor/Calame-Redaction"
        />
        <ProjectCard
          src="/BondPrice.png"
          title="BondPrice - Plateforme de Téléchargement"
          description="Application web sécurisée pour Bondprice Tool, avec authentification robuste et dashboard administrateur personnalisé. Interface responsive permettant l'import/export de données CSV, gestion avancée des utilisateurs et de leurs droits. Technologies : HTML5, CSS3, JavaScript ES6 et PHP avec architecture MVC."
          demo="https://bondpricer.000webhostapp.com"
          source="https://github.com/Fabricejor/BondPricer-Pro"
        />
        <ProjectCard
          src="/MyCodeAirline.png"
          title="Airline- appli réservation de billets"
          description="Application fullstack de réservation de vols développée avec le stack MERN. Fonctionnalités : authentification JWT, système de réservation en temps réel, gestion des profils utilisateurs et interface administrative. API RESTful avec MongoDB pour une gestion efficace des données."
          demo=""
          source="https://github.com/Fabricejor/My-Code-Airlines"
        />
      </div>
    </section>
  );
};

export default React.memo(Projects);