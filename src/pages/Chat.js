import React, { useState, useContext, useRef, useEffect } from 'react';
import '../App.css'
import { FaPlus } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BsMoon } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { MdOutlineLogout, MdSend } from 'react-icons/md'
import { CiLight } from 'react-icons/ci'
import { useAuthContext } from '../context/auth/auth'
import { SearchValueContext } from '../App';
import { SearchValue2Context } from '../App';
import { SendContext } from '../App';
import { SendContext2 } from '../App';
 
const Chatt = () => {

    const navbarHeight = '63px'
    const footerHeight = '84px'
    const bottomRef = useRef(null);
    const val = useContext(SearchValueContext)
    const val2 = useContext(SearchValue2Context)
    const submitted = useContext(SendContext)
    const submitted2 = useContext(SendContext2)
    const [input, setInput] = useState('')
    const [darkMode, setDarkMode] = useState(false)
    const [searchVal, setSearchVal] = useState(val)
    const [searchVal2, setSearchVal2] = useState(val2)
    const { isAuth } = useAuthContext()
    const [chatLog, setChatLog] = useState([
        // {
        //     user: 'me',
        //     message: 'I want to use chatgpt today111111'
        // },
        // {
        //     user: 'gpt',
        //     message: 'How can i help you?1111111'
        // } 
    ])
    // console.log(searchVal2)
    async function handleSubmit(e) {
        e.preventDefault();
        if(input !== ""){
        let chatLogNew = [...chatLog, { user: 'me', message: `${searchVal ? searchVal : searchVal2 ? searchVal2 : input}` }]
        const message = input;
        setInput("")
        setSearchVal("")
        setSearchVal2('')
        setChatLog(chatLogNew)
        // const messages = chatLogNew.map((message) => message.message).join('')
        const response = await fetch('https://student-chat.onrender.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                message, //: messages
            })
        });
        const data = await response.json();
        setChatLog([...chatLogNew, { user: 'gpt', message: `${data.message}` }])
        console.log(data.message)
        console.log(data)
        }
        
    }


    async function handleSearchSubmit() {
        let chatLogNew = [...chatLog, { user: 'me', message: `${searchVal ? searchVal : searchVal2 ? searchVal2 : input}` }]
        const message = input;
        setInput("")
        setSearchVal("")
        setSearchVal2('')
        setChatLog(chatLogNew)
        // const messages = chatLogNew.map((message) => message.message).join('')
        const response = await fetch('https://student-chat.onrender.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                message, //: messages
            })
        });
        const data = await response.json();
        setChatLog([...chatLogNew, { user: 'gpt', message: `${data.message}` }])
        console.log(data.message)
        console.log(data)
    }

    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
      }, [chatLog]);

    useEffect(() => {
        submitted && handleSearchSubmit()
        submitted2 && handleSearchSubmit()
    },[submitted])


    


    return (
        <>
            <div className='flex'>
                <div class='w-[30%] hidden md:flex bg-[#919191] flex-col justify-between'>
                    <div class='p-2' style={{ borderBottom: '2px solid black' }}>
                        <div class='p-3 border-2 rounded-md border-[#919191] flex items-center gap-5 cursor-pointer'><FaPlus onClick={() => setChatLog([ ])} /><p>New chat</p></div>
                    </div>
                    <div class='px-2 py-6' style={{ borderTop: '2px solid black' }}>
                        <ul class='flex flex-col gap-2 chat'>
                            <li class='flex items-center gap-2'><RiDeleteBin6Line size='1.5em' onClick={() => setChatLog([ ])} /><p>Clear conversation</p></li>
                            <li class='flex items-center gap-2' onClick={() => setDarkMode(!darkMode)}>{darkMode ? <CiLight size='1.5em' /> : <BsMoon size='1.5em' />}<p>{darkMode ? 'Light Mode' : 'Dark Mode'}</p></li>
                            <li class='flex items-center gap-2'><FiExternalLink size='1.5em' /><p>FAQ</p></li>
                            <li class='flex items-center gap-2'><MdOutlineLogout size='1.5em' /><p>Logout</p></li>
                        </ul>
                    </div>
                </div>
                <div className={darkMode ? 'w-[100%] md:w-[70%] bg-black relative z-30' : 'w-[100%] md:w-[70%] bg-white relative z-30'} style={{ height: `calc(100vh - ${navbarHeight} - ${footerHeight})` }}>
                <div className={darkMode ? 'text-white' : 'text-black'}><h1 className='font-bold text-xl text-center py-2'>Student Hacks</h1></div>
                    <div className='flex flex-col gap-5 absolute bottom-4 w-full'>
                        
                        <div className='chatbox'>
                            <div className={darkMode ? 'chat-log bg-black' : 'chat-log bg-white relative'} style={{maxHeight:'70vh'}}>
                                <div className='h-full overflow-y-scroll'>
                                {chatLog.map((message, index) => (
                                    <ChatMessage key={index} message={message} />
                                ))}
                                <div ref={bottomRef} />
                                </div>
                                
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className='flex justify-center w-full items-center'>
                            <div className='w-[80%] flex items-center' style={{ border: '2px solid gray', borderRadius: '15px' }}>
                                <input
                                    type='text'
                                    rows='1'
                                    value={ searchVal ? searchVal : searchVal2 ? searchVal2 : input}
                                    onChange={(e) => setInput(e.target.value)}
                                    style={{ backgroundColor: 'transparent', padding: '0px 10px 0px 10px', width: '100%', height: '40px', borderRadius: '10px', outline: 'none', color:`${darkMode ? 'white': 'black'}` }}
                                />
                                <div className='cursor-pointer px-2 flex justify-center'><button type='submit'><MdSend color={darkMode ? 'white' : 'black'} size='1.6rem' /></button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};


const ChatMessage = ({ message }) => {


    return (
        <div className={`${message.user === 'gpt' ? 'flex justify-start my-1 rounded-xl' : 'flex justify-end my-1 rounded-xl'}`}>
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

export default Chatt;

