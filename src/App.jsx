/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StateContext } from './states';
import SmoothWrapper from './component/SmoothWrapper';
import Cross from './component/Cross';
import Menu from './component/Menu';
import { TableOfContent } from './pages/TableOfContent';
import { About } from './pages/About';
import { Preloader } from './pages/Preload';
const router = createBrowserRouter([
  { path: '/', element: <TableOfContent /> },
  { path: '/about', element: <About /> }
]);

export default function App() {
  const { pathLocation, isDesktop } = useContext(StateContext);
  return (
    <>
      <RouterProvider router={router} />
      <Menu />
      <Preloader />
      {pathLocation === '/' && isDesktop && <Cross />}
    </>
  );
}
