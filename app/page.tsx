'use client';

import { useState } from 'react';
import { Course } from './components/Course/Course';
import { courseApiMock } from '@/utils/constants/course-api-mock';
import styles from './page.module.css';
import { Heading } from '@/components/Heading/Heading';
import { Tag } from '@/components/Tag/Tag';
import { Filters } from './components/Filters/Filters';
import { SortTypes } from './components/Filters/models/sort-types.enum';
import { VacanciesSection } from './components/VacanciesSection/VacanciesSection';
import { technologyApiMock } from './utils/constants/technology-api-mock';

export default function Home(): JSX.Element {
  const [sortType, setSortType] = useState<SortTypes>(SortTypes.Rating);

  return (
    <>
      <div className={styles.title}>
        <div>
          <Heading level={2}>
            <span>Курсы по {technologyApiMock.name}</span>
            <Tag className={styles.headingTag} color='gray' size='large'>{technologyApiMock.coursesCount}</Tag>
          </Heading>
        </div>
        <Filters sortType={sortType} setSortType={setSortType} />
      </div>
      <Course className={styles.course} course={courseApiMock}></Course>
      <VacanciesSection className={styles.vacanciesSection} technology={technologyApiMock} />
    </>
  );
}
