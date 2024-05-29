'use client';
import { Mesh, MeshBasicMaterial } from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useCompoundBody } from '@react-three/cannon';
import { useInput } from './hooks/useInput';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Group18985_default_0: Mesh;
    Box002_default_0: Mesh;
    Object001_default_0: Mesh;
  };
  materials: {
    ['default']: MeshBasicMaterial;
  };
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>
>;

useGLTF.preload('/models/shiba.glb');

export function Shiba(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/shiba.glb') as GLTFResult;

  const position: [x: number, y: number, z: number] = [0, 1, 0];
  const width = 0.65;
  const height = 1.2;
  const front = 0.6;
  const mass = 50;

  const chassisBodyArgs = [width, height, front * 2];

  const [chassisBody, chassisApi] = useCompoundBody(
    () => ({
      position,
      mass: mass,
      rotation: [0, 0, 0],
      collisionFilterGroup: 5,
      shapes: [
        {
          args: chassisBodyArgs,
          position: [0, 0, 0],
          type: 'Box',
        },
      ],
    }),
    useRef(null)
  );

  const { forward, backward, left, right } = useInput();

  useFrame((state, delta) => {
    chassisApi.position.subscribe((pos) => {
      let [x, y, z] = pos;
      if (forward) {
        z += delta;
      }
      if (backward) {
        z -= delta;
      }
      if (right) {
        x -= delta;
      }
      if (left) {
        x += delta;
      }
      chassisApi.position.set(x, y, z);
    });
  });

  return (
    <group ref={chassisBody} {...props}>
      <group position={[0, 0.35, 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Group18985_default_0.geometry}
          material={materials['default']}
        />
        <mesh
          geometry={nodes.Box002_default_0.geometry}
          material={materials['default']}
        />
        <mesh
          geometry={nodes.Object001_default_0.geometry}
          material={materials['default']}
        />
      </group>
    </group>
  );
}
