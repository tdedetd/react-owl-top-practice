import { CourseReviewProps } from './CourseReview.props';
import styles from './CourseReview.module.css';
import Image from 'next/image';
import { Rating } from '@/components/Rating/Rating';

export function CourseReview({ review }: CourseReviewProps): JSX.Element {
  const dataFormat = new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Image
            src='/svg/user.svg'
            alt='user'
            width={30}
            height={30}
          ></Image>
          <p className={styles.title}>
            <span className={styles.titleAuthor}>{review.firstName} {review.lastName}:</span>&nbsp;
            {review.title}
          </p>
        </div>
        <div className={styles.right}>
          <p>{dataFormat.format(new Date(review.datetime))}</p>
          <Rating rate={review.rate} editable={false}></Rating>
        </div>
      </div>
      <p className={styles.text}>{review.text}</p>
    </div>
  );
}
