import React from 'react'
import dynamic from 'next/dynamic';
// Charger ThreeDmodel dynamiquement pour le code splitting (uniquement côté client)
const ThreeDmodel = dynamic(() => import('./TreeDModel'), { ssr: false });

export default React.memo(function Contact() {
    return (
        <section className='flex flex-row items-center justify-center px-20 mt-0 w-full z-[20] max-sm:flex-col max-sm:px-2' id='Contact-me'>
            <div className='container-form flex flex-row justify-around items-center rounded-lg py-2 px-2 border border-[#00B1A8] opacity-90 w-full max-sm:flex-col'>
                <form action="" className='flex flex-col w-[45%] max-sm:w-[100%]'>
                    <h2 className='text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-300 py-2'>
                        Contactez moi
                    </h2>
                    <input 
                        type="email" 
                        className='button-primary rounded-lg mt-2 placeholder-gray-300 text-white text-center p-3' 
                        placeholder='E-mail' 
                        aria-label="Votre email" />
                    <input 
                        type="text" 
                        className='button-primary rounded-lg mt-2 placeholder-gray-300 text-white text-center p-3' 
                        placeholder='Subject' 
                        aria-label="Sujet" />
                    <textarea  
                        className='button-primary rounded-lg mt-2 placeholder-gray-300 text-white text-center p-4' 
                        placeholder='Message' 
                        aria-label="Votre message" />
                    <button 
                        type="submit" 
                        className='py-2 z-30 cursor-pointer px-2 button-primary text-center text-white rounded-lg max-w-[30%] mb-10 mt-5'>
                        Envoyez
                    </button>
                </form>
                <div className='w-[40%] h-[400px] flex items-center justify-center max-sm:hidden z-30'>
                    <ThreeDmodel/>
                </div>
            </div>
        </section>
    )
});
