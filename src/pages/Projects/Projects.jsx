/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect } from 'react';
import SmoothWrapper from '../../component/SmoothWrapper';
import Content from './Content';
import Minimap from './Minimap';
import './Projects.css'
import { StateContext } from '../../states';

export default function Layout() {
  const { isDesktop, setLocation } = useContext(StateContext)
  useEffect(() => {
    document.title = "Projects"
    setLocation('/projects')
  },[])

  return (
    <>
      <SmoothWrapper>
        <article className="h-full w-full flex justify-end">
          <Content />
        </article>
      </SmoothWrapper>
      {!isDesktop && <Minimap />}
    </>
  );
}
