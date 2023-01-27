import React from 'react'
import { FaFacebook,FaTwitter,FaLinkedin } from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import logo from '../assets/school-hacks-logo.png'

const Footer = () => {
  return (
    <>
        <div class='bg-[#919191] w-full flex items-center justify-between p-4' style={{borderTop:'2px solid black', borderBottom:'2px solid black'}}>
            <div class='flex gap-5 items-center'><img src={logo} alt="logo" class='mb-[-10px]' width={50} height={50}/><li class='hidden md:block font-semibold'><a href='/'>studenthacks.com</a></li></div>
            <div class='hidden md:block'><p class='italic'>&#169; copyright 2023 studenthacks</p></div>
            <div class='flex gap-5 md:gap-10 mt-4 '>
                <div><a href='https://web.facebook.com/people/Student-Hacks/100089567025384/'><FaFacebook size='2em'/></a></div>
                <div><a href='https://twitter.com/StudentHacks0'><FaTwitter size='2em'/></a></div>
                <div><a href='/'><FaLinkedin size='2em'/></a></div>
                <div><a href='mailto:contact.studenthacks@gmail.com'><FiMail size='2em'/></a></div>
            </div>
        </div>
    </>
  )
}

export default Footer