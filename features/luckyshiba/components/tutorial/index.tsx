import { useModalContext } from '@/shared/components/portal/ModalContext';
import { MANUAL_SKIP } from '@/shared/contants';
import { useShibaStore } from '@/store/shiba';
import { useEffect } from 'react';

export default function TutorialOpener() {
  const { open } = useModalContext();
  const { getEventableState } = useShibaStore();
  useEffect(() => {
    const skipTutorial = localStorage.getItem(MANUAL_SKIP);
    if (skipTutorial) {
      getEventableState();
    } else {
      open({ type: 'shibaTutorial' }, getEventableState);
    }
  }, [open, getEventableState]);

  return null;
}
