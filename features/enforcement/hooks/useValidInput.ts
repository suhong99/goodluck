import { FLOAT_POINT_TWO } from '@/shared/constants/reg';
import { isValidPattern } from '@/shared/utils/checker';
import { useState } from 'react';

export const useValidInput = () => {
  const [percent, setPercent] = useState<string>('');

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

  return [percent, setValidInput] as const;
};
