/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import SplitType from 'split-type';
import SmoothWrapper from './SmoothWrapper';
import Introduction from './Introduction';
import Projects from './Projects';
import Services from './Services';
import About from './About';
import Menu from './Menu';
import '../App.css';
import { useEffect } from 'react';

export default function Content() { 

  useEffect(() => {
    const headline = new SplitType("h1", { types : 'lines, words'}); 
    const paragraph = new SplitType("p", { types : 'lines, words'}); 
    const anchor = new SplitType("a", { types : 'lines, words'}); 
    
    const words = document.querySelectorAll('.word');
    words.forEach(word => {
      word.classList.add("hidden")
    })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Stop observing the target when it is already intersecting
        }
      });
    });

    words.forEach(word => observer.observe(word));

    return () => {
      observer.disconnect(); // Cleanup: Stop observing all targets
    };
  }, []);
  
  return (
    <>
      <SmoothWrapper id = "target" className="z-10">
        <Introduction />
        <Projects />
        <Services />
        <About />
      </SmoothWrapper>
      <Menu />
    </>
  );
}
