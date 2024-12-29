import { Rate } from '@/models/rate.type';

export function isRate(value: number): value is Rate {
  return (value - Math.trunc(value) === 0) && (value >= 1 && value <= 5);
}
