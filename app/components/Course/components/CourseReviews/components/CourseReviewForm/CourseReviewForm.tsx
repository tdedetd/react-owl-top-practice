'use client';

import styles from './CourseReviewForm.module.css';
import { TextField } from '@/components/TextField/TextField';
import { Rating } from '@/components/Rating/Rating';
import { Button } from '@/components/Button/Button';
import { FormEventHandler, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Rate } from '../../../../../../models/rate.type';

interface ReviewForm {
  author: string;
  title: string;
  text: string;
  rate: string;
}

export function CourseReviewForm(): JSX.Element {
  const { register, getValues } = useForm<ReviewForm>();
  const [rate, setRate] = useState<Rate | undefined>();

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const value = getValues();
    console.log(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.title}>
        <div className={styles.left}>
          <TextField
            className={styles.titleInput}
            type='text'
            placeholder='Имя'
            {...register('author')}
          />
          <TextField
            className={styles.titleInput}
            type='text'
            placeholder='Заголовок отзыва'
            {...register('title')}
          />
        </div>
        <div className={styles.right}>
          <p className={styles.label}>Оценка:</p>
          <Rating
            editable={true}
            rate={rate}
            onRateSelect={setRate}
            {...register('rate')}
          ></Rating>
        </div>
      </div>
      <div className={styles.textContainer}>
        <TextField
          className={styles.text}
          type='textarea'
          rows={3}
          placeholder='Текст отзыва'
          {...register('text')}
        />
      </div>
      <div className={styles.footer}>
        <Button className={styles.submitButton} color='primary'>Отправить</Button>
        <p className={styles.label}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</p>
      </div>
    </form>
  );
}
