/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import logo from '/react.svg';

const Navbar = () => {
     const buttonRef = useRef(null);
     const [ buttonState, setButtonState ] = useState(false);
     useEffect(() => {
          const handleClick = () => {
               setButtonState(true);
               console.log(buttonState)
          }
          buttonRef.current.addEventListener('click', handleClick);
          return() => {
               buttonRef.current.removeEventListener('click', handleClick);
          }
     },[buttonState])

     return(
          <header className='fixed top-0 w-screen flex items-center justify-between px-16 py-8 inter z-50'>

          <div className='flex flex-col items-start gap-0 font-extralight leading-10 text-xl select-none'>
               {/* Gathan Mahesa */}
               <img src={logo} alt="ngentot"/>
          </div>

          <ul className='flex gap-20 uppercase font-light text-base'>
               <li><a href ="https://www.instagram.com/er.octa/" id = "nav" className='relative py-1'>About</a></li>
               <li><a href = "https://www.instagram.com/er.octa/" id = "nav" className='relative py-1'>Works</a></li>
               <li><button id = "nav" ref = {buttonRef} className='border-none relative'>CONTACT</button></li>
          </ul>
          </header>
     )
}

export default Navbar;