import { auth } from '@/auth';

import styles from '@/app/mypage/mypage.module.css';
import EnforceRecord from '@/features/mypage/components/EnforceRecord';
import ShibaRecord from '@/features/mypage/components/ShibaRecord';
import { Metadata } from 'next';

const records = [
  { type: 'ENFORCE', component: EnforceRecord },
  // { type: 'SHIBA', component: ShibaRecord },
];

export const metadata: Metadata = {
  title: '마이 페이지',
  openGraph: {
    images:
      'https://github.com/suhong99/goodluck/assets/120103909/1fde0330-88fd-4145-be03-a689f3facf78',
  },
};

export default async function Mypage() {
  const session = await auth();
  const userEmail = session?.user?.email!;

  return (
    <div className={styles.recordWrapper}>
      <div className={styles.container}>
        {records.map(({ type, component: Record }) => (
          <Record key={type} userEmail={userEmail} />
        ))}
      </div>
    </div>
  );
}
