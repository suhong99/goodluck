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

export function MobileRecordList() {
  const { records } = useEnforceStore();

  return (
    <div className={style.mobileList}>
      <div className={style.subRecordList}>
        {records.length > 0 ? (
          records.map(({ id, percent, status }) => (
            <div key={id}>
              {id}회 {percent}% {status}
            </div>
          ))
        ) : (
          <div>기록된 내용이 없습니다</div>
        )}
      </div>
    </div>
  );
}
