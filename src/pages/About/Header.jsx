const paragraphs = [
  "I'm a freelance web developer located in Indonesia. I specialize in building interactive user interface, appealing user experience, dynamic web motions and animation.",
  "I love to do problem solving and learning new technologies. Interested in the web development spectrum and working with ambitious projects with interesting and positive people.",
]

export default function Header(){
  return (
    <section id = "AboutMe-Header" className="relative w-full lg:h-max flex justify-start items-center gap-5">
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
