import { auth } from '@/auth';

import styles from '@/app/mypage/mypage.module.css';
import EnforceRecord from '@/features/mypage/components/EnforceRecord';
import ShibaRecord from '@/features/mypage/components/ShibaRecord';

const records = [
  { type: 'ENFORCE', component: EnforceRecord },
  { type: 'SHIBA', component: ShibaRecord },
];

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
