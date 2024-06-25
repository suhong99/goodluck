import { useState } from 'react';
import Tutorial1 from './Tutorial1';
import Tutorial2 from './Tutorial2';
import styles from '@/app/luckyshiba/luckyshiba.module.css';
import { MANUAL_SKIP } from '@/shared/contants';

export default function GuidePopUp() {
  const [step, setStep] = useState<number>(0);

  const stepChanger = (direction: 'before' | 'after') => {
    const lastStep = 1;
    if (direction === 'before') {
      if (step > 0) {
        setStep(step - 1);
      }
    } else {
      if (step < lastStep) {
        setStep(step + 1);
      }
    }
  };

  const handleDontShowAgain = () => {
    localStorage.setItem(MANUAL_SKIP, 'true');

    const escEvent = new KeyboardEvent('keydown', { key: 'Escape' });
    document.dispatchEvent(escEvent);
  };

  return (
    <div className={styles.manualWrapper}>
      <div className={styles.manualTitle}>게임 시작 메뉴얼</div>
      <div>
        {step === 0 && <Tutorial1 />}
        {step === 1 && <Tutorial2 />}
      </div>
      <button onClick={handleDontShowAgain}>다시 보지 않기</button>
      <div>
        <button
          onClick={() => {
            stepChanger('before');
          }}
        >
          이전
        </button>
        {step + 1 + '/' + 2}
        <button
          onClick={() => {
            stepChanger('after');
          }}
        >
          다음
        </button>
      </div>
    </div>
  );
}
