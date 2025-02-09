import React from "react";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-transparent text-gray-200 shadow-lg p-4 z-30">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <nav className="w-full flex flex-row items-center justify-around flex-wrap" aria-label="Footer navigation">
                    <div className="min-w-[200px] h-auto flex flex-col items-center">
                        <h2 className="font-bold text-[16px]">Community</h2>
                        <Link
                            href="https://www.youtube.com/@fabricejordanramos"
                            className="flex flex-row items-center my-4 cursor-pointer hover:bg-red-600 hover:scale-125 hover:duration-1500 hover:rounded-lg hover:px-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Youtube channel"
                        >
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Youtube</span>
                        </Link>
                        <Link
                            href="https://github.com/Fabricejor"
                            className="flex flex-row items-center my-4 cursor-pointer hover:bg-white hover:text-black hover:scale-125 hover:duration-1500 hover:rounded-lg hover:px-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Github profile"
                        >
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </Link>
                        <Link
                            href="https://discordapp.com/users/564543375026552844"
                            className="flex flex-row items-center my-4 cursor-pointer hover:bg-purple-700 hover:scale-125 hover:duration-1500 hover:rounded-lg hover:px-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Discord profile"
                        >
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </Link>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center">
                        <h2 className="font-bold text-[16px]">Social Media</h2>
                        <Link
                            href="https://www.instagram.com/jordan_ramos_disciple_of_god/"
                            className="flex flex-row items-center my-4 cursor-pointer hover:bg-gradient-to-r hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:scale-125 hover:duration-1500 hover:rounded-lg hover:px-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram profile"
                        >
                            <FaInstagram />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </Link>
                        <Link
                            href="https://x.com/fabricejor"
                            className="flex flex-row items-center my-4 cursor-pointer hover:bg-black hover:scale-125 hover:duration-1500 hover:rounded-lg hover:px-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter profile"
                        >
                            <FaXTwitter />
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/fabrice-ramos-4517831bb/"
                            className="flex flex-row items-center my-4 cursor-pointer hover:bg-blue-600 hover:scale-125 hover:duration-1500 hover:rounded-lg hover:px-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Linkedin profile"
                        >
                            <FaLinkedin />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </Link>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center">
                        <h2 className="font-bold text-[16px]">About</h2>
                        <Link href={"/Inspiration"} aria-label="Inspiration for this portfolio">
                            <p className="flex flex-row items-center my-4 cursor-pointer">
                                <span className="text-[15px] ml-[6px]">
                                    Inspiration for this portfolio
                                </span>
                            </p>
                        </Link>
                        <a href="mailto:fabricejordan2001@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send email">
                            <p className="flex flex-row items-center my-4 cursor-pointer">
                                <span className="text-[15px] ml-[6px]">
                                    Fabricejordan2001@gmail.com
                                </span>
                            </p>
                        </a>
                    </div>
                </nav>
                <Link
                    href="https://github.com/Fabricejor/Fabricejor-Portfolio-next-js"
                    className="mb-5 text-[15px] text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View source code on GitHub"
                >
                    &copy;Fabricejor dev All rights reserved
                </Link>
            </div>
        </footer>
    );
};

export default React.memo(Footer);
