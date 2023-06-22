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
import Services from './Services';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import '../App.css';

export default function Content() { 
  return (
    <>
    <SmoothWrapper className="top-0 w-screen bg-neutral-100 h-max flex items-center px-24 flex-col gap-20 lg:gap-40 z-10">
      <Sketch/>
      <Introduction />
      <About />
      <Projects />
      <Services />
      <Contact />
    </SmoothWrapper>
    <Menu/>
    </>
  );
}
