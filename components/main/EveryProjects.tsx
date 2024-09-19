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

  return (
    <div className="flex flex-row bg-[#191717] items-center justify-center px-20 mt-20 w-full max-sm:flex-col max-sm:mb-[10%] max-sm:mt-[30vh] max-sm:px-10">
      <div className="AllProjects z-20 justify-center p-8">
        <div className="SearchBar w-[80%] h-full">
          <form className="Searchbar-input flex flex-row gap-4">
            <div className="relative w-full max-w-lg">
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

            <div className="relative w-full max-w-lg">
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
        <div className="ALL_PROJECTS_CARD w-[100%]">
              <CardProject/>
        </div>
      </div>
      
    </div>
  );
}
