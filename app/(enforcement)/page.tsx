import EnforceScene from '@/features/enforcement/EnforceScene';
import EnforceHtml from '@/features/enforcement/components/EnforceHtml';
import CanvasLayout from '@/shared/components/3dmodel';
import { SessionProvider } from 'next-auth/react';

export default async function Home({}) {
  return (
    <main>
      <SessionProvider>
        <CanvasLayout>
          <EnforceHtml />
          <EnforceScene />
        </CanvasLayout>
      </SessionProvider>
    </main>
  );
}
