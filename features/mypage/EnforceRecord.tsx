import { getAndCleanupEnforceRecords } from '@/remote/enforcement';
import { convertTimestampToKoreanDate } from '@/shared/utils/date';
import styles from '@/app/mypage/mypage.module.css';
export default async function EnforceRecord({
  userEmail,
}: {
  userEmail: string;
}) {
  const records = await getAndCleanupEnforceRecords(userEmail);

  return (
    <div className={styles.recordContainer}>
      <h2 className={styles.title}>
        <div>강화 기록</div>
        <div className={styles.statusIndicator}>
          <span className={styles.successBox}></span>성공&nbsp;
          <span className={styles.failureBox}></span>실패
        </div>
      </h2>
      <ul className={styles.recordList}>
        {records.map(({ id, percent, status, date }) => (
          <li
            key={id}
            className={`${styles.recordItem} ${
              status === '성공' ? styles.success : styles.failure
            }`}
          >
            <span>{convertTimestampToKoreanDate(date)}</span>
            <span>
              {percent}% <span className={styles.deskVisible}>{status}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
