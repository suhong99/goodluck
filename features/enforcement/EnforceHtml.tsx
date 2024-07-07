'use client';

import React from 'react';
import { Html } from '@react-three/drei';
import style from '@/app/(enforcement)/enforcement.module.css';

import { ModalContextProvider } from '@/shared/components/portal/ModalContext';
import RecordModalBtn from './components/RecordModalBtn';
import RecordList from './components/RecordList';
import { useValidInput } from './hooks/useValidInput';
import { useEnforce } from './hooks/useEnforce';

export default function EnforceHtml() {
  const [percent, setValidInput] = useValidInput();
  const { result, onEnforce } = useEnforce(Number(percent));

  return (
    <Html fullscreen zIndexRange={[300, 0]}>
      <ModalContextProvider>
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
            <RecordModalBtn />
          </div>
          <RecordList />
        </div>
      </ModalContextProvider>
    </Html>
  );
}
