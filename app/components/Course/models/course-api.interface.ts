import { CourseReviewApi } from './course-review-api.interface';

export interface CourseApi {
  name: string;
  description: string;
  logoUrl: string;
  tags?: string[];
  price: number;
  priceDiscount?: number;
  credit: number;
  rate: 1 | 2 | 3 | 4 | 5;
  reviewsCount: number;
  document: string;
  difficulty: string;
  duration: string;
  employmentGuarantee: boolean;
  advantages: string;
  disadvantages: string;
  reviews: CourseReviewApi[];
}
