import { getAndCleanupEnforceRecords } from '@/remote/enforcement';
import { convertTimestampToKoreanDate } from '@/shared/utils/date';
import styles from '@/app/mypage/mypage.module.css';
import { RecordProps } from '../constants/model';
import RecordSection from './RecordSection';
import { Enforcement } from '@/remote/models/enforcement';

export default async function EnforceRecord({ userEmail }: RecordProps) {
  const records = await getAndCleanupEnforceRecords(userEmail);

  const renderItem = ({ id, percent, status, date }: Enforcement) => (
    <li
      key={id}
      className={`${styles.recordItem} ${
        status === '성공' ? styles.success : styles.failure
      }`}
    >
      <span>{convertTimestampToKoreanDate(date)}</span>
      <span>
        {percent}%<span className={styles.deskVisible}>{status}</span>
      </span>
    </li>
  );
  return (
    <RecordSection
      title="강화 기록"
      subInfo={
        <>
          <span className={styles.successBox}></span>성공&nbsp;
          <span className={styles.failureBox}></span>실패
        </>
      }
      records={records}
      content={renderItem}
    />
  );
}
