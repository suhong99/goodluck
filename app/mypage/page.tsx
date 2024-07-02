import { auth } from '@/auth';
import EnforceRecord from '@/features/mypage/EnforceRecord';
import ShibaRecord from '@/features/mypage/ShibaRecord';
import styles from '@/app/mypage/mypage.module.css';

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
