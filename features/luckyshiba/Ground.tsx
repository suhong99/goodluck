'use client';

import React from 'react';
import { usePlane } from '@react-three/cannon';

// TODO:
export function Ground(props: any) {
  const [meshRef] = usePlane(() => ({
    args: [15, 15],
    mass: 1,
    type: 'Static',
    ...props,
  }));

  return (
    <mesh {...props} ref={meshRef} receiveShadow>
      <planeGeometry args={[15, 15]} />

      <meshStandardMaterial color="white" />
    </mesh>
  );
}
