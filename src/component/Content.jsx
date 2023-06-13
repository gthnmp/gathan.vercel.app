/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import SmoothWrapper from './SmoothWrapper';
import Introduction from './Introduction';
import Projects from './Projects';
import Services from './Services';
import About from './About';
import Menu from './Menu';
import '../App.css';


export default function Content() { 
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
