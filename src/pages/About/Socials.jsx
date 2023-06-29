
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

export default function Social () {
  return (
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
}

