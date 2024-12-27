import Image from 'next/image';
import styles from './title.module.css';

export function Title(): JSX.Element {
  return (
    <div className={styles.container}>
      <Image
        src='/svg/owl.svg'
        alt='owl'
        width={41}
        height={37}
      ></Image>
      <h1 className={styles.h1}>
        <span className={styles['first-word']}>OWL </span>
        <span className={styles['second-word']}>top</span>
      </h1>
    </div>
  );
}
