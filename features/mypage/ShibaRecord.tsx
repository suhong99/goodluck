import { eventCheckList } from '@/remote/shiba';
import { convertTimestampToKoreanDate } from '@/shared/utils/date';
import styles from '@/app/mypage/mypage.module.css';
import { SHIBA_EVENT } from '@/shared/contants/shibaEvent';
import { RecordProps } from './constant/model';
import { Timestamp } from 'firebase/firestore';
import RecordSection from './RecordSection';

interface ShibaRecordContent {
  id: string;
  type: string;
  date: Timestamp;
}

export default async function ShibaRecord({ userEmail }: RecordProps) {
  const result = await eventCheckList(userEmail);
  const totalLength = Object.values(SHIBA_EVENT).reduce(
    (acc, events) => acc + events.length,
    0
  );

  const renderItem = ({ id, type, date }: ShibaRecordContent) => (
    <li key={id} className={styles.recordItem}>
      <span>{convertTimestampToKoreanDate(date)}</span>
      <span>{type}</span>
    </li>
  );
  return (
    <RecordSection
      title="시바 획득 목록"
      subInfo={`${result?.length}/${totalLength}`}
      records={result}
      content={renderItem}
    />
  );
}
