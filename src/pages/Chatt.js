// import React, { useState } from 'react'
// import { MdOutlineLogout, MdSend } from 'react-icons/md'
// import '../App.css'

// const Chatt = () => {
//     const [input, setInput] = useState('')
//     const [darkMode, setDarkMode] = useState(true)
//     const [chatLog, setChatLog] = useState([
//         {
//             user: 'gpt',
//             message: 'How can i help you today?'
//         },
//         {
//             user: 'me',
//             message: 'How can i help you today?'
//         }
//     ])

//     async function handleSubmit(e) {
//         e.preventDefault()
//         setChatLog([...chatLog, { user: 'me', message: `${input}` }])
//         setInput('')
//     }

//     return (
//         <>
//             <div className=''>
//                 <div className='chatbox px-3 my-4'>
//                     <div className='chat-log flex flex-col gap-4 justify-center'>
//                         <div className='flex w-full justify-end'>
//                             {chatLog.map((message, index) => (
//                                 <ChatMessage key={index} message={message}/>
//                             ))}
//                         </div>
//                         {/* <div className='chat-message chatgpt'>
//                             <div className='avatar'>

//                             </div>
//                             <div className='messaage'>
//                                 I am chatgpt!
//                             </div>
//                         </div> */}
//                     </div>
//                 </div>
//                 <section></section>
//                 <section className='w-full h-[80vh] bg-white md:w-[70%] relative'>
//                     <div className='flex justify-center'>
//                         <form class='absolute bottom-10 w-[80%]' onChange={handleSubmit}>
//                             <div class='w-[100%] flex items-center justify-center bg-white rounded-[10px] px-4' style={{ border: '2px solid #919191', backgroundColor: 'transparent' }}>
//                                 <input
//                                     id="chat"
//                                     name="chat"
//                                     type='text'
//                                     value={input}
//                                     onChange={(e) => setInput(e.target.value)}
//                                     className='text-black'
//                                     style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none', backgroundColor: 'transparent', }}
//                                 />
//                                 <div class='cursor-pointer'><MdSend color='black' /></div>
//                             </div>
//                         </form>
//                     </div>
//                 </section>
//             </div>
//         </>
//     )
// }

// const ChatMessage = ({ message }) => {
//     return (
//         <div className={`chat-message ${message.user === 'gpt' && 'chatgpt'}`}>
//             <div className={`avatar ${message.user === 'gpt' && 'chatgpt'}`}>

//             </div>
//             <div className='messaage'>
//                 { message.message }
//             </div>
//         </div>
//     )
// }

// export default Chatt



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
        const response = await fetch('https://school-hacks.onrender.com/api/chat', {
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
            {!isAuth ? <Navigate to={'/login'} /> : null}
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
        <div>
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