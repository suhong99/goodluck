import { create } from 'zustand';

interface ShibaState {
  eventable: boolean;
  isLanded: boolean;
  blockEvent: () => void;
  getEventableState: () => void;
  setIsLanded: (newState: boolean) => void;
}

export const useShibaStore = create<ShibaState>()((set) => ({
  eventable: false,
  isLanded: false,
  blockEvent: () => {
    set((state) => ({
      ...state,
      eventable: false,
    }));
  },
  getEventableState: async () => {
    const randomDelay = Math.random() * 10000 + 5000;

    await new Promise((resolve) => setTimeout(resolve, randomDelay));
    set((state) => ({
      ...state,
      eventable: true,
    }));
  },
  setIsLanded: (newState: boolean) => {
    set((state) => ({
      ...state,
      isLanded: newState,
    }));
  },
}));
