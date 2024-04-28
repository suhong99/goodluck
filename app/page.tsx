// import Image from 'next/image';
// import styles from './page.module.css';

import { auth } from '@/auth';
import CanvasLayout from '@/shared/components/3dmodel';
import Scene from '@/shared/components/3dmodel/Scene';
import Header from '@/shared/components/Header';

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <Header />
      <div>{JSON.stringify(session, null, 2)}</div>
      <CanvasLayout>
        <Scene />
      </CanvasLayout>
    </main>
  );
}
