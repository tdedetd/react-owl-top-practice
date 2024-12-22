import { Metadata } from 'next';
import { P } from '../../components';
import React from 'react';
import styles from './page.module.css';

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
      <div className={styles['p-container']}>
        <P size='s'>Напишу сразу в&nbsp;двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в&nbsp;изучении, но&nbsp;здесь перевес из-за лидирующего положения языка как самого популярного в&nbsp;программировании. Выбор мой пал на&nbsp;эту профессию еще и&nbsp;потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по&nbsp;многим моментам, но&nbsp;вот в&nbsp;крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так&nbsp;&mdash; полнота программы и&nbsp;интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с&nbsp;первого дня занятий вы&nbsp;приступаете к&nbsp;практике и&nbsp;получаете опыт коммерческой разработки уже в&nbsp;свое резюме. Скажу вам как прошедший это&nbsp;&mdash; реально помогло в&nbsp;трудоустройстве!</P>
        <P size='m'>Студенты освоят не&nbsp;только hard skills, необходимые для работы веб-дизайнером, но&nbsp;и&nbsp;soft skills&nbsp;&mdash; навыки, которые позволят эффективно взаимодействовать в&nbsp;команде с&nbsp;менеджерами, разработчиками и&nbsp;маркетологами. Выпускники факультета могут успешно конкурировать с&nbsp;веб-дизайнерами уровня middle.</P>
        <P size='l'>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и&nbsp;ими можно успешно пользоваться дома или в&nbsp;дороге. Современные ноутбуки хорошо справляются с&nbsp;нагрузкой, так зачем загонять специалиста в&nbsp;душный офис. В&nbsp;этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в&nbsp;разных местах.</P>
      </div>
    </>
  );
}
