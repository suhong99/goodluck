'use client';

import { useEnforceStore } from '@/store/enforcecement';
import React from 'react';
import style from '@/app/(enforcement)/enforcement.module.css';

export default function RecordList() {
  const { records } = useEnforceStore();
  const firstTenRecords = records.slice(0, 10);
  const lastTenRecords = records.slice(10);
  return (
    <div className={style.recordList}>
      <div className={style.subRecordList}>
        {firstTenRecords.map(({ id, percent, status }) => (
          <div key={id}>
            {id}회 {percent}% {status}
          </div>
        ))}
      </div>
      <div className={style.subRecordList}>
        {lastTenRecords.map(({ id, percent, status }) => (
          <div key={id}>
            {id}회 {percent}% {status}
          </div>
        ))}
      </div>
    </div>
  );
}
