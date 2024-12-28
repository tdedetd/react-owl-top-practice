import { CourseProps } from './Course.props';
import styles from './Course.module.css';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { CourseReviews } from './components/CourseReviews/CourseReviews';

export function Course({ course }: CourseProps): JSX.Element {
  return (
    <div className={styles.block}>
      <CourseInfo course={course}></CourseInfo>
      <CourseReviews reviews={course.reviews}></CourseReviews>
    </div>
  );
}
