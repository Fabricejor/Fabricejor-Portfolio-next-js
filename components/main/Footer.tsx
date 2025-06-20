"use client"
import React from "react";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { FaUsers,FaInstagram, FaYoutube, FaLinkedin, FaInfoCircle ,FaRegCopyright ,FaLink } from "react-icons/fa";
import { ImConnection } from "react-icons/im";


const Footer = () => {
    return (
        <footer className="relative w-full mt-10 overflow-hidden z-30">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Gradient Background with Blur */}
                <div className="absolute inset-0 bg-transparent "></div>
                
                {/* Animated Stars */}
                <div className="absolute top-8 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
                <div className="absolute top-16 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-50"></div>
                <div className="absolute top-4 left-3/4 w-1 h-1 bg-cyan-300 rounded-full animate-pulse opacity-40"></div>
                
                {/* Floating Orbs */}
                <div className="absolute top-4 left-8 w-24 h-24 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-xl animate-float-slow"></div>
                <div className="absolute bottom-8 right-12 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-2xl animate-float-slow-delay"></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative  bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 border-t border-cyan-500/20">
                {/* Top Glow Line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                
                <div className="max-w-7xl mx-auto px-8 ">
                    {/* Header Section */}
                    <div className="text-center mb-8 mt-10">
                        <h2 className="md:text-base lg:text-2xl xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-4">
                            Connectons-nous
                        </h2>
                        <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4"></div>
                        <p className="text-gray-300 md:text-sm lg:text-base xl:text-xl opacity-80 max-w-2xl mx-auto">
                            Transformons vos idées en expériences  exceptionnelles
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Community Section */}
                        <div className="group relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                            <div className="relative  bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                                <h3 className="font-bold  md:text-base lg:text-lg xl:text-2xl text-cyan-400 mb-8 text-center flex items-center justify-center gap-2">
                                    
                                    <FaUsers />
                                    Community
                                </h3>
                                <div className="space-y-0 xl:space-y-4">
                                    <Link
                                        href="https://www.youtube.com/@fabricejordanramos"
                                        className="group/link flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/20 hover:border-red-400 border border-transparent transition-all duration-300 transform hover:scale-105"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Youtube channel"
                                    >
                                        <div className="p-2 bg-red-500/20 rounded-lg group-hover/link:bg-red-500/30 transition-all duration-300">
                                            <FaYoutube className="text-red-400 text-xl" />
                                        </div>
                                        <span className="text-gray-300 group-hover/link:text-white transition-colors duration-300">Youtube</span>
                                        <FaLink className="w-4 h-4 text-gray-500 ml-auto transform group-hover/link:translate-x-1 transition-transform duration-300" />

                                    </Link>
                                    <Link
                                        href="https://github.com/Fabricejor"
                                        className="group/link flex items-center gap-3 p-3 rounded-xl hover:bg-gray-500/20 hover:border-gray-400 border border-transparent transition-all duration-300 transform hover:scale-105"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Github profile"
                                    >
                                        <div className="p-2 bg-gray-500/20 rounded-lg group-hover/link:bg-gray-500/30 transition-all duration-300">
                                            <RxGithubLogo className="text-gray-300 text-xl" />
                                        </div>
                                        <span className="text-gray-300 group-hover/link:text-white transition-colors duration-300">Github</span>
                                        <FaLink className="w-4 h-4 text-gray-500 ml-auto transform group-hover/link:translate-x-1 transition-transform duration-300" />

                                    </Link>
                                    <Link
                                        href="https://discordapp.com/users/564543375026552844"
                                        className="group/link flex items-center gap-3 p-3 rounded-xl hover:bg-purple-500/20 hover:border-purple-400 border border-transparent transition-all duration-300 transform hover:scale-105"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Discord profile"
                                    >
                                        <div className="p-2 bg-purple-500/20 rounded-lg group-hover/link:bg-purple-500/30 transition-all duration-300">
                                            <RxDiscordLogo className="text-purple-400 text-xl" />
                                        </div>
                                        <span className="text-gray-300 group-hover/link:text-white transition-colors duration-300">Discord</span>
                                        <FaLink className="w-4 h-4 text-gray-500 ml-auto transform group-hover/link:translate-x-1 transition-transform duration-300" />

                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Section */}
                        <div className="group relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                            <div className="relative bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                                <h3 className="font-bold text-xl text-blue-400 mb-8 text-center flex items-center justify-center gap-2">
                                    <ImConnection />
                                    Social Media
                                </h3>
                                <div className="space-y-0 xl:space-y-4">
                                    <Link
                                        href="https://www.instagram.com/jordan_ramos_disciple_of_god/"
                                        className="group/link flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-yellow-500/20 hover:via-pink-500/20 hover:to-purple-500/20 hover:border-pink-400 border border-transparent transition-all duration-300 transform hover:scale-105"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram profile"
                                    >
                                        <div className="p-2 bg-gradient-to-br from-yellow-500/20 via-pink-500/20 to-purple-500/20 rounded-lg group-hover/link:from-yellow-500/30 group-hover/link:via-pink-500/30 group-hover/link:to-purple-500/30 transition-all duration-300">
                                            <FaInstagram className="text-pink-400 text-xl" />
                                        </div>
                                        <span className="text-gray-300 group-hover/link:text-white transition-colors duration-300">Instagram</span>
                                        <FaLink className="w-4 h-4 text-gray-500 ml-auto transform group-hover/link:translate-x-1 transition-transform duration-300" />

                                    </Link>
                                    <Link
                                        href="https://x.com/fabricejor"
                                        className="group/link flex items-center gap-3 p-3 rounded-xl hover:bg-gray-900/40 hover:border-gray-300 border border-transparent transition-all duration-300 transform hover:scale-105"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Twitter profile"
                                    >
                                        <div className="p-2 bg-gray-800/40 rounded-lg group-hover/link:bg-gray-700/50 transition-all duration-300">
                                            <FaXTwitter className="text-gray-300 text-xl" />
                                        </div>
                                        <span className="text-gray-300 group-hover/link:text-white transition-colors duration-300">Twitter</span>
                                        <FaLink className="w-4 h-4 text-gray-500 ml-auto transform group-hover/link:translate-x-1 transition-transform duration-300" />

                                    </Link>
                                    <Link
                                        href="https://www.linkedin.com/in/fabrice-ramos-4517831bb/"
                                        className="group/link flex items-center gap-3 p-3 rounded-xl hover:bg-blue-600/20 hover:border-blue-400 border border-transparent transition-all duration-300 transform hover:scale-105"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Linkedin profile"
                                    >
                                        <div className="p-2 bg-blue-600/20 rounded-lg group-hover/link:bg-blue-600/30 transition-all duration-300">
                                            <FaLinkedin className="text-blue-400 text-xl" />
                                        </div>
                                        <span className="text-gray-300 group-hover/link:text-white transition-colors duration-300">LinkedIn</span>
                                        <FaLink className="w-4 h-4 text-gray-500 ml-auto transform group-hover/link:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* About Section */}
                        <div className="group relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                            <div className="relative bg-cyan-500/5 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                                <h3 className="font-bold text-xl text-cyan-400 mb-8 text-center flex items-center justify-center gap-2">
                                    <FaInfoCircle />
                                    À propos
                                </h3>
                                <div className="space-y-0 xl:space-y-4">
                                    <Link 
                                        href={"/Inspiration"} 
                                        className="group/link flex items-center gap-3 p-3 rounded-xl hover:bg-purple-500/20 hover:border-purple-400 border border-transparent transition-all duration-300 transform hover:scale-105"
                                        aria-label="Inspiration for this portfolio"
                                    >
                                        <div className="p-2 bg-purple-500/20 rounded-lg group-hover/link:bg-purple-500/30 transition-all duration-300">
                                            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-300 group-hover/link:text-white transition-colors duration-300 text-sm">
                                            Inspiration pour ce portfolio
                                        </span>
                                        <FaLink className="w-4 h-4 text-gray-500 ml-auto transform group-hover/link:translate-x-1 transition-transform duration-300" />

                                    </Link>
                                    <a 
                                        href="mailto:fabricejordan2001@gmail.com" 
                                        className="group/link flex items-center gap-3 p-3 rounded-xl hover:bg-blue-500/20 hover:border-blue-400 border border-transparent transition-all duration-300 transform hover:scale-105"
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label="Send email"
                                    >
                                        <div className="p-2 bg-blue-500/20 rounded-lg group-hover/link:bg-blue-500/30 transition-all duration-300">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-300 group-hover/link:text-white transition-colors duration-300 text-sm">
                                            fabricejordan2001@gmail.com
                                        </span>
                                        <FaLink className="w-4 h-4 text-gray-500 ml-auto transform group-hover/link:translate-x-1 transition-transform duration-300" />
                                    </a>
                                    <Link
                                        href="https://github.com/Fabricejor/Fabricejor-Portfolio-next-js"
                                        className="group/link flex items-center gap-3 p-3 rounded-xl hover:bg-cyan-500/20 hover:border-cyan-400 border border-transparent transition-all duration-300 transform hover:scale-105"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="View source code on GitHub"
                                    >
                                        <FaRegCopyright className="w-10 h-10 text-cyan-400 p-2 bg-cyan-500/20 rounded-lg group-hover/link:bg-cyan-500/30 transition-all duration-300" />
                                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                            &copy; Fabricejor dev 
                                        </span>
                                        <FaLink className="w-4 h-4 text-gray-500 ml-auto transform group-hover/link:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="relative">
                        {/* Separator Line */}
                        <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-0"></div>
                        
                      
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-10px) scale(1.05); }
                }
                @keyframes float-slow-delay {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-8px) scale(0.95); }
                }
                .animate-float-slow {
                    animation: float-slow 8s ease-in-out infinite;
                }
                .animate-float-slow-delay {
                    animation: float-slow-delay 10s ease-in-out infinite;
                }
            `}</style>
        </footer>
    );
};

export default React.memo(Footer);
