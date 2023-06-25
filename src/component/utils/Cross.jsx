/* eslint-disable react/prop-types */
import { useContext } from "react";
import { StateContext } from "../../states";

export default function Cross() {
  const { isCrossVisible, crossIcon, isHoverImageVisible, hoverImage } = useContext(StateContext);

  const renderCross = (index) => (
    <div className={`fixed ${index === 0 ? 'left-40' : 'right-40'} top-1/2 w-16 flex flex-col justify-center items-center overflow-x-visible z-50`} key={index}>
      <div className={`absolute w-32 h-20 z-50 transition-all duration-500 ${isHoverImageVisible ? 'opacity-100' : 'opacity-0'}`} id={`image-cross-${index}`}>
        <img src={hoverImage[index]} className="w-full h-full object-cover" alt="Content Hover Image" />
      </div>

      <div className={`w-16 h-16 z-50 transition-all duration-500 ${isCrossVisible ? 'scale-75' : 'scale-0'}`} id={`cross-${index}`}>
        <img src={crossIcon[index]} alt="Cross Graphic Element" />
      </div>
    </div>
  );

  return (
    <>
      {[0, 1].map((index) => renderCross(index))}
    </>
  );
}
