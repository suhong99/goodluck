'use client';
import { Mesh, MeshBasicMaterial } from 'three';
import React, { useEffect, useRef, useState } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useCompoundBody } from '@react-three/cannon';
import { useInput } from './hooks/useInput';
import { useFrame, useThree } from '@react-three/fiber';

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

  // const controlRef = useRef<typeof OrbitControls>();
  // const camera = useThree((state) => state.camera);
  const [chassisPosition, setChassisPosition] =
    useState<[number, number, number]>(position);
  const [chassisRotation, setChassisRotation] = useState<
    [number, number, number]
  >([0, 0, 0]);

  useEffect(() => {
    const unsubscribePosition = chassisApi.position.subscribe((pos) => {
      setChassisPosition(pos as [number, number, number]);
    });

    const unsubscribeRotation = chassisApi.rotation.subscribe((rot) => {
      setChassisRotation(rot as [number, number, number]);
    });

    return () => {
      unsubscribePosition();
      unsubscribeRotation();
    };
  }, [chassisApi]);

  useFrame((state, delta) => {
    let [x, y, z] = chassisPosition;
    let [rx, ry, rz] = chassisRotation;

    if (forward) {
      x += Math.sin(ry) * delta;
      z += Math.cos(ry) * delta;
    }
    if (backward) {
      x -= Math.sin(ry) * delta;
      z -= Math.cos(ry) * delta;
    }
    if (right) {
      ry -= delta;
    }
    if (left) {
      ry += delta;
    }

    chassisApi.position.set(x, y, z);
    chassisApi.rotation.set(rx, ry, rz);
  });

  return (
    <>
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
    </>
  );
}
