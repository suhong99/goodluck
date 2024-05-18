'use client';

import { Html } from '@react-three/drei';
import style from '@/app/(enforcement)/enforcement.module.css';

import RecordList from './RecordList';
import { addEnforcementRecord } from '@/remote/enforcement';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { useEnforceStore } from '@/store/enforcecement';
import { isValidPattern } from '@/shared/utils/checker';
import { FLOAT_POINT_TWO } from '@/shared/contants/reg';
import { useModalContext } from '@/shared/components/portal/ModalContext';

export default function EnforceHtml() {
  const { status, update } = useEnforceStore();
  const [percent, setPercent] = useState<string>('');
  const [result, setResult] = useState('강화를 시도해주세요');

  const { open } = useModalContext();

  const openRecords = () => {
    console.log('열기');
    open({ type: 'enforce' });
  };

  const { data } = useSession();

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
    if (isSuccess) {
      setResult(`${percent}퍼의 확률 성공`);
      update({ percent: Number(percent), status: '성공' });
    } else {
      setResult(`${percent ?? 0}퍼의 확률 실패`);
      update({ percent: Number(percent), status: '실패' });
    }

    //TODO: 임시 미적용 마이페이지 만들고 다시

    // const userId = data?.user?.email;
    // userId &&
    //   addEnforcementRecord({
    //     id: userId,
    //     percent: Number(percent),
    //     status: isSuccess ? '성공' : '실패',
    //   });
  };

  return (
    <Html fullscreen zIndexRange={[300, 0]}>
      <div className={style.wrapper}>
        <div className={style.row}>
          <span>강화 확률(%) :</span>
          <input
            type="text"
            className={style.input}
            value={percent}
            onChange={(e) => setValidInput(e.target.value)}
            placeholder="0.00~100.00"
            min="0.00"
            max="100.00"
          />
          <button className={style.button} onClick={onEnforce}>
            클릭
          </button>
        </div>
        <div className={style.row}>
          <div>{result}</div>
          <button
            className={`${style.button} ${style.mobile}`}
            onClick={openRecords}
          >
            데이터 보기
          </button>
        </div>
        <RecordList />
      </div>
    </Html>
  );
}
