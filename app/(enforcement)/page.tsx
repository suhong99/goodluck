import EnforceScene from '@/features/enforcement/EnforceScene';
import EnforceHtml from '@/features/enforcement/components/EnforceHtml';
import CanvasLayout from '@/shared/components/3dmodel';
import Header from '@/shared/components/Header';
import { SessionProvider } from 'next-auth/react';

export default async function Home({}) {
  return (
    <main>
      <Header />
      <SessionProvider>
        <CanvasLayout>
          <EnforceHtml />
          <EnforceScene />
        </CanvasLayout>
      </SessionProvider>
    </main>
  );
}
