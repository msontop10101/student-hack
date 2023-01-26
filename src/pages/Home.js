import React from 'react'
import '../App.css'
import alert from '../assets/alert.png'
import no1 from '../assets/no1.jpeg'
import no2 from '../assets/no2.jpeg'
import no3 from '../assets/no3.jpeg'
import { FaSearch } from 'react-icons/fa'
import logo from '../assets/school-hacks-logo.png'
import Options from '../components/Options'
import { Niveau, Matière } from '../data'

const Home = () => {
  
  return (
    <div>
          <div class='bg-[#B1A1ED] py-8'>
      <div >
      <div class='flex justify-center pb-5 md:pb-0'><img src={logo} alt="logo" class='logo-size'/></div>
      <div><p class="text-center text-sm md:text-3xl font-semibold py-0 md:py-2">STUDENT HACKS, le devoir de faire les votres</p></div>
      <div class='flex flex-col md:flex-row gap-4 justify-center mt-4 items-center'>
        <FaSearch size='2em' class='hidden md:block'/>
        <input style={{borderRadius: '20px', minWidth: '40%'}} class="py-2 px-8" placeholder="Ecris le sujet d'un exercice, une consigne, ou un extrait et laisse la magie opérer..."/>
        <div><img src={alert} width={30} height={30} alt='alert'/></div>

        <Options title='Niveau'>
          {Niveau.map((data) => 
            <li key={data.id} class='p-2 hover:bg-white hover:rounded-xl cursor-pointer' >{data.option}</li>
          )}
        </Options>

        <Options title='Matière'>
          {Matière.map((data) => 
          <li key={data.id} class='p-2 hover:bg-white hover:rounded-xl cursor-pointer' >{data.option}</li>
          )}
        </Options>

        {/* <div class='flex px-8 text-black font-bold items-center gap-4' style={{borderRadius: '20px', backgroundColor:'lightgray'}}><div><p>Matière</p></div><div><img src={arrowdown} alt="arrow" width={40} height={30} /></div></div> */}
      </div>
      </div>
    </div>
        {/* ----------SECTION 2---------------- */}
    <div class='py-8'>
      <h1 class='text-2xl pt-4 md:pt-0 font-semibold text-center'>Gagner du temps simplement</h1>
      <div class='px-10 '>
      <div class="flex items-center py-5">
        <div><img src={no1} alt="number1" width={48} height={48}/></div>
        <div class='pl-4'><p> Recopier l'énoncé de votre exercice de façon claire et peut importe son sujet.</p></div>
      </div>
      <div class="flex items-center pl-0 md:pl-10">
        <div><img src={no2} alt="number2" width={43} height={43} /></div>
        <div class='pl-4'><p> Renseigner votre niveau et matières lorsque c'est possible</p></div>
      </div>
      <div class="flex items-center pl-0 md:pl-20 pt-5">
        <div><img src={no3} alt="number2" width={48} height={48}/></div>
        <div class='pl-4'><p>Appuyez sur le buzzer et laissez nos experts consulter notre base de données</p></div>
      </div>
      </div>
    </div>
        {/* ----------------SECTION2END---------------- */}

    {/* --------------------SECTION3--------------------- */}
    <div class='bg-[#919191] py-8' style={{minHeight:'200px'}}>
      <div >
      <div class='flex justify-center pb-5 md:pb-0'><img src={logo} alt="logo" class='logo-size'/></div>
      <div><p class="text-center text-sm md:text-3xl font-semibold py-0 md:py-2">Besoind'unCV?</p></div>
      <div class='flex flex-col md:flex-row gap-4 justify-center mt-4 items-center'>
        <FaSearch size='2em' class='hidden md:block'/>
        <input style={{borderRadius: '20px', minWidth: '40%'}} class="py-2 px-8" placeholder="Ecris le sujet d'un exercice, une consigne, ou un extrait et laisse la magie opérer..."/>
        <div><img src={alert} width={30} height={30} alt='alert'/></div>
        </div>
      </div>
    </div>
    {/* ---------------------SECTION3END---------------------- */}

    {/* ------------------SECTION4---------------------- */}
    <div class='py-8'>
      <h1 class='text-2xl pt-4 md:pt-0 font-semibold text-center'>Un CV professionnel en un temps record</h1>
      <div class='px-10 '>
      <div class="flex items-center py-5">
        <div><img src={no1} alt="number1" width={48} height={48}/></div>
        <div class='pl-4'><p>Demander dans l'espace question de vous rédigez un CV</p></div>
      </div>
      <div class="flex items-center pl-0 md:pl-10">
        <div><img src={no2} alt="number2" width={43} height={43} /></div>
        <div class='pl-4'><p>Décrivez vous personnelement, donner vos éxperiences</p></div>
      </div>
      <div class="flex items-center pl-0 md:pl-20 pt-5">
        <div><img src={no3} alt="number2" width={48} height={48}/></div>
        <div class='pl-4'><p>Appuyez sur le buzzer et laissez nos experts consulter notre base de données</p></div>
      </div>
      </div>
    </div>
    {/* --------------------SECTION4END-------------------- */}
    </div>
  )
}

export default Home