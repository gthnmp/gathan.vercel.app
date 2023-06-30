/* eslint-disable react-hooks/exhaustive-deps */
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet  } from 'react-router-dom';
import { useContext } from 'react';
import { StateContext } from './states';
import Cross from './component/Cross';
import { Menu } from './pages/Menu';
import { TableOfContent } from './pages/TableOfContent';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';

const Root = () => {
  const { pathLocation, isDesktop } = useContext(StateContext);
  return (
  <>
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
      <Route path="skills" element ={<Skills />} />
    </Route>
  )
)

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Root/>}>
//       <Route index element ={<TableOfContent />} />
//       <Route path="about" element ={<h1>About</h1>} />
//       <Route path="projects" element ={<h1>p</h1>} />
//       <Route path="skills" element ={<h1>s</h1>} />
//     </Route>
//   )
// )
  
export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
