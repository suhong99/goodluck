import EnforceCanvas from '@/features/enforcement/EnforceCanvas';
import JSONLD from '@/shared/components/JsonLD';
import Loading from '@/shared/components/Loading';
import { Suspense } from 'react';

export default function Home({}) {
  return (
    <div className="WH100">
      <JSONLD />
      <Suspense fallback={<Loading />}>
        <EnforceCanvas />
      </Suspense>
    </div>
  );
}
