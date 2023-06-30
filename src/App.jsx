/* eslint-disable react-hooks/exhaustive-deps */
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet  } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { StateContext } from './states';
import Cross from './component/Cross';
import { Menu } from './pages/Menu';
import { TableOfContent } from './pages/TableOfContent';
import { About } from './pages/About';
import { Preloader } from './pages/Preload';
import { Projects } from './pages/Projects';
import Transition from './component/Transition';
import Revealer from './pages/Preload/revealer';

const Root = () => {
  const { pathLocation, isDesktop } = useContext(StateContext);

  // useEffect(() => {
  //   const revealer = new Revealer()
  //   const handleBeforeUnload = (event) => {
  //     revealer.reveal(); // Call the revealer.reveal() function here
  //     delete event.returnValue; // Required for Chrome compatibility
  //   };

  //   window.addEventListener('load', handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener('load', handleBeforeUnload);
  //   };
  // }, []);

  return (
    <>
      {/* <Preloader /> */}
      {/* <Transition/> */}
      <Outlet />
      <Menu />
      {pathLocation === '/' && isDesktop && <Cross />}
    </>
    )
  }

  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element ={<TableOfContent />} />
      <Route path="about" element ={<About />} />
      <Route path="projects" element ={<Projects />} />
    </Route>
  )
)
  
export default function App() {
  return (
    <>
      {/* <Transition/> */}
      <RouterProvider router={router}/>
    </>
  );
}
