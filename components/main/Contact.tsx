'use client'
import React from 'react'
import dynamic from 'next/dynamic';
// Charger ThreeDmodel dynamiquement pour le code splitting (uniquement côté client)
const ThreeDmodel = dynamic(() => import('./TreeDModel'), { ssr: false });

export default React.memo(function Contact() {
    return (
        <section className='z-30 relative flex items-center justify-center px-8 py-20 w-full min-h-screen' id='Contact-me'>
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Animated stars */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse opacity-50"></div>
                <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-30"></div>
                
                {/* Floating orbs */}
                <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-xl animate-float"></div>
                <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-lg animate-float-delay"></div>
            </div>

            <div className='relative w-full max-w-7xl mx-auto'>
                {/* Main container with glassmorphism */}
                <div className='relative backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 border border-cyan-500/30 rounded-3xl p-8 shadow-2xl overflow-hidden'>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 rounded-3xl"></div>
                    
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 rounded-3xl shadow-inner shadow-cyan-500/20"></div>
                    
                    <div className='relative flex flex-col lg:flex-row items-center justify-between gap-12'>
                        {/* Form Section */}
                        <div className='flex-1 space-y-8 z-10'>
                            {/* Header */}
                            <div className="text-center space-y-4">
                                <h2 className='text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 leading-tight'>
                                    Contact
                                </h2>
                                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                                <p className="text-gray-300 text-lg opacity-80">
                                    Prêt à créer quelque chose d'extraordinaire ensemble ?
                                </p>
                            </div>

                            {/* Form */}
                            <form className='space-y-6 max-w-md mx-auto'>
                                {/* Email Input */}
                                <div className="group relative">
                                    <input 
                                        type="email" 
                                        className='w-full backdrop-blur-md bg-white/5 border border-cyan-500/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 focus:shadow-lg focus:shadow-cyan-500/25 group-hover:border-cyan-400/50' 
                                        placeholder='Votre adresse email' 
                                        aria-label="Votre email" 
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>

                                {/* Subject Input */}
                                <div className="group relative">
                                    <input 
                                        type="text" 
                                        className='w-full backdrop-blur-md bg-white/5 border border-cyan-500/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 focus:shadow-lg focus:shadow-cyan-500/25 group-hover:border-cyan-400/50' 
                                        placeholder='Le sujet de votre message' 
                                        aria-label="Sujet" 
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>

                                {/* Message Textarea */}
                                <div className="group relative">
                                    <textarea  
                                        rows={5}
                                        className='w-full backdrop-blur-md bg-white/5 border border-cyan-500/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 focus:shadow-lg focus:shadow-cyan-500/25 group-hover:border-cyan-400/50 resize-none' 
                                        placeholder='Votre message, une requête , un commentaire , une suggestion, etc.' 
                                        aria-label="Votre message" 
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                </div>

                                {/* Submit Button */}
                                <button 
                                    type="submit" 
                                    className='group relative w-full py-4 px-8 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 focus:outline-none focus:ring-4 focus:ring-cyan-500/50'>
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Envoyer
                                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </span>
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </button>
                            </form>
                        </div>

                        {/* 3D Model Section */}
                        <div className='flex-1 relative z-10 hidden lg:block'>
                            <div className="relative">
                                {/* Model container with glow effect */}
                                <div className='relative w-full h-[500px] backdrop-blur-sm bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl border border-cyan-500/20 overflow-hidden'>
                                    {/* Inner glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 rounded-3xl"></div>
                                    
                                    {/* 3D Model */}
                                    <div className="relative z-30 h-full flex items-center justify-center">
                                        <ThreeDmodel/>
                                    </div>
                                    
                                    {/* Floating particles around model */}
                                    <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
                                    <div className="absolute top-16 right-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-50"></div>
                                    <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping opacity-40"></div>
                                    <div className="absolute bottom-16 right-4 w-1 h-1 bg-blue-300 rounded-full animate-bounce opacity-30"></div>
                                </div>
                                
                                {/* External glow effect */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                @keyframes float-delay {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(-180deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-delay {
                    animation: float-delay 8s ease-in-out infinite;
                }
            `}</style>
        </section>
    )
});
