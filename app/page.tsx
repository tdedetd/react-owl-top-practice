import { Metadata } from 'next';
import { ClicksCounter, Header } from './components';
import React from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Computed meta',
  };
}

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <ClicksCounter min={5} max={9}></ClicksCounter>
    </>
  );
}
