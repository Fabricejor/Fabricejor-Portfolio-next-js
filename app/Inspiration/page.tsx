"use client"
import React from 'react';

export default function Inspiration() {
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
          <div className="relative mt-20  w-full min-h-screen  h-full flex flex-col items-center justify-center p-8" style={{backgroundColor: '#060016'}}>
            
            {/* Fenêtre macOS */}
            <div className="relative w-full z-[2] max-w-5xl xl:max-w-[90vw] h-full bg-black/20 backdrop-blur-md border border-purple-500 rounded-xl shadow-2xl overflow-hidden">
              
              {/* Barre de titre macOS */}
              <div className="flex items-center justify-between px-4 py-3 bg-black/30 border-b border-purple-500/30">
                {/* Boutons macOS tricolores */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                {/* Titre de la fenêtre */}
                <h3 className="text-white text-center text-sm font-medium">l&apos;univers</h3>
                
                {/* Espace pour équilibrer */}
                <div className="w-[60px] bg-red-500"></div>
              </div>
              
              {/* Contenu de la fenêtre - Responsive */}
              <div className="flex flex-col lg:flex-row h-full">
                
                {/* Section Image */}
                <div className="lg:w-1/3 w-full h-48 lg:h-full relative ">
                <img 
                    src="/all-character-jjk-inspiration1.jpg" 
                    alt="All Characters JJK" 
                    className="w-full h-full object-cover"
                    loading='lazy'
                  />
                  <div className="absolute inset-0 bg-purple-500/10"></div>
                </div>
                
                {/* Section Texte */}
                <div className="lg:w-2/3 w-full p-6 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Jujutsu Kaisen
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-justify mb-4">
                  Jujutsu Kaisen se déroule dans un monde où les émotions négatives prennent forme à travers des fléaux,
                  des entités maudites que les exorcistes doivent affronter. Chaque personnage maîtrise une énergie occulte unique, 
                  avec des techniques propres à sa personnalité et son vécu. Ce système de pouvoir, riche et varié, ne repose pas sur la force brute,
                  mais sur la créativité et la stratégie. C&apos;est cette diversité et cette liberté d&apos;expression dans les combats qui ont influencé mon design, où chaque élément reflète une identité bien définie
                  </p>
                  <p className="text-gray-400 text-sm">
                    Jujutsu kaisen saison 2 - le drame de shibuya - 2023
                  </p>
                  
                  {/* Bouton d'action */}
                  {/* <button className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 w-fit">
                    En savoir plus
                  </button> */}
                </div>
                
              </div>
              
            </div>
            
            {/* Deuxième fenêtre macOS */}
            <div className="relative w-full z-[2] max-w-4xl h-full bg-black/20 backdrop-blur-md border-2 border-purple-500 rounded-xl shadow-2xl overflow-hidden mt-8">
              
              {/* Barre de titre macOS */}
              <div className="flex items-center justify-between px-4 py-3 bg-black/30 border-b border-purple-500/30">
                {/* Boutons macOS tricolores */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                {/* Titre de la fenêtre */}
                <h3 className="text-white text-sm font-medium">All Characters</h3>
                
                {/* Espace pour équilibrer */}
                <div className="w-[60px]"></div>
              </div>
              
              {/* Contenu de la fenêtre - Responsive */}
              <div className="flex flex-col lg:flex-row h-full">
                
                {/* Section Image */}
                <div className="lg:w-1/2 w-full h-full lg:h-full relative overflow-hidden">
                  <img 
                    src="/gojo-jjk-inspiration1.jpg" 
                    alt="All Characters JJK" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-purple-500/10"></div>
                </div>
                
                {/* Section Texte */}
                <div className="lg:w-1/2 w-full p-6 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Tous les Personnages
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Chaque personnage de Jujutsu Kaisen apporte sa propre vision et sa force unique. 
                    Ensemble, ils forment une histoire captivante pleine d'émotions et d'action.
                  </p>
                  <p className="text-gray-400 text-sm">
                    "L'union fait la force"
                  </p>
                  
                  {/* Bouton d'action */}
                  <button className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 w-fit">
                    Découvrir
                  </button>
                </div>
                
              </div>
              
            </div>
            
            {/* Troisième fenêtre macOS */}
            <div className="relative w-full z-[2] max-w-4xl h-full bg-black/20 backdrop-blur-md border-2 border-purple-500 rounded-xl shadow-2xl overflow-hidden mt-8">
              
              {/* Barre de titre macOS */}
              <div className="flex items-center justify-between px-4 py-3 bg-black/30 border-b border-purple-500/30">
                {/* Boutons macOS tricolores */}
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                {/* Titre de la fenêtre */}
                <h3 className="text-white text-sm font-medium">Hollow Purple</h3>
                
                {/* Espace pour équilibrer */}
                <div className="w-[60px]"></div>
              </div>
              
              {/* Contenu de la fenêtre - Responsive */}
              <div className="flex flex-col lg:flex-row h-full">
                
                {/* Section Image */}
                <div className="lg:w-1/2 w-full h-48 lg:h-full relative overflow-hidden">
                  <img 
                    src="/Gojo hollow purple-jjk-inspiration2.jpg" 
                    alt="Gojo Hollow Purple" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-purple-500/10"></div>
                </div>
                
                {/* Section Texte */}
                <div className="lg:w-1/2 w-full p-6 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Hollow Purple
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    La technique ultime de Gojo Satoru, Hollow Purple, représente la perfection de la maîtrise 
                    des énergies opposées. Un pouvoir destructeur d'une beauté fascinante.
                  </p>
                  <p className="text-gray-400 text-sm">
                    "Technique imaginaire : Purple"
                  </p>
                  
                  {/* Bouton d'action */}
                  <button className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 w-fit">
                    Explorer
                  </button>
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
      </div>
    </main>
  )
}
