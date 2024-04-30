'use client';

import { Html } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { ChangeEvent, SetStateAction, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

export default function Scene() {
  const glb = useLoader(GLTFLoader, '/hammer.glb');
  const glb2 = useLoader(GLTFLoader, '/shiba.glb');

  const [percent, setPercent] = useState('0');
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
      setResult(`${percent}의 확률 성공`);
    } else {
      setResult(`${percent}의 확률 실패`);
    }
    setCount(count + 1);
  };
  return (
    <>
      <mesh scale={1.3} rotation-x={-Math.PI / 2} position={[2, 0, 0]}>
        <primitive object={glb.scene}></primitive>
      </mesh>
      <mesh scale={1.3}>
        <primitive object={glb2.scene}></primitive>
      </mesh>
      <Html>
        <div>
          <input
            type="text"
            value={percent}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="0.00"
            min="0.00"
            max="100.00"
          />
          퍼센트
        </div>
        <div>{result}</div>
        <button onClick={onEnhance}>클릭</button>
        <div>{count}</div>
      </Html>
    </>
  );
}
