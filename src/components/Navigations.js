import React, {useState} from "react";
import { Link } from 'react-router-dom'
// import { FaBars } from 'react-icons/fa'
// import { ImCross } from 'react-icons/im' 
import { FaSearch } from 'react-icons/fa'
import './Navigations.css'
import logo from '../assets/school-hacks-logo.png'
import alert from '../assets/alert.png'
import arrowdown from '../assets/arrowdown.png'

const Navigation = () => {
  return (
    <>
      <nav class='flex justify-between bg-[#919191] px-8 py-4 items-center'>
      <div><img src={logo} alt="logo" width={50} height={50}/></div>
      <ul class='flex gap-10 uppercase'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/qui'><li>Qui Sommes Nous?</li></Link>
        <Link to='/faq'><li>FAQ</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
      </ul>
    </nav>
    <div class='bg-[#B1A1ED] py-8'>
      <div >
      <div class='flex justify-center'><img src={logo} alt="logo"/></div>
      <div><p class="text-center text-3xl font-semibold">STUDENT HACKS, le devoir de faire les votres</p></div>
      <div class='flex gap-4 justify-center mt-4 items-center'>
        <FaSearch size='2em'/>
        <input style={{borderRadius: '20px', minWidth: '40%'}} class="py-2 px-8" placeholder="Ecris le sujet d'un exercice, une consigne, ou un extrait et laisse la magie opérer..."/>
        <div><img src={alert} width={30} height={30} alt='alert'/></div>
        <div class='flex px-2' style={{borderRadius: '20px', backgroundColor:'lightgray'}}><input style={{borderRadius: '15px', backgroundColor:'lightgray'}}/><img src={arrowdown} alt="arrow" width={40} height={30} /></div>
        <div class='flex px-2' style={{borderRadius: '20px', backgroundColor:'lightgray'}}><input style={{borderRadius: '15px', backgroundColor:'lightgray'}}/><img src={arrowdown} alt="arrow" width={40} height={30} /></div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Navigation;