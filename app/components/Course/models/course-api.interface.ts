import { Rate } from '@/models/rate.type';
import { CourseReviewApi } from './course-review-api.interface';

export interface CourseApi {
  name: string;
  description: string;
  logoUrl: string;
  tags?: string[];
  price: number;
  priceDiscount?: number;
  credit: number;
  rate: Rate;
  reviewsCount: number;
  document: string;
  difficulty: string;
  duration: string;
  employmentGuarantee: boolean;
  advantages: string;
  disadvantages: string;
  reviews: CourseReviewApi[];
}
