'use client'
import React from 'react'
import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

interface Props {
  slides: any;
}


export default function TestCarousel({slides}: Props) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className='w-full h-full flex justify-center items-center'>
    <div className="overflow-hidden relative w-[90%] md:w-[80%] max-w-full aspect-video group rounded-lg shadow-lg">
      <div
        className={`flex transition-transform ease-out duration-500 h-full`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s:any , i:any) => {
          return <img src={s}  key={i} alt={`Slide ${i+1}`} className="w-full h-full object-cover"/>;
        })}
      </div>

      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute inset-0 h-full w-full flex items-center justify-between p-2 text-white">
        <button 
          title='Previous' 
          onClick={previousSlide} 
          className="p-1 rounded-full bg-black/30 hover:bg-black/50 transition-all -ml-12 group-hover:ml-4 opacity-0 group-hover:opacity-100 duration-300"
        >
          <BsFillArrowLeftCircleFill size={32} />
        </button>
        <button 
          title='Nextslide' 
          onClick={nextSlide}
          className="p-1 rounded-full bg-black/30 hover:bg-black/50 transition-all -mr-12 group-hover:mr-4 opacity-0 group-hover:opacity-100 duration-300"
        >
          <BsFillArrowRightCircleFill size={32} />
        </button>
      </div>

      <div className="absolute bottom-4 text-center left-0 right-0 flex justify-center gap-3 w-full">
        {slides.map((s:any, i:any) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-full h-full cursor-pointer transition-all duration-500 ${
                i == current ? "bg-white" : "bg-white/50"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
    </div>
  )
}
