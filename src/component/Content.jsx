/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import SmoothWrapper from './SmoothWrapper';
import Sketch from './Sketch';
import Introduction from './Introduction';
import Menu from './Menu';
import Cross from './Cross';
import '../App.css';
import { useEffect, useState } from 'react';
import TableOfContent from './TOC';

export default function Content() { 
  const [ isDesktop, setDeviceSize ] = useState(false);
  const [ crossVisible, setVisibility ] = useState(true);

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
          } else {
            setVisibility(true)
          }
        });
      },{threshold : [0.75]});
      
      introObserver.observe(intro)
    }

    handleDeviceSize()
    observeSection()
    observeCross()
  },[])

  return (
    <>
    <Cross crossVisible = {crossVisible} />
    <SmoothWrapper className="top-0 w-screen bg-white text-neutral-800 h-max flex items-center px-24 flex-col gap-20 lg:gap-60 z-10 pb-60">
      {isDesktop && <Sketch/>}
      <Introduction />
      <TableOfContent/>
    </SmoothWrapper>
    <Menu isDesktop = {isDesktop} />
    </>
  );
}
