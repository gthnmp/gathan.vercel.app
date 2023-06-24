/* eslint-disable react/prop-types */
import { useContext } from "react"
import { IconContext } from "./Content"

export default function Cross (){
  const {  isCrossVisible, crossIcon, isHoverImageVisible ,hoverImage } = useContext(IconContext);
  return (
    <>
      <div id = "left-container" className='fixed left-40 top-1/2 w-16 flex flex-col justify-center items-center overflow-x-visible z-50 '>
        <div id = "image-cross" className={`absolute w-32 h-20 z-50 transition-all duration-300 ${isHoverImageVisible ? 'opacity-100' : 'opacity-0'}`}>
          <img src = {hoverImage[0]} className='w-full h-full object-cover' alt='Content Hover Image'></img>
        </div>

        <div id = "cross" className={`w-16 h-16 z-50 transition-all duration-500 ${isCrossVisible ? 'scale-100' : 'scale-0'}`}>
          <img src = {crossIcon[0]} alt='Cross Graphic Element'></img>
        </div>
      </div>

      <div id = "left-container" className='fixed right-40 top-1/2 w-16 flex flex-col justify-center items-center overflow-x-visible z-50 '>
        <div id = "image-cross" className={`absolute w-32 h-20 z-50 transition-all duration-300 ${isHoverImageVisible ? 'opacity-100' : 'opacity-0'}`}>
          <img src = {hoverImage[1]} className='w-full h-full object-cover' alt='Content Hover Image'></img>
        </div>

        <div id = "cross" className={`w-16 h-16 z-50 transition-all duration-500 ${isCrossVisible ? 'scale-100' : 'scale-0'}`}>
          <img src = {crossIcon[1]} alt='Cross Graphic Element'></img>
        </div>
      </div>
    </>
  )
}