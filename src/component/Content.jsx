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
import Projects from './Projects';
import TechnicalSkills from './TechnicalSkills';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import '../App.css';
import { useEffect } from 'react';

export default function Content() { 
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting){
          console.log(entry.target)
          entry.target.classList.add('duration-500')
          entry.target.style.opacity = "100%";
        } else {
          entry.target.style.opacity = "20%";
        }
      })
    })
    const sections = document.querySelectorAll('section')
    sections.forEach(s => {
      observer.observe(s)
    })
  },[])
  return (
    <>
    <SmoothWrapper className="top-0 w-screen bg-neutral-100 h-max flex items-center px-24 flex-col gap-20 lg:gap-60 z-10 pb-60">
      <Sketch/>
      <Introduction />
      <About />
      <Projects />
      <TechnicalSkills />
      <Contact />
    </SmoothWrapper>
    <Menu/>
    </>
  );
}
