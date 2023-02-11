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
import Chatt from './pages/Chatt';

export const SearchValueContext = React.createContext()
export const SendContext = React.createContext()
export const SearchValue2Context = React.createContext()
export const SendContext2 = React.createContext()



const App = () => {
  const [searchValue, setSearchValue] = useState("")
  const [searchValue2, setSearchValue2] = useState("")
  const [level, setLevel] = useState('')
  const [subject, setSubject] = useState('')
  const [submitted, setSubmitted ] = useState()
  const [submitted2, setSubmitted2] = useState()
  // console.log(cvValue)

  return (
    <>
      <SearchValueContext.Provider value={searchValue && level && subject ? searchValue + ' ' + 'dans' + ' ' + level + ' ' + 'sous' + ' ' + subject :
        searchValue && level ? searchValue + ' ' + 'dans' + ' ' + level :
          searchValue && subject ? searchValue + ' ' + 'sous' + ' ' + subject : searchValue}>
        <SendContext.Provider value={submitted}>
        <SearchValue2Context.Provider value={searchValue2}>
          <SendContext2.Provider value={submitted2}>
          <Navigation />
        <Routes>
          <Route path='/' element={<Home setSearchValue={setSearchValue} setLevel={setLevel} setSubject={setSubject} setSearchValue2={setSearchValue2} setSubmitted={setSubmitted} setSubmitted2={setSubmitted2}/>}>Home</Route>
          <Route path='/qui' element={<Qui />}>Qui Sommes Nous?</Route>
          <Route path='/faq' element={<Faq />}>FAQ</Route>
          <Route path='/contact' element={<Contact />}>Contact</Route>
          <Route path='/login' element={<Login />}>Login</Route>
          <Route path='/signup' element={<Signup />}>Signup</Route>
          <Route path='/chat' element={<Chat />}>Chat</Route>
          <Route path='/chatt' element={<Chatt />}>Chatt</Route>
        </Routes>
        <Footer />
          </SendContext2.Provider>
        </SearchValue2Context.Provider>
        </SendContext.Provider>
      </SearchValueContext.Provider>
    </>
  )
}

export default App
