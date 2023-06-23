/* eslint-disable react/no-unescaped-entities */
export default function Introduction() {
  return (
    <section className="w-screen h-auto transition-opacity duration-500 flex flex-col justify-center items-center gap-10">
      <h3 className="noto-serif text-base">1</h3>
      <a id = "nav-title" href = "/" className="z-30 lg:text-8xl text-5xl px-8 text-center w-full leading-tight tracking-wide noto-serif font-medium uppercase">
        <div>About Me,</div>
        <div>Myself, & I</div>
      </a>
      <p className="lg:text-3xl text-xl px-8 text-center w-full lg:w-3/5 leading-tight tracking-wide inter font-light"> I'm a web developer located in Indonesia. I have serious passion for user interface, animations, and dynamic user experiences. Enthusiastic learner and a problem solver. Interested in the web development spectrum and working ambitious projects with interesting and positive people.  
      </p>
    </section>
  );
}
