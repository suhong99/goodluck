'use client';

import { Loader, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { ModalContextProvider } from '../portal/ModalContext';

type CameraOpt = { position: [number, number, number]; fov?: number };

export default function CanvasLayout({
  children,
  color,
  camera,
}: {
  children?: React.ReactNode;
  color: string;
  camera?: CameraOpt;
}) {
  return (
    <>
      <ModalContextProvider>
        <Canvas camera={camera ?? { position: [0, 0, 5], fov: 45 }}>
          <color attach="background" args={[`${color} 100%)`]} />
          {children}
        </Canvas>
      </ModalContextProvider>
    </>
  );
}
