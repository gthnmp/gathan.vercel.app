/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react';

const SmoothWrapper = ({ className: additionalClassNames, ...props }) => {
  const contentRef = useRef(null);
  let current = 0;
  let target = 0;
  const defaultClassName =
    'fixed will-change-transform top-0 w-screen bg-transparent h-max flex items-center px-24 flex-col gap-20 lg:gap-40';
  const customizedClassName = `${defaultClassName} ${additionalClassNames}`;

  useEffect(() => {
    let ease = 0.06;

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

      setTransform(contentRef.current, `translateY(${-current}px)`);
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
    <div ref={contentRef} className={customizedClassName} style={props.style}>
      {props.children}
    </div>
  );
};

export default SmoothWrapper;
