"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import VideoPlayer from "@/components/ui/video-player";

interface InspirationItem {
  title: string;
  description: string;
  quote: string;
  image: string;
  alt: string;
}

export default function Inspiration() {
  // Données des inspirations
  const inspirationData: InspirationItem[] = [
    {
      title: "Jujutsu Kaisen",
      description: "Jujutsu Kaisen se déroule dans un monde où les émotions négatives prennent forme à travers des fléaux, des entités maudites que les exorcistes doivent affronter. Chaque personnage maîtrise une énergie occulte unique, avec des techniques propres à sa personnalité et son vécu. Ce système de pouvoir, riche et varié, ne repose pas sur la force brute, mais sur la créativité et la stratégie. C'est cette diversité et cette liberté d'expression dans les combats qui ont influencé mon design, où chaque élément reflète une identité bien définie",
      quote: "Jujutsu kaisen saison 2 - le drame de shibuya - 2023",
      image: "/all-character-jjk-inspiration1.jpg",
      alt: "All Characters JJK"
    },
    {
      title: "Gojo Satoru et l'Infini",
      description: "Gojo Satoru est le personnage le plus puissant de Jujutsu Kaisen, reconnu pour sa technique mythique : l'Infini. Cette capacité, inspirée de concepts liés à l'espace et aux lois universelles, lui permet de créer une barrière entre lui et ses adversaires, où le temps et la matière se dilatent à l'infini. L'effet évoque les trous noirs et la relativité, rendant toute attaque inefficace. Cette maîtrise de l'espace, à la fois technique et symbolique, m'a profondément inspiré pour concevoir un design axé sur l'immensité, la profondeur et la complexité de l'univers",
      quote: "Gojo Satoru - Jujutsu Kaisen",
      image: "/gojo-jjk-inspiration1.jpg",
      alt: "Gojo Satoru"
    },
    {
      title: "Hollow Purple et l'esthétique du vide",
      description: "La technique Hollow Purple de Gojo combine deux forces opposées : Bleu, qui attire, et Rouge, qui repousse. Leur fusion crée une destruction totale, fondée sur une équation imaginaire. Ce contraste et cette tension m'ont inspiré l'identité visuelle de mon portfolio : des couleurs profondes et vibrantes, évoquant les trous noirs aux effets contradictoires. L'extension de territoire de Gojo, avec son espace figé et infini, rappelle également l'immensité d'un vide cosmique. Ces éléments m'ont guidé vers un design mêlant énergie, mystère et spatialité.",
      quote: "Rouge , Bleu - HOLLOW PURPLE",
      image: "/Gojo hollow purple-jjk-inspiration2.jpg",
      alt: "Gojo Hollow Purple"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1200);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const activeItem = inspirationData[activeIndex];

  // Fonction pour calculer l'espacement entre les images
  function calculateGap(width: number) {
    const minWidth = 768;
    const maxWidth = 1200;
    const minGap = 40;
    const maxGap = 80;
    if (width <= minWidth) return minGap;
    if (width >= maxWidth) return maxGap;
    return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
  }

  // Gestion du responsive
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    autoplayIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % inspirationData.length);
    }, 10000);

    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, []);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % inspirationData.length);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + inspirationData.length) % inspirationData.length);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, []);

  // Styles pour les images (affichage circulaire)
  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.6;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + inspirationData.length) % inspirationData.length === index;
    const isRight = (activeIndex + 1) % inspirationData.length === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 0.7,
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 0.7,
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Variants pour l'animation du texte
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 h-[830px]">
    <div className="relative flex flex-col h-full w-full" id="about-me">
      
      <video
        autoPlay
        muted
        loop
            className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover max-sm:top-[-340px]"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

          {/* Container principal avec fond #060016 */}
          <div className="relative gap-y-20 mt-44 w-full h-full flex flex-col items-center justify-center p-4 md:p-8" style={{ backgroundColor: '#060016' }}>

            {/* Fenêtre macOS avec effet circulaire */}
            <div className="relative w-full z-[2] max-w-6xl h-[80vh] min-h-[80vh] max-h-[600px] bg-black/20 backdrop-blur-md border border-purple-500 rounded-xl shadow-2xl overflow-hidden">

              {/* Barre de titre macOS */}
              <div className="flex items-center justify-between px-4 py-3 bg-black/30 border-b border-purple-500/30">
                {/* Boutons macOS tricolores */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                {/* Titre de la fenêtre */}
                <h3 className="text-white text-center text-sm font-medium">L'univers</h3>

                {/* Boutons de navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-6 h-6 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Précédent"
                  >
                    <FaArrowLeft size={10} className="text-white" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-6 h-6 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Suivant"
                  >
                    <FaArrowRight size={10} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Contenu de la fenêtre */}
              <div className="flex flex-col lg:flex-row h-full">

                {/* Section Images avec effet circulaire */}
                <div className="lg:w-1/2 w-full h-1/2 lg:h-full relative p-4 flex items-center justify-center" ref={imageContainerRef}>
                  <div className="relative w-full h-full perspective-1000" style={{ perspective: '1000px' }}>
                    {inspirationData.map((item, index) => (
                      <img
                        key={index}
                        src={item.image}
                        alt={item.alt}
                        className="absolute inset-0 w-full h-full object-contain rounded-lg"
                        style={getImageStyle(index)}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>

                {/* Section Texte */}
                <div className="lg:w-1/2 w-full h-1/2 lg:h-full p-4 md:p-6 flex flex-col justify-center overflow-y-auto">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      variants={textVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="space-y-4"
                    >
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {activeItem.title}
                      </h2>

                      <motion.p className="text-gray-300 leading-relaxed text-sm md:text-base text-justify">
                        {activeItem.description.split(" ").map((word, i) => (
                          <motion.span
                            key={i}
                            initial={{
                              filter: "blur(10px)",
                              opacity: 0,
                              y: 5,
                            }}
                            animate={{
                              filter: "blur(0px)",
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.22,
                              ease: "easeInOut",
                              delay: 0.025 * i,
                            }}
                            className="inline-block"
                          >
                            {word}&nbsp;
                          </motion.span>
                        ))}
                      </motion.p>

                      <p className="text-gray-400 text-xs md:text-sm italic">
                        {activeItem.quote}
                      </p>

                      {/* Indicateurs */}
                      <div className="flex gap-2 pt-4">
                        {inspirationData.map((_, index) => (
                          <button
                            title={`${index}`}
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? 'bg-purple-500 w-6' : 'bg-gray-600'
                              }`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

            </div>
            
            {/* Fenêtre macOS Vidéo */}
            <div className="relative flex flex-col w-[360px] h-[270px] sm:w-[600px] sm:h-[400px] md:w-[768px] md:h-[480px] lg:w-[1024px] lg:h-[576px] z-[20] bg-black/20 backdrop-blur-md border border-purple-500 rounded-xl shadow-2xl overflow-hidden">

              {/* Barre de titre macOS */}
              <div className="flex-shrink-0 flex items-center justify-between px-4 py-2 bg-black/30 border-b border-purple-500/30">
                  {/* Boutons macOS tricolores */}
                  <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  {/* Titre de la fenêtre */}
                  <h3 className="text-white text-center text-sm font-medium">Hollow Purple - Technique Imaginaire</h3>
                  {/* Espace pour équilibrer */}
                  <div className="w-[60px]"></div>
              </div>

              {/* Contenu vidéo */}
              <div className="flex-grow p-1 md:p-2">
                  <VideoPlayer src="/video/Hollow purple footage.mp4" />
              </div>
            </div>

          </div>


    </div>
    </div>
    </main>
  )
}
