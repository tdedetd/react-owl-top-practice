import { Tag } from '@/components/Tag/Tag';
import { CourseHeaderProps } from './CourseHeader.props';
import Image from 'next/image';
import styles from './CourseHeader.module.css';
import { Heading } from '@/components/Heading/Heading';
import { pluralize } from '@/utils/functions/pluralize';
import { Rating } from '@/components/Rating/Rating';

export function CourseHeader({ course }: CourseHeaderProps): JSX.Element {
  const currencyFormat = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0
  });

  return (
    <header className={styles.header}>
      <div className={styles.general}>
        <Image
          src={course.logoUrl}
          alt=''
          width={70}
          height={70}
        ></Image>
        <div>
          <div className={styles.headingContainer}>
            <Heading className={styles.heading} level={3}>{course.name}</Heading>
            <div className={styles.cupContainer}>
              <Image
                className={styles.cupSvg}
                src='/svg/cup.svg'
                alt='cup'
                width={18}
                height={15}
              ></Image>
            </div>
          </div>
          {
            course.tags?.length &&
            <div className={styles.tags}>{
              course.tags.map((tag) => <Tag key={tag} color='white' size='normal'>{tag}</Tag>)
            }</div>
          }
        </div>
      </div>
      <div className={styles.indicators}>
        <div>
          <div className={styles.priceValue}>
            <p className={styles.indicatorValue}>{currencyFormat.format(course.price)}</p>
            {
              typeof course.priceDiscount !== 'undefined' &&
              <Tag size='normal' color='green'>-{currencyFormat.format(course.priceDiscount)}</Tag>
            }
          </div>
          <p className={styles.indicatorName}>цена</p>
        </div>
        <div>
          <p className={styles.creditValue}>
            <span className={styles.indicatorValue}>{currencyFormat.format(course.credit)}</span>
            <span className={styles.creditMonthSuffix}>/мес</span>
          </p>
          <p className={styles.indicatorName}>в кредит</p>
        </div>
        <div>
          <Rating className={styles.rate} rate={4}></Rating>
          <p className={styles.indicatorName}>{pluralize(course.reviewsCount, ['отзыв', 'отзыва', 'отзывов'])}</p>
        </div>
      </div>
    </header>
  );
}
