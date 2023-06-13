/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
export default function About() {
  return (
    <div className="w-screen h-full flex flex-col items-start  px-24 py-16">
      <h1 id="heading" className="relative text-5xl w-1/2 leading-normal tracking-wide inter font-thin">
        About Me
      </h1>

      <div className="w-full h-full mt-10">
        <div className="h-auto flex flex-col gap-20 justify-start md:flex-row">
          
          <div className="inter flex flex-col items-center w-1/3">
            <p className="text-xl font-thin leading-8">
              I drink coffee, I eat rice, I write code, and improve my design and skills everyday. I am honored to
              work with special people. Let's connect and explore exciting opportunities together!
            </p>
          </div>

          <div className="inter flex flex-col items-center">
            <ul className="font-thin flex flex-col gap-1">
              <li>
                <a id="nav" href="https://github.com/gthnmp" target='_blank' className="relative py-1 cursor-pointer">
                  Github
                </a>
              </li>
              <li>
                <a id="nav" href="https://linkedin.com/in/gathan" target ="_blank" className="relative py-1 cursor-pointer">
                  Linkedin
                </a>
              </li>
              <li>
                <a id="nav" href ="https://twitter.com/viograce_" target="_blank" className="relative py-1 cursor-pointer">
                  Twitter
                </a>
              </li>
              <li>
                <a id="nav" href ="https://www.instagram.com/gthnmp/" target="_blank" className="relative py-1 cursor-pointer">
                  Instagram
                </a>
              </li>
              <li>
                <a id="nav" href='mailto:gthnmp@gmail.com' className="relative py-1 cursor-pointer">
                  Mail
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
