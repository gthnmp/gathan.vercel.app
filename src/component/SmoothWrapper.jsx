/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {useRef, useEffect} from 'react'

const SmoothWrapper = ( {className : additionalClassNames,...props} ) => {
	const contentRef = useRef(null);
	const defaultClassName = "fixed will-change-transform w-screen h-max flex flex-col gap-5"
	const customizedClassName = `${defaultClassName} ${additionalClassNames}`;

	let current = 0;
	let target = 0;
	const ease = 0.08;

	function lerp (start, end, t) {
		return start * (1 - t) + end * t;
	}
	
	function setTransform(element, change){
		element.style.transform = change;
	}
	
	function smoothScroll(){
		current = lerp(current, target, ease);
		current = parseFloat(current.toFixed(2));
		target = window.scrollY;
	
		setTransform(contentRef.current, `translateY(${-current}px)`)
		requestAnimationFrame(smoothScroll);
	}
	
	useEffect(() => {
		const contentHeight = contentRef.current.getBoundingClientRect().height 
		document.body.style.height = `${contentHeight}px`
		smoothScroll();
	},[])

	return (
		<div ref = {contentRef} className={customizedClassName} style = {props.style}>
			{props.children}
		</div>
	)
}

export default SmoothWrapper;