import React,{useState} from 'react'
import {RiArrowDropRightFill, RiArrowDropDownFill} from 'react-icons/ri'

const Accordion = ({question, answer}) => {
    const [show, setShow] = useState(false)
  return (
    <>
        <article class=''>
            <header class='flex items-center my-2 p-2 cursor-pointer' style={{borderBottom: '1px solid #919191'}} onClick={() => setShow(!show)}>
                <button>{show ? <RiArrowDropDownFill size='2em'/> : < RiArrowDropRightFill size='2em'/>}</button>
                <h1 class='font-semibold'>{question}</h1>
            </header>
            {show && <p class='px-4 pb-4'>{answer}</p>}
        </article>
    </>
  )
}

export default Accordion