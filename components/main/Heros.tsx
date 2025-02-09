"use client"
import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div 
      className="relative flex flex-col h-full w-full" 
      id="about-me"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata" // Charge uniquement les métadonnées
        poster="/poster_banner.png" // Remplacez par le chemin de votre image optimisée
        className="rotate-180 absolute top-[-340px] max-xl:top-[-230px] h-full w-full left-0 z-[1] object-cover max-sm:top-[-340px]"
      >
        <source src="/Blue fire black hole.mp4" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;