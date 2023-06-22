/* eslint-disable react/no-unescaped-entities */
export default function Introduction() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-10">
      <h3 className="noto-serif text-base">1</h3>
      <a href = "/" className="text-8xl px-8 hover:text-red-500 text-center w-full leading-tight tracking-wide noto-serif font-medium uppercase">
        <div>About Me,</div>
        <div>Myself, & I</div>
      </a>
      <p className="text-2xl px-8 text-center w-3/4 leading-tight tracking-normal inter font-light">
      I'm a graduate student majoring in Computer and Network Engineering, specializing in software development and networking. I have programming skills in web development, including ReactJS, CSS, Tailwind, ThreeJS, and the MERN Stack. Additionally, I have extensive knowledge in networking, covering routing, switching, VLAN, firewall, and protocols.
      </p>
    </div>
  );
}
