import React, { useState } from 'react';
import '../App.css'
import { MdSend } from 'react-icons/md'

const Chatt = () => {

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
        setChatLog((p)=>[...p, { user: 'me', message: `${input}` }])
        setInput("")
        const response = await fetch('https://09bc-102-89-23-48.eu.ngrok.io/api/chat', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: chatLog.map((message) => message.message).join("")
            })
        });
        const data = await response.json()
        setChatLog(p=>[...p, { user: "gpt", message: `${data.message}` }])
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
                <form onSubmit={handleSubmit} className='flex justify-center absolute bottom-10 w-full items-center'>
                    <div className='w-[80%] flex items-center' style={{border:'2px solid gray', borderRadius:'15px'}}>
                        <input
                            type='text'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            style={{ border: '2px solid gray', width: '90%', height: '50px', borderRadius: '10px', outline: 'none' }}
                        />
                        <div class='cursor-pointer'><MdSend color='black' size='1.6rem'/></div>
                    </div>
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