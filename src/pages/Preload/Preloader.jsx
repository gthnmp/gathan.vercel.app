import { useEffect, useRef, useState } from "react";
import Revealer from './revealer'
import { preloadImages } from "./utils";

const PreloadImages = () => {
  const items = [];
  for (let i = 1; i <= 8; i++) {
    const imageUrl = `/assets/${i}.jpg`;
    const item = (
      <div key={`layer__item-${i}`} className="layers__item">
        <div className="layers__item-img" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      </div>
    );
    items.push(item);
  }
  return items
}

export default function Preloader() {
  const [ loadingInterval, setLoadingInterval ] = useState(1500)
  const [ loadingNumber, setLoadingNumber ] = useState(0);
  const [ loadingRate, setLoadingRate ] = useState(5)
  const loadingContainerRef = useRef(null)
  const numberRef = useRef(null) 
  const maxLoadingNumber = 100;

  useEffect(() => {
    numberRef.current.style.transform = 'translate3d(0, 0%, 0)';
  }, []);

  useEffect(() => {
    preloadImages('.layers__item-img').then(() => {
      setLoadingInterval(50)
      setLoadingRate(10)
    })

    setTimeout(() => {
      const interval = setInterval(() => {
        setLoadingNumber((prevNumber) => {
          const randomIncrement = Math.floor(Math.random() * loadingRate) + 1;
          const nextNumber = prevNumber + randomIncrement;
          return nextNumber <= maxLoadingNumber ? nextNumber : maxLoadingNumber;
        });
      }, loadingInterval);
  
      return () => clearInterval(interval);
    }, 1000)
  }, [loadingInterval, loadingRate]);

  useEffect(() => {
    if (loadingNumber === maxLoadingNumber) {
      setTimeout(() => {
        numberRef.current.style.transform = 'translateY(-100%)';
      }, 1000);
    
      setTimeout(() => {
        const revealer = new Revealer();
        revealer.reveal();
      }, 1500);
      
      setTimeout(() => {
        loadingContainerRef.current.style.zIndex = "-1"; 
      }, 2500);
    }
  }, [loadingNumber]);

  return (
    <>
      <div id="preload" ref = {loadingContainerRef} className="fixed top-0 w-screen h-screen flex flex-col justify-center items-center z-50 bg-white text-neutral-800 transition-all duration-1000 translate-y-0">
        <div id = "preload-number" className="overflow-hidden">
          <h1 ref = {numberRef} className="font-semibold text-2xl transition-all duration-1000 translate-y-full">{loadingNumber}</h1>
        </div>
      </div>
      <div className="layers">
        <PreloadImages/>
      </div>
    </>
  );
}
