/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import SmoothWrapper from '../../component/SmoothWrapper';
import Content from './Content';
import Minimap from './Minimap';
import './minimap.css'
import { StateContext } from '../../states';

export default function Layout() {
  const { isDesktop } = useContext(StateContext)
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
