import { getAndCleanupEnforceRecords } from '@/remote/enforcement';
import { convertTimestampToKoreanDate } from '@/shared/utils/date';

export default async function Record({ userEmail }: { userEmail: string }) {
  const records = await getAndCleanupEnforceRecords(userEmail);

  return (
    <div>
      {records.map(({ id, percent, status, date }) => (
        <div key={id}>
          {convertTimestampToKoreanDate(date)} {percent}확률 {status}
        </div>
      ))}
    </div>
  );
}
