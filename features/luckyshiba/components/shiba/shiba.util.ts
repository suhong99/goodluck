import { ShibaLocation } from '@/shared/constants/model';
import {
  EventResultProps,
  SHIBA_EVENT,
  ShibaEvent,
} from '@/shared/constants/shibaEvent';

export const defineLocation = (
  x: number,
  y: number,
  z: number
): ShibaLocation => {
  if (y < 1.1) {
    return x > 10.5 && z > 4 ? '언덕' : '강';
  } else {
    return x >= 2.5 ? '언덕' : '집';
  }
};

export const getRandomEvent = (location: ShibaLocation): EventResultProps => {
  const eventList = SHIBA_EVENT[location];

  const totalWeight = eventList.reduce((sum, event) => sum + event.weight, 0);
  let random = Math.random() * totalWeight;

  for (const event of eventList) {
    const { weight } = event;
    if (random < weight) {
      return { ...event, percent: Math.floor((weight / totalWeight) * 100) };
    }
    random -= event.weight;
  }
  return {
    ...eventList[eventList.length - 1],
    percent:
      Math.floor(eventList[eventList.length - 1].weight / totalWeight) * 100,
  };
};
