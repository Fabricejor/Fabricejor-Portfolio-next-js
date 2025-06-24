"use client"
import React, { memo } from 'react'
import { FaSearch } from "react-icons/fa";
import Image from 'next/image';

interface Props {
  titre: string;
  logo: string;
  description: string;
  demo: string;
  source: string;
  technologies: string;
  slides: any;
}

const CardProject = memo(({ titre, logo, description, demo, source, technologies, slides }: Props) => {
  // Obtenir la première image du tableau slides
  const mainImage = slides && slides.length > 0 ? slides[0] : null;

  return (
    <div className="group relative w-full max-w-4xl mx-auto mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
      {/* Container principal de l'image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        {mainImage ? (
          <Image
            src={mainImage}
            alt={titre}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <div className="text-gray-400 text-lg">No Image Available</div>
          </div>
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Logo badge dans le coin supérieur gauche */}
        <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm p-2 shadow-lg">
          <Image
            src={logo}
            alt={`${titre} logo`}
            fill
            className="object-contain p-1 rounded-full"
            sizes="64px"
          />
        </div>
        
        {/* Icône de loupe dans le coin supérieur droit */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white/30 transition-colors duration-300 cursor-pointer">
          <FaSearch className="text-white text-lg" />
        </div>
        
        {/* Titre en bas de l'image */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
            {titre}
          </h2>
        </div>
      </div>
      
      {/* Section informations */}
      <div className="p-6 space-y-4">
        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          <span className="text-xs md:text-sm font-semibold text-gray-400 mb-2 block w-full">
            Technologies:
          </span>
          {technologies.split(',').map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
            >
              {tech.trim()}
            </span>
          ))}
        </div>
        
        {/* Indicateur de slides disponibles */}
        {slides && slides.length > 1 && (
          <div className="flex items-center gap-2 pt-2">
            <span className="text-xs text-gray-400">
              {slides.length} screenshots available
            </span>
            <div className="flex gap-1">
              {slides.slice(0, 5).map((_: unknown, index: number) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-600"
                />
              ))}
              {slides.length > 5 && (
                <span className="text-xs text-gray-500 ml-1">+{slides.length - 5}</span>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Effet de brillance au hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>
    </div>
  );
});

// Ajout du displayName
CardProject.displayName = 'CardProject';

export default CardProject;
