import { CourseReviewsProps } from './CourseReviews.props';
import styles from './CourseReviews.module.css';
import { CourseReview } from './components/CourseReview/CourseReview';
import React from 'react';
import { CourseReviewForm } from './components/CourseReviewForm/CourseReviewForm';

export function CourseReviews({ reviews }: CourseReviewsProps): JSX.Element {
  return (
    <div className={styles.container}>
      {reviews.map((review) => (
        <React.Fragment key={review.id}>
          <CourseReview review={review}></CourseReview>
          <div className={styles.divider}></div>
        </React.Fragment>
      ))}
      <CourseReviewForm></CourseReviewForm>
    </div>
  );
}
