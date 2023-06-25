/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

import vertex from '../shaders/vertex.glsl'
import fragment from '../shaders/fragment.glsl'

function calculateScaleFactor(texture, containerSize){
  const containerAspectRatio = containerSize.x / containerSize.y;
  const imageAspectRatio = texture.image.width / texture.image.height;

  let scaleFactorX = 1;
  let scaleFactorY = 1;
  
  const landscapeFactor = imageAspectRatio / containerAspectRatio;
  const portraitFactor = containerAspectRatio / imageAspectRatio;
  
  const isLandscapeModeContainer = containerAspectRatio >= 1;
  const isContainerRatioStronger = containerAspectRatio >= imageAspectRatio;
  
  
  if (isContainerRatioStronger) {
    scaleFactorY = isLandscapeModeContainer ? landscapeFactor : portraitFactor;
  } else {
    scaleFactorX = isLandscapeModeContainer ? landscapeFactor : portraitFactor;
  }

  return {scaleFactorX, scaleFactorY}
}

const Item = ({texture, dimension, ...props}) => {
  const ref = useRef()
  const { scaleFactorX, scaleFactorY } = calculateScaleFactor(texture, dimension)
  const uniforms = {
    uTexture : { value : texture },
    uScaleFactorX : { value : scaleFactorX },
    uScaleFactorY: { value : scaleFactorY },
  }

  return(
    <mesh {...props} ref={ref}>
      <planeGeometry args={[dimension.x, dimension.y]} scale={1} />
      <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={uniforms} />
    </mesh>
  )
}

const Scene = () => {
  const [ planePosition_Y, setPosition ] = useState(0);
  
  const landscapeContainerDimensions = new THREE.Vector2(3, 2);
  const potraitContainerDimensions = new THREE.Vector2(2, 3);
  const images = [
    { 
      path : '/assets/2.jpg',  
      position:[ -10, (32 + planePosition_Y * 2), 0 ]
    },
    { 
      path : '/assets/3.jpg',         
      position:[ -4, (35 + planePosition_Y * 2), 0 ]
    },
    { 
      path : '/assets/4.jpg',        
      position:[ 4.5, (32 + planePosition_Y * 3), 0]
    },
    { 
      path : '/assets/5.jpg',      
      position:[ 8, (35 + planePosition_Y * 3), 0 ]
    },
    { 
      path : '/assets/6.jpg',      
      position:[ 8, (27 + planePosition_Y * 2), 0 ]
    },
  ]

  /**
   * This useEffect is used to smooth the image movement 
   * */  
  useEffect(() => {
    let current = 0;
    let target = 0;
    const ease = 0.075;
    function lerp (start, end, t){
      return start * (1 - t) + end * t;
    }
    
    function smoothImageMovement (){
      current = lerp(current, target, ease);
      current = parseFloat(current.toFixed(5))
      target = (window.scrollY / window.innerHeight) * 2;
      target = parseFloat(target.toFixed(5))
      setPosition(current)
      requestAnimationFrame(smoothImageMovement)
    }
    smoothImageMovement()
  },[])

  return(
    <group>
      {images.map((component, key) => {
          return(
            <Item position={component.position} texture={useTexture(component.path)} dimension={potraitContainerDimensions} key={key}/>
          )
        })
      }
    </group>
  )
}

export default function Sketch () {
  return(
    <div className='h-full w-screen absolute top-0 z-20'>
      <Canvas camera={{ position: [0, 0, 50]}}>
        {/* <pointLight position={[0, 5, 100]} intensity={1} color="white"/> */}
        <Scene/>
      </Canvas>
    </div>
  )
}
