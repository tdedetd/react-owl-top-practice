import { CourseInfoProps } from './CourseInfo.props';
import styles from './CourseInfo.module.css';
import { CourseHeader } from './components/CourseHeader/CourseHeader';
import { CourseMain } from './components/CourseMain/CourseMain';
import { Button } from '@/components/Button/Button';

export function CourseInfo({ course }: CourseInfoProps): JSX.Element {
  return (
    <section className={styles.container}>
      <CourseHeader course={course}></CourseHeader>
      <div className={styles.divider}></div>
      <CourseMain course={course}></CourseMain>
      <div className={styles.divider}></div>
      <footer className={styles.footer}>
        <Button color='primary'>Узнать подробнее</Button>
        <Button color='white' arrow={true}>Читать отзывы</Button>
      </footer>
    </section>
  );
}
