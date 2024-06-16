import { create } from 'zustand';
export type ShibaLocation = '강' | '집' | '언덕';

interface ShibaState {
  location: ShibaLocation;
  eventable: boolean;
  setLocation: (newLocation: '강' | '집' | '언덕') => void;
  triggerEvent: () => void;
}

export const useShibaStore = create<ShibaState>()((set) => ({
  location: '강',
  eventable: true,

  setLocation: (newLocation) => {
    set((state) => ({
      ...state,
      location: newLocation,
    }));
  },

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
