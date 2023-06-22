/* eslint-disable react/no-unescaped-entities */
export default function Introduction() {
  return (
    <section className="w-screen h-auto transition-opacity flex flex-col justify-center items-center gap-10">
      <h3 className="noto-serif text-base">1</h3>
      <a id = "nav-title" href = "/" className="z-30 text-8xl px-8 text-center w-full leading-tight tracking-wide noto-serif font-medium uppercase">
        <div>About Me,</div>
        <div>Myself, & I</div>
      </a>
      <p className="text-3xl px-8 text-neutral-950 text-center w-3/4 leading-tight tracking-wide inter font-light"> I'm a web developer located in Indonesia. I have serious passion for user interface, animations, and dynamic user experiences. Enthusiastic learner and a problem solver. Interested in the web development spectrum and working ambitious projects with interesting and positive people.  
      </p>
    </section>
  );
}
