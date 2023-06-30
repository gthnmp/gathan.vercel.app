import Header from './Header';
import Experience from './Experiences';
import Certification from './Certification';
import Social from './Socials';
import { NavLink } from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'


export default function Content(){
  return (
    <article id="content" className=" w-full px-5  lg:w-3/5 flex text-lg lg:text-3xl flex-col gap-40 lg:gap-48s left-56 pt-56 inter font-normal">
      <Header />
      <Certification />
      <Experience />
      <Social />
      <div className='text-sm w-full h-auto flex items-center justify-end gap-5'>
        <NavLink to={"/projects"}>Selected Projects </NavLink>
        <HiOutlineArrowNarrowRight/>
      </div>
    </article>
  );
} 
