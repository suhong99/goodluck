import { checkNewEvent } from '@/remote/shiba';
import { EventResultProps } from '@/shared/constants/shibaEvent';
import { useShibaEventStore } from '@/store/shibaEvent';
import { useSession } from 'next-auth/react';

export const useEventProcess = () => {
  const { data } = useSession();
  const { eventList, setEventStatus } = useShibaEventStore();

  const userId = data?.user?.email;

  const renewProcess = (selectedEvent: EventResultProps) => {
    if (!eventList[selectedEvent.type]) {
      setEventStatus(selectedEvent.type);
      userId &&
        checkNewEvent({
          id: userId,
          type: selectedEvent.type,
        });
    }
  };

  return renewProcess;
};
