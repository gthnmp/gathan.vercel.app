/* eslint-disable react/prop-types */
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

export default function Menu({ isDesktop ,...props }) {
  return (
    <>
      <div id = "menu-button" className="fixed z-10 top-10 left-20 font-bold">
        <button><i>Menu</i></button>
      </div>
      {
        isDesktop && <ul className="fixed z-20 top-10 right-20 flex gap-4">
          {
            menuItems.map((item, index) => (
              <li key = {index}>
                <a href = {item.url} target = "_blank" aria-label={`Checkout Gathan's ${item.name}`}>
                  {React.cloneElement(item.icon, {className : iconClassname })}
                </a>
              </li>
            ))
          }
        </ul>
      } 
    </>
  );
}

    // <nav id="menu-container" className="noto-serif fixed w-screen h-20 top-0 left-0  -z-50 flex justify-center">
    //   <div className={`w-full h-auto flex ${isDesktop ? "justify-between" : 'justify-center'} items-center px-20 py-16`}>
    //     <div id="menu-button" className="font-bold z-40 absolute">
    //       <button><i>Menu</i></button>
    //     </div>
    //     {isDesktop && <ul className="flex gap-4">
    //       {menuItems.map((item, index) => (
    //         <li key={index}>
    //           <a href={item.url} target="_blank" aria-label={`See my ${item.name}`} rel="noopener noreferrer">
    //             {React.cloneElement(item.icon, { className: iconClassname })}
    //           </a>
    //         </li>
    //       ))}
    //     </ul>}
    //   </div>
    // </nav>