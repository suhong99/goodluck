import { create } from 'zustand';

interface ShibaState {
  eventable: boolean;
  triggerEvent: () => void;
}

export const useShibaStore = create<ShibaState>()((set) => ({
  eventable: true,
  triggerEvent: async () => {
    set((state) => ({
      ...state,
      eventable: false,
    }));

    const randomDelay = Math.random() * 3000 + 5000;

    await new Promise((resolve) => setTimeout(resolve, randomDelay));

    //TODO:  디버깅 해야할 듯 원하는 state인지
    set((state) => ({
      ...state,
      eventable: true,
    }));
  },
}));
