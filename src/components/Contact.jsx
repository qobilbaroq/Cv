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
    <div 
      className='flex flex-col md:flex-row justify-center md:justify-evenly items-center h-screen py-10 md:py-0' 
      id='Contact'
    >

        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
          <h5 className='mb-6 text-3xl md:text-[50px] lg:text-[70px] font-bold text-gray-900 dark:text-white'>
            Get In Touch
          </h5>
          <p className='text-gray-500 text-base md:text-lg'>
            Feel free to contact me if you have any questions or just want to say hi.
          </p>
          <p className='text-gray-500 text-base md:text-lg mt-6'>
            nabilmuhamad89@gmail.com
          </p>
          <div className='flex mt-5 gap-4'>
            <a href='#Contact' className='text-2xl md:text-3xl bg-slate-700 text-slate-100 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full hover:opacity-50'><BiEnvelope /></a>
            <a href='https://github.com/qobilbaroq' className='text-2xl md:text-3xl bg-slate-700 text-slate-100 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full hover:opacity-50'><BiLogoGithub /></a>
            <a href='https://www.instagram.com/sibalroq?igsh=MWw4aGpvbjZyNjE3Zg==' className='text-2xl md:text-3xl bg-slate-700 text-slate-100 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full hover:opacity-50'><BiLogoInstagram /></a>
            <a href='#Contact' className='text-2xl md:text-3xl bg-slate-700 text-slate-100 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full hover:opacity-50'><BiLogoLinkedinSquare /></a>
            <a href='#Contact' className='text-2xl md:text-3xl bg-slate-700 text-slate-100 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full hover:opacity-50'><BiLogoDiscordAlt /></a>
          </div>
        </div>

        <img
          src={pp}
          alt='profile'
          className='order-first md:order-none h-[300px] w-[240px] md:h-[450px] md:w-[350px] lg:h-[550px] lg:w-[430px] bg-cover grayscale hover:grayscale-0 transition duration-300 rounded-lg mb-6 md:mb-0'
        />
    </div>
  )
}

export default Contact;
