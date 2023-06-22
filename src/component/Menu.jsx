/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState, useRef } from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const iconClassname = 'hover:fill-neutral-400 transition-colors duration-300'

const menuItems = [
  { name: "Instagram", url: "https://www.instagram.com/gthnmp/", icon: <FaInstagram />},
  { name: "Twitter", url: "https://twitter.com/viograce_/", icon: <FaTwitter />},
  { name: "LinkedIn", url: "https://www.linkedin.com/in/gathan", icon: <FaLinkedin />},
  { name: "GitHub", url: "https://github.com/gthnmp", icon: <FaGithub />}
];

export default function Menu() {
  return (
    <nav id="menu-container" className="noto-serif fixed w-screen h-20 top-0 left-0  z-50 flex justify-center">
      <div className="w-full h-auto flex justify-between items-center px-20 py-16">
        <div id="menu-button" className="font-bold">
          <button><i>Menu</i></button>
        </div>
        <ul className="flex gap-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {React.cloneElement(item.icon, { className: iconClassname })}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
