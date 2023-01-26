import React,{useState} from 'react'
import '../App.css'
import alert from '../assets/alert.png'
import arrowdown from '../assets/arrowdown.png'
import no1 from '../assets/no1.jpeg'
import no2 from '../assets/no2.jpeg'
import no3 from '../assets/no3.jpeg'
import { FaSearch } from 'react-icons/fa'
import logo from '../assets/school-hacks-logo.png'

const Home = () => {
  const [Active, setIsactive] = useState(false)
  const [Active1, setIsactive1] = useState(false)
  const [Active2, setIsactive2] = useState(false)
  const [Active3, setIsactive3] = useState(false)
  return (
    <div>
          <div class='bg-[#B1A1ED] py-8'>
      <div >
      <div class='flex justify-center pb-5 md:pb-0'><img src={logo} alt="logo" class='logo-size'/></div>
      <div><p class="text-center text-sm md:text-3xl font-semibold">STUDENT HACKS, le devoir de faire les votres</p></div>
      <div class='flex flex-col md:flex-row gap-4 justify-center mt-4 items-center'>
        <FaSearch size='2em' class='hidden md:block'/>
        <input style={{borderRadius: '20px', minWidth: '40%'}} class="py-2 px-8" placeholder="Ecris le sujet d'un exercice, une consigne, ou un extrait et laisse la magie opérer..."/>
        <div><img src={alert} width={30} height={30} alt='alert'/></div>

        <div class='flex flex-col relative'>
        <div class='flex px-8 text-black font-bold items-center gap-4' style={{borderRadius: '20px', backgroundColor:'lightgray'}}>
          <div><p>Niveau</p></div>
          <div class='cursor-pointer'><img onClick={() => setIsactive(!Active)} src={arrowdown} alt="arrow" width={40} height={30} /></div>
        </div>
        <div class=''>
        {
          Active && 
          <div class='z-40 absolute bg-[lightgray] w-[100%] top-10 rounded-xl p-'>
          <ul>
            <li class='p-2 hover:bg-white hover:rounded-xl cursor-pointer' onClick={() => setIsactive(false)}>Option 1</li>
            <li class='p-2 hover:bg-white hover:rounded-xl cursor-pointer' onClick={() => setIsactive(false)}>Option 2</li>
          </ul>
        </div>
        }
        </div>
        </div>

        <div class='flex flex-col relative'>
        <div class='flex px-8 text-black font-bold items-center gap-4' style={{borderRadius: '20px', backgroundColor:'lightgray'}}>
          <div><p>Matière</p></div>
          <div class='cursor-pointer'><img onClick={() => setIsactive1(!Active1)} src={arrowdown} alt="arrow" width={40} height={30} /></div>
        </div>
        <div class=''>
        {
          Active1 && 
          <div class='z-40 absolute bg-[lightgray] w-[100%] top-10 rounded-xl p-'>
          <ul>
            <li class='p-2 hover:bg-white hover:rounded-xl cursor-pointer' onClick={() => setIsactive1(false)}>Option 1</li>
            <li class='p-2 hover:bg-white hover:rounded-xl cursor-pointer' onClick={() => setIsactive1(false)}>Option 2</li>
          </ul>
        </div>
        }
        </div>
        </div>

        {/* <div class='flex px-8 text-black font-bold items-center gap-4' style={{borderRadius: '20px', backgroundColor:'lightgray'}}><div><p>Matière</p></div><div><img src={arrowdown} alt="arrow" width={40} height={30} /></div></div> */}
      </div>
      </div>
    </div>
    <div>
      <h1 class='text-xl text-center py-8'>gagnez du temps simplement</h1>
    </div>
    <div class='bg-[#B1A1ED] py-8' style={{minHeight:'200px'}}>
      <div >
      <div class='flex flex-col md:flex-row gap-4 justify-center mt-4 items-center'>
        <FaSearch size='2em' class='hidden md:block'/>
        <input style={{borderRadius: '20px', minWidth: '40%'}} class="py-2 px-8" placeholder="Ecris le sujet d'un exercice, une consigne, ou un extrait et laisse la magie opérer..."/>
        <div><img src={alert} width={30} height={30} alt='alert'/></div>
        <div class='flex flex-col relative'>
        <div class='flex px-8 text-black font-bold items-center gap-4' style={{borderRadius: '20px', backgroundColor:'lightgray'}}>
          <div><p>Niveau</p></div>
          <div class='cursor-pointer'><img onClick={() => setIsactive2(!Active2)} src={arrowdown} alt="arrow" width={40} height={30} /></div>
        </div>
        <div class=''>
        {
          Active2 && 
          <div class='z-40 absolute bg-[lightgray] w-[100%] top-10 rounded-xl p-'>
          <ul>
            <li class='p-2 hover:bg-white hover:rounded-xl cursor-pointer' onClick={() => setIsactive2(false)}>Option 1</li>
            <li class='p-2 hover:bg-white hover:rounded-xl cursor-pointer' onClick={() => setIsactive2(false)}>Option 2</li>
          </ul>
        </div>
        }
        </div>
        </div>

        <div class='flex flex-col relative'>
        <div class='flex px-8 text-black font-bold items-center gap-4' style={{borderRadius: '20px', backgroundColor:'lightgray'}}>
          <div><p>Matière</p></div>
          <div class='cursor-pointer'><img onClick={() => setIsactive3(!Active3)} src={arrowdown} alt="arrow" width={40} height={30} /></div>
        </div>
        <div class=''>
        {
          Active3 && 
          <div class='z-40 absolute bg-[lightgray] w-[100%] top-10 rounded-xl p-'>
          <ul>
            <li class='p-2 hover:bg-white hover:rounded-xl cursor-pointer' onClick={() => setIsactive3(false)}>Option 1</li>
            <li class='p-2 hover:bg-white hover:rounded-xl cursor-pointer' onClick={() => setIsactive3(false)}>Option 2</li>
          </ul>
        </div>
        }
        </div>
        </div>
        </div>
      </div>
    </div>
    <div>
      <h1 class='text-2xl font-semibold text-center'>Gagner du temps simplement</h1>
      <div class='px-10 '>
      <div class="flex items-center py-5">
        <div><img src={no1} alt="number1" class='no1'/></div>
        <div class='pl-4'><p> Recopier l'énoncé de votre exercice de façon claire et peut importe son sujet.</p></div>
      </div>
      <div class="flex items-center pl-0 md:pl-10">
        <div><img src={no2} alt="number2" class='no2'/></div>
        <div class='pl-4'><p> Renseigner votre niveau et matières lorsque c'est possible</p></div>
      </div>
      <div class="flex items-center pl-0 md:pl-20 pt-5">
        <div><img src={no3} alt="number2" class='no3'/></div>
        <div class='pl-4'><p>Appuyez sur le buzzer et laissez nos experts consulter notre base de données</p></div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Home