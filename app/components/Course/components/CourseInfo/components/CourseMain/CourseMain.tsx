import { CourseMainProps } from './CourseMainProps';
import styles from './CourseMain.module.css';
import { CourseApi } from '../../../../models/course-api.interface';
import { Tag } from '@/components/Tag/Tag';
import classNames from 'classnames';

export function CourseMain({ course }: CourseMainProps): JSX.Element {
  const infoParams: { key: keyof CourseApi, name: string }[] = [
    { key: 'document', name: 'Документ об окончании' },
    { key: 'difficulty', name: 'Сложность' },
    { key: 'duration', name: 'Длительность' },
  ];

  const infoParamsContainerClassName = classNames(...[
    styles.infoParamsContainer,
    { [styles.infoParamsContainerSpace]: course.employmentGuarantee }
  ].filter(Boolean));

  return (
    <>
      <p className={styles.description}>{course.description}</p>
      <div className={styles.details}>
        <div>
          <div className={infoParamsContainerClassName}>
            {infoParams.map((param) => (
              <div className={styles.infoParam}>
                <p className={styles.infoParamName}>{param.name}</p>
                <div className={styles.infoParamDots} />
                <p className={styles.infoParamValue}>{String(course[param.key])}</p>
              </div>
            ))}
          </div>
          {course.employmentGuarantee && (
            <div>
              <Tag size='normal' color='white'>Гарантия трудоустройства</Tag>
            </div>
          )}
        </div>
        <div>
          <div className={styles.advantages}>
            <p className={styles.rightHeading}>Преимущества</p>
            <p className={styles.rightText}>{course.advantages}</p>
          </div>
          <div className={styles.disadvantages}>
            <p className={styles.rightHeading}>Недостатки</p>
            <p className={styles.rightText}>{course.disadvantages}</p>
          </div>
        </div>
      </div>
    </>
  );
}
