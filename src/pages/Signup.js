import React from 'react'
import { SignupForm } from '../components/Form'
import logo from '../assets/school-hacks-logo.png'
import { BiLogIn } from 'react-icons/bi'

const Signup = () => {

  return (
    <>
      <div class='h-[93vh] md:h-[90vh] flex items-center justify-center'>
        <div class='bg-[#B1A1ED] flex w-full md:w-[80vw] h-full md:h-[80vh]'>
          <div class='hidden md:flex w-[40%] h-[100%] bg-white border-[#B1A1ED] border-2 items-center justify-center'>
            <div>
              <div class='flex justify-center items-center w-full pb-5 md:pb-0'><img src={logo} alt="logo" class='logo-size' /></div>
              <p class='font-semibold text-lg my-4 text-center'>Bienvenue aux hacks étudiants</p>
              <p class='font-semibold text-lg my-4 text-center'>S'INSCRIRE</p>
            </div>
          </div>
          <div class='w-full md:w-[60%] flex flex-col md:flex-row items-center justify-center'>
            <div class='w-[80%]'>
              <div class='flex justify-center'>
                <div class='flex md:hidden items-center gap-2'><h1 class='font-bold text-2xl text-center'>S'INSCRIRE</h1><div><BiLogIn size='2em' /></div></div>
              </div>
              <div class='flex justify-center'><SignupForm /></div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
        <div class="bg-white px-16 py-14 rounded-md text-center">
          <h1 class="text-xl mb-4 font-bold text-slate-500">Do you Want Delete</h1>
          <button class="bg-red-500 px-4 py-2 rounded-md text-md text-white">Cancel</button>
          <button class="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">Ok</button>
        </div>
      </div>
    </>
  )
}

export default Signup