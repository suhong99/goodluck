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
import { useShibaStore } from '@/store/shiba';
import { ShibaLocation } from '@/shared/contants/model';
import { SHIBA_EVENT, ShibaEvent } from '@/shared/contants/shibaEvent';
import { useModalContext } from '@/shared/components/portal/ModalContext';

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
  const { eventable, triggerEvent } = useShibaStore();
  const position: [x: number, y: number, z: number] = [0, 1, 0];
  const { jump } = useInput();
  const width = 0.65;
  const height = 1.2;
  const front = 0.6;
  const mass = 100;
  const { open } = useModalContext();

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

  const checkMapType = () => {
    const { x, y, z } = new Vector3().setFromMatrixPosition(
      chassisBody.current!.matrixWorld
    );
    let newLocation: ShibaLocation;

    if (y < 1.1) {
      newLocation = x > 10.5 && z > 4 ? '언덕' : '강';
    } else {
      newLocation = x >= 2.5 ? '언덕' : '집';
    }

    if (eventable) {
      triggerEvent();
      eventByLocation(newLocation);
    }
  };

  const eventByLocation = (location: ShibaLocation) => {
    const eventList = SHIBA_EVENT[location];
    const { type, percent } = getRandomEvent(eventList);

    open({ type: 'shiba' });

    console.log(
      `Event triggered at ${location}: ${percent}%의 확률로 ${type} `
    );
  };

  const getRandomEvent = (
    eventList: ShibaEvent[]
  ): Omit<ShibaEvent, 'weight'> & { percent: number } => {
    const totalWeight = eventList.reduce((sum, event) => sum + event.weight, 0);
    let random = Math.random() * totalWeight;

    for (const event of eventList) {
      const { type, weight } = event;
      if (random < weight) {
        return { type, percent: Math.floor((weight / totalWeight) * 100) };
      }
      random -= event.weight;
    }
    return {
      type: eventList[eventList.length - 1].type,
      percent:
        Math.floor(eventList[eventList.length - 1].weight / totalWeight) * 100,
    };
  };

  useFrame((_, delta) => {
    makeFollowCam();
    controlMovement(delta);
    !jump && checkMapType();
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
