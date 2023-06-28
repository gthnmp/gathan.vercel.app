/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useRef } from 'react';
import { StateContext } from '../../states';
import { useLocation } from 'react-router-dom';
import './minimap.css'
import SmoothWrapper from '../../component/SmoothWrapper';

const Article = () => (
  <section id = "content" className="relative w-full lg:h-max flex justify-start items-center gap-5">
    <main id = "aboutme" className='flex flex-col gap-10  leading-10'>
      <p>I'm a freelance web developer located in Indonesia. I specialize in building interactive user experience, appealing user experience, dynamic web motions and animation.</p>
      <p>I love to do problem solving and learning new technologies. Interested in the web development spectrum and working with ambitious projects with interesting and positive people. </p>
    </main>
  </section>
)

const experiences = [
  {
    title: 'Intern',
    company: 'North Jakarta Immigration Office',
    duration: 'July 2022 - September 2022'
  },
];

const Experience = () => (
  <section id="content" className="relative w-full lg:h-max flex justify-start items-center gap-5">
    <main id="aboutme" className="flex flex-col gap-5 leading-10">
      <h1>Working Experience</h1>
      <ul className="pl-10 flex flex-col gap-10">
        {experiences.map((experience, index) => (
          <li key={index} className="flex flex-col gap-4">
            <div>
              <h1>{experience.title}</h1>
              <h1>{experience.company}</h1>
            </div>
            <h3 className="text-base text-gray-500">{experience.duration}</h3>
          </li>
        ))}
      </ul>
    </main>
  </section>
);

const certifications = [
  {
    name: 'Problem Solving (Basic)',
    issuer: 'Hackerrank',
    date: 'June 2023'
  },
  {
    name: 'React (Basic)',
    issuer: 'Hackerrank',
    date: 'June 2023'
  },
  {
    name: 'Javascript (Basic)',
    issuer: 'Dicoding',
    date: 'June 2023'
  },
  {
    name: 'CSS',
    issuer: 'Hackerrank',
    date: 'June 2023'
  },
  {
    name: 'Python (Basic)',
    issuer: 'Hackerrank',
    date: 'June 2023'
  },
  {
    name: 'MikroTik Certified Network Associate',
    issuer: 'MikroTik',
    date: 'October 2022'
  },
];

const Certification = () => (
  <section id="content" className="relative w-full lg:h-max flex justify-start items-center gap-5">
    <main id="aboutme" className="flex flex-col gap-5 leading-10">
      <p>Certification</p>
      <ul className="pl-10 flex flex-col gap-10">
        {certifications.map((certification, index) => (
          <li key={index} className="flex flex-col gap-1">
            <p>{certification.name}</p>
            <div className="text-base text-gray-500">
              <p>{certification.issuer}</p>
              <p>{certification.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  </section>
);

const educations = [
  {
    name : "State Vocational High School 3 Jakarta",
    major : "Computer and Networking Engineering",
    period : "2020 - 2023"
  }
]

const Education = () => (
  <section id="content" className="relative w-full lg:h-max flex justify-start items-center gap-5">
    <main id="aboutme" className="flex flex-col gap-5 leading-10">
      <p>Education</p>
      <ul className="pl-10 flex flex-col gap-10">
        {educations.map((education, index) => (
          <li key={index} className="flex flex-col gap-1">
            <p>{education.name}</p>
            <div className="text-base text-gray-500">
              <p>{education.major}</p>
              <p>{education.period}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  </section>
);

const socials = [
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/gathan',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/gthnmp/',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/viograce_',
  },
  {
    name: 'Github',
    link: 'https://github.com/gthnmp',
  },
  {
    name: 'Mail',
    link: 'mailto:gathan.mahesa@gmail.com',
  },
];

const Social = () => (
  <section id="content" className="relative w-full lg:h-max flex justify-start items-center gap-5">
    <main id="aboutme" className="flex flex-col gap-5 leading-10">
      <p>Get In Touch</p>
      <ul className="pl-10 flex flex-col">
        {socials.map((social, index) => (
          <li key={index} className="flex flex-col gap-1 text-base text-gray-500 hover:text-gray-700  ">
            <a href ={social.link} target='_blank' rel='noreferrer'>{social.name}</a>
          </li>
        ))}
      </ul>
    </main>
  </section>
);

const Content = () => (
  <article id = "content" className='w-full lg:w-3/5 flex text-2xl lg:text-3xl flex-col gap-52 left-56 pt-56 inter font-medium'>
    <Article/>
    <Certification/>
    <Experience/>
    <Social/>
  </article>
)


export default function Layout() {
  return (
    <SmoothWrapper>
      <div className='h-full w-full flex justify-end'>
          <Content/>
      </div>
    </SmoothWrapper>
  );
}
