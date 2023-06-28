/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import cross from '/assets/cross.svg'

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [isHoverImageVisible, setIsHoverImageVisible] = useState(false);
  const [isCrossVisible, setIsCrossVisible] = useState(true);
  const [hoverImage, setHoverImage] = useState([]);
  const [crossIcon, setCrossIcon] = useState([cross, cross]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [pathLocation, setLocation] = useState("/")

  return (
    <StateContext.Provider
      value={{
        isHoverImageVisible,
        setIsHoverImageVisible,
        isCrossVisible,
        setIsCrossVisible,
        hoverImage,
        setHoverImage,
        crossIcon,
        setCrossIcon,
        isDesktop,
        setIsDesktop,
        pathLocation,
        setLocation
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
