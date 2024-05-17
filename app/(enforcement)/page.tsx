import EnforceScene from '@/features/enforcement/EnforceScene';
import EnforceHtml from '@/features/enforcement/components/EnforceHtml';
import CanvasLayout from '@/shared/components/3dmodel';
import Header from '@/shared/components/Header';

export default async function Home({}) {
  return (
    <main>
      <Header />
      <CanvasLayout>
        <EnforceHtml />
        <EnforceScene />
      </CanvasLayout>
    </main>
  );
}
