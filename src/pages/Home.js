import React, { useState, useEffect } from 'react'
import '../App.css'
import alert from '../assets/alert.png'
import { FaSearch } from 'react-icons/fa'
import logo from '../assets/school-hacks-logo.png'
import Options from '../components/Options'
import { Niveau, Matière } from '../data'
import CookieBanner from '../components/CookieBanner'
import { posthog } from 'posthog-js';
import { useNavigate } from 'react-router-dom'

const Home = ({ setSearchValue, setLevel, setSubject, setSearchValue2, setSubmitted, setSubmitted2 }) => {
  const [selectedOptions1, setSelectedOptions1] = useState('')
  const [selectedOptions2, setSelectedOptions2] = useState('')
  const [searchVal, setSearchVal] = useState('')
  const [searchVal2, setSearchVal2] = useState('')
  const [sub, setSub] = useState(false)
  const [sub2, setSub2] = useState(false)
  setLevel(selectedOptions1) 
  setSubject(selectedOptions2)
  setSubmitted(sub)
  setSubmitted2(sub2)

  function handleClick(){
    setSearchValue(searchVal)
    searchVal !== '' && setSub(true)
  }

  function handleClick2(){
    setSearchValue2(searchVal2)
    searchVal2 !== '' && setSub2(true)
  }

  const navigate = useNavigate()

  useEffect(() => {
    sub && navigate('/chat')
    sub2 && navigate('/chat')
  }, [sub, sub2, navigate])


  
  

  return (
    <div className='relative'>
      <div class='bg-[#B1A1ED] py-8' style={{borderBottom:'2px solid black'}}> 
      <div >
      <div class='flex justify-center pb-5 md:pb-0'><img src={logo} alt="logo" class='logo-size'/></div>
      <div><p class="text-center text-sm md:text-3xl font-semibold py-0 md:py-2">STUDENT HACKS, le devoir de faire les votres</p></div>
      <div class='flex flex-col md:flex-row gap-4 justify-center mt-4 items-center'>
        <FaSearch size='2em' class='hidden md:block'/>
        <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)} style={{borderRadius: '20px', border:'2px solid black' ,minWidth: '40%'}} class="py-2 px-8" placeholder="Ecris le sujet d'un exercice, une consigne, ou un extrait et laisse la magie opérer..."/>
        <div><button type='submit' onClick={handleClick}><img src={alert} width={30} height={30} alt='alert'/></button></div>

        <Options title={selectedOptions1 === '' ? 'Niveau' : selectedOptions1}>
          {Niveau.map((data) => 
            <li key={data.id} class='p-2 hover:bg-white hover:rounded-xl cursor-pointer' onClick={() => setSelectedOptions1(data.option)} >{data.option}</li>
          )}
        </Options>

        <Options title={selectedOptions2 === ''? 'Matière' : selectedOptions2}>
          {Matière.map((data) => 
          <li key={data.id} class='p-2 hover:bg-white hover:rounded-xl cursor-pointer' onClick={() => setSelectedOptions2(data.option)}>{data.option}</li>
          )}
        </Options>

      </div>
      </div>
    </div>
        {/* ----------SECTION 2---------------- */}
    <div class='py-8'>
      <h1 class='text-2xl pt-4 md:pt-0 font-semibold text-center'>Gagner du temps simplement</h1>
      <div class='px-10'>
      <div class="flex items-center py-5">
        <div class='number'><p class='pnum text-white'>1</p></div>
        <div class='pl-4'><p> Recopier l'énoncé de votre exercice de façon claire et peut importe son sujet.</p></div>
      </div>
      <div class="flex items-center pl-0 md:pl-10">
      <div class='number num'><p class='pnum text-white'>2</p></div>
        <div class='pl-4'><p> Renseigner votre niveau et matières lorsque c'est possible</p></div>
      </div>
      <div class="flex items-center pl-0 md:pl-20 pt-5">
      <div class='number'><p class='pnum text-white'>3</p></div>
        <div class='pl-4'><p>Appuyez sur le buzzer et laissez nos experts consulter notre base de données</p></div>
      </div>
      </div>
    </div>
        {/* ----------------SECTION2END---------------- */}
    {/* --------------------SECTION3--------------------- */}
    <div class='bg-[#919191] py-8' style={{minHeight:'200px', borderBottom:'2px solid black', borderTop:'2px solid black'}}>
      <div >
      <div class='flex justify-center pb-5 md:pb-0'><img src={logo} alt="logo" class='logo-size'/></div>
      <div><p class="text-center text-sm md:text-3xl font-semibold py-0 md:py-2">Besoin D’un CV ?</p></div>
      <div class='flex flex-col md:flex-row gap-4 justify-center mt-4 items-center'>

        <FaSearch size='2em' class='hidden md:block'/>
        <input value={searchVal2} onChange={(e) => setSearchVal2(e.target.value)} style={{borderRadius: '20px', border:'2px solid black' ,minWidth: '40%'}} class="py-2 px-8" placeholder="Décrivez vous, ainsi que votre parcours et laisser la magie opérer"/>
        <div><button type='submit' onClick={handleClick2}><img src={alert} width={30} height={30} alt='alert'/></button></div>
        </div>
      </div>
    </div>
    {/* ---------------------SECTION3END---------------------- */}

    {/* ------------------SECTION4---------------------- */}
    <div class='py-8'>
      <h1 class='text-2xl pt-4 md:pt-0 font-semibold text-center'>Un CV professionnel en un temps record</h1>
      <div class='px-10 '>
      <div class="flex items-center py-5">
      <div class='number numa'><p class=' text-white'>1</p></div>
        <div class='pl-4'><p>Demander dans l'espace question de vous rédigez un CV</p></div>
      </div>
      <div class="flex items-center pl-0 md:pl-10">
      <div class='number num'><p class=' text-white'>2</p></div>
        <div class='pl-4'><p>Décrivez vous personnelement, donner vos éxperiences</p></div>
      </div>
      <div class="flex items-center pl-0 md:pl-20 pt-5">
      <div class='number'><p class=' text-white'>3</p></div>
        <div class='pl-4'><p>Appuyez sur le buzzer et laissez nos experts consulter notre base de données</p></div>
      </div>
      </div>
    </div>
    {/* --------------------SECTION4END-------------------- */}
    <div className='fixed bottom-0'>
        {posthog.has_opted_in_capturing() || posthog.has_opted_out_capturing() ? null : <CookieBanner />}
      </div>
    </div>
  )
}

export default Home