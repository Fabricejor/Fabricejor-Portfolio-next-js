import React from 'react'
import ThreeDmodel from './TreeDModel'

export default function Contact() {
    return (
        <div className='flex flex-row items-center justify-center px-20 mt-0 w-full z-[20] max-sm:flex-col max-sm:px-2'>
            <div className='container-form flex flex-row justify-around items-center  rounded-lg  py-[8px] px-[7px] border border-[#00B1A8] opacity-[0.9] w-full max-sm:flex-col'>
                <form action="" className='flex flex-col w-[45%] max-sm:w-[100%]'>
                    <label className='text-[40px]  text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r  from-blue-700 to-cyan-300 py-2'> Contactez moi</label>
                    <input type="mail" className='button-primary rounded-lg mt-2 placeholder-gray-300 text-white text-center p-3' placeholder='E-mail' />
                    <input type="text" className='button-primary rounded-lg mt-2  placeholder-gray-300 text-white text-center p-3' placeholder='Subject' />
                    <textarea  className='button-primary rounded-lg mt-2  placeholder-gray-300 place-content-center  text-white text-center p-4 ' placeholder='Message' />
                    <button type="submit" className='py-2 z-30 cursor-pointer px-2 button-primary text-center text-white rounded-lg max-w-[30%] mb-10 mt-[20px]'>Envoyez</button>
                </form>
            <div className='w-[40%]  h-[400px] flex items-center justify-center max-sm:hidden z-30'>
                <ThreeDmodel/>
            </div>
            </div>
        </div>
    )
}
