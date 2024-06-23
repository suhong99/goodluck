import { useModalContext } from '@/shared/components/portal/ModalContext';
import { useShibaStore } from '@/store/shiba';
import { useEffect } from 'react';

export default function TutorialOpener() {
  const { open } = useModalContext();
  const { getEventableState } = useShibaStore();
  useEffect(() => {
    open({ type: 'shibaTutorial' }, getEventableState);
  }, [open, getEventableState]);

  return null;
}
