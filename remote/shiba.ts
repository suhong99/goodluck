import { ShibaEventType } from '@/shared/constants/shibaEvent';
import { collection, doc, getDocs, query, setDoc } from 'firebase/firestore';
import { store } from './firebase';
import { COLLECTIONS } from '@/shared/constants';
import { ShibaRecord } from '@/remote/models/shiba';

export const checkNewEvent = async ({
  id,
  type,
}: {
  id: string;
  type: ShibaEventType;
}) => {
  try {
    const userRef = doc(store, COLLECTIONS.USERS, id);
    const shibaRef = doc(collection(userRef, COLLECTIONS.SHIBA));
    const shibaQuery = query(collection(userRef, COLLECTIONS.SHIBA));

    const snapshot = await getDocs(shibaQuery);
    let exist = false;
    snapshot.forEach((doc) => {
      if (doc.data().type === type) {
        exist = true;
        return console.log('이미 존재함');
      }
    });

    if (!exist) {
      await setDoc(shibaRef, { type, date: new Date() });
      console.log(`${type} 이벤트를 성공적으로 추가했습니다.`);
    }
  } catch (error) {
    console.error(`획득 물품 추가 중 오류 발생:`, error);
  }
};

export const eventCheckList = async (id: string) => {
  try {
    const userRef = doc(store, COLLECTIONS.USERS, id);
    const shibaQuery = query(collection(userRef, COLLECTIONS.SHIBA));

    const snapshot = await getDocs(shibaQuery);
    const result = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<ShibaRecord, 'id'>),
    }));

    return result;
  } catch (error) {
    console.error(`이벤트 목록 조회 중 오류 발생:`, error);
    throw error;
  }
};
