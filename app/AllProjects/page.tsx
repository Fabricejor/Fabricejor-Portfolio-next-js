"use client"
import EveryProjects from '@/components/main/EveryProjects'
import Footer from '@/components/main/Footer'
import React from 'react'

export default function AllProjects() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 h-[830px] max-sm:gap-0 max-sm:h-[600px] ">
        <div className="relative flex flex-col h-full w-full" id="about-me">

          <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-340px]   h-full w-full left-0 z-[1] object-cover max-sm:top-[-250px] "
          >
            <source src="/red fire black hole.mp4" type="video/webm" />
          </video>
          <EveryProjects />
          <Footer />
        </div>
      </div>
    </main>
  )
}
