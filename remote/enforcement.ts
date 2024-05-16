import {
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore';
import { store } from '@/remote/firebase';
import { COLLECTIONS } from '@/shared/contants';
import { Enforcement } from '@/models/enforcement';

export const addEnforcementRecord = async ({
  id,
  percent,
  status,
}: Omit<Enforcement, 'date'>) => {
  try {
    const userRef = doc(store, COLLECTIONS.USERS, id);
    const enforceRef = doc(collection(userRef, COLLECTIONS.ENFORCEMENT));
    await setDoc(enforceRef, { percent, status, date: new Date() });
    console.log('강화 기록이 성공적으로 추가되었습니다.');
  } catch (error) {
    console.error('강화 기록을 추가하는 중 오류가 발생했습니다:', error);
  }
};

export const getEnforceRecords = async (userId: string) => {
  try {
    const userRef = doc(store, COLLECTIONS.USERS, userId);
    const enforceQuery = query(
      collection(userRef, COLLECTIONS.ENFORCEMENT),
      orderBy('date', 'desc'),
      limit(20)
    );

    const snapshot = await getDocs(enforceQuery);
    const records = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Enforcement, 'id'>),
    }));

    return records;
  } catch (error) {
    console.error('강화 기록을 조회하는 중 오류가 발생했습니다:', error);
    throw error;
  }
};
