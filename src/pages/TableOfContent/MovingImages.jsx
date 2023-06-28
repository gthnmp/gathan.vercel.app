import { useEffect, useRef } from "react"

export default function Images(){
  const gridContainerRef = useRef(null)

  useEffect(() => {
    const images = document.querySelectorAll('.grid__item')
    console.log(images)
    images.forEach((img) => {
      img.addEventListener('click', () =>{
        console.log('foo from ', img)
      })
    })

  },[])

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
    <div id ="moving-img" ref = {gridContainerRef} className="grid-container w-screen h-screen">
      <div className="grid__item grid__item--a">
        <img src = "/assets/3.jpg" className="w-full h-full object-cover"></img>
      </div>
      <div className="grid__item grid__item--b">
        <img src = "/assets/1.jpg" className="w-full h-full object-cover"></img>
      </div>
      <div className="grid__item grid__item--c">
        <img src = "/assets/4.jpg" className="w-full h-full object-cover"></img>
      </div>
      <div className="grid__item grid__item--d">
        <img src = "/assets/5.jpg" className="w-full h-full object-cover"></img>
      </div>
      <div className="grid__item grid__item--e">
        <img src = "/assets/8.jpg" className="w-full h-full object-cover"></img>
      </div>
      <div className="grid__item grid__item--f">
        <img src = "/assets/6.jpg" className="w-full h-full object-cover"></img>
      </div>
    </div>
  )
}