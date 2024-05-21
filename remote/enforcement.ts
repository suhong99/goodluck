import {
  collection,
  deleteDoc,
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
import { unstable_noStore } from 'next/cache';
import { convertTimestampToKoreanDate } from '@/shared/utils/date';

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

export const getAndCleanupEnforceRecords = async (userId: string) => {
  try {
    const userRef = doc(store, COLLECTIONS.USERS, userId);
    const enforceQuery = query(
      collection(userRef, COLLECTIONS.ENFORCEMENT),
      orderBy('date', 'desc')
    );

    const snapshot = await getDocs(enforceQuery);

    const allRecords = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Enforcement, 'id'>),
    }));

    // 최신순 20개 데이터만 유지
    const recordsToKeep = allRecords.slice(0, 20);

    // 나머지 데이터 삭제
    const recordsToDelete = allRecords.slice(20);
    const deletePromises = recordsToDelete.map((record) =>
      deleteDoc(
        doc(
          store,
          COLLECTIONS.USERS,
          userId,
          COLLECTIONS.ENFORCEMENT,
          record.id
        )
      )
    );
    await Promise.all(deletePromises);
    return recordsToKeep;
  } catch (error) {
    console.error(
      '강화 기록을 조회하고 정리하는 중 오류가 발생했습니다:',
      error
    );
    throw error;
  }
};
