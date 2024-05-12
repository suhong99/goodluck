'use client';

import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import Handler from './components/Handler';
import { useEffect, useRef, useState } from 'react';
import { BufferAttribute, BufferGeometry, PointsMaterial } from 'three';
import { Environment, Points, Sparkles, Stars } from '@react-three/drei';

export default function EnforceScene() {
  const lightRef = useRef();
  const [intensity, setIntensity] = useState(0);

  // 조명의 강도를 깜박거리게 만드는 함수

  // const glb = useLoader(GLTFLoader, '/hammer.glb');
  // const glb2 = useLoader(GLTFLoader, '/shiba.glb');
  const glb2 = useLoader(GLTFLoader, '/medieval_sword.glb');

  console.log(glb2);
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
      {/* 안예쁨ㅋㅋ... */}
      <Sparkles
        position={[0, -1, 0]}
        count={4000}
        // speed?: number | Float32Array
        // opacity?: number | Float32Array
        opacity={0.2}
        // color?: THREE.ColorRepresentation | Float32Array
        color="khaki"
        // size?: number | Float32Array
        size={1}
        // scale?: number | [number, number, number] | THREE.Vector3
        scale={0.5}
        // noise?: number | [number, number, number] | THREE.Vector3 | Float32Array
        noise={3}
      />
      <Handler />
      <mesh scale={15} position={[0, -1, 0]}>
        <primitive object={glb2.scene}></primitive>
      </mesh>
      {/* <ambientLight intensity={40} /> */}
    </>
  );
}

EnforceScene.displayName = 'EnforceScene';
