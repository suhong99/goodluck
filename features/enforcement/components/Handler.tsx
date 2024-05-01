'use client';

import { Html } from '@react-three/drei';
import { useState } from 'react';
import style from '@/app/(enforcement)/enforcement.module.css';

export default function Handler() {
  const [percent, setPercent] = useState<string>('');
  const [result, setResult] = useState('시도해주세요');
  const [count, setCount] = useState(0);

  const handleInputChange = (value: string) => {
    const regex = /^\d*(\.\d{0,2})?$/; // 소수점 두 자리까지의 숫자를 확인하는 정규식
    if (regex.test(value)) {
      if (Number(value) < 0) {
        return setPercent('0');
      }
      if (Number(value) > 100) {
        return setPercent('100.00');
      }
      setPercent(value);
    }
  };
  const onEnhance = () => {
    const random = Math.random();
    if (random * 100 < Number(percent)) {
      setResult(`${percent}퍼의 확률 성공`);
    } else {
      setResult(`${percent ?? 0}퍼의 확률 실패`);
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
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="0.00~100.00"
            min="0.00"
            max="100.00"
          />
          <button onClick={onEnhance}>클릭</button>
        </div>
        <div>{result}</div>
        <div>{count}</div>
      </div>
    </Html>
  );
}
