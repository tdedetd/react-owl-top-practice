import { Metadata } from 'next';
import { ClicksCounter } from '../components';
import React from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home page',
    description: 'Home page of the demo next app',
    keywords: ['home page', 'main page'],
  };
}

export default function Home(): JSX.Element {
  return (
    <>
      <ClicksCounter min={5} max={9}></ClicksCounter>
    </>
  );
}
