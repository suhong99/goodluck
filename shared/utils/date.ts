import { Timestamp } from 'firebase/firestore';

export const convertTimestampToKoreanDate = (timestamp: Timestamp) => {
  // UTC 시간 기준으로 Timestamp를 Date 객체로 변환
  const utcDate = new Date(
    timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
  );

  // 한국 시간대(UTC+9)로 변환
  const koreaOffset = 9 * 60 * 60 * 1000; // 9시간을 밀리초로 변환
  const koreaTime = new Date(utcDate.getTime() + koreaOffset);

  // 연, 월, 일 추출 및 포맷
  const year = koreaTime.getUTCFullYear();
  const month = String(koreaTime.getUTCMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
  const day = String(koreaTime.getUTCDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
