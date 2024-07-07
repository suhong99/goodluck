'use client';

import CanvasLayout from '@/shared/components/3dmodel/Canvas';
import { ModalContextProvider } from '@/shared/components/portal/ModalContext';
import { color } from '@/shared/constants/color';
import { Physics } from '@react-three/cannon';
import { SessionProvider } from 'next-auth/react';
import { Shiba } from './components/shiba/Shiba';
import Walls from './components/background/Walls';
import { Background } from './components/background';
import TutorialOpener from './components/tutorial';

export default function LuckyShibaCanvas() {
  return (
    <SessionProvider>
      <ModalContextProvider>
        <CanvasLayout color={color.bg} camera={{ position: [0, 2, 4] }}>
          <Physics gravity={[0, -9.8, 0]}>
            {/* <Debug> */}
            <ambientLight />
            <directionalLight position={[0, 5, 5]} />
            <Shiba />
            <Walls />
            <Background />
            {/* <DrawCall /> */}
            {/* <StatsGl /> */}
            <TutorialOpener />
            {/* </Debug> */}
          </Physics>
        </CanvasLayout>
      </ModalContextProvider>
    </SessionProvider>
  );
}
