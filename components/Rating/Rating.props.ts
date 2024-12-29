import { Rate } from '@/models/rate.type';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  editable?: boolean;
  rate?: Rate;
  onRateSelect?: (rate: Rate) => void;
}
