import { create } from 'zustand';

interface ShowingProcess {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export const useShowingProcessStore = create<ShowingProcess>()((set) => ({
  isVisible: false,
  setIsVisible: (isVisible: boolean) =>
    set((state) => ({
      ...state,
      isVisible,
    })),
}));
