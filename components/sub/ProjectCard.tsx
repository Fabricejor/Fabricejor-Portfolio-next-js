import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { PinContainer } from "../ui/3d-pin";

interface Props {
  src: string;
  title: string;
  description: string;
  demo: string;
  source: string;
}

const ProjectCard = ({ src, title, description, demo, source }: Props) => {
  const handleSourceClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (source) {
      window.open(source, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <PinContainer
      title={title}
      href={demo}
      containerClassName="w-full max-w-sm mx-auto"
      className="w-full h-full"
    >
      <div className="relative w-full h-full">
        {/* Card Container */}
        <article className="relative w-full h-full rounded-xl shadow-2xl border border-[#2a2a2a] bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-sm overflow-hidden group">
          
          {/* Image Container */}
          <div className="relative w-full h-40 sm:h-44 md:h-48 overflow-hidden rounded-t-xl">
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
          </div>

          {/* Content Container */}
          <div className="relative p-3 sm:p-4 md:p-5 h-[calc(100%-10rem)] sm:h-[calc(100%-11rem)] md:h-[calc(100%-12rem)] flex flex-col justify-between">
            
            {/* Title and Description */}
            <div className="flex-1 mb-3">
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-white mb-2 leading-tight">
                {title}
              </h2>
              <p className="text-xs sm:text-sm md:text-sm text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
            
            {/* GitHub Button */}
            <div className="mt-auto">
              <button 
                onClick={handleSourceClick}
                className="w-full flex items-center justify-center gap-2 py-2 sm:py-2.5 md:py-3 px-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-lg font-medium text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-500/30"
                aria-label={`Voir le code source du projet ${title}`}
              >
                <FaGithub className="text-sm sm:text-base md:text-lg" />
                <span>Code Source</span>
              </button>
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
          
          {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </article>
      </div>
    </PinContainer>
  );
};

export default React.memo(ProjectCard);