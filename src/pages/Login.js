import React from 'react'
import { LoginForm } from '../components/Form'
import logo from '../assets/school-hacks-logo.png'
import { BiLogIn } from 'react-icons/bi'

const Login = () => {
  return (
    <>
      <div class='h-[93vh] md:h-[90vh] flex items-center justify-center'>
        <div class='bg-[#B1A1ED] flex w-full md:w-[80vw] h-full md:h-[80vh]'>
          <div class='hidden md:flex w-[40%] h-[100%] bg-white border-[#B1A1ED] border-2 items-center justify-center'>
          <div>
          <div class='flex justify-center items-center w-full pb-5 md:pb-0'><img src={logo} alt="logo" class='logo-size'/></div>
          <p class='font-semibold text-lg my-4 text-center'>STUDENT HACKS, le devoir de faire les votres</p>
          <p class='font-semibold text-lg my-4 text-center'>Content de te revoir !</p>
          </div>
          </div>
          <div class='w-full md:w-[60%] flex flex-col md:flex-row items-center justify-center'>
            <div class='w-[80%]'>
            <div class='flex justify-center'>
                <div class='flex items-center gap-2'><h1 class='font-bold text-2xl text-center'>Connexion</h1><div><BiLogIn size='2em'/></div></div>
            </div>
            <div class='flex justify-center'><LoginForm/></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login