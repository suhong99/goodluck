import { useState } from 'react';
import { useEnforceStore } from '@/store/enforcecement';
import { addEnforcementRecord } from '@/remote/enforcement';
import { useUserEmail } from '../hooks/useUserEmail';
import { checkSuccess } from '@/shared/utils/checker';

export const useEnforce = (percent: number) => {
  const [result, setResult] = useState('강화를 시도해주세요');
  const email = useUserEmail();
  const { update } = useEnforceStore();

  const onEnforce = () => {
    const isSuccess = checkSuccess(percent);
    if (isSuccess) {
      setResult(`${percent}퍼의 확률 성공`);
      update({ percent: percent, status: '성공' });
    } else {
      setResult(`${percent ?? 0}퍼의 확률 실패`);
      update({ percent: percent, status: '실패' });
    }

    if (email) {
      addEnforcementRecord({
        id: email,
        percent: percent,
        status: isSuccess ? '성공' : '실패',
      });
    }
  };

  return { result, onEnforce };
};
