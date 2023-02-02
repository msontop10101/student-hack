import React, {useContext, useEffect, useState} from 'react'
import { FaPlus } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BsMoon } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { MdOutlineLogout, MdSend } from 'react-icons/md'
import { CiLight } from 'react-icons/ci'
import { useAuthContext } from '../context/auth/auth'
import { Navigate, redirect, useNavigate } from 'react-router-dom'



const Chat = () => {
    const [darkMode, setDarkMode] = useState(false)
    const {isAuth} = useAuthContext()

    


    return (
        <>
            {!isAuth? <Navigate to={'/login'} />:null}
            <div class='flex h-[90vh]'>
                <div class='w-[20%] hidden md:flex bg-[#919191] flex-col justify-between'>
                    <div class='p-2' style={{ borderBottom: '2px solid black'}}>
                        <div class='p-3 border-2 rounded-md border-[#919191] flex items-center gap-5 cursor-pointer'><FaPlus /><p>New chat</p></div>
                    </div>
                    <div class='px-2 py-6' style={{ borderTop: '2px solid black' }}>
                        <ul class='flex flex-col gap-2 chat'>
                            <li class='flex items-center gap-2'><RiDeleteBin6Line size='1.5em' /><p>Clear conversation</p></li>
                            <li class='flex items-center gap-2' onClick={() => setDarkMode(!darkMode)}>{darkMode ? <CiLight size='1.5em' /> : <BsMoon size='1.5em' />}<p>{darkMode ? 'Light Mode' : 'Dark Mode'}</p></li>
                            <li class='flex items-center gap-2'><FiExternalLink size='1.5em' /><p>FAQ</p></li>
                            <li class='flex items-center gap-2'><MdOutlineLogout size='1.5em' /><p>Logout</p></li>
                        </ul>
                    </div>
                </div>
                <div class={darkMode ? 'w-full md:w-[80%] bg-black flex flex-col justify-between items-center py-4' : 'w-full md:w-[80%] bg-white flex flex-col justify-between items-center py-4 relative'}>
                    <div><h1 class={darkMode ? 'text-2xl font-bold text-center text-white' : 'text-2xl font-bold text-center'}>Student Hacks</h1></div>
                    <div class='w-[80%]'>
                    <div class='z-10 chat-box text-white absolute bottom-40'>
                        <div class='chat-log flex justify-center'>
                            <div class='chat-messagej w-[80%] pt-5 flex flex-col gap-5'>
                                <div class='flex justify-end'>
                                    <div class='avater bg-[#9869e9] w-[80%] p-4 rounded-3xl'>
                                        <p>Scrivimi 10 articoli sulla guerra in
                                            Ucraina</p>
                                    </div>
                                </div>
                                <div class='flex justify-start'>
                                    <div class='message bg-[#919191] w-[80%] p-4 rounded-3xl text-black'>
                                        <p>1."La Guerra in Ucraina: Una Storia di
                                            Conflitto e Speranza" In questo
                                            articolo esploreremo la storia della
                                            guerra in Ucraina, dalle sue origini
                                            nel 2014 fino ai suoi sviluppi attuali</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div class='w-[100%] flex items-center justify-center bg-white rounded-[10px] px-4' style={{ border: '2px solid #919191', backgroundColor:'transparent' }}>
                            <input
                                id="chat"
                                name="chat"
                                type='text'
                                class={darkMode ? 'text-white' : 'text-black'}
                                style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none', backgroundColor:'transparent', }}
                            />
                            <div class='cursor-pointer'><MdSend color={darkMode ? 'white': 'black'}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat