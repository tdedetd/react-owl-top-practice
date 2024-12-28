import { CourseInfoProps } from './CourseInfo.props';
import styles from './CourseInfo.module.css';

export function CourseInfo({ course }: CourseInfoProps): JSX.Element {
  return (
    <div className={styles.container}></div>
  );
}
