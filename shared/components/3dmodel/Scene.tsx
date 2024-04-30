'use client';

import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

export default function Scene() {
  const glb = useLoader(GLTFLoader, '/hammer.glb');
  const glb2 = useLoader(GLTFLoader, '/shiba.glb');

  return (
    <>
      <mesh scale={1.3} rotation-x={-Math.PI / 2} position={[2, 0, 0]}>
        <primitive object={glb.scene}></primitive>
      </mesh>
      <mesh scale={1.3}>
        <primitive object={glb2.scene}></primitive>
      </mesh>
    </>
  );
}
