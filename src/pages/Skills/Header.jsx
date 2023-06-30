const paragraphs = [
  "I'm a freelance web developer located in Indonesia. I specialize in building interactive user interface, appealing user experience, dynamic web motions and animation.",
  "I love to do problem solving and learning new technologies. Interested in the web development spectrum and working with ambitious projects with interesting and positive people.",
]


const Title = () => {
  return(
    <div className="noto-serif  w-full h-auto">
      <div className="flex flex-col items-center w-max gap-10 ">
        <h1 className="flex flex-col noto-serif text-6xl lg:text-8xl">
          <span>About Me,</span>
          <span>Myself, & I</span>
        </h1>
      </div>

    </div>
  )
}


export default function Header(){
  return (
    <section id = "AboutMe-Header" className="relative w-full lg:h-max flex flex-col justify-start items-center gap-20 lg:gap-40">
      <Title/>
      <main id = "content" className='flex flex-col gap-10  leading-10'>
        {
          paragraphs.map((text, index) => (
            <p key = {index}>
              {text}
            </p>
          ))
        }
      </main>
    </section>
  )
}
