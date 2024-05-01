import { auth } from '@/auth';
import EnforceScene from '@/features/enforcement/EnforceScene';
import CanvasLayout from '@/shared/components/3dmodel';
import Header from '@/shared/components/Header';

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <Header />
      <div>{JSON.stringify(session, null, 2)}</div>
      <CanvasLayout>
        <EnforceScene />
      </CanvasLayout>
    </main>
  );
}
