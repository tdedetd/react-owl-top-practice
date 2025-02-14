import { Rate } from '@/models/rate.type';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface RatingProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  editable?: boolean;
  rate?: Rate;
  onRateSelect?: (rate: Rate) => void;
}
