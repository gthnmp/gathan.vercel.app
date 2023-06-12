/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import image1 from '../assets/1.jpeg';
import image2 from '../assets/2.jpeg';
import image3 from '../assets/3.jpeg';
import image4 from '../assets/4.jpeg';
import serviceImage from '../assets/Timothee.jpeg'
import '../App.css'

function ProjectCard({ image, alt, tags, title }) {
  return (
    <div>
      <div className="w-80 h-80 grayscale">
        <img src={image} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="py-5">
        <h1 className="text-xs text-gray-400">{tags.join(', ')}</h1>
        <p className="text-xl">{title}</p>
      </div>
    </div>
  );
}

const Headline = () => (
  <div className="w-screen h-screen flex justify-center items-center">
    <h1 className="text-5xl w-3/5 leading-normal tracking-wide inter font-thin">
      I do frontend development, sysadmin, networking, video editing, and graphic design sometimes.
    </h1>
  </div>
)

const Projects = () => (
  <div className="w-screen h-full flex flex-col items-start px-24 py-16 ">
    <h1 id="heading" className="relative text-5xl w-1/2 leading-normal tracking-wide inter font-thin">
      Selected Projects
    </h1>

    <div className="w-full h-full flex justify-center mt-10">
      <div className="h-auto grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4 md:gap-x-4 gap-y-10">
        <ProjectCard
          image={image3}
          alt="Personal Portfolio"
          tags={['Frontend Development', 'Graphic Design']}
          title="Personal Portfolio"
        />

        <ProjectCard
          image={image1}
          alt="Redesign Netflix Website"
          tags={['Frontend Development']}
          title="Redesign Netflix Website"
        />

        <ProjectCard
          image={image2}
          alt="School Profile Video"
          tags={['Video Editing']}
          title="School Profile Video"
        />
      </div>
    </div>
  </div>
)

const Services = () => (
  <div className="w-screen h-full flex flex-col items-start px-24 py-16 ">
    <h1 id="heading" className="relative text-5xl w-1/2 leading-normal tracking-wide inter font-thin">
      Services
    </h1>

    <div className="w-full h-full flex justify-end items-center gap-20 mt-10">
      <ul className='inter font-thin text-2xl flex flex-col gap-4'>
        <li><a id = "nav" className='relative py-1 cursor-pointer'>Frontend Development</a></li>
        <li><a id = "nav" className='relative py-1 cursor-pointer'>Sysadmin</a></li>
        <li><a id = "nav" className='relative py-1 cursor-pointer'>Networking</a></li>
        <li><a id = "nav" className='relative py-1 cursor-pointer'>Video Editing</a></li>
        <li><a id = "nav" className='relative py-1 cursor-pointer'>Graphic Design</a></li>
      </ul>
      <div className='bg-green-500 w-60 h-72'>
        <img src={serviceImage} alt="" className='w-full h-full object-cover grayscale' />
      </div>
    </div>
  </div>
)

const About = () => (
  <div className="w-screen h-full flex flex-col items-start px-24 py-16 ">
    <h1 className="relative text-5xl w-1/2 leading-normal tracking-wide inter font-thin">
      About Me
    </h1>

    <div className="w-full h-full flex justify-center mt-10">
      <div className="h-auto grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-4 md:gap-x-4 gap-y-10">

        <div className='inter flex flex-col items-center'>
          <p className='text-xl font-thin leading-8'>I drink coffee, I eat rice, I write code, and improve my design and skills everyday. I am honored to work with special people. Let's connect and explore exciting opportunities together!</p>
        </div>

        <div className='inter flex flex-col items-center'>
          <ul className = 'font-thin flex flex-col gap-1'>
            <li><a id = "nav" className='relative py-1 cursor-pointer'>Github</a></li>
            <li><a id = "nav" className='relative py-1 cursor-pointer'>Linkedin</a></li>
            <li><a id = "nav" className='relative py-1 cursor-pointer'>Twitter</a></li>
            <li><a id = "nav" className='relative py-1 cursor-pointer'>Instagram</a></li>
            <li><a id = "nav" className='relative py-1 cursor-pointer'>gthnmp@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default function Content() {
  return (
    <main className="w-full h-full flex items-center px-24 flex-col">
      <Headline/>
      <Projects/>
      <Services/>
      <About/>
    </main>
  );
}


