import React from 'react'
import { 
  BiEnvelope,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoDiscordAlt
 } from "react-icons/bi";
import pp from '../assets/image2.jpg'

const Contact = () => {
  return (
    <div className='flex justify-evenly items-center h-screen' id='Contact'>
        <div className='flex flex-col'>
          <h5 className='mb-10 text-4xl md:text-[70px] font-bold text-gray-900 dark:text-white '>Get In Touch</h5>
          <p className='text-gray-500 text-lg'> Feel free to contact me if you have any questions or just want to say hi.</p>
          <p className='text-gray-500 text-lg mt-8'> nabilmuhamad89@gmail.com</p>
          <div className='flex mt-5 gap-4 '>
            <a href='#Contact' className='text-3xl bg-slate-700 text-slate-100 h-12 w-12 flex items-center justify-center rounded-full hover:opacity-50'><BiEnvelope /></a>
            <a href='https://github.com/qobilbaroq' className='text-3xl bg-slate-700 text-slate-100 h-12 w-12 flex items-center justify-center rounded-full hover:opacity-50'><BiLogoGithub /></a>
            <a href='https://www.instagram.com/sibalroq?igsh=MWw4aGpvbjZyNjE3Zg==' className='text-3xl bg-slate-700 text-slate-100 h-12 w-12 flex items-center justify-center rounded-full hover:opacity-50'><BiLogoInstagram /></a>
            <a href='#Contact' className='text-3xl bg-slate-700 text-slate-100 h-12 w-12 flex items-center justify-center rounded-full hover:opacity-50'><BiLogoLinkedinSquare /></a>
            <a href='#Contact' className='text-3xl bg-slate-700 text-slate-100 h-12 w-12 flex items-center justify-center rounded-full hover:opacity-50'><BiLogoDiscordAlt /></a>
          </div>
        </div>
        <img
        src={pp}
        alt='image'
        className='h-[550px] w-[430px] bg-cover grayscale hover:grayscale-0 transition duration-300'
        />
    </div>
  )
}

export default Contact