import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { BsMoon } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { MdOutlineLogout, MdSend } from 'react-icons/md'

const Chat = () => {
    return (
        <>
            <div class='flex h-[90vh]'>
                <div class='w-[20%] hidden md:flex bg-[#B1A1ED] flex-col justify-between'>
                    <div class='p-2'>
                        <div class='p-3 border-2 rounded-md border-[#919191] flex items-center gap-5 cursor-pointer'><FaPlus /><p>New chat</p></div>
                    </div>
                    <div class='px-2 py-6' style={{ borderTop: '2px solid #919191' }}>
                        <ul class='flex flex-col gap-2 chat'>
                            <li class='flex items-center gap-2'><RiDeleteBin6Line size='1.5em' /><p>Clear conversation</p></li>
                            <li class='flex items-center gap-2'><BsMoon size='1.5em' /><p>Dark Mode</p></li>
                            <li class='flex items-center gap-2'><FiExternalLink size='1.5em' /><p>FAQ</p></li>
                            <li class='flex items-center gap-2'><MdOutlineLogout size='1.5em' /><p>Logout</p></li>
                        </ul>
                    </div>
                </div>
                <div class='w-full md:w-[80%] bg-white flex flex-col justify-between items-center py-4'>
                    <div><h1 class='text-2xl font-bold text-center'>Student Hacks</h1></div>
                    <div class='w-[80%]'>
                        <div class='w-[100%] flex items-center justify-center bg-white rounded-[10px] px-4' style={{ border: '2px solid #919191', boxShadow: '2px 3px 2px 3px gray' }}>
                            <input
                                id="chat"
                                name="chat"
                                type='text'
                                style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }}
                            />
                            <div class='cursor-pointer'><MdSend /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat