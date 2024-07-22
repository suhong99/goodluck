'use client';

import { Mesh, MeshBasicMaterial, Vector3 } from 'three';
import React, { useMemo, useRef } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTF, OrbitControls as OrbitControlsRef } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';

import { useMovePosition } from '../../hooks/useMovePosition';
import { useInput } from '../../hooks/useInput';
import { useShibaStore } from '@/store/shiba';
import { ShibaLocation } from '@/shared/constants/model';
import {
  EventResultProps,
  SHIBA_EVENT,
  ShibaEvent,
} from '@/shared/constants/shibaEvent';
import { useModalContext } from '@/shared/components/portal/ModalContext';
import { checkNewEvent } from '@/remote/shiba';
import { useShibaEventStore } from '@/store/shibaEvent';
import { useShowingProcessStore } from '@/store/showingProcess';
import { useSession } from 'next-auth/react';
import { useShibaBody } from '../../hooks/useShibaBody';

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

useGLTF.preload('/models/shiba.glb');

export function Shiba() {
  const { nodes, materials } = useGLTF('/models/shiba.glb') as GLTFResult;
  const worldPosition = useMemo(() => new Vector3(), []);
  const worldDirection = useMemo(() => new Vector3(), []);
  const { eventable, blockEvent, isLanded, setIsLanded, getEventableState } =
    useShibaStore();

  const { setIsVisible } = useShowingProcessStore();
  const { left, right, forward, backward, jump } = useInput();
  const isMoving = forward || backward || left || right;

  const { open } = useModalContext();
  const { data } = useSession();

  const { eventList, setEventStatus } = useShibaEventStore();

  const [chassisBody, chassisApi] = useShibaBody({
    collideFn: () => {
      !isLanded && setIsLanded(true);
    },
  });

  //
  const controlMovement = useMovePosition({
    worldDirection,
    worldPosition,
    chassisApi,
    chassisBody,
    inputState: { left, right, forward, backward, jump },
  });

  const orbitControlsRef = useRef<OrbitControlsRef>(null);

  const makeFollowCam = () => {
    chassisBody?.current!.getWorldPosition(worldPosition);
    chassisBody?.current!.getWorldDirection(worldDirection);
    if (orbitControlsRef.current) {
      orbitControlsRef.current.target.copy(worldPosition);
    }
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
      blockEvent();
      eventByLocation(newLocation);
    }

    if (Math.abs(5.5 - x) < 1 && Math.abs(-2.8 - z) < 1 && y < 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const eventByLocation = (location: ShibaLocation) => {
    const occurableEvents = SHIBA_EVENT[location];
    const selectedEvent = getRandomEvent(occurableEvents);
    open({ type: 'shiba', event: selectedEvent }, getEventableState);
    const userId = data?.user?.email;
    if (!eventList[selectedEvent.type]) {
      setEventStatus(selectedEvent.type);
      userId &&
        checkNewEvent({
          id: userId,
          type: selectedEvent.type,
        });
    }
  };

  const getRandomEvent = (eventList: ShibaEvent[]): EventResultProps => {
    const totalWeight = eventList.reduce((sum, event) => sum + event.weight, 0);
    let random = Math.random() * totalWeight;

    for (const event of eventList) {
      const { weight } = event;
      if (random < weight) {
        return { ...event, percent: Math.floor((weight / totalWeight) * 100) };
      }
      random -= event.weight;
    }
    return {
      ...eventList[eventList.length - 1],
      percent:
        Math.floor(eventList[eventList.length - 1].weight / totalWeight) * 100,
    };
  };

  useFrame((_, delta) => {
    makeFollowCam();
    controlMovement(delta);
    !jump && isLanded && isMoving && checkMapType();
  });

  return (
    <>
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
      <OrbitControls ref={orbitControlsRef} minDistance={2} maxDistance={10} />
    </>
  );
}
