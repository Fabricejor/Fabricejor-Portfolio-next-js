"use client";
import React, { useState } from "react";
import { HiCommandLine } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import CardProject from "./CardProject";

// Liste de mots-clés pour les suggestions
const projectKeywords = [
  "Java",
  "Javascript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "HTML",
  "CSS",
  "Tailwind",
  "PHP",
];

export default function EveryProjects() {
  const [titleQuery, setTitleQuery] = useState("");
  const [techQuery, setTechQuery] = useState("");
  const [filteredTitleSuggestions, setFilteredTitleSuggestions] = useState([]);
  const [filteredTechSuggestions, setFilteredTechSuggestions] = useState([]);

  // Fonction pour mettre à jour et filtrer les suggestions en fonction de l'entrée utilisateur pour les titres
  const handleTitleInputChange = (e) => {
    const value = e.target.value;
    setTitleQuery(value);
    setFilteredTitleSuggestions(
      projectKeywords.filter((keyword) =>
        keyword.toLowerCase().startsWith(value.toLowerCase())
      )
    );
  };
  console.log(filteredTitleSuggestions.length);

  // Fonction pour mettre à jour et filtrer les suggestions en fonction de l'entrée utilisateur pour les technologies
  const handleTechInputChange = (e) => {
    const value = e.target.value;
    setTechQuery(value);
    setFilteredTechSuggestions(
      projectKeywords.filter((keyword) =>
        keyword.toLowerCase().startsWith(value.toLowerCase())
      )
    );
  };

  // !Tableau des projets 
  const projets = [
    {
      titre: 'MycodeAirlines',
      logo: '/Logo projet 1.png',
      description:"Projet de fin de formation fullstack javascript à Gomycode.L'objectif du projet était de développer une application web intuitive pour la réservation de billets d'avion, permettant aux utilisateurs de rechercher, comparer et réserver des vols en ligne. Réalisé dans le cadre d'une formation fullstack, le projet utilise le stack MERN. Le backend est construit avec Node.js et Express pour créer une API REST, tandis que MongoDB stocke les données sur les vols et utilisateurs. Le frontend, conçu en React.js et stylisé avec Tailwind CSS, est sécurisé grâce à JSON Web Token (JWT) pour l'authentification et la protection des données échangées.",
      demo:"",
      source:"https://github.com/Fabricejor/My-Code-Airlines",
      technologies: 'Javascript, MongoDB ,Express ,React js,Node js',
      slides: [
        '/MyCodeAirline.png',
      ]
    },
    {
      titre: 'Dev mobile',
      logo: '/La corniche.png',
      description:'L\'objectif du projet était de développer une application web intuitive pour la réservation de billets d\'avion, permettant aux utilisateurs de rechercher, comparer et réserver des vols en ligne. Réalisé dans le cadre d\'une formation fullstack, le projet utilise le stack MERN. Le backend est construit avec Node.js et Express pour créer une API REST, tandis que MongoDB stocke les données sur les vols et utilisateurs. Le frontend, conçu en React.js et stylisé avec Tailwind CSS, est sécurisé grâce à JSON Web Token (JWT) pour l\'authentification et la protection des données échangées.',
      demo:"https://youtu.be/dtRyWmTCRv0?si=D0nHZzZ6vkEQ69zB",
      source:"https://github.com/matthews-crypto/Gestion_hotel/tree/main/lib",
      technologies: 'React,MongoDB,Express,Nodejs',
      slides: [
      ]
    },
    {
      titre: 'Calame Redaction',
      logo: '/Calame red logo.png',
      description:'L\'objectif du projet était de développer une application web intuitive pour la réservation de billets d\'avion, permettant aux utilisateurs de rechercher, comparer et réserver des vols en ligne. Réalisé dans le cadre d\'une formation fullstack, le projet utilise le stack MERN. Le backend est construit avec Node.js et Express pour créer une API REST, tandis que MongoDB stocke les données sur les vols et utilisateurs. Le frontend, conçu en React.js et stylisé avec Tailwind CSS, est sécurisé grâce à JSON Web Token (JWT) pour l\'authentification et la protection des données échangées.',
      demo:"https://calame-redaction.infinityfreeapp.com/",
      source:"https://github.com/Fabricejor/Calame-Redaction",
      technologies: 'Html, Css ,Javascript,PHP',
      slides: [
        "/CalameRedaction.png",
      ]
    },
    {
      titre: 'Gestion-hotel-Projet-Licence',
      logo: '/Calame red logo.png',
      description:'L\'objectif du projet était de développer une application web intuitive pour la réservation de billets d\'avion, permettant aux utilisateurs de rechercher, comparer et réserver des vols en ligne. Réalisé dans le cadre d\'une formation fullstack, le projet utilise le stack MERN. Le backend est construit avec Node.js et Express pour créer une API REST, tandis que MongoDB stocke les données sur les vols et utilisateurs. Le frontend, conçu en React.js et stylisé avec Tailwind CSS, est sécurisé grâce à JSON Web Token (JWT) pour l\'authentification et la protection des données échangées.',
      demo:"https://calame-redaction.infinityfreeapp.com/",
      source:"https://github.com/Fabricejor/Gestion-des-activit-s-d-un-hotel",
      technologies: 'Html, Css ,Javascript,PHP',
      slides: [
        "/CalameRedaction.png",
      ]
    },
    {
      titre: 'IONIC-Sql-Crud',
      logo: '/Calame red logo.png',
      description:'L\'objectif du projet était de développer une application web intuitive pour la réservation de billets d\'avion, permettant aux utilisateurs de rechercher, comparer et réserver des vols en ligne. Réalisé dans le cadre d\'une formation fullstack, le projet utilise le stack MERN. Le backend est construit avec Node.js et Express pour créer une API REST, tandis que MongoDB stocke les données sur les vols et utilisateurs. Le frontend, conçu en React.js et stylisé avec Tailwind CSS, est sécurisé grâce à JSON Web Token (JWT) pour l\'authentification et la protection des données échangées.',
      demo:"",
      source:"https://github.com/Fabricejor/ionic-crud-sqlite",
      technologies: 'Typescript , Ionic',
      slides: [
        "/BondPrice.png",
      ]
    },
    // Ajoutez autant de projets que vous voulez
  ];



  return (
    <div className="flex flex-row bg-[rgb(25,23,23)]  items-center justify-center px-20 mt-20 
    max-sm:px-2 w-full max-sm:flex-col max-sm:bg-red-500 max-sm:mb-[1vh] max-sm:mt-[20vh]">
      <div className="AllProjects z-20 justify-center items-center p-8 max-sm:p-2">
        <div className="SearchBar w-[80%] h-full max-sm:w-[60%]">
          <form className="Searchbar-input flex flex-row items-center justify-center gap-4 max-sm:flex-col">
            <div className="relative w-full max-w-lg max-sm:ml-[40%]">
              <FaSearch className="absolute right-[10%] top-[30%] text-gray-400 translate-y-[-5%]" />
              <input
                type="text"
                placeholder="Search by Title"
                value={titleQuery}
                onChange={handleTitleInputChange}
                className="w-full max-w-lg pl-10 pr-4 py-2 bg-gray-800 bg-opacity-50 focus:bg-opacity-90 text-white rounded-lg border-2 border-gray-300 border-opacity-20 focus:outline-none focus:ring-4 focus:ring-slate-500 shadow-lg"
              />
              {/* Suggestions de titre */}
              {filteredTitleSuggestions.length > 0 && (
                <ul className="absolute bg-gray-700 bg-opacity-90 text-white w-full mt-1 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                  {filteredTitleSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-600"
                      onClick={() => {
                        setTitleQuery(suggestion);
                        setFilteredTitleSuggestions([]);
                      }}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="relative w-full max-w-lg max-sm:ml-[40%]">
              <HiCommandLine className="absolute right-[10%] top-[30%] text-gray-400 translate-y-[-5%]" />
              <input
                type="text"
                placeholder="Search by Technology"
                value={techQuery}
                onChange={handleTechInputChange}
                className="w-full max-w-lg pl-10 pr-4 py-2 bg-gray-800 bg-opacity-50 focus:bg-opacity-90 text-white rounded-lg border-2 border-gray-300 border-opacity-20 focus:outline-none focus:ring-4 focus:ring-slate-500 shadow-lg"
              />
              {/* Suggestions de technologies */}
              {filteredTechSuggestions.length > 0 && (
                <ul className="absolute bg-gray-700 bg-opacity-90 text-white w-full mt-1 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                  {filteredTechSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-600"
                      onClick={() => {
                        setTechQuery(suggestion)
                        setFilteredTechSuggestions([]);
                      }}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </form>
        </div>
        {/* tous les card projects */}
        <div className="ALL_PROJECTS_CARD w-[100%] max-sm:w-[90%]">
          {projets.map((projet, index) => (
            <CardProject
              key={index}
              titre={projet.titre}
              logo={projet.logo}
              description={projet.description}
              demo={projet.demo}
              source={projet.source}
              technologies={projet.technologies}
              slides={projet.slides}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
