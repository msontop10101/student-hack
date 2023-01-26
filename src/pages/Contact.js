import React from 'react'
import ContactForm from '../components/Form'
import logo from '../assets/school-hacks-logo.png'
import { FaFacebook,FaTwitter,FaLinkedin } from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'

const Contact = () => {
  return (
    <>
      <div class='h-[93vh] md:h-[90vh] flex items-center justify-center'>
        <div class='bg-[#B1A1ED] flex w-full md:w-[80vw] h-full md:h-[80vh]'>
          <div class='hidden md:flex w-[40%] h-[100%] bg-white border-[#B1A1ED] border-2 items-center justify-center'>
          <div>
          <div class='flex justify-center items-center w-full pb-5 md:pb-0'><img src={logo} alt="logo" class='logo-size'/></div>
          <p class='font-semibold text-lg my-4 text-center'>Soyez social avec nous</p>
          <div class='flex gap-5'>
            <div><li><a href='https://web.facebook.com/people/Student-Hacks/100089567025384/'><FaFacebook size='3em' color='blue'/></a></li></div>
            <div><a href='https://twitter.com/StudentHacks0'><FaTwitter size='3em' color='#00acee'/></a></div>
            <div><a href='/'><FaLinkedin size='3em' color='#0072b1'/></a></div>
            <div><a href='mailto:contact.studenthacks@gmail.com'><FiMail size='3em' color='black'/></a></div>
          </div>
          </div>
          </div>
          <div class='w-full md:w-[60%] flex flex-col md:flex-row items-center justify-center'>
            <div class='w-[80%]'>
            <h1 class='font-bold text-2xl text-center'>NOUS CONTACTER</h1>
            <div class='flex justify-center'><ContactForm/></div>
            </div>
            <div class='flex md:hidden gap-5 mt-4 '>
            <div><a href='https://web.facebook.com/people/Student-Hacks/100089567025384/'><FaFacebook size='3em' color='blue'/></a></div>
            <div><a href='https://twitter.com/StudentHacks0'><FaTwitter size='3em' color='#00acee'/></a></div>
            <div><a href='/'><FaLinkedin size='3em' color='#0072b1'/></a></div>
            <div><a href='mailto:contact.studenthacks@gmail.com'><FiMail size='3em' color='black'/></a></div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact