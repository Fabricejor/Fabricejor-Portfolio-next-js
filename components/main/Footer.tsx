import React from "react";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-30 ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <Link
                            href={"https://www.youtube.com/@fabricejordanramos"}
                            className="flex flex-row items-center my-[15px] cursor-pointer hover:bg-red-600 hover:scale-125 hover:duration-[1.5s] hover:rounded-lg hover:px-1"
                        >
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Youtube</span>
                        </Link>
                        <Link
                            href={"https://github.com/Fabricejor"}
                            className="flex flex-row items-center my-[15px] cursor-pointer hover:bg-white hover:text-black hover:scale-125 hover:duration-[1.5s] hover:rounded-lg hover:px-1"
                        >
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </Link>
                        <Link
                            href={"https://discordapp.com/users/564543375026552844"}
                            className="flex flex-row items-center my-[15px] cursor-pointer hover:bg-purple-700 hover:scale-125 hover:duration-[1.5s] hover:rounded-lg hover:px-1"
                        >
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </Link>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <Link
                            href={"https://www.instagram.com/jordan_ramos_disciple_of_god/"}
                            className="flex flex-row items-center my-[15px] cursor-pointer hover:bg-gradient-to-r hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:scale-125 hover:duration-[1.5s] hover:rounded-lg hover:px-1"
                        >
                            <FaInstagram />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </Link>
                        <Link
                            href={"https://x.com/fabricejor"}
                            className="flex flex-row items-center my-[15px] cursor-pointer hover:bg-black hover:scale-125 hover:duration-[1.5s] hover:rounded-lg hover:px-1"
                        >
                            <FaXTwitter />
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </Link>
                        <Link
                            href={"https://www.linkedin.com/in/fabrice-ramos-4517831bb/"}
                            className="flex flex-row items-center my-[15px] cursor-pointer hover:bg-blue-600 hover:scale-125 hover:duration-[1.5s] hover:rounded-lg hover:px-1"
                        >
                            <FaLinkedin />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </Link>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <Link href={"/Inspiration"}>
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <span className="text-[15px] ml-[6px]">
                                    Inspiration for this port-folio
                                </span>
                            </p>
                        </Link>
                        <a href="mailto:fabricejordan2001@gmail.com" target="_blank">
                            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                                <span className="text-[15px] ml-[6px]">
                                    Fabricejordan2001@gmail.com
                                </span>
                            </p>
                        </a>
                    </div>
                </div>

                <Link
                    href={"https://github.com/Fabricejor/Fabricejor-Portfolio-next-js"}
                    className="mb-[20px] text-[15px] text-center"
                >
                    &copy;Fabricejor dev All rights reserved
                </Link>
            </div>
        </div>
    );
};

export default Footer;
