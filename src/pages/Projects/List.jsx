/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect, useRef } from "react";

export default function List (id, title, href, imagePath){
  const [ isImageVisible, setImageVisibilty ] = useState(false);
  const titleLines = title.split('\n')
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      setImageVisibilty(true)
    }

    const handleMouseLeave = () => {
      setImageVisibilty(false)
    }

    ref.current.addEventListener('mouseenter', handleMouseEnter);
    ref.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      ref.current.removeEventListener('mouseenter', handleMouseEnter);
      ref.current.removeEventListener('mouseleave', handleMouseLeave);
    };
  },[])

  return(
    <li ref ={ref}  key={id} className="project flex gap-10 relative hover:text-fuchsia-50white">
              
    {/* <div className={`absolute hoverimage aspect-video w-auto h-56 top-1/2 -translate-y-1/2 overflow-hidden ${isImageVisible ? "opacity-100 scale-110" : "opacity-0 scale-90"}`}>
      <img src={imagePath} className={`w-full h-full object-cover ${isImageVisible ? "scale-100" : "scale-125"}`}/>
    </div> */}

    <div className="text-inherit z-50 transition-colors duration-300">{id}</div>    
    <h1 className={`flex flex-col gap-2 w-8/12 text`}>
      {titleLines.map((line, index) => (
        <a href={href} target='_blank' rel="norefferer" key={index} className={`line  h-auto w-auto px-5 overflow-y-hidden`}>
          <h1 data-content={line} className='relative'>
            {line}
          </h1>
        </a>
      ))}
    </h1>
  </li>
  )
}