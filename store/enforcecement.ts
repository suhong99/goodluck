import { Enforcement, EnforceStatus } from '@/remote/models/enforcement';
import { ExtendUnion } from '@/shared/utils/type';
import { create } from 'zustand';

interface EnforceState {
  status: ExtendUnion<EnforceStatus, '미도전'>;
  trial: number;
  records: (Pick<Enforcement, 'percent' | 'status'> & { id: number })[];
  update: ({
    percent,
    status,
  }: {
    percent: number;
    status: EnforceStatus;
  }) => void;
}

export const useEnforceStore = create<EnforceState>()((set) => ({
  status: '미도전',
  records: [],
  trial: 0,
  update: ({ percent, status }) => {
    set((state) => {
      const { trial, records } = state;
      const updatedRecords =
        records.length >= 20 ? records.slice(0, -1) : records;
      return {
        status,
        trial: trial + 1,
        records: [
          {
            id: trial + 1,
            percent,
            status,
          },
          ...updatedRecords,
        ],
      };
    });
  },
}));
