/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react'
import { Canvas,useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Box(props) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <planeGeometry args={[1,1.5]} scale={1} />
      <meshStandardMaterial color={0xf0f0f0} side={THREE.DoubleSide} />
    </mesh>
  )
}

export default function Graphic() {
  return (
    <div className='h-screen w-screen absolute top-0 z-20'>
      <Canvas className='' camera={{ position:[0,0,5], fov:75}}>
        <ambientLight intensity={0.1} />
        <pointLight position={[0,  0, 10]} />
        {/* <CameraHelper/> */}
        <Box position={[-3, 1, 0]} />
        <Box position={[4, 2, 0]} />
        <Box position={[-5, -1.5, 0]} />
        <Box position={[4, -1.5, 0]} />
        <Box position={[0, 2.5, 0]} />
        {/* <OrbitControls/> */}
      </Canvas>
    </div>
  )
}
