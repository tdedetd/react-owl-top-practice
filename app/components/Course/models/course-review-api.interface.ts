export interface CourseReviewApi {
  firstName: string;
  lastName?: string;
  title: string;
  datetime: string;
  text: string;
  rate: 1 | 2 | 3 | 4 | 5;
}
