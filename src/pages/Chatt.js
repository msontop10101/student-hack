import React, { useCallback, useEffect, useState } from 'react';
import '../App.css'
import { FaPlus } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BsMoon } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { MdOutlineLogout, MdSend } from 'react-icons/md'
import { CiLight } from 'react-icons/ci'
import { useAuthContext } from '../context/auth/auth'
import { Navigate, redirect, useNavigate } from 'react-router-dom'

const Chatt = () => {

    const [input, setInput] = useState('')
    const [darkMode, setDarkMode] = useState(false)
    const {isAuth} = useAuthContext()
    const [chatLog, setChatLog] = useState([
        {
            user: 'me',
            message: 'I want to use chatgpt today'
        },
        {
            user: 'gpt',
            message: 'How can i help you?'
        }
    ])

    const [chatMessages, setChatMessages] = useState([
        {
            id: 0,
            message: 'Hello',
            response: null, 
        }
    ]);

    const [fetching, setFetching] = useState(false);

    const fetchResponse = useCallback((newChatItem)=>{
        if(fetching) return;

        const {id, message, response} = newChatItem;

        if (response) return;
        
        setFetching(true);

        console.log(message)

        const requestConfig = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: message,
        }

        fetch('https://school-hacks.onrender.com/api/chat', requestConfig)
        .then((res)=>res.json())
        .then(data=>{
            console.log(data);
            const {message: response} =  "sample response";

            setChatMessages((prev)=>{
                return prev.map((each)=>{
                    if (each.id === id){
                        return {
                            ...each,
                            response,
                        }
                    }

                    return each;
                })
            })

            setFetching(false);
        })
        .catch((err)=>{
            console.log("Error:", err);
            setFetching(false);
        })
    }, [chatMessages])

    async function handleSubmit(e) {
        e.preventDefault();
        if(fetching) return;
        // setChatLog((p)=>[...p, { user: 'me', message: `${input}` }])

        let newChat = {
            id: chatMessages.length + 1,
            message: input,
            response: null
        }
        fetchResponse(newChat);

        
        setChatMessages((prev)=>[...prev, newChat]);
        setInput("");
        
        // setChatLog(p=>[...p, { user: "gpt", message: `${data.data.message}` }])
        // console.log(data.data)
    }


    return (
        <>
            {!isAuth ? <Navigate to={'/login'} /> : null}
            <div className='flex'>
            <div class='w-[30%] hidden md:flex bg-[#919191] flex-col justify-between'>
                    <div class='p-2' style={{ borderBottom: '2px solid black'}}>
                        <div class='p-3 border-2 rounded-md border-[#919191] flex items-center gap-5 cursor-pointer'><FaPlus /><p>New chat</p></div>
                    </div>
                    <div class='px-2 py-6' style={{ borderTop: '2px solid black' }}>
                        <ul class='flex flex-col gap-2 chat'>
                            <li class='flex items-center gap-2' onClick={() => setChatMessages([])}><RiDeleteBin6Line size='1.5em' /><p>Clear conversation</p></li>
                            <li class='flex items-center gap-2' onClick={() => setDarkMode(!darkMode)}>{darkMode ? <CiLight size='1.5em' /> : <BsMoon size='1.5em' />}<p>{darkMode ? 'Light Mode' : 'Dark Mode'}</p></li>
                            <li class='flex items-center gap-2'><FiExternalLink size='1.5em' /><p>FAQ</p></li>
                            <li class='flex items-center gap-2'><MdOutlineLogout size='1.5em' /><p>Logout</p></li>
                        </ul>
                    </div>
                </div>
            <div className={darkMode ? 'w-[70%] md:w-[100%] bg-black' : 'w-[70%] md:w-[100%] bg-white'} style={{height: '100vh', position: 'relative' }}>
                <div className={darkMode ? 'text-white': 'text-black'}><h1 className='font-bold text-xl text-center py-2'>Student Hacks</h1></div>
                <div className='chatbox absolute bottom-40'>
                    <div className={darkMode ? 'chat-log bg-black' : 'chat-log bg-white'}>
                        {chatMessages.map((messageData, index) => (
                            <ChatMessage key={index} message={messageData} index={index}/>
                        ))}

                    </div>
                </div>
                <form onSubmit={handleSubmit} className='flex justify-center absolute bottom-10 w-full items-center'>
                    <div className='w-[80%] flex items-center' style={{border:'2px solid gray', borderRadius:'15px'}}>
                        <textarea
                            type='text'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            style={{ backgroundColor:'transparent', padding:'0px 10px 0px 10px', width: '100%', height: '40px', borderRadius: '10px', outline: 'none', }}
                        />
                        <div className='cursor-pointer'><button type='submit'><MdSend color={darkMode ? 'white' : 'black'} size='1.6rem'/></button></div>
                    </div>
                </form>
            </div>
            </div>
        </>

    );
};


const ChatMessage = (messageData) => {

    const  { message, response, fetching } = messageData;

    return (
        <div className='odd:flex justify-end bg-[#9869e9] text-white even:bg-[#919191] even:text-[black] my-1 rounded-xl'>
            {/* <div className={`chat-message ${message.user === 'gpt' && 'chatgpt'}`}> */}
            <div className={`chat-message ${Boolean(response) && 'chatgpt'}`}>
                {/* <div className={`avater ${message.user === 'gpt' && 'chatgpt'}`}> */}
                {/* {message.user === 'gpt' && ''} */}
                {Boolean(response) && ''}
                {/* </div> */}
                <div className='message'>{message.message}</div>
            </div>
        </div>
    )
}

export default Chatt;