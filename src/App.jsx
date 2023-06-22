/* eslint-disable no-unused-vars */
import './App.css'
import { useEffect, useRef, useState } from "react";
import Content from './component/Content';

function App() {
  return (
    <div id = "app" className='bg-slate-900 relative w-screen h-max text-neutral-900 flex flex-col justify-center items-center gap-20'>
      <Content />
    </div>
  )
}

export default App
