import React, {useState, useContext} from "react";
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import './Navigations.css'
import logo from '../assets/school-hacks-logo.png'
import { useAuthContext } from '../context/auth/auth';


const Navigation = () => {
  const [Open, setOpen] = useState(false)
  const { login, isAuth, logout } = useAuthContext()

  return (
    <>
      <nav class='z-50 flex flex-col md:flex-row justify-between bg-[#919191] px-8 py-4 items-center desktop navigations' style={{borderBottom: '2px solid black'}}>
      <div><img src={logo} alt="logo" width={50} height={50}/></div>
      <ul class='flex flex-col text-center md:flex-row gap-10 uppercase'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/qui'><li>Qui Sommes Nous?</li></Link>
        <Link to='/faq'><li>FAQ</li></Link>
        <Link to='/contact'><li>Contact</li></Link> 
        <Link className={isAuth && 'hidden'} to='/login'><li>connexion</li></Link> 
        <Link className={isAuth && 'hidden'} to='/signup'><li>S'inscrire</li></Link> 
        <Link className={isAuth ? 'block' : 'hidden'} to='/chat'><li>Discuter</li></Link> 
        <Link className={isAuth ? 'block' : 'hidden'} onClick={() => logout()}>Se déconnecter</Link>
      </ul>
    </nav>

    
    <nav class='flex flex-col justify-between bg-[#919191] px-8 py-2 items-center mobile navigations' style={{borderBottom:'2px solid black'}}>
      <div class='flex justify-between'>
      <div class='flex justify-center'><img src={logo} alt="logo" width={50} height={50}/></div>
      <button>
        {Open ? 
          <ImCross onClick={() => setOpen(false)} size='1.5em'/> :
           <FaBars onClick={() => setOpen(true)} size='1.5em'/>
           }
    </button>
      </div>
      <div class={Open ? 'block' : 'hidden'}>
        <ul class='flex flex-col text-center gap-10 uppercase py-6'>
        <Link to='/'><li onClick={() => setOpen(false)}>Home</li></Link>
        <Link to='/qui'><li onClick={() => setOpen(false)}>Qui Sommes Nous?</li></Link>
        <Link to='/faq'><li onClick={() => setOpen(false)}>FAQ</li></Link>
        <Link to='/contact'><li onClick={() => setOpen(false)}>Contact</li></Link>
        <Link className={isAuth && 'hidden'} to='/login'><li onClick={() => setOpen(false)}>connexion</li></Link>
        <Link className={isAuth && 'hidden'} to='/signup'><li onClick={() => setOpen(false)}>S'inscrire</li></Link>
        <Link className={isAuth ? 'block' : 'hidden'} to='/chat'><li onClick={() => setOpen(false)}>Discuter</li></Link>
        <button className={isAuth ? 'block' : 'hidden'} onClick={() => {logout(); setOpen(false)}}>Se déconnecter</button>
        
      </ul>
      </div>
    </nav>

    </>
  );
};

export default Navigation;