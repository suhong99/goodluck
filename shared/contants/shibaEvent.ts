import { ShibaLocation } from './model';

export type ShibaEvent = { type: string; weight: number };

export const SHIBA_EVENT: Record<ShibaLocation, ShibaEvent[]> = {
  강: [
    { type: '송어', weight: 0.1 },
    { type: '농어', weight: 0.2 },
    { type: '부추', weight: 0.3 },
    { type: '미나리', weight: 0.25 },
    { type: '새우', weight: 0.15 },
  ],
  집: [
    { type: '사료', weight: 0.4 },
    { type: '간식', weight: 0.3 },
    { type: '놀이', weight: 0.2 },
    { type: '쓰다듬기', weight: 0.1 },
  ],
  언덕: [
    { type: '산책', weight: 0.35 },
    { type: '나뭇가지', weight: 0.2 },
    { type: '낙엽', weight: 0.15 },
    { type: '당근', weight: 0.2 },
    { type: '민들레꽃', weight: 0.1 },
  ],
};
