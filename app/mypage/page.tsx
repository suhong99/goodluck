import { auth } from '@/auth';
import EnforceRecord from '@/features/mypage/EnforceRecord';
import ShibaRecord from '@/features/mypage/ShibaRecord';
import styles from '@/app/mypage/mypage.module.css';

export default async function Mypage() {
  const session = await auth();
  return (
    <main>
      <div className={styles.recordWrapper}>
        <div className={styles.container}>
          <EnforceRecord userEmail={session?.user?.email!} />
          <ShibaRecord userEmail={session?.user?.email!} />
        </div>
      </div>
    </main>
  );
}
