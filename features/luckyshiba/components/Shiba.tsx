'use client';
import { Mesh, MeshBasicMaterial, Quaternion, Vector3 } from 'three';
import React, { useMemo, useRef } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useCompoundBody } from '@react-three/cannon';
import { useInput } from '../hooks/useInput';
import { useFrame } from '@react-three/fiber';
import { useFollowCam } from '@/shared/hooks/useFollowCam';
import { any } from 'three/examples/jsm/nodes/Nodes.js';
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
  const { pivot } = useFollowCam();
  const worldPosition = useMemo(() => new Vector3(), []);
  const worldDirection = useMemo(() => new Vector3(), []);
  const worldQuaternion = useMemo(() => new Quaternion(), []);

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
        // {
        //   args: [0.3],
        //   position: [0, 0, 0],
        //   type: 'Sphere',
        // },
      ],
    }),
    useRef(null)
  );

  const { forward, backward, left, right, jump } = useInput();

  const makeFollowCam = () => {
    chassisBody?.current!.getWorldPosition(worldPosition);
    chassisBody?.current!.getWorldDirection(worldDirection);
    // pivot.position.lerp(worldPosition, 0.9);
  };

  const controlMovement = (delta: number) => {
    if (forward || backward) {
      const speed = delta * 4;
      let { x, y, z } = worldPosition;
      let { x: rx, y: ry, z: rz } = worldDirection;

      let [newX, newY, newZ] = [x, y, z];

      if (forward) {
        newX += rx * speed;
        newZ += rz * speed;
      }
      if (backward) {
        newX -= rx * speed;
        newZ -= rz * speed;
      }
      chassisApi.position.set(newX, newY, newZ);
    }

    if (jump) {
      chassisApi.velocity.set(0, 4, 0);
    }

    if (right || left) {
      const turnAngle = 2 * delta;
      const turnQuaternion = new Quaternion();

      if (right) {
        turnQuaternion.setFromAxisAngle(new Vector3(0, 1, 0), -turnAngle);
      }
      if (left) {
        turnQuaternion.setFromAxisAngle(new Vector3(0, 1, 0), turnAngle);
      }
      worldQuaternion.multiplyQuaternions(turnQuaternion, worldQuaternion);
      chassisApi.quaternion.set(
        worldQuaternion.x,
        worldQuaternion.y,
        worldQuaternion.z,
        worldQuaternion.w
      );
    }
  };

  useFrame((_, delta) => {
    makeFollowCam();
    controlMovement(delta);
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
