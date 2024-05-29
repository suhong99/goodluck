'use client';
import { Mesh, MeshBasicMaterial } from 'three';
import React, { useEffect, useRef } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useCompoundBody } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { useInput } from './hooks/useInput';

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
  const { nodes, materials, scene } = useGLTF(
    '/models/shiba.glb'
  ) as GLTFResult;

  console.log(nodes, 'nodes');
  console.log(materials, 'material');

  console.log(scene, 'scene');
  const position: [x: number, y: number, z: number] = [0, 1, 0];

  const width = 0.4;
  const height = 0.6;
  const front = 0.17;
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
        {
          args: [width, height, front],
          position: [0, height, 0],
          type: 'Box',
        },
      ],
    }),
    useRef(null)
  );

  console.log(chassisApi, 'API');
  const currentAction = useRef('');
  const controlsRef = useRef<typeof OrbitControls>();
  const camera = useThree((state) => state.camera);

  const { forward, backward, left, right } = useInput();
  useEffect(() => {}, []);

  console.log(scene);
  useFrame((state, delta) => {});
  return (
    <group ref={chassisBody} {...props} dispose={null}>
      <group position={[0, 0.67, 0]}>
        <mesh
          geometry={nodes.Group18985_default_0.geometry}
          material={materials['default']}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Box002_default_0.geometry}
          material={materials['default']}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.Object001_default_0.geometry}
          material={materials['default']}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}
