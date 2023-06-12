/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import logo from '/react.svg';

const Navbar = () => {
  const [ menuState, setMenuState ] = useState(false);

  return(
      <header className='fixed bottom-0 w-screen flex flex-col items-center justify-center px-16 py-16 inter z-50'>
        <h1 className={`${menuState == true ? "" : "hidden"}`}>foo</h1>
        <button id="nav-menu" className="w-12 h-12 bg-slate-200 rounded-full hover:scale-150 active:scale-90" onClick={() => setMenuState(menuState == true ? false : true )}/>
      </header>
  )
}

export default Navbar;