/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';

const services = {
  'Frontend Development': "For frontend development, I primarily use ReactJS with the Vite framework. For smaller projects, I commonly use pure CSS, but for big projects, I prefer using Tailwind because it saves me plenty of time. Sometimes, I even use both.",
  'Networking': "In the networking world, I am familiar with using brands like MikroTik and Cisco. I studied both brands during my vocational high school education.",
  'Video Editing': "For video editing, my primary editor is Adobe Premiere Pro. I find other video editing software rather confusing because I am accustomed to using Premiere Pro.",
  'Graphic Design': "When I'm doing graphic design, what I usually create is web designs. But during my student years, I make posters and Instagram slider posts quite often.",
  // 'Sysadmin': "I have quite skills in Linux. I can do bash scripting and automation using Python.",
};

export default function Services() {
  const headingRef = useRef(null);
  const [cardVisibility, setCardVisibility] = useState(false);
  const [cardContent, setCardContent] = useState('');

  function handleServiceHover(value) {
    setCardVisibility((prevState) => !prevState);
    setCardContent(value);
  }

  return (
    <div className="w-screen h-full flex flex-col items-start px-8 lg:px-24">
      <h1 id="heading" ref={headingRef} className="relative text-3xl py-5 lg:text-4xl w-1/2 leading-normal tracking-wide inter font-medium">
        Skills
      </h1>

      <div className="w-full flex flex-col lg:flex-row justify-start gap-10 lg:gap-20 mt-10">
        <ServiceList services={services} handleServiceHover={handleServiceHover} />
      </div>
    </div>
  );
}

const ServiceList = ({ services, handleServiceHover }) => {
  return (
    <ul id="service-list" className="inter font-medium text-xl lg:text-2xl flex flex-col gap-4">
      {Object.entries(services).map(([service, value], index) => (
        <li key={index}>
          <a
            id="nav"
            onMouseEnter={() => handleServiceHover(value)}
            onMouseLeave={() => handleServiceHover('')}
            className="relative py-1 cursor-pointer"
          >
            {service}
          </a>
        </li>
      ))}
    </ul>
  );
};
