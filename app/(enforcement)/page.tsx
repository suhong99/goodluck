import EnforceCanvas from '@/features/enforcement/EnforceCanvas';
import Loading from '@/shared/components/Loading';
import { Suspense } from 'react';

export default function Home({}) {
  return (
    <div className="WH100">
      <Suspense fallback={<Loading />}>
        <EnforceCanvas />
      </Suspense>
    </div>
  );
}
