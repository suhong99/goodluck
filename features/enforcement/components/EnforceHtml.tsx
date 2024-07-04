'use client';

import { Html } from '@react-three/drei';
import style from '@/app/(enforcement)/enforcement.module.css';

import RecordList from './RecordList';
import React from 'react';

import RecordModalBtn from './RecordModalBtn';
import { useValidInput } from '../hooks/useValidInput';
import { useEnforce } from '../hooks/useEnforce';
import { useModalContext } from '@/shared/components/portal/ModalContext';

export default function EnforceHtml() {
  const [percent, setValidInput] = useValidInput();
  const { result, onEnforce } = useEnforce(Number(percent));

  // 컴퍼넌트 분리시 인지 못함 RecordModalBtn
  const { open } = useModalContext();
  const openRecords = () => {
    open({ type: 'enforce' });
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
          <RecordModalBtn openRecords={openRecords} />
        </div>
        <RecordList />
      </div>
    </Html>
  );
}
