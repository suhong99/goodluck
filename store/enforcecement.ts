import { create } from 'zustand';

interface EnforceState {
  status: '성공' | '실패' | '미도전';
  trial: number;
  records: { id: number; percent: number; status: '성공' | '실패' }[];
  update: ({
    percent,
    status,
  }: {
    percent: number;
    status: '성공' | '실패';
  }) => void;
}

export const useEnforceStore = create<EnforceState>()((set) => ({
  status: '미도전',
  records: [],
  trial: 0,
  update: ({ percent, status }) =>
    set((state) => ({
      status: status,
      trial: state.trial + 1,
      records: state.records.concat({ id: state.trial + 1, percent, status }),
    })),
}));
