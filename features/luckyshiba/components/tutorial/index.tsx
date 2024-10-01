import { eventCheckList } from '@/remote/shiba';
import { useModalContext } from '@/shared/components/portal/ModalContext';
import { MANUAL_SKIP } from '@/shared/constants';
import { useShibaStore } from '@/store/shiba';
import { useShibaEventStore } from '@/store/shibaEvent';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function TutorialOpener() {
  const { open } = useModalContext();
  const getEventableState = useShibaStore((state) => state.getEventableState);
  const syncEventStatusWithDB = useShibaEventStore(
    (state) => state.syncEventStatusWithDB
  );
  const { data } = useSession();
  useEffect(() => {
    const skipTutorial = localStorage.getItem(MANUAL_SKIP);
    if (skipTutorial) {
      getEventableState();
    } else {
      open({ type: 'shibaTutorial' }, getEventableState);
    }

    const checkEventList = async () => {
      const userId = data?.user?.email;

      if (userId) {
        const result = await eventCheckList(userId);
        if (result && result.length > 0) {
          const types = result.map((event) => event.type);
          syncEventStatusWithDB(types);
        }
      }
    };

    checkEventList();
  }, [open, getEventableState, syncEventStatusWithDB, data?.user?.email]);

  return null;
}
