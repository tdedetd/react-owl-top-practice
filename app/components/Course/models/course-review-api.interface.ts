import { Rate } from '@/models/rate.type';

export interface CourseReviewApi {
  firstName: string;
  lastName?: string;
  title: string;
  datetime: string;
  text: string;
  rate: Rate;
}
