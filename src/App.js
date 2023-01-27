import React from 'react'
import Navigation from './components/Navigations';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Qui from './pages/Qui';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Footer from './components/Footer';



const App = () => {
  return (
    <>
      <Navigation/>

      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/qui' element={<Qui/>}>Qui Sommes Nous?</Route>
        <Route path='/faq' element={<Faq/>}>FAQ</Route>
        <Route path='/contact' element={<Contact/>}>Contact</Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
