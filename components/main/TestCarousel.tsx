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
    <div className='w-full h-full flex justify-center'>
     <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s:any , i:any) => {
          return <img src={s}  key={i} alt="..."/>;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-[#CD262A] px-10 text-3xl">
        <button title='Previous' onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button title='Nextslide' onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s:any, i:any) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
    </div>
  )
}
