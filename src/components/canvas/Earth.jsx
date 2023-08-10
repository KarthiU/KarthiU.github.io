
import { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
   
    <primitive
      object={earth.scene}
      scale={4}
      position={[0, -0.5, 0]} 
      rotation-y={0}
    />
  
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2} 
        minPolarAngle={Math.PI / 2} />

        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  ) 
}

export default EarthCanvas
