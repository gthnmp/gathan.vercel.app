/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import image1 from '../assets/1.jpeg';
import image2 from '../assets/2.jpeg';
import image3 from '../assets/3.jpeg';
import image4 from '../assets/4.jpeg';

function ProjectCard({ image, alt, context, title }) {
  return (
    <div className="w-full lg:w-80 h-96 md:h-96 grayscale hover:grayscale-0 duration-500">
      <img src={image} alt={alt} className="w-full h-full object-cover drop-shadow-2xl" />
      <div className="pt-10 flex flex-col items-center gap-2">
        <h1 className="text-xl font-light">{title}</h1>
        <p className="text-xs text-black font-light">{context}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="w-screen h-max lg:h-screen flex flex-col items-start px-8 md:px-24 relative">
      <h1 id="heading" className="lg:absolute text-7xl py-5 lg:text-9xl w-1/2 leading-tight tracking-wide inter font-semibold">
        Selected Projects.
      </h1>

      <div className="lg:absolute top-52 right-0  w-full h-full flex justify-center inter">
        <div className="h-auto grid grid-cols-1 lg:grid-cols-2 grid-rows-1 lg:grid-row-2 lg:gap-x-20 gap-y-28">
          <ProjectCard
            image="https://images.unsplash.com/photo-1578933356686-0592aa9c5363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
            alt="Timeless Heritage"
            context={"June 2023"}
            title="Jakarta: A Timeless Heritage"
          />

          <ProjectCard
            image={image1}
            alt="Redesign Netflix Website"
            context={"May 2023"}
            title="The American Manhunt Website"
          />
        </div>
      </div>
    </div>
  );
}
