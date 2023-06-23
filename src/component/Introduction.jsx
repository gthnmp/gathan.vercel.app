/* eslint-disable react/no-unescaped-entities */
import { BsArrowDown } from 'react-icons/bs'

export default function Introduction() {
  return (
    <div id = "introduction" className="relative w-screen h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="lg:text-8xl text-6xl px-8 text-center w-full leading-none tracking-normal inter font-semibold uppercase">
        <div>Gathan</div>
        <div>Mahesa</div>
      </h1>
      <p className="lg:text-3xl text-xl px-8 text-center w-full lg:w-3/5 leading-snug tracking-tight inter font-light">
        Hey there! Welcome to my personal portfolio. I'm truly honored to have you here. Take a peek at my projects. Sit back, relax, and enjoy your visit!
      </p>
      <BsArrowDown className='absolute bottom-20'/>
    </div>
  );
}
