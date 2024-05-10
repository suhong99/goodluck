'use client';

import { Loader, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

export default function CanvasLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['rgb(195, 195, 195) 100%)']} />
        <OrbitControls
          makeDefault
          enablePan={false}
          minDistance={2}
          maxDistance={15}
        />
        <>
          <Suspense fallback={null}>{children}</Suspense>
        </>
      </Canvas>
      <Loader />
    </>
  );
}
