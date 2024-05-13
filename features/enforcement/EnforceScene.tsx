'use client';

import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import Handler from './components/Handler';

import { Environment, SpotLight, Stars } from '@react-three/drei';

export default function EnforceScene() {
  const sword = useLoader(GLTFLoader, '/medieval_sword.glb');

  return (
    <>
      <Environment preset="city" />
      <Stars
        radius={80}
        depth={50}
        count={6000}
        factor={5}
        saturation={1}
        fade={true}
        speed={2}
      />

      <Handler />
      <group>
        <mesh scale={15} position={[0, -1, 0]}>
          <primitive object={sword.scene}></primitive>
        </mesh>
        <SpotLight
          color={0xc7d273}
          position={[0, 2, 0]}
          angle={0.3}
          distance={4}
          anglePower={15}
          intensity={4}
        />
      </group>
    </>
  );
}

EnforceScene.displayName = 'EnforceScene';
