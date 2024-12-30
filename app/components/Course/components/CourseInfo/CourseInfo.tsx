import { CourseInfoProps } from './CourseInfo.props';
import styles from './CourseInfo.module.css';
import { CourseHeader } from './components/CourseHeader/CourseHeader';
import { CourseMain } from './components/CourseMain/CourseMain';

export function CourseInfo({ course }: CourseInfoProps): JSX.Element {
  return (
    <section className={styles.container}>
      <CourseHeader course={course}></CourseHeader>
      <div className={styles.divider}></div>
      <CourseMain course={course}></CourseMain>
      <div className={styles.divider}></div>
    </section>
  );
}
