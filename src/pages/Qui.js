import React from 'react'
import logo from '../assets/school-hacks-logo.png'

const Qui = () => {
  return (
    <>
      <div class='flex flex-col md:flex-row w-[100vw] md:w-full h-[90vh]'>
        <div class='bg-[#B1A1ED] w-full md:w-[40%] h-[30%] md:h-full flex justify-center items-center'>
          <div>
          <div class='flex justify-center  pb-5 md:pb-0'><img src={logo} alt="logo" class='logo-size'/></div>
          <div><p class="text-center text-sm md:text-3xl font-semibold py-0 md:py-2">STUDENT HACKS, le devoir de faire les votres</p></div>
          </div>
        </div>
        <div class='w-full md:w-[70%] h-[60%] md:h-full p-10 flex justify-center items-center'>
          <div>
          <h1 class='font-semibold text-2xl text-center py-4'>QUI SOMMES NOUS?</h1>
          <p>
          Notre site web est une plateforme d'IA pour les étudiants qui propose une variété de services pour aider les étudiants à réussir dans leurs études et dans leur carrière. Nous sommes une équipe de professionnels passionnés par l'IA et l'éducation qui travaillent ensemble pour offrir une expérience d'apprentissage unique et efficace. Nous proposons des services tels que la réalisation de devoirs et de travaux scolaires, des orientations professionnelles et des services de traduction automatique. Rejoignez-nous dès maintenant pour découvrir toutes les possibilités que notre site peut vous offrir pour réussir vos études.
          </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Qui