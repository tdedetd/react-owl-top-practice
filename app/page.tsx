import React from 'react';
import { Course } from './components/Course/Course';
import { courseApiMock } from './constants/course-api-mock';

export default function Home(): JSX.Element {
  return (
    <>
      <Course course={courseApiMock}></Course>
    </>
  );
}
