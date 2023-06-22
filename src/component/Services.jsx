/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';

export default function Services() {

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-10">
      <h3 className="noto-serif text-base">3</h3>

      <h1 className="text-8xl px-8 text-center w-full leading-tight tracking-wide noto-serif font-medium uppercase">
        <div>Technical</div>
        <div>and</div>
        <div>Other Skills</div>

      </h1>
      <p className="text-2xl px-8 text-center w-3/4 leading-tight tracking-normal inter font-light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, quae inventore tenetur iste magni eaque rem et autem excepturi veritatis quisquam consequatur omnis officia est sint assumenda laudantium sunt soluta vel ipsam magnam quos? Eaque molestias iusto sapiente fugiat praesentium.
      </p>
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
