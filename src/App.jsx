/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from 'react';
import SmoothWrapper from './component/utils/SmoothWrapper';
import Introduction from './pages/Introduction';
// import Sketch from './component/utils/Sketch';
import Cross from './component/utils/Cross';
import Menu from './component/utils/Menu';
import {TableOfContent} from './pages/TableOfContent';
import { StateContext } from './states';
import Preloader from './pages/Preload/Preloader';

export default function App() {
  const { isDesktop, setIsDesktop, setIsHoverImageVisible, setIsCrossVisible } = useContext(StateContext)

  const handleDeviceSize = () => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
  
    window.addEventListener('resize', handleResize);
    handleResize();
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  };
  
  const observeSection = () => {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '100%';
        } else {
          entry.target.style.opacity = '20%';
        }
      });
    }, { threshold: [0.5, 1.0] });
  
    const sections = document.querySelectorAll('section');
    sections.forEach((s) => {
      sectionObserver.observe(s);
    });
  };
  
  const observeCross = () => {
    const intro = document.querySelector('#introduction');
  
    const introObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'introduction') {
          setIsHoverImageVisible(false);
          setIsCrossVisible(false);
        } else {
          setIsCrossVisible(true);
        }
      });
    }, { threshold: [0.75, 0.9] });
  
    introObserver.observe(intro);
  };

  useEffect(() => {
    handleDeviceSize();
    observeSection();
    observeCross();
  }, []);

  return (
    <>
      {isDesktop && <Cross />}
      <SmoothWrapper>
        <Introduction />
        <TableOfContent />
        {/* {isDesktop && <Sketch />} */}
      </SmoothWrapper>
      <Menu isDesktop={isDesktop} />
      <Preloader/>
    </>
  );
}
