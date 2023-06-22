/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Canvas,useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react';

const Image = (props) => {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  useFrame(() => {
    ref.current.material.opacity = hovered ? 0.1 : 1;
    ref.current.material.transparent = true;
  });

  return(
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <planeGeometry args={[1.5,2]} scale={1} />
      <meshStandardMaterial color={props.color} map={props.map} side={THREE.DoubleSide} />
    </mesh>
  )
}

const Scene = () => {
  let current = 0;
  let target = 0;
  const ease = 0.075;
  const [ planePosition_Y, setPosition ] = useState(0);
  

  useEffect(() => {
    function lerp (start, end, t){
      return start * (1 - t) + end * t;
    }
    
    function smoothMovement (){
      current = lerp(current, target, ease);
      current = parseFloat(current.toFixed(5))
      target = (window.scrollY / window.innerHeight) * 2;
      target = parseFloat(target.toFixed(5))
      setPosition(current)
      requestAnimationFrame(smoothMovement)
    }
    smoothMovement()
  },[])

  return(
    <>
      <Image color = {0x0000ff} position={[-10, 31 + planePosition_Y, 0]}/>
      <Image color = {0xff0000} position={[-4,  35   + planePosition_Y * 2, 0]}/>
      <Image color = {0x00ff00} position={[ 4, 31 + planePosition_Y * 3, 0]}/>
      <Image color ={0xffff00} position={[ 8,  35   + planePosition_Y, 0]}/>
      <Image color = {0x00ffff} position={[ 8,  27  + planePosition_Y, 0]}/>
    </>
  )
}

export default function Sketch () {
  

  return(
    <div className='h-full w-screen absolute top-0 z-20'>
      <Canvas camera={{ position: [0, 0, 50]}}>
        <pointLight position={[0, 5, 10]} intensity={1} color="white"/>
        <Scene/>
        {/* <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 10]} /> */}
      </Canvas>
    </div>
  )
}
