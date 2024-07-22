import { create } from 'zustand';

interface ShowingProcess {
  isVisible: boolean;
  isWatchingProcess: (x: number, y: number, z: number) => boolean;
}

export const useShowingProcessStore = create<ShowingProcess>()((set) => ({
  isVisible: false,
  isWatchingProcess: (x: number, y: number, z: number) => {
    const isWatching = Math.abs(5.5 - x) < 1 && Math.abs(-2.8 - z) < 1 && y < 2;
    set((state) => ({
      ...state,
      isVisible: isWatching,
    }));

    return isWatching;
  },
}));
