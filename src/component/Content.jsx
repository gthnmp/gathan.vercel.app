import { useState, useEffect, createContext } from 'react';
import SmoothWrapper from './SmoothWrapper';
import Introduction from './Introduction';
import TableOfContent from './TableOfContent';
import Sketch from './Sketch';
import Cross from './Cross';
import Menu from './Menu';
import cross from '/assets/cross.svg';
import '../App.css';

export const IconContext = createContext();

export default function Content() {
  const [isHoverImageVisible, setIsHoverImageVisible] = useState(false);
  const [isCrossVisible, setIsCrossVisible] = useState(true);
  const [hoverImage, setHoverImage] = useState([]);
  const [crossIcon, setCrossIcon] = useState([cross, cross]);
  const [isDesktop, setIsDesktop] = useState(false);

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
      <IconContext.Provider
        value={{
          isCrossVisible,
          setIsCrossVisible,
          crossIcon,
          setCrossIcon,
          hoverImage,
          setHoverImage,
          isHoverImageVisible,
          setIsHoverImageVisible,
        }}
      >
        {isDesktop && <Cross />}
        <SmoothWrapper>
          <Introduction />
          <TableOfContent />
          {isDesktop && <Sketch />}
        </SmoothWrapper>
        <Menu isDesktop={isDesktop} />
      </IconContext.Provider>
    </>
  );
}
