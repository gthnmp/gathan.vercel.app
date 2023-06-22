/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState, useRef } from "react";

export default function Menu () {
  return (
    <nav id = "menu-container" className ="noto-serif fixed w-screen h-20 top-0 left-0  z-50 flex justify-center">
      <div className="w-full h-auto flex justify-between items-center px-20 py-16">
        <div className="font-bold"><button><i>Menu</i></button></div>
        <ul className="flex gap-10">
          <li><a href="https://www.instagram.com/gthnmp/" target="_blank">ig</a></li>
          <li><a href="https://twitter.com/viograce_/" target="_blank">tw</a></li>
          <li><a href="https://www.linkedin.com/in/gathan" target="_blank">in</a></li>
          <li><a href="https://github.com/gthnmp" target="_blank">gh</a></li>
        </ul>
      </div>
    </nav>
  );
}