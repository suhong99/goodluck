import React from 'react';
import styles from '@/app/mypage/mypage.module.css';

interface RecordSectionProps<T> {
  title: string;
  subInfo: React.ReactNode;
  records: T[];
  content: (record: T) => React.ReactNode;
}

export default function RecordSection<T>({
  title,
  subInfo,
  records,
  content,
}: RecordSectionProps<T>) {
  return (
    <div className={styles.recordContainer}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <div className={styles.subInfo}>{subInfo}</div>
      </div>
      <ul className={styles.recordList}>
        {records.map((record) => content(record))}
      </ul>
    </div>
  );
}
