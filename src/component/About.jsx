/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const contactLinks = [
  { name: 'Github', url: 'https://github.com/gthnmp' },
  { name: 'Linkedin', url: 'https://linkedin.com/in/gathan' },
  { name: 'Twitter', url: 'https://twitter.com/viograce_' },
  { name: 'Instagram', url: 'https://www.instagram.com/gthnmp/' },
  { name: 'Mail', url: 'mailto:gthnmp@gmail.com' },
];

function AboutTitle() {
  return (
    <h1 id="heading" className="relative py-5 text-3xl lg:text-5xl w-1/2 leading-normal tracking-wide inter font-thin">
      About Me
    </h1>
  );
}

function AboutContact() {
  return (
    <div className="inter flex flex-col items-center">
      <ul className="font-thin flex xl:flex-col lg:flex-row gap-5 lg:gap-1">
        {contactLinks.map((link, index) => (
          <li key={index}>
            <a id="nav" href={link.url} target="_blank" className="relative py-1 cursor-pointer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AboutContent() {
  return (
    <div className="inter flex flex-col items-center w-full lg:w-1/3">
      <p className="text-xl font-thin leading-8">
        I drink coffee, I eat rice, I write code, and improve my design and skills everyday. I am honored to
        work with special people. Let's connect and explore exciting opportunities together!
      </p>
    </div>
  );
}

export default function About() {
  return (
    <div className="w-screen h-full flex flex-col items-start px-8 py-16 lg:px-24 lg:py-16">
      <AboutTitle />
      <div className="w-full h-full py-10">
        <div className="h-auto flex flex-col gap-20 justify-start pb-20 lg:flex-row">
          <AboutContent />
          <AboutContact />
        </div>
      </div>
    </div>
  );
}
