'use client';

import CanvasLayout from '@/shared/components/3dmodel/Canvas';
import { color } from '@/shared/constants/color';
import { OrbitControls } from '@react-three/drei';
import { SessionProvider } from 'next-auth/react';
import EnforceHtml from './EnforceHtml';
import EnforceScene from './EnforceScene';

export default function EnforceCanvas() {
  return (
    <SessionProvider>
      <CanvasLayout color={color.bg}>
        <OrbitControls
          makeDefault
          enablePan={false}
          minDistance={2}
          maxDistance={15}
        />
        <EnforceHtml />
        <EnforceScene />
      </CanvasLayout>
    </SessionProvider>
  );
}
