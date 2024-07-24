import { Timestamp } from 'firebase/firestore';

export type EnforceStatus = '성공' | '실패';

export interface Enforcement {
  id: string;
  status: EnforceStatus;
  percent: number;
  date: Timestamp;
}
