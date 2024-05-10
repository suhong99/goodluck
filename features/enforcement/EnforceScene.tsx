'use client';

import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import Handler from './components/Handler';
import { Suspense } from 'react';

export default function EnforceScene() {
  // const glb = useLoader(GLTFLoader, '/hammer.glb');
  const glb2 = useLoader(GLTFLoader, '/shiba.glb');

  return (
    <>
      <Handler />
      <mesh scale={1.3}>
        <primitive object={glb2.scene}></primitive>
      </mesh>
    </>
  );
}

EnforceScene.displayName = 'EnforceScene';
