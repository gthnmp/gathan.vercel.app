import { useEffect, useRef } from "react"

export default function Images(){
  const gridContainerRef = useRef(null)

  useEffect(() => {
    let current = 0;
    let target = 0;
    const ease = 0.05;
    function lerp (start, end, t){
      return start * (1 - t) + end * t;
    }

    function setTransform(element, change) {
      element.style.transform = change;
    }

    function smoothImageMovement (){
      current = lerp(current, target, ease);
      current = parseFloat(current.toFixed(5))
      target = window.scrollY;
      target = parseFloat(target.toFixed(5))
      setTransform(gridContainerRef.current, `translate3d(0, ${-current / 3}px,0)`);
      requestAnimationFrame(smoothImageMovement)
    }
    smoothImageMovement()  
  },[])

  return(
    <div id ="moving-img" ref = {gridContainerRef} className="grid w-screen h-screen">
      <div className="grid__item grid__item--a" style={{"backgroundImage":"url(/assets/3.jpg)"}}></div>
      <div className="grid__item grid__item--b" style={{"backgroundImage":"url(/assets/1.jpg)"}}></div>
      <div className="grid__item grid__item--c" style={{"backgroundImage":"url(/assets/4.jpg)"}}></div>
      <div className="grid__item grid__item--d" style={{"backgroundImage":"url(/assets/5.jpg)"}}></div>
      <div className="grid__item grid__item--e" style={{"backgroundImage":"url(/assets/8.jpg)"}}></div>
      <div className="grid__item grid__item--f" style={{"backgroundImage":"url(/assets/6.jpg)"}}></div>  
    </div>
  )
}