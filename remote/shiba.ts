import { ShibaEventType } from '@/shared/contants/shibaEvent';
import {
  Timestamp,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from 'firebase/firestore';
import { store } from './firebase';
import { COLLECTIONS } from '@/shared/contants';

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
    console.error(`이벤트 타입 추가 중 오류 발생:`, error);
  }
};

export const eventCheckList = async (id: string) => {
  try {
    const userRef = doc(store, COLLECTIONS.USERS, id);
    const shibaQuery = query(collection(userRef, COLLECTIONS.SHIBA));

    const snapshot = await getDocs(shibaQuery);

    const types: string[] = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      if (data.type && !types.includes(data.type)) {
        types.push(data.type);
      }
    });

    return types;
  } catch (error) {
    console.error(`이벤트 타입 목록 조회 중 오류 발생:`, error);
  }
};
