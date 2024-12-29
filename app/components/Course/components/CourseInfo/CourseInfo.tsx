import { CourseInfoProps } from './CourseInfo.props';
import styles from './CourseInfo.module.css';
import { CourseHeader } from './components/CourseHeader/CourseHeader';

export function CourseInfo({ course }: CourseInfoProps): JSX.Element {
  return (
    <section className={styles.container}>
      <CourseHeader course={course}></CourseHeader>
    </section>
  );
}
