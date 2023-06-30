import { useEffect, useRef } from "react"
import Content from "./Content"

export default function Minimap () {
  const minimap = useRef(null)
  const minimapSize = useRef(null)
  const viewer = useRef(null)
  const minimapContent = useRef(null)
  
  useEffect(() => {
  let current = 0;
  let target = 0;
  const ease = 0.06;
  let realScale;
  
  function getDimensions(){
      let bodyWidth = document.body.clientWidth;
      let bodyRatio = document.body.clientHeight / bodyWidth;
      let winRatio = window.innerHeight / window.innerWidth;
  
      minimap.current.style.width = '20%';
  
      realScale = minimap.current.clientWidth / bodyWidth;
  
      minimapSize.current.style.paddingTop = `${bodyRatio * 100}%`
      viewer.current.style.paddingTop = `${winRatio * 100}%`;
  
      minimapContent.current.style.transform = `scale(${realScale})`;
      minimapContent.current.style.width = `${(100 / realScale)}%`
      minimapContent.current.style.height = `${(100 / realScale)}%`
  }

  function lerp (start, end, t){
    return start * ( 1 - t ) + end * t;

  }

  function trackScroll(){
      current = lerp(current, target, ease);
      current = parseFloat(current.toFixed(5));
      target = window.scrollY;
      viewer.current.style.transform = `translateY(${current * realScale}px)`
      minimap.current.style.transform = `translateY(-${(current * realScale) / 1.5}px)`
      requestAnimationFrame(trackScroll)
  }
  
  getDimensions()
  trackScroll()
  window.addEventListener('resize', getDimensions)
  },[])

  return(
    <div ref = {minimap} className='fixed top-60 left-24 w-80 z-20 hidden lg:block'>
      <div ref = {minimapSize} className='relative z-10'></div>
      <div ref = {viewer} className='absolute w-full top-0 left-0 origin-top-left z-20 viewer'></div>
      <div ref ={minimapContent} className='absolute top-0 left-10 w-full h-full z-[-1] origin-top-left'>
        <Content/>
      </div>
    </div>
  )
}

