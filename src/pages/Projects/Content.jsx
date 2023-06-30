import Header from './Header';
import Main from './Main';
import { NavLink } from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

export default function Content(){
  return (
    <article id="content" className="w-full px-5 lg:w-3/5 flex text-lg lg:text-3xl flex-col gap-20 lg:gap-40 left-56 pt-56 inter font-normal">
      <Header />
      <Main/>
      <div className='text-sm w-full h-auto flex items-center justify-end gap-5'>
        <NavLink to={"/skills"}>Technical Skills </NavLink>
        <HiOutlineArrowNarrowRight/>
      </div>
    </article>
  );
} 
