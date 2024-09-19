'use client'
import React  , {useEffect}from 'react'
import   {CCarousel,CCarouselItem,CImage} from '@coreui/react';


export default function TestCarousel() {
  useEffect(() => {
    // Dynamically import CoreUI CSS when component mounts
    import('@coreui/coreui/dist/css/coreui.min.css');
  }, []);
  return (
    <div className='w-full h-full flex justify-center'>
    <CCarousel className='max-w-[70%] z-40' controls indicators>
  <CCarouselItem>
    <CImage className="block w-80" src="/hakari2.jpg" alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="block w-80" src="/avatarhd.png" alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="block w-80" src="/photoprofilIA.jpeg" alt="slide 3" />
  </CCarouselItem>
</CCarousel>
  </div>
  )
}
