import { ShibaLocation } from './model';

interface BasicEvent {
  type: string;
  weight: number;
  img: string;
}

interface NoCopyRightEvent extends BasicEvent {
  copyright: false;
}

interface CopyRightEvent extends BasicEvent {
  copyright: string;
  url: string;
}

export type ShibaEvent = NoCopyRightEvent | CopyRightEvent;
type EventWithPercent<T extends ShibaEvent> = Omit<T, 'weight'> & {
  percent: number;
};

// EventResultProps 타입 정의
export type EventResultProps =
  | EventWithPercent<NoCopyRightEvent>
  | EventWithPercent<CopyRightEvent>;

export const SHIBA_EVENT: Record<ShibaLocation, ShibaEvent[]> = {
  강: [
    {
      type: '물고기',
      weight: 0.5,
      img: 'fish.jpg',
      copyright: 'Freepik',
      url: 'https://kr.freepik.com/free-vector/hand-drawn-tuna-cartoon-illustration_59745389.htm#fromView=search&page=1&position=34&uuid=4dbf49ac-f5d2-4b9b-9259-d48fca858aa6',
    },
    {
      type: '부추',
      weight: 0.3,
      img: 'bochoo.png',
      copyright: 'kor.pngtree.com',
      url: 'https://kor.pngtree.com/freepng/chives-leek-cooking-diet-ingredient_6343281.html',
    },
    {
      type: '미나리',
      weight: 0.15,
      img: 'minari.jpg',
      copyright: 'Freepik',
      url: 'https://kr.freepik.com/free-photo/sinseonhan-pa-seul-li-jeol-yeon_8759336.htm#fromView=search&page=1&position=1&uuid=602d879a-76ef-4617-b749-f1c6c9d75c64',
    },
    {
      type: '새우',
      weight: 0.05,
      img: 'shrimp.jpg',
      copyright: 'Freepik',
      url: 'https://kr.freepik.com/free-vector/saeu-bada-dongmul-manhwa-seutikeo_21301105.htm#fromView=search&page=1&position=3&uuid=d481d046-2fa8-49c3-ba01-0668c324bae1',
    },
  ],
  집: [
    { type: '사료', weight: 0.6, img: 'petmill.jpg', copyright: false },
    { type: '개껌', weight: 0.25, img: 'gum.jpg', copyright: false },
    { type: '인형', weight: 0.12, img: 'toy.jpg', copyright: false },
    { type: '공', weight: 0.03, img: 'ball.jpg', copyright: false },
  ],
  언덕: [
    {
      type: '나뭇가지',
      weight: 0.4,
      img: 'flowers.jpg',
      copyright: 'Freepik',
      url: 'https://www.freepik.com/free-photo/flowers_4292084.htm#fromView=search&page=1&position=2&uuid=e53073be-7883-452f-b352-7a540584bf1a',
    },
    { type: '진흙', weight: 0.3, img: 'mud.jpg', copyright: false },
    { type: '낙엽', weight: 0.2, img: 'leaf.jpg', copyright: false },
    { type: '당근', weight: 0.08, img: 'carrot.jpg', copyright: false },
    { type: '두더지', weight: 0.02, img: 'dodugi.jpg', copyright: false },
  ],
};
