'use client';

import React, { useState } from 'react';
import { Course } from './components/Course/Course';
import { courseApiMock } from '@/utils/constants/course-api-mock';
import styles from './page.module.css';
import { Heading } from '@/components/Heading/Heading';
import { Tag } from '@/components/Tag/Tag';
import { Filters } from './components/Filters/Filters';
import { SortTypes } from './components/Filters/models/sort-types.enum';

export default function Home(): JSX.Element {
  const [sortType, setSortType] = useState<SortTypes>(SortTypes.Rating);

  return (
    <>
      <div className={styles.title}>
        <div className={styles.titleLeft}>
          <Heading level={2}>Курсы по Photoshop</Heading>
          <Tag color='gray' size='large'>10</Tag>
        </div>
        <Filters sortType={sortType} setSortType={setSortType}></Filters>
      </div>
      <Course className={styles.course} course={courseApiMock}></Course>
    </>
  );
}
