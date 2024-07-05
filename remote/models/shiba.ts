import { Timestamp } from 'firebase/firestore';

export interface ShibaRecord {
  id: string;
  type: string;
  date: Timestamp;
}
