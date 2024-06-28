'use client';

import { Background } from '@/features/luckyshiba/components/background';
import Walls from '@/features/luckyshiba/components/background/Walls';
import { Shiba } from '@/features/luckyshiba/components/shiba/Shiba';
import TutorialOpener from '@/features/luckyshiba/components/tutorial';
import CanvasLayout from '@/shared/components/3dmodel/Canvas';
import Loading from '@/shared/components/Loading';

import { color } from '@/shared/contants/color';
import { Physics } from '@react-three/cannon';
import { SessionProvider } from 'next-auth/react';
import { Suspense } from 'react';

export default function LuckyShiba() {
  return (
    <div className="wrapper_3d">
      <Suspense fallback={<Loading />}>
        <SessionProvider>
          <CanvasLayout color={color.bg} camera={{ position: [0, 2, 4] }}>
            <Physics gravity={[0, -9.8, 0]}>
              {/* <Debug> */}
              <ambientLight />
              <directionalLight position={[0, 5, 5]} />
              <Shiba />
              <Walls />
              <Background />
              {/* <DrawCall />
          <StatsGl /> */}
              <TutorialOpener />
              {/* </Debug> */}
            </Physics>
          </CanvasLayout>
        </SessionProvider>
      </Suspense>
    </div>
  );
}
