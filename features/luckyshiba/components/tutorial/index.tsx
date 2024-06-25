import { eventCheckList } from '@/remote/shiba';
import { useModalContext } from '@/shared/components/portal/ModalContext';
import { MANUAL_SKIP } from '@/shared/contants';
import { useShibaStore } from '@/store/shiba';
import { useShibaEventStore } from '@/store/shibaEvent';
import { useEffect } from 'react';

export default function TutorialOpener() {
  const { open } = useModalContext();
  const { getEventableState } = useShibaStore();
  const { syncEventStatusWithDB } = useShibaEventStore();
  useEffect(() => {
    const skipTutorial = localStorage.getItem(MANUAL_SKIP);
    if (skipTutorial) {
      getEventableState();
    } else {
      open({ type: 'shibaTutorial' }, getEventableState);
    }

    const checkEventList = async () => {
      const result = await eventCheckList('bt01063767006@gmail.com');
      if (result) syncEventStatusWithDB(result);
    };

    checkEventList();
  }, [open, getEventableState, syncEventStatusWithDB]);

  return null;
}
