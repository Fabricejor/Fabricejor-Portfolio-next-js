"use client"
import React from 'react'

export default function EveryProjects() {
  return (
    <div className='flex flex-row bg-[#191717] items-center justify-center px-20 mt-40 w-full  max-sm:flex-col max-sm:mb-[10%] max-sm:mt-[30vh] max-sm:px-10'>
      <div className='AllProjects z-20'>
        <div className='SearchBar w-full h-full'>
          <form className='Searchbar-input flex'>
            <input type="text" placeholder='Title' />
            <input type="text" placeholder='Technologie' />
          </form>
        </div>
      </div>
    </div>
  )
}
