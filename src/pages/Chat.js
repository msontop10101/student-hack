import React, {useState, useContext } from 'react';
import '../App.css'
import { FaPlus } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BsMoon } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { MdOutlineLogout, MdSend } from 'react-icons/md'
import { CiLight } from 'react-icons/ci'
import { useAuthContext } from '../context/auth/auth'
import { Navigate } from 'react-router-dom'
import { SearchValueContext } from '../App';
import { CvValueContext } from '../App';

const Chat = () => {

    const val = useContext(SearchValueContext)
    const cvVal = useContext(CvValueContext)
    const [input, setInput] = useState('')
    const [darkMode, setDarkMode] = useState(false)
    const [searchVal, setSearchVal] = useState(val)
    const [cvSearchVal, setCvSearchVal] = useState(cvVal)
    const { isAuth } = useAuthContext()
    const [chatLog, setChatLog] = useState([
        // {
        //     user: 'me',
        //     message: 'I want to use chatgpt today'
        // },
        // {
        //     user: 'gpt',
        //     message: 'How can i help you?'
        // }
    ])
    
    async function handleSubmit(e) {
        e.preventDefault();
        let chatLogNew = [...chatLog, { user: 'me', message: `${searchVal ? searchVal : cvSearchVal ? cvSearchVal : input}` }]
        setInput("")
        setSearchVal("")
        setCvSearchVal('')
        setChatLog(chatLogNew)
        const messages = chatLogNew.map((message) => message.message).join('')
        const response = await fetch('https://student-chat.onrender.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: messages
            })
        });
        const data = await response.json();
        setChatLog([...chatLogNew, { user: 'gpt', message: `${data.message}` }])
        // console.log(data.message)
    }


    return (
        <>
            {/* {!isAuth ? <Navigate to={'/login'} /> : null} */}
            <div className='flex'>
                <div class='w-[30%] hidden md:flex bg-[#919191] flex-col justify-between'>
                    <div class='p-2' style={{ borderBottom: '2px solid black' }}>
                        <div class='p-3 border-2 rounded-md border-[#919191] flex items-center gap-5 cursor-pointer'><FaPlus /><p>New chat</p></div>
                    </div>
                    <div class='px-2 py-6' style={{ borderTop: '2px solid black' }}>
                        <ul class='flex flex-col gap-2 chat'>
                            <li class='flex items-center gap-2'><RiDeleteBin6Line size='1.5em' onClick={() => setChatLog([])}/><p>Clear conversation</p></li>
                            <li class='flex items-center gap-2' onClick={() => setDarkMode(!darkMode)}>{darkMode ? <CiLight size='1.5em' /> : <BsMoon size='1.5em' />}<p>{darkMode ? 'Light Mode' : 'Dark Mode'}</p></li>
                            <li class='flex items-center gap-2'><FiExternalLink size='1.5em' /><p>FAQ</p></li>
                            <li class='flex items-center gap-2'><MdOutlineLogout size='1.5em' /><p>Logout</p></li>
                        </ul>
                    </div>
                </div>
                <div className={darkMode ? 'w-[100%] md:w-[70%] bg-black' : 'w-[100%] md:w-[70%] bg-white'} style={{ height: '100vh', position: 'relative' }}>
                    <div className={darkMode ? 'text-white' : 'text-black'}><h1 className='font-bold text-xl text-center py-2'>Student Hacks</h1></div>
                    <div className='chatbox absolute bottom-40'>
                        <div className={darkMode ? 'chat-log bg-black' : 'chat-log bg-white'}>
                            {chatLog.map((message, index) => (
                                <ChatMessage key={index} message={message} />
                            ))}

                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className='flex justify-center absolute bottom-10 w-full items-center'>
                        <div className='w-[80%] flex items-center' style={{ border: '2px solid gray', borderRadius: '15px' }}>
                            <input
                                type='text'
                                rows='1'
                                value={searchVal ? searchVal : searchVal && cvSearchVal ? cvSearchVal : input}
                                onChange={(e) => setInput(e.target.value)}
                                style={{ backgroundColor: 'transparent', padding: '0px 10px 0px 10px', width: '100%', height: '40px', borderRadius: '10px', outline: 'none', }}
                            />
                            <div className='cursor-pointer px-2 flex justify-center'><button type='submit'><MdSend color={darkMode ? 'white' : 'black'} size='1.6rem' /></button></div>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
};


const ChatMessage = ({ message }) => {


    return (
        <div className='odd:flex justify-end bg-[#9869e9] text-white even:bg-[#919191] even:text-[black] my-1 rounded-xl'>
            <div className={`chat-message ${message.user === 'gpt' && 'chatgpt'}`}>
                <div className='chat-message-center'>
                    <div className={`avater ${message.user === 'gpt' && 'chatgpt'}`}>

                    </div>
                    <div className='message'>
                        {message.message}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;

