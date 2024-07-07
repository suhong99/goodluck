import EnforceCanvas from '@/features/enforcement/EnforceCanvas';
import Loading from '@/shared/components/Loading';
import { Suspense } from 'react';

export default function Home({}) {
  return (
    <div className="wrapper_3d">
      <Suspense fallback={<Loading />}>
        <EnforceCanvas />
      </Suspense>
    </div>
  );
}
