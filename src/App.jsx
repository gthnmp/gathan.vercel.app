import './App.css'
import Navbar from './component/Navbar';
import Content from './component/Content';

const Footer = () => {
  return(
    <footer className='w-screen h-96 border-t-2 border-neutral-400 flex items-center justify-center px-16'>
      Footer
    </footer>
  )
}

function App() {
  return (
    <div id = "app" className='bg-neutral-950 relative w-screen h-max text-white flex flex-col justify-center items-center gap-20'>
      <Navbar/>
      <Content/>
    </div>
  )
}

export default App
