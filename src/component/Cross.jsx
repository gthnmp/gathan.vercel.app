/* eslint-disable react/prop-types */

export default function Cross ({ isCrossVisible, isImageVisible, crossIcon, hoverImage  }){
  return (
    <>
      <div id = "left-container" className='fixed left-44 top-1/2 w-16 flex flex-col justify-center items-center overflow-x-visible z-50 '>
        <div id = "image" className={`absolute w-32 h-20 z-50 transition-all duration-500 ${isCrossVisible ? 'opacity-0' : 'opacity-100'}`}>
          <img src = {hoverImage[0]} className='w-full h-full object-cover' alt='Content Hover Image'></img>
        </div>

        <div id = "cross" className={`w-16 h-16 z-50 transition-all duration-500 ${isCrossVisible ? 'scale-100' : 'scale-0'}`}>
          <img src = {crossIcon[0]} alt='Cross Graphic Element'></img>
        </div>
      </div>

      <div id = "left-container" className='fixed right-44 top-1/2 w-16 flex flex-col justify-center items-center overflow-x-visible z-50 '>
        <div id = "image" className={`absolute w-32 h-20 z-50 transition-all duration-500 ${isCrossVisible ? 'opacity-0' : 'opacity-100'}`}>
          <img src = {hoverImage[1]} className='w-full h-full object-cover' alt='Content Hover Image'></img>
        </div>

        <div id = "cross" className={`w-16 h-16 z-50 transition-all duration-500 ${isCrossVisible ? 'scale-100' : 'scale-0'}`}>
          <img src = {crossIcon[1]} alt='Cross Graphic Element'></img>
        </div>
      </div>
    </>
  )
}