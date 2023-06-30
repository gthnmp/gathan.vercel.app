
const certifications = [
  {
    name: 'Problem Solving (Basic)',
    issuer: 'Hackerrank',
    date: 'June 2023'
  },
  {
    name: 'React (Basic)',
    issuer: 'Hackerrank',
    date: 'June 2023'
  },
  {
    name: 'Javascript (Basic)',
    issuer: 'Dicoding',
    date: 'June 2023'
  },
  {
    name: 'CSS',
    issuer: 'Hackerrank',
    date: 'June 2023'
  },
  {
    name: 'Python (Basic)',
    issuer: 'Hackerrank',
    date: 'June 2023'
  },
  {
    name: 'Certificate of Competence',
    issuer: ' National Agency for Certification of Professions',
    date: 'March 2023'
  },
  {
    name: 'MikroTik Certified Network Associate',
    issuer: 'MikroTik',
    date: 'October 2022'
  },
];

export default function Certification (){
  return (
    <section id="content" className="relative w-full lg:h-max flex justify-start items-center gap-5">
      <main id="aboutme" className="flex flex-col gap-5 leading-10">
        <p>Certification</p>
        <ul className="pl-10 flex flex-col gap-10">
          {certifications.map((certification, index) => (
            <li key={index} className="flex flex-col gap-1">
              <p>{certification.name}</p>
              <div className="text-base text-gray-500">
                <p>{certification.issuer}</p>
                <p>{certification.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
} 