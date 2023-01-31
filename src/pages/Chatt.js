import React, { useState } from 'react';
import '../App.css'
import { useAuthContext } from '../context/auth/auth'
import { Navigate, redirect, useNavigate } from 'react-router-dom'

const Chatt = () => {
    const { isAuth } = useAuthContext()
    const [input, setInput] = useState('')
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
    async function handleSubmit(e) {
        e.preventDefault();
        await setChatLog([...chatLog, { user: 'me', message: `${input}` }])
        await setInput("")
        const response = await fetch('https://09bc-102-89-23-48.eu.ngrok.io/api/chat', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: chatLog.map((message) => message.message).
                    join("")
            })
        });
        const data = await response.json()
        await setChatLog([...chatLog, { user: "gpt", message: `${data.message}` }])
        console.log(data.message)
    }

    return (
        <>
            {/* {!isAuth ? <Navigate to={'/login'} /> : null} */}
            <div style={{ backgroundColor: 'white', height: '100vh', width: '100vw', position: 'relative' }}>
                <div className='chatbox absolute bottom-40'>
                    <div className='chat-log'>
                        {chatLog.map((message, index) => (
                            <ChatMessage key={index} message={message} />
                        ))}

                    </div>
                </div>
                <form onSubmit={handleSubmit} className='flex justify-center'>
                    <input
                        type='text'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        style={{ position: 'absolute', bottom: '20px', border:'2px solid gray', width:'80%', height:'50px', borderRadius:'10px'  }}
                    />
                </form>
            </div>
        </>

    );
};
const ChatMessage = ({ message }) => {
    return (
        <div className='odd:flex justify-end'>
            <div className={`chat-message ${message.user === 'gpt' && 'chatgpt'}`}>
            {/* <div className={`avater ${message.user === 'gpt' && 'chatgpt'}`}> */}
                {message.user === 'gpt' && ''}
            {/* </div> */}
            <div className='message'>{message.message}</div>
        </div>
        </div>
    )
}

export default Chatt;