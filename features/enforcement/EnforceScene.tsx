'use client';

import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

import { Environment, SpotLight, Stars } from '@react-three/drei';
import { useEnforceStore } from '@/store/enforcecement';

export default function EnforceScene() {
  const sword = useLoader(GLTFLoader, '/medieval_sword.glb');
  const { status } = useEnforceStore();

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
      <group position={[0, 0, 0]}>
        <mesh scale={15} position={[0, -1.3, 0]}>
          <primitive object={sword.scene}></primitive>
        </mesh>
        {status === '성공' && (
          <SpotLight
            color={0xc7d273}
            position={[0.1, 2, -0.1]}
            angle={0.3}
            distance={4}
            anglePower={15}
            intensity={4}
          />
        )}
      </group>
    </>
  );
}

EnforceScene.displayName = 'EnforceScene';
