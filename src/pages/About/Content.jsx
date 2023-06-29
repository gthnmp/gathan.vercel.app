import Header from './Header';
import Experience from './Experiences';
import Certification from './Certification';
import Social from './Socials';

export default function Content(){
  return (
    <article id="content" className="w-full px-5 lg:w-3/5 flex text-lg lg:text-3xl flex-col gap-40 lg:gap-48s left-56 pt-56 inter font-normal">
      <Header />
      <Certification />
      <Experience />
      <Social />
    </article>
  );
} 
