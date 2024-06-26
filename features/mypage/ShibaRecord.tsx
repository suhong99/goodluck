import { eventCheckList } from '@/remote/shiba';
import { convertTimestampToKoreanDate } from '@/shared/utils/date';
import styles from '@/app/mypage/mypage.module.css';
import { SHIBA_EVENT } from '@/shared/contants/shibaEvent';
export default async function ShibaRecord({
  userEmail,
}: {
  userEmail: string;
}) {
  const result = await eventCheckList(userEmail);
  const totalLength = Object.values(SHIBA_EVENT).reduce(
    (acc, events) => acc + events.length,
    0
  );
  return (
    <div className={styles.recordContainer}>
      <h2 className={styles.title}>
        시바 획득 목록
        <div className={styles.statusIndicator}>
          {result?.length}/{totalLength}
        </div>
      </h2>
      <ul className={styles.recordList}>
        {result?.map(({ type, date }) => (
          <li key={type + date} className={styles.recordItem}>
            <span>{convertTimestampToKoreanDate(date)}</span>
            <span>{type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
