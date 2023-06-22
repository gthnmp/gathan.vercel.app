/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Canvas,useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const Plane = (props) => {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  useFrame(() => {
    ref.current.material.opacity = hovered ? 0.5 : 1;
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
      <planeGeometry args={[1,1.5]} scale={1} />
      <meshStandardMaterial color={props.color} map={props.map} side={THREE.DoubleSide} />
    </mesh>
  )
}

export default function Sketch () {
  const canvasRef = useRef(null);
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
      current = parseFloat(current.toFixed(4))
      target = (window.scrollY / window.innerHeight) * 2;
      target = parseFloat(target.toFixed(4))
      setPosition(current)
      requestAnimationFrame(smoothMovement)
    }
    smoothMovement()
  },[])
  
  return(
    <div ref = {canvasRef} className='h-screen w-screen absolute top-0 z-20'>
      <Canvas camera={{ position: [0, 0, 5]}}>
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 10]} />
        <Plane color = {0xf0f0f0} position={[-5, -1 + planePosition_Y, 0]}/>
        <Plane color = {0xf0f0f0} position={[-1.5,  1.5   + planePosition_Y * 2, 0]}/>
        <Plane color = {0xf0f0f0} position={[ 0, -3 + planePosition_Y * 3, 0]}/>
        <Plane color ={0xf0f0f0} position={[ 4,  1.5   + planePosition_Y, 0]}/>
        <Plane color = {0xf0f0f0} position={[ 6,  -1  + planePosition_Y, 0]}/>
      </Canvas>
    </div>
  )
}
