import List from "./List";
export default function Main() {

  const projects = [
    {
      id: '01',
      title: 'Jakarta:\nA Timeless Heritage',
      imagePath: '/assets/jakarta.jpg',
      href: 'https://batavia.vercel.app/',
    },
    {
      id: '02',
      title: 'Shader Art\nThe Introduction',
      imagePath: '/assets/shader.png',
      href: 'https://shaderart-introduction.vercel.app/',
    },
    {
      id: '03',
      title: 'Netflix Documentary:\nAmerican Manhunt',
      imagePath: '/assets/manhunt.jpg',
      href: 'https://americanmanhunt.vercel.app/',
    },
  ];

  return(
    <main className="w-full h-full inter text-3xl font-normal flex justify-start items-center">
      <ul className="flex w-full flex-col gap-20">
        {projects.map(({ id, title, imagePath, href, paragraph }) => (
          List(id, title, href, imagePath, paragraph )
        ))}
      </ul>
    </main>
  )
}
