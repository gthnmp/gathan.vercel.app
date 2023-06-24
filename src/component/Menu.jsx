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
      <div id = "menu-button" className="fixed z-10 top-10 left-20 font-semibold">
        <button className="px-2"><i>Menu</i></button>
      </div>
      {
        isDesktop && <ul className="fixed z-20 top-10 right-20 flex gap-4 p-2">
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
