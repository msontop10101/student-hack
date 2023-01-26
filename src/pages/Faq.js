import React,{useState} from 'react'
import logo from '../assets/school-hacks-logo.png'
import {FaqData} from '../data'
import SingleQuestion from '../components/Accordion'

const Faq = () => {
  const [questions, setQuestions] = useState(FaqData)
  return (
    <>
      <div class='bg-[#B1A1ED] py-8'>
      <div >
      <div class='flex justify-center pb-5 md:pb-0'><img src={logo} alt="logo" class='logo-size'/></div>
      <div><p class="text-center text-sm md:text-3xl font-semibold py-0 md:py-2">STUDENT HACKS, le devoir de faire les votres</p></div>
      </div>
    </div>
    <div class='my-5'>
      <div class='text-center font-bold text-2xl'><h1>Questions Fréquemment Posées</h1></div>
        <div class='flex justify-center mt-2 '>
        <div class='w-full md:w-[60%] p-8 rounded-lg'>
        {
          questions.map((question) => {
            return <SingleQuestion key={question.id} {...question}/>
          })
        }
        </div>
        </div>
      </div>
    </>
  )
}

export default Faq