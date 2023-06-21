import { useEffect, useState, useRef } from "react";

export default function Menu () {
  const backgroundRef = useRef(null);
  const [ menuState, setMenuState ] = useState(false);
  
  function toggleMenuState(){
    setMenuState((prevState) => !prevState)
  }

  useEffect(() => {
    const background = backgroundRef.current;
    //turn off scrolling event when menuState is true, and false otherwise

    function handleBackgroundClick(){
      toggleMenuState();
    }

    background.addEventListener('click', handleBackgroundClick);

    function handleScroll(event) {
      if (menuState) {
        event.preventDefault();
        event.stopPropagation();
      }
    }

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: false });

    return () => {
      background.removeEventListener('click', handleBackgroundClick);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };

  },[menuState])

  return (
    <div id = "menu-container" className ="relative w-screen h-screen z-20">
      <div id = "background" ref = {backgroundRef} className={`fixed transition-all duration-300 ${menuState ? "h-full w-full bg-neutral-900 opacity-50" : ""}`}></div>
  
      <div id = "navigation" className='fixed w-full flex justify-center items-center bottom-0 z-20'>

        <div id = "menubar" className={`absolute w-full ${menuState ? "h-96 md:h-60 bg-neutral-900 opacity-100" : "h-0"} bottom-0`}>
          <ul className='flex flex-col md:flex-row gap-5 md:gap-20 text-2xl font-light inter text-white items-center md:justify-center pt-20'>
            <li><a id = "menu" href = "/" className='relative py-1'>Home</a></li>
            <li><a id = "menu" href = "/about" className='relative py-1'>About</a></li>
            <li><a id = "menu" href = "/works" className='relative py-1'>Works</a></li>
            <li><a id = "menu" href = "/contact" className='relative py-1'>Contact</a></li>
          </ul>
        </div>

        <button
          id = "nav-button"
          className={`absolute w-12 h-12 rounded-full bottom-10 z-10 hover:scale-150 active:scale-90 ${menuState ? "bg-white" : "bg-neutral-950"}
          `}
          onClick={toggleMenuState}
        />
      </div>
    </div>
  );
}