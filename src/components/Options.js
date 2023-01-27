import React,{useState} from 'react'
import arrowdown from '../assets/arrowdown.png'

const Options = ({title, children}) => {
    const [open, setOpen] = useState(false)
  return (
    <>
        <div class='flex flex-col relative' onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <div  class='flex px-8 text-black font-bold items-center gap-4' style={{borderRadius: '20px', border:'2px solid black' ,backgroundColor:'lightgray'}}>
                <div><p>{title}</p></div>
                <div class='cursor-pointer'><img  src={arrowdown} alt="arrow" width={40} height={30} /></div>
            </div>
            <div class=''>
                {
                open && 
                <div class='z-40 absolute bg-[lightgray] w-[100%] top-10 rounded-xl p-'>
                <ul onClick={() => setOpen(false)}>
                    {children}
                </ul>
            </div>
                }
            </div>
        </div>
    </>
  )
}

export default Options
