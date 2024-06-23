import { useState } from 'react';
import Tutorial1 from './Tutorial1';
import Tutorial2 from './Tutorial2';

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

  console.log('step', step);
  return (
    <div>
      {step === 0 && <Tutorial1 />}
      {step === 1 && <Tutorial2 />}

      <button
        onClick={() => {
          stepChanger('before');
        }}
      >
        이전
      </button>
      <button
        onClick={() => {
          stepChanger('after');
        }}
      >
        다음
      </button>
    </div>
  );
}
