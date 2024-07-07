import LuckyShibaCanvas from '@/features/luckyshiba/LuckyShibaCanvas';
import Loading from '@/shared/components/Loading';

import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: '운좋은 시바',
  openGraph: {
    images:
      'https://github.com/suhong99/goodluck/assets/120103909/8afdafac-fe9b-4638-a4fd-48a35454f3be',
  },
};

export default function LuckyShiba() {
  return (
    <div className="wrapper_3d">
      <Suspense fallback={<Loading />}>
        <LuckyShibaCanvas />
      </Suspense>
    </div>
  );
}
