import { Heading } from '@/components/Heading/Heading';
import { VacanciesSectionProps } from './VacanciesSection.props';
import styles from './VacanciesSection.module.css';
import { Tag } from '@/components/Tag/Tag';
import { VacanciesSectionSalary } from './components/VacanciesSectionSalary/VacanciesSectionSalary';

export function VacanciesSection({ className, technology }: VacanciesSectionProps): JSX.Element {
  const countFormat = new Intl.NumberFormat('ru-RU', {
    maximumFractionDigits: 0
  });

  return (
    <section className={className}>
      <header className={styles.header}>
        <Heading level={3}>
          <span>Вакансии - {technology.name}</span>
          <Tag className={styles.headingTag} color='red' size='normal'>hh.ru</Tag>
        </Heading>
      </header>
      <div className={styles.cards}>
        <div className={styles.cardCount}>
          <p className={styles.vacanciesCountName}>Всего вакансий</p>
          <p className={styles.vacanciesCountValue}>{countFormat.format(technology.vacanciesCount)}</p>
        </div>
        <div className={styles.cardSalaries}>
          <VacanciesSectionSalary
            className={styles.salary}
            level='beginner'
            amount={technology.avgSalaries.beginner}
          />
          <VacanciesSectionSalary
            className={styles.salary}
            level='middle'
            amount={technology.avgSalaries.middle}
          />
          <VacanciesSectionSalary
            className={styles.salary}
            level='professional'
            amount={technology.avgSalaries.professional}
          />
        </div>
      </div>
    </section>
  );
}
