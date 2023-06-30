const paragraphs = [
  "I have worked on several projects in the past, but I have handpicked a few of my favorites to showcase in my portfolio. ",
  "First, I'm currently working on a website dedicated to exploring the captivating history of Jakarta. While it's not quite finished yet, this project reflects my passion for unearthing and sharing the forgotten stories that shape the vibrant city. Through this digital platform, I aim to create an immersive experience that educates visitors about Jakarta's rich cultural heritage and leaves them with a newfound appreciation for its past.",
  "Another project I'm proud of involves creating mesmerizing shader art using Three.js and GLSL. By combining my love for art and mathematics, I dive into the world of graphics manipulation. I utilize applied mathematics to craft visually stunning compositions that evoke strong emotions and captivate viewers. These shader art pieces are not only visually striking but also showcase the intricate interplay between art and mathematical principles.",
  "Lastly, I recreated the landing page of Netflix, focusing specifically on the gripping American Manhunt documentary series. With great attention to detail, I carefully studied and reconstructed the original layout, capturing the essence of Netflix's visual identity while infusing it with the thrilling atmosphere of the series. This project demonstrates my ability to recreate immersive digital experiences that pay homage to their source material, combining creativity with precision."
]

const Title = () => (
  <section className="flex flex-col gap-10 items-center justify-center">
    <h1 className="flex flex-col noto-serif text-8xl items-start tracking-wide">
      <span>Selected</span>
      <span>Projects</span>
    </h1>
  </section>
)

const Article = () => (
  <main className="flex flex-col gap-10 leading-10">
    {paragraphs[0]}
  </main>
)



export default function Header(){
  return (
    <header className="w-full h-full flex flex-col justify-start items-start gap-40">
      <Title/>
      <Article/>
    </header>
  )
} 