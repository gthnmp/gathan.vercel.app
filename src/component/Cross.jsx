/* eslint-disable react/prop-types */
import cross from '/assets/cross.svg'

export default function Cross ({ crossVisible }){
  return (
    <>
      <div className={`fixed top-1/2 left-52 w-16 h-16 z-50 transition-transform duration-1000 ${crossVisible ? 'scale-100' : 'scale-0'}`}>
        <img src = {cross} className='' alt='Cross Graphic Element'></img>
      </div>
      <div className={`fixed top-1/2 right-52 w-16 h-16 z-50 transition-transform duration-1000 ${crossVisible ? 'scale-100' : 'scale-0'}`}>
        <img src = {cross} className='' alt='Cross Graphic Element'></img>
      </div>
    </>
  )
}