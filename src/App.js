import React, { useState } from 'react'
import Navigation from './components/Navigations';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Qui from './pages/Qui';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';

export const SearchValueContext = React.createContext()
export const CvValueContext = React.createContext()
export const SendContext = React.createContext()



const App = () => {
  const [searchValue, setSearchValue] = useState("")
  const [level, setLevel] = useState('')
  const [subject, setSubject] = useState('')
  const [cvValue, setCvValue] = useState('')
  const [submitted, setSubmitted ] = useState()
  // console.log(submitted)

  return (
    <>
      <SearchValueContext.Provider value={searchValue && level && subject ? searchValue + ' ' + 'dans' + ' ' + level + ' ' + 'sous' + ' ' + subject :
        searchValue && level ? searchValue + ' ' + 'dans' + ' ' + level :
          searchValue && subject ? searchValue + ' ' + 'sous' + ' ' + subject : searchValue}>
        <CvValueContext.Provider value={cvValue}>
        <SendContext.Provider value={submitted}>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home setSearchValue={setSearchValue} setLevel={setLevel} setSubject={setSubject} setCvValue={setCvValue} setSubmitted={setSubmitted}/>}>Home</Route>
          <Route path='/qui' element={<Qui />}>Qui Sommes Nous?</Route>
          <Route path='/faq' element={<Faq />}>FAQ</Route>
          <Route path='/contact' element={<Contact />}>Contact</Route>
          <Route path='/login' element={<Login />}>Login</Route>
          <Route path='/signup' element={<Signup />}>Signup</Route>
          <Route path='/chat' element={<Chat />}>Chat</Route>
        </Routes>
        <Footer />
        </SendContext.Provider>
        </CvValueContext.Provider>
      </SearchValueContext.Provider>
    </>
  )
}

export default App
