/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import image1 from '../assets/1.jpeg';

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
    <section className="w-screen h-auto flex flex-col justify-center items-center gap-10  transition-opacity duration-1000">
      <h3 className="noto-serif text-base">2</h3>
      <a href='/' id = "nav-title" className="text-8xl px-8 text-center w-full leading-tight tracking-wide noto-serif font-medium uppercase">
        <div>Selected</div>
        <div>Projects</div>

      </a>
      <p className="text-3xl px-8 text-center w-3/4 leading-tight tracking-normal inter font-light">
      {"I have created a website exploring Jakarta's history and cultural heritage, and another website dedicated to the Netflix series 'American Manhunt,' providing fans with detailed information about the show, its characters, episodes, and behind-the-scenes trivia."}
      </p>
    </section>
  );
}
