import React, {useState} from "react";
import { Link } from 'react-router-dom'
// import { FaBars } from 'react-icons/fa'
// import { ImCross } from 'react-icons/im' 

import './Navigations.css'
import logo from '../assets/school-hacks-logo.png'


const Navigation = () => {
  return (
    <>
      <nav class='flex flex-col md:flex-row justify-between bg-[#919191] px-8 py-4 items-center desktop'>
      <div><img src={logo} alt="logo" width={50} height={50}/></div>
      <ul class='flex flex-col text-center md:flex-row gap-10 uppercase'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/qui'><li>Qui Sommes Nous?</li></Link>
        <Link to='/faq'><li>FAQ</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
      </ul>
    </nav>

    <nav class='flex flex-col justify-between bg-[#919191] px-8 py-2 items-center mobile'>
      <div class='flex justify-center'><img src={logo} alt="logo" width={50} height={50}/></div>
      <ul class='flex flex-col text-center gap-10 uppercase py-6'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/qui'><li>Qui Sommes Nous?</li></Link>
        <Link to='/faq'><li>FAQ</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
      </ul>
    </nav>

    </>
  );
};

export default Navigation;