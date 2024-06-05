'use client';

import React, { useRef } from 'react';
import { Triplet, usePlane } from '@react-three/cannon';
import { Mesh } from 'three';

type Props = {
  rotation: Triplet;
  receivceShadow?: boolean;
  position: Triplet;
};

export function TransparentPlane({
  rotation,
  receivceShadow = false,
  position,
}: Props) {
  const [meshRef] = usePlane(
    () => ({
      type: 'Static',
      rotation,
      position,
    }),
    useRef<Mesh>(null)
  );

  return <mesh ref={meshRef} receiveShadow={receivceShadow}></mesh>;
}
