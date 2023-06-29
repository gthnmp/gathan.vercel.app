
const experiences = [
  {
    title: 'Intern',
    company: 'North Jakarta Immigration Office',
    duration: 'July 2022 - September 2022'
  },
];

export default function Experience(){
  return(
    <section id="content" className="relative w-full lg:h-max flex justify-start items-center gap-5">
      <main id="aboutme" className="flex flex-col gap-5 leading-10">
        <h1>Working Experience</h1>
        <ul className="pl-10 flex flex-col gap-10">
          {experiences.map((experience, index) => (
            <li key={index} className="flex flex-col gap-4">
              <div>
                <h1>{experience.title}</h1>
                <h1>{experience.company}</h1>
              </div>
              <h3 className="text-base text-gray-500">{experience.duration}</h3>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
} 
