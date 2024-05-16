'use client';

import { useEnforceStore } from '@/store/enforcecement';
import React from 'react';

export default function RecordList() {
  const { records } = useEnforceStore();
  const firstTenRecords = records.slice(0, 10);
  const lastTenRecords = records.slice(10);
  return (
    <div
      style={{
        color: 'white',
        backgroundColor: 'green',
        width: '100%',
      }}
    >
      <div
        style={{
          float: 'left',
          left: 10,
          background: 'red',
          minWidth: '200px',
        }}
      >
        {firstTenRecords.map(({ id, percent, status }) => (
          <div key={id}>
            <p>
              {id}회 {percent}% : {status}
            </p>
          </div>
        ))}
      </div>
      <div
        style={{
          float: 'right',
          right: 10,
          background: 'blue',
          minWidth: '200px',
          justifyContent: 'end',
        }}
      >
        {lastTenRecords.map(({ id, percent, status }) => (
          <div key={id}>
            <p>
              {id}회 {percent}% : {status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
