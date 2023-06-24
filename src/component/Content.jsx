/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect, useState, createContext } from 'react';

import SmoothWrapper from './SmoothWrapper';
import Introduction from './Introduction';
import TableOfContent from './TOC';
import Sketch from './Sketch';
import Cross from './Cross';
import Menu from './Menu';

import cross from '/assets/cross.svg'
import '../App.css';

export const IconContext = createContext();

export default function Content() { 
  const [ isDesktop, setDeviceSize ] = useState(false);
  const [ isCrossVisible, setVisibility ] = useState(true);
  const [ isImageVisible, setImageVisibility ] = useState(true);
  const [ crossIcon, setCrossIcon ] = useState([cross, cross])
  const [ hoverImage, setHoverImage ] = useState([])

  useEffect(() => {
    function handleDeviceSize(){
      const handleResize = () => {
        setDeviceSize(window.innerWidth > 1024);
      };
    
      window.addEventListener("resize", handleResize);
    
      handleResize();
      
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }

    function observeSection (){
      const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting){
            entry.target.style.opacity = "100%";
          } else {
            entry.target.style.opacity = "20%";
          }
        })
      },{threshold: [0.5, 1.0]})
  
      const sections = document.querySelectorAll('section')
      sections.forEach(s => {
        sectionObserver.observe(s)
      })
    }

    function observeCross(){
      const intro = document.querySelector('#introduction')
      const introObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === 'introduction') {
            setVisibility(false)
            setImageVisibility(false)
          } else {
            setVisibility(true)
            setImageVisibility(true)
          }
        });
      },{threshold : [0.75, 0.9]});
      
      introObserver.observe(intro)
    }

    handleDeviceSize()
    observeSection()
    observeCross()
  },[])

  return (
    <>
    <IconContext.Provider value={{ isCrossVisible, setVisibility ,hoverImage, setHoverImage }}>
      <Cross isCrossVisible = {isCrossVisible} crossIcon={crossIcon} hoverImage={hoverImage}/>
      <SmoothWrapper>
        <Introduction />
        <TableOfContent/>
        {isDesktop && <Sketch/>}
      </SmoothWrapper>
      <Menu isDesktop = {isDesktop} />
    </IconContext.Provider>
    </>
  );
}
