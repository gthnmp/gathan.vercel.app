/* eslint-disable react-hooks/exhaustive-deps */
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet  } from 'react-router-dom';
import { useContext } from 'react';
import { StateContext } from './states';
import Cross from './component/Cross';
import { Menu } from './pages/Menu';
import { TableOfContent } from './pages/TableOfContent';
import { About } from './pages/About';
import { Preloader } from './pages/Preload';


const Root = () => {
  const { pathLocation, isDesktop } = useContext(StateContext);
  return (
    <>
      <Outlet/>
      <Preloader />
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
    </Route>
  )
)
  
export default function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}
