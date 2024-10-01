'use client';

import { Mesh, MeshBasicMaterial, Vector3 } from 'three';
import React, { useMemo, useRef } from 'react';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTF, OrbitControls as OrbitControlsRef } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';
import { useShibaStore } from '@/store/shiba';
import { useShowingProcessStore } from '@/store/showingProcess';
import { ShibaLocation } from '@/shared/constants/model';
import { useModalContext } from '@/shared/components/portal/ModalContext';
import { useMovePosition } from '../../hooks/useMovePosition';
import { useInput } from '../../hooks/useInput';
import { useShibaBody } from '../../hooks/useShibaBody';
import { defineLocation, getRandomEvent } from './shiba.util';
import { useEventProcess } from '../../hooks/useEventProcess';

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
  const {
    eventable,
    applyEventCooldown,
    isLanded,
    setIsLanded,
    getEventableState,
  } = useShibaStore();
  const isWatchingProcess = useShowingProcessStore(
    (state) => state.isWatchingProcess
  );
  const renewProcess = useEventProcess();
  const { open } = useModalContext();
  const { left, right, forward, backward, jump } = useInput();
  const isMoving = forward || backward || left || right;

  const [chassisBody, chassisApi] = useShibaBody({
    collideFn: () => {
      !isLanded && setIsLanded(true);
    },
  });

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

  const interactByPosition = () => {
    const { x, y, z } = new Vector3().setFromMatrixPosition(
      chassisBody.current!.matrixWorld
    );
    const isWatching = isWatchingProcess(x, y, z);
    if (!isWatching && eventable) {
      const currentLoation = defineLocation(x, y, z);
      applyEventCooldown();
      triggerEvent(currentLoation);
    }
  };

  const triggerEvent = (location: ShibaLocation) => {
    const selectedEvent = getRandomEvent(location);
    open({ type: 'shiba', event: selectedEvent }, getEventableState);
    renewProcess(selectedEvent);
  };

  useFrame((_, delta) => {
    makeFollowCam();
    controlMovement(delta);
    !jump && isLanded && isMoving && interactByPosition();
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
