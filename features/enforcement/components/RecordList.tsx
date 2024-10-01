'use client';

import { useEnforceStore } from '@/store/enforcecement';
import React from 'react';
import style from '@/app/(enforcement)/enforcement.module.css';
import { Enforcement } from '@/remote/models/enforcement';

export default function RecordList() {
  const records = useEnforceStore((state) => state.records);
  const firstTenRecords = records.slice(0, 10);
  const lastTenRecords = records.slice(10);

  return (
    <div className={style.recordList}>
      <RendorRecords recordList={firstTenRecords} />
      <RendorRecords recordList={lastTenRecords} />
    </div>
  );
}

function RendorRecords({
  recordList,
}: {
  recordList: (Pick<Enforcement, 'percent' | 'status'> & { id: number })[];
}) {
  return (
    <div className={style.subRecordList}>
      {recordList.map(({ id, percent, status }) => (
        <div
          key={id}
          className={status === '성공' ? style.success : style.failure}
        >
          {id}회 {percent}% {status}
        </div>
      ))}
    </div>
  );
}

export function MobileRecordList() {
  const records = useEnforceStore((state) => state.records);

  return (
    <div className={style.mobileList}>
      <div className={style.subRecordList}>
        {records.length > 0 ? (
          records.map(({ id, percent, status }) => (
            <div key={id} className={status === '성공' ? '' : style.failure}>
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
