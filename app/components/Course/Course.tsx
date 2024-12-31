import { CourseProps } from './Course.props';
import styles from './Course.module.css';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { CourseReviews } from './components/CourseReviews/CourseReviews';
import classNames from 'classnames';

export function Course({ course, className }: CourseProps): JSX.Element {
  const divClass = classNames(...[
    styles.block,
    className
  ].filter(Boolean));

  return (
    <div className={divClass}>
      <CourseInfo course={course}></CourseInfo>
      <CourseReviews reviews={course.reviews}></CourseReviews>
    </div>
  );
}
