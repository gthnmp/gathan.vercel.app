/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react';

const SmoothWrapper = ({ className: additionalClassNames, ...props }) => {
  const contentRef = useRef(null);
  let current = 0;
  let target = 0;
  let ease = 0.5;
  const defaultClassName =
    'fixed will-change-transform top-0 w-screen bg-white text-neutral-800 h-max flex items-center px-24 flex-col gap-20 lg:gap-60 z-10 pb-60';
  const customizedClassName = `${defaultClassName} ${additionalClassNames}`;

  useEffect(() => {

    function lerp(start, end, t) {
      return start * (1 - t) + end * t;
    }

    function setTransform(element, change) {
      element.style.transform = change;
    }

    function smoothScroll() {
      current = lerp(current, target, ease);
      current = parseFloat(current.toFixed(2));
      target = window.scrollY;
      setTransform(contentRef.current, `translate3d(0, ${-current}px,0)`);
      requestAnimationFrame(smoothScroll);
    }

    function updateBodyHeight() {
      const contentHeight = contentRef.current.getBoundingClientRect().height;
      const contentWidth = contentRef.current.getBoundingClientRect().width;
      document.body.style.height = `${contentHeight}px`;
      document.body.style.width = `${contentWidth}px`;
      ease = contentWidth > 768 ? 0.06 : 1;
    }

    function handleResize() {
      updateBodyHeight();
    }

    handleResize();
    smoothScroll();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main ref={contentRef} className={customizedClassName} style={props.style}>
      {props.children}
    </main>
  );
};

export default SmoothWrapper;
