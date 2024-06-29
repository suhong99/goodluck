import { useState } from 'react';

export const useStep = (lastStep: number) => {
  const [step, setStep] = useState<number>(0);
  const stepChanger = (direction: 'before' | 'after') => {
    setStep((prevStep) => {
      if (direction === 'before' && prevStep > 0) {
        return prevStep - 1;
      }
      if (direction === 'after' && prevStep < lastStep) {
        return prevStep + 1;
      }
      return prevStep;
    });
  };

  return [step, stepChanger] as const;
};
