'use client';
import { Group, Mesh, MeshBasicMaterial, Quaternion, Vector3 } from 'three';
import React, { useEffect, useMemo, useRef } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useCompoundBody, useRaycastVehicle } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { useFollowCam } from '@/shared/hooks/useFollowCam';

import { useMovePosition } from '../../hooks/useMovePosition';
import { useInput } from '../../hooks/useInput';

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

export function Shiba() {
  const { nodes, materials } = useGLTF('/models/shiba.glb') as GLTFResult;
  const { pivot } = useFollowCam();
  const worldPosition = useMemo(() => new Vector3(), []);
  const worldDirection = useMemo(() => new Vector3(), []);

  const position: [x: number, y: number, z: number] = [0, 1, 0];

  const width = 0.65;
  const height = 1.2;
  const front = 0.6;
  const mass = 100;

  const chassisBodyArgs = [width, height, front * 2];

  const [chassisBody, chassisApi] = useCompoundBody(
    () => ({
      position,
      mass: mass,
      rotation: [0, 0, 0],
      collisionFilterGroup: 5,
      angularDamping: 0.95,
      shapes: [
        {
          args: chassisBodyArgs,
          position: [0, 0, 0],
          type: 'Box',
        },
      ],
    }),
    useRef<Group>(null)
  );

  const controlMovement = useMovePosition({
    worldDirection,
    worldPosition,
    chassisApi,
    chassisBody,
  });

  const makeFollowCam = () => {
    chassisBody?.current!.getWorldPosition(worldPosition);
    chassisBody?.current!.getWorldDirection(worldDirection);
    // pivot.position.lerp(worldPosition, 0.9);
  };

  useFrame((_, delta) => {
    makeFollowCam();
    controlMovement(delta);
  });

  return (
    <group>
      <group ref={chassisBody} position={[0, 0.5, 20]} castShadow>
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
    </group>
  );
}
