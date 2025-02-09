"use client";
import React, { useState, useMemo, memo } from "react";
import { HiCommandLine } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import dynamic from 'next/dynamic';

// Import dynamique de CardProject
const CardProject = dynamic(() => import("./CardProject"), {
  loading: () => <div className="text-white text-center">Loading project...</div>
});

// Liste de mots-clés pour les suggestions
const projectKeywords = memo([
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
]);

const EveryProjects = memo(() => {
  const [titleQuery, setTitleQuery] = useState("");
  const [filteredTitleSuggestions, setFilteredTitleSuggestions] = useState([]);

  // !Tableau des projets 
  const projets = useMemo(() => [
    {
      titre: 'MycodeAirlines',
      logo: '/Logo projet 1.png',
      description:"Projet de fin de formation fullstack javascript à Gomycode.L'objectif du projet était de développer une application web intuitive pour la réservation de billets d'avion, permettant aux utilisateurs de rechercher, comparer et réserver des vols en ligne. Réalisé dans le cadre d'une formation fullstack, le projet utilise le stack MERN. Le backend est construit avec Node.js et Express pour créer une API REST, tandis que MongoDB stocke les données sur les vols et utilisateurs. Le frontend, conçu en React.js et stylisé avec Tailwind CSS, est sécurisé grâce à JSON Web Token (JWT) pour l'authentification et la protection des données échangées.",
      demo:"",
      source:"https://github.com/Fabricejor/My-Code-Airlines",
      technologies: 'Javascript, MongoDB ,Express ,React js,Node js',
      slides: [
        '/MyCodeAirline.png',
        '/Mycodeairline2.png',
        '/Mycodeairline3.png',
        '/Mycodeairline4.png',
        '/Mycodeairline5.png',
        '/Mycodeairline6.png',
        '/Mycodeairline7.png',
        '/Mycodeairline8.png',
        '/Mycodeairline9.png',
        '/Mycodeairline10.png',

      ]
    },
    {
      titre: 'Dev mobile',
      logo: '/La corniche.png',
      description:'Dans le cadre d\'un projet académique, j\'ai développé une application mobile avec Flutter pour la gestion des activités hôtelières. Mon travail portait sur l\'interface front-end, avec une distinction entre le front office destiné aux clients et le back office pour les réceptionnistes. L\'objectif était de proposer une interface intuitive pour améliorer l\'expérience utilisateur et optimiser les opérations. Faute de temps, je n\'ai pu approfondir l\'aspect back-end et les fonctionnalités avancées de l\'application.je recommande vivement de visionner la vidéo en démo.',
      demo:"https://youtu.be/dtRyWmTCRv0?si=D0nHZzZ6vkEQ69zB",
      source:"https://github.com/matthews-crypto/Gestion_hotel/tree/main/lib",
      technologies: 'Flutter , Dart',
      slides: [
      ]
    },
    {
      titre: 'Calame Redaction',
      logo: '/Calame red logo.png',
      description:'Pour mon premier projet, j\'ai développé un site vitrine pour la startup Calame Rédaction. L\'objectif était de promouvoir les services de l\'entreprise via une plateforme simple et efficace. J\'ai utilisé des technologies de base, telles que HTML et CSS pour la structure et la mise en page, ainsi qu\'un peu de JavaScript pour des animations subtiles mais qualitatives. Enfin, un système de mail automatique, implémenté en PHP, a été ajouté pour faciliter la communication entre l\'entreprise et ses clients.',
      demo:"https://calame-redaction.infinityfreeapp.com/",
      source:"https://github.com/Fabricejor/Calame-Redaction",
      technologies: 'Html, Css ,Javascript,PHP',
      slides: [
        "/CalameRedaction.png",
        "/Calameredaction2.png",
        "/Calameredaction3.png",
      ]
    },
    {
      titre: 'Gestion-hotel-Projet-Licence',
      logo: '/palmier.png',
      description:'Pour mon projet de fin d’études en licence à l\'ESP, j\’ai collaboré avec deux autres développeurs pour concevoir une application web de gestion hôtelière. Mon rôle principal consistait à créer et maintenir la base de données, ainsi qu’à gérer certaines tâches backend, telles que la mise en place d’un système de contact par email et la redirection des profils en fonction de l’utilisateur connecté. Les technologies utilisées incluaient HTML, CSS et JavaScript pour la mise en page et les animations, ainsi que PHP pour les fonctionnalités backend essentielles.',
      demo:"https://youtu.be/BnOp8g8ljM8",
      source:"https://github.com/Fabricejor/Gestion-des-activit-s-d-un-hotel",
      technologies: 'Html, Css , Javascript ,PHP',
      slides: [
        "/GestionHotel1.png",
        "/GestionHotel2.png",
        "/GestionHotel3.png",
      ]
    },
    {
      titre: 'BondPricer',
      logo: '/AIP.png',
      description:'J\'ai développé une application web permettant de collecter des informations clients avant de leur donner un accès unique à des fichiers à télécharger. Les administrateurs peuvent générer un code d\'accès pour chaque client, qui est utilisable une seule fois. Les utilisateurs ont cinq minutes pour remplir un formulaire et accéder aux fichiers mis à disposition. L\'application est conçue pour vendre des fichiers téléchargeables une seule fois, ce qui évite leur duplication, notamment pour des logiciels spécifiques comme des fichiers Excel auto-installables. Pour renforcer la sécurité, j\'ai mis en place plusieurs niveaux de protection contre les attaques XSS (cross-site scripting), étant donné la présence de champs de texte dans le formulaire, le tout implémenté avec PHP.Nb: La démo ne montre pas les données manipulées lors de la conception pour des soucis de confidentialité',
      demo:"https://files.fm/u/uhgbck8jvd",
      source:"https://github.com/Fabricejor/BondPricer-Pro",
      technologies: 'HTML,JAVASCRIPT,CSS, PHP',
      slides: [
        "/Bondpricer1.png",
        "/BondPrice.png",
        "/Bondpricer3.png",
      ]
    },
    // Ajoutez autant de projets que vous voulez
  ], []); // Mémorisation du tableau des projets

  // Mémorisation des titres de projets
  const projectTitles = useMemo(() => projets.map(projet => projet.titre), [projets]);

  // Mémorisation des styles communs
  const styles = useMemo(() => ({
    container: "flex flex-row bg-[rgb(25,23,23)] items-center justify-center px-20 mt-20 max-sm:px-2 w-full max-sm:flex-row max-sm:mb-[1vh] max-sm:mt-[20vh]",
    searchInput: "w-full max-w-lg pl-10 pr-4 py-2 bg-gray-800 bg-opacity-50 focus:bg-opacity-90 text-white rounded-lg border-2 border-gray-300 border-opacity-20 focus:outline-none focus:ring-4 focus:ring-slate-500 shadow-lg",
    suggestionsList: "absolute bg-gray-700 bg-opacity-90 text-white w-full mt-1 rounded-lg shadow-lg max-h-40 overflow-y-auto",
    suggestionItem: "px-4 py-2 cursor-pointer hover:bg-gray-600"
  }), []);

  // Optimisation de la fonction de filtrage des titres
  const handleTitleInputChange = (e) => {
    const value = e.target.value;
    setTitleQuery(value);
    if (!value.trim()) {
      setFilteredTitleSuggestions([]);
      return;
    }
    setFilteredTitleSuggestions(
      projectTitles.filter((keyword) =>
        keyword.toLowerCase().startsWith(value.toLowerCase())
      )
    );
  };

  // Mémorisation des projets filtrés
  const filteredProjects = useMemo(() => {
    if (!titleQuery) return projets;
    return projets.filter((projet) =>
      projet.titre.toLowerCase().includes(titleQuery.toLowerCase())
    );
  }, [projets, titleQuery]);

  return (
    <div className={styles.container}>
      <div className="AllProjects z-20 justify-center items-center p-8 max-sm:p-2">
        <div className="SearchBar w-[100%] h-full max-sm:w-[70%]">
          <form className="Searchbar-input flex flex-row items-center justify-center gap-4 max-sm:flex-col">
            <div className="relative w-full max-w-lg max-sm:ml-[40%]">
              <FaSearch className="absolute right-[10%] top-[30%] text-gray-400 translate-y-[-5%]" />
              <input
                type="text"
                placeholder="Search by Title"
                value={titleQuery}
                onChange={handleTitleInputChange}
                className={styles.searchInput}
              />
              {filteredTitleSuggestions.length > 0 && (
                <ul className={styles.suggestionsList}>
                  {filteredTitleSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className={styles.suggestionItem}
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
          </form>
        </div>
        <div className="ALL_PROJECTS_CARD w-[100%] flex flex-col items-center mt-0 justify-center max-sm:w-[100%]">
          {filteredProjects.map((projet, index) => (
            <CardProject
              key={projet.titre}
              {...projet}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default EveryProjects;
