import { SHIBA_EVENT, ShibaEventType } from '@/shared/constants/shibaEvent';

import { create } from 'zustand';

const eventTypes = Array.from(
  Object.values(SHIBA_EVENT)
    .flat()
    .map((event) => event.type)
);

const initialState = eventTypes.reduce((state, type) => {
  state[type] = false;
  return state;
}, {} as Record<ShibaEventType, boolean>);

// Zustand 스토어를 생성합니다.
interface EventListState {
  [key: ShibaEventType]: boolean;
}

interface ShibaEventState {
  eventList: EventListState;
  setEventStatus: (type: ShibaEventType) => void;
  syncEventStatusWithDB: (types: ShibaEventType[]) => void;
}

export const useShibaEventStore = create<ShibaEventState>((set) => ({
  eventList: initialState,
  setEventStatus: (type: ShibaEventType) =>
    set((state) => ({
      ...state,
      eventList: {
        ...state.eventList,
        [type]: true,
      },
    })),
  syncEventStatusWithDB: (types: ShibaEventType[]) =>
    set((state) => {
      const updatedEventList = { ...state.eventList };
      types.forEach((type) => {
        updatedEventList[type] = true;
      });
      return { ...state, eventList: updatedEventList };
    }),
}));
