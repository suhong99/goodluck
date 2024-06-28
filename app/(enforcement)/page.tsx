'use client';

import EnforceScene from '@/features/enforcement/EnforceScene';
import EnforceHtml from '@/features/enforcement/components/EnforceHtml';
import CanvasLayout from '@/shared/components/3dmodel/Canvas';
import Loading from '@/shared/components/Loading';
import { color } from '@/shared/contants/color';
import { OrbitControls } from '@react-three/drei';
import { SessionProvider } from 'next-auth/react';
import { Suspense } from 'react';

export default function Home({}) {
  return (
    <div className="wrapper_3d">
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </div>
  );
}
