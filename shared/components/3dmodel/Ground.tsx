'use client';

import React, { useRef } from 'react';
import { Triplet, usePlane } from '@react-three/cannon';
import { Mesh } from 'three';

type Props = {
  rotation?: Triplet;
  position?: Triplet;
};

export function Ground({
  rotation = [-Math.PI / 2, 0, 0],
  position = [0, 0, 0],
}: Props) {
  const [meshRef] = usePlane(
    () => ({
      args: [15, 15],
      mass: 1,
      type: 'Static',
      rotation,
      position,
    }),
    useRef<Mesh>(null)
  );

  return <mesh ref={meshRef} receiveShadow></mesh>;
}
