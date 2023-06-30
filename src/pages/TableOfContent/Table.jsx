/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useContext } from 'react';
import { StateContext } from '../../states';
import contents from './TableOfContent.json';
import { Link } from 'react-router-dom';

export default function Table() {
  return (
    <>
      {contents.map((content, index) => (
        <section key={index} className="w-screen h-auto transition-opacity duration-500 flex flex-col justify-center items-center gap-10">
          <PageNumber number={index + 1} />
          <Header title={content.title} directTo={content.directTo} hoverImage={content.hoverImage} />
          <Paragraph paragraph={content.paragraph} />
        </section>
      ))}
    </>
  );
}

const PageNumber = ({ number }) => (
  <h3 className="noto-serif text-base">{number}</h3>
);

const Header = ({ title, directTo, hoverImage }) => {
  const { setIsCrossVisible, setIsHoverImageVisible, setHoverImage } = useContext(StateContext);
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsCrossVisible(false);
      setIsHoverImageVisible(true);
      setHoverImage(hoverImage);
    };

    const handleMouseLeave = () => {
      setIsHoverImageVisible(false);
      setIsCrossVisible(true);
    };

    ref.current.addEventListener('mouseenter', handleMouseEnter);
    ref.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      ref.current.removeEventListener('mouseenter', handleMouseEnter);
      ref.current.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="z-40 lg:text-8xl text-5xl flex justify-center items-center px-8 text-center w-full leading-tight tracking-wide noto-serif font-medium uppercase">
      <Link to={directTo} id="nav-title" ref={ref} className="w-max">
        {title.map( (title, index) => <div key={index}>{title}</div> )}
      </Link>  
    </div>
  );
};

const Paragraph = ({ paragraph }) => (
  <p className="lg:text-2xl text-xl px-8 text-center w-full lg:w-3/5 leading-tight tracking-wide inter font-light">
    {paragraph}
  </p>
);

