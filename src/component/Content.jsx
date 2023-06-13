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
  function textReveal(){
    
    const targets = SplitType.create('h1, p, a', { types: "lines, words" });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target.style)
          entry.target.style.transform = "translateY(0%)";
          observer.unobserve(entry.target);
        }
      });
    });
    
    targets.words.forEach((word) => {
      observer.observe(word);
    });
    
    return () => {
      observer.disconnect();
    };
  }

  useEffect(() => {
    if (window.innerWidth >= 768){
      textReveal()
    }
  }, []);
  
  return (
    <>
      <SmoothWrapper className="z-10">
        <Introduction />
        <Projects />
        <Services />
        <About />
      </SmoothWrapper>
      <Menu />
    </>
  );
}
