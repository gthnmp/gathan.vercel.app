/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';

export default function TechnicalSkills() {

  return (
    <section className="w-screen h-auto flex flex-col justify-center items-center gap-10  transition-opacity duration-1000">
      <h3 className="noto-serif text-base">3</h3>

      <a href = "/" id = "nav-title"  className="text-8xl px-8 text-center w-full leading-tight tracking-wide noto-serif font-medium uppercase">
        <div>Technical</div>
        <div>Skills</div>

      </a>
      <p className="text-3xl px-8 text-center w-3/4 leading-tight tracking-normal inter font-light">
        {"I possess a range of technical skills in web development, including React JS, Three JS, Tailwind, HTML, CSS, and JavaScript. Additionally, I have proficiency in backend development using the MERN Stack (MongoDB, Express, React, Node.js)."}
      </p>
    </section>
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
