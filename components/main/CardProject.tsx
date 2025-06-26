"use client"
import React, { memo, useState, useEffect } from 'react'
import { FaSearch, FaGithub, FaYoutube, FaTimes } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const TestCarousel = dynamic(() => import('./TestCarousel'), {
  loading: () => <div className="h-full w-full bg-gray-800 flex items-center justify-center"><p className="text-white">Loading Carousel...</p></div>,
  ssr: false
});

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mainImage = slides && slides.length > 0 ? slides[0] : null;

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
    return () => {
      body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        onClick={handleOpenModal}
        className="group relative  w-full max-w-full mx-auto md:mx-auto mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.01] cursor-pointer"
      >
        <div className="relative h-36 md:h-60 overflow-hidden">
          {mainImage ? (
            <Image
              src={mainImage}
              alt={titre}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-100"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <div className="text-gray-400 text-lg">No Image Available</div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-black/20 backdrop-blur-sm p-2 shadow-lg">
            <Image
              src={logo}
              alt={`${titre} logo`}
              fill
              className="object-contain p-1 rounded-full"
              sizes="64px"
            />
          </div>

          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white/30 transition-colors duration-300 cursor-pointer">
            <FaSearch className="text-white text-lg" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6">
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB2F37] to-[#f3917b] text-xl md:text-3xl font-bold dmsans text-wrap">
            {titre}
          </h2>

          <div className="flex flex-wrap gap-2">
            <span className="text-xs md:text-sm font-semibold text-gray-400 mb-2 block w-full">
              Technologies:
            </span>
            {technologies.split(',').map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-amber-500/20 to-red-500/20 text-amber-300 text-xs rounded-full border border-amber-500/30"
              >
                {tech.trim()}
              </span>
            ))}
          </div>

          {slides && slides.length > 1 && (
            <div className="flex items-center gap-2 ">
              <span className="text-xs text-gray-400">
                {slides.length} screenshots available
              </span>
              {/* <div className="flex gap-1">
                {slides.slice(0, 5).map((_: unknown, index: number) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-600"
                  />
                ))}
                {slides.length > 5 && (
                  <span className="text-xs text-gray-500 ml-1">+{slides.length - 5}</span>
                )}
              </div> */}
            </div>
          )}
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>
      </div>
          {/* Modal pop up */}
      {isModalOpen && (
        <div
          className="fixed inset-0  bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out"
          onClick={handleCloseModal}
        >
          <div
            className="modal-container z-50 mt-10 bg-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[80vh] overflow-y-auto flex flex-col relative transition-all duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-10 right-4 text-gray-400 hover:text-white transition-colors z-20 p-2 bg-black/30 rounded-full"
              aria-label="Close project details"
            >
              <FaTimes size={20} />
            </button>

            <div className="w-full h-full md:h-full mt-4 flex-shrink-0">
              {slides && slides.length > 0 ? (
                <TestCarousel slides={slides} />
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">No images</div>
              )}
            </div>

            <div className="p-6 md:p-8">
              <h2 className="text-xl md:text-3xl font-bold text-white text-justify mb-4">{titre}</h2>

              <p className="text-gray-300 mb-6 text-sm md:text-base text-justify">{description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.split(',').map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {demo && demo.length > 0 && (
                  <Link href={demo} target="_blank" className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-600/90 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                    <FaYoutube size={20} />
                    <span>YouTube</span>
                  </Link>
                )}
                {source && source.length > 0 && (
                  <Link href={source} target="_blank" className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-700/90 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                    <FaGithub size={20} />
                    <span>Source Code</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

CardProject.displayName = 'CardProject';

export default CardProject;
