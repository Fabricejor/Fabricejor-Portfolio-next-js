import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
interface Props {
  src: string;
  title: string;
  description: string;
  demo: string;
  source: string;
}

const ProjectCard = ({ src, title, description ,demo , source }: Props) => {
  return (
    <div className="relative flex-1 overflow-hidden rounded-lg shadow-lg border border-[#0e5961] z-30 duration-150 hover:scale-105">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-justify text-white">{title}</h1>
        <p className="mt-2 text-justify text-gray-300">{description}</p>
      </div>
      <div className="button-container flex  p-3 w-full mt-2">
      <Link 
      href={demo}
      target="_blank"
         className="py-2 z-30 cursor-pointer px-2 button-primary text-center text-white rounded-lg max-w-[100%] mb-10 mt-[-20px]"
      >
        Demo
      </Link>
      <Link 
      href={source}
      target="_blank"
         className="py-2 ml-1 z-30 flex flex-row items-center justify-center cursor-pointer px-2 button-github text-center text-white rounded-lg max-w-[100%] mb-10 mt-[-20px]"
      >
        <FaGithub className="mr-1" />
        source
      </Link>
      </div>
    </div>
  );
};

export default ProjectCard;