'use client';
import {
  Euler,
  Group,
  Mesh,
  MeshBasicMaterial,
  Quaternion,
  Vector3,
} from 'three';
import React, { useEffect, useMemo, useRef } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useCompoundBody, useRaycastVehicle } from '@react-three/cannon';
import { useInput } from '../../hooks/useInput';
import { useFrame } from '@react-three/fiber';
import { useFollowCam } from '@/shared/hooks/useFollowCam';
import { useWheels } from '../../hooks/useWheels';
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
  // const worldQuaternion = useMemo(() => new Quaternion(), []);
  const velocity = useRef([0, 0, 0]);
  const { forward, backward, left, right, jump, stand } = useInput();

  const position: [x: number, y: number, z: number] = [0, 1, 0];
  const width = 0.65;
  const height = 1.2;
  const front = 0.6;
  const mass = 100;
  const engineForce = 200;

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
    useRef<Group>(null)
  );

  const [wheels, wheelInfos] = useWheels({ width, height, front });

  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos,
      wheels,
    }),
    useRef<Group>(null)
  );

  const makeFollowCam = () => {
    chassisBody?.current!.getWorldPosition(worldPosition);
    chassisBody?.current!.getWorldDirection(worldDirection);
    chassisApi.velocity.subscribe((v) => (velocity.current = v));
    // pivot.position.lerp(worldPosition, 0.9);
  };

  useEffect(() => {
    if (forward) {
      vehicleApi.applyEngineForce(engineForce, 2);
      vehicleApi.applyEngineForce(engineForce, 3);
    } else if (backward) {
      vehicleApi.applyEngineForce(-engineForce, 2);
      vehicleApi.applyEngineForce(-engineForce, 3);
    } else {
      vehicleApi.applyEngineForce(0, 2);
      vehicleApi.applyEngineForce(0, 3);
    }

    if (left) {
      vehicleApi.setSteeringValue(0.35, 2);
      vehicleApi.setSteeringValue(0.35, 3);
      vehicleApi.setSteeringValue(-0.1, 0);
      vehicleApi.setSteeringValue(-0.1, 1);
    } else if (right) {
      vehicleApi.setSteeringValue(-0.35, 2);
      vehicleApi.setSteeringValue(-0.35, 3);
      vehicleApi.setSteeringValue(0.1, 0);
      vehicleApi.setSteeringValue(0.1, 1);
    } else {
      for (let i = 0; i < 4; i++) {
        vehicleApi.setSteeringValue(0, i);
      }
    }
    if (jump) {
      const [x, y, z] = velocity.current;
      chassisApi.velocity.set(x * 1.2, y + 7, z * 1.2);
    }

    if (stand) {
      const rotateQuaternion = new Quaternion().setFromAxisAngle(
        new Vector3(0, 1, 0),
        Math.PI / 2
      );
      const currentQuaternion = new Quaternion().setFromUnitVectors(
        new Vector3(1, 0, 0),
        worldDirection
      );
      currentQuaternion.multiply(rotateQuaternion); // y축 회전 적용
      chassisApi.quaternion.set(
        currentQuaternion.x,
        currentQuaternion.y,
        currentQuaternion.z,
        currentQuaternion.w
      ); // 쿼터니언을 직접 설정
    }
  }, [
    backward,
    stand,
    worldDirection,
    chassisApi,
    forward,
    jump,
    left,
    right,
    vehicleApi,
  ]);

  useFrame((_, delta) => {
    makeFollowCam();
  });

  return (
    <group ref={vehicle}>
      <group ref={chassisBody} position={[0, 0.5, 20]} castShadow>
        <group position={[0, 0.35, -0.5]} rotation={[-Math.PI / 2, 0, Math.PI]}>
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
