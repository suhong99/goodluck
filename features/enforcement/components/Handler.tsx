'use client';

import { Html } from '@react-three/drei';
import { useState } from 'react';
import style from '@/app/(enforcement)/enforcement.module.css';
import { isValidPattern } from '@/shared/utils/checker';
import { FLOAT_POINT_TWO } from '@/shared/contants/reg';
import { useEnforceStore } from '@/store/enforcecement';
import { collection, doc, writeBatch } from 'firebase/firestore';
import { store } from '@/remote/firebase';
import { COLLECTIONS } from '@/shared/contants';
import { useSession } from 'next-auth/react';

export default function Handler() {
  const { status, records, update } = useEnforceStore();
  const [percent, setPercent] = useState<string>('');
  const [result, setResult] = useState('시도해주세요');
  const [count, setCount] = useState(0);

  const { data } = useSession();
  console.log(data);
  const setValidInput = (value: string) => {
    if (!isValidPattern(value, FLOAT_POINT_TWO)) return;

    if (Number(value) < 0) {
      return setPercent('0.00');
    }
    if (Number(value) > 100) {
      return setPercent('100.00');
    }
    setPercent(value);
  };

  const onEnforce = () => {
    const random = Math.random();
    const isSuccess = random * 100 < Number(percent) ? true : false;
    const batch = writeBatch(store);
    const enforceRef = doc(collection(store, COLLECTIONS.ENFORCEMENT));
    batch.set(enforceRef, {
      date: new Date(),
      percent: Number(percent),
      status: isSuccess ? '성공' : '실패',
    });

    if (isSuccess) {
      setResult(`${percent}퍼의 확률 성공`);
      update({ percent: Number(percent), status: '성공' });
    } else {
      setResult(`${percent ?? 0}퍼의 확률 실패`);
      update({ percent: Number(percent), status: '실패' });
    }

    setCount(count + 1);
  };

  return (
    <Html fullscreen>
      <div className={style.wrapper}>
        <div className={style.row}>
          <div>강화 확률</div>
          <input
            type="text"
            value={percent}
            onChange={(e) => setValidInput(e.target.value)}
            placeholder="0.00~100.00"
            min="0.00"
            max="100.00"
          />
          <button onClick={onEnforce}>클릭</button>
        </div>
        <div>{result}</div>
        <div>{status}</div>
        {records.map(({ id, percent, status }) => (
          <div key={id}>
            <p>
              {id}번째 {percent}% : {status}
            </p>
          </div>
        ))}
        <div>{count}</div>
      </div>
    </Html>
  );
}
