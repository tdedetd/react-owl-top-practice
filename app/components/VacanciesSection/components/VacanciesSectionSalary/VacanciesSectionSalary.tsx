import { VacanciesSectionSalaryProps } from './VacanciesSectionSalary.props';
import styles from './VacanciesSectionSalary.module.css';
import classNames from 'classnames';
import { currencyFormat } from '@/utils/constants/currency-format';
import StarInCircleSvg from '@/public/svg/star-in-circle.svg';

const levelDetailsMapper: Record<VacanciesSectionSalaryProps['level'], { name: string, stars: number }> = {
  beginner: {
    name: 'Начальный',
    stars: 1,
  },
  middle: {
    name: 'Средний',
    stars: 2,
  },
  professional: {
    name: 'Профессионал',
    stars: 3,
  },
};

const colorStarGray = '#BBBBBB';
const colorStarPink = '#FC836D';

export function VacanciesSectionSalary({ amount, level, className }: VacanciesSectionSalaryProps): JSX.Element {
  const details = levelDetailsMapper[level];
  const divClass = classNames(...[
    styles.container,
    className,
  ].filter(Boolean));

  return (
    <div className={divClass}>
      <p className={styles.levelName}>{details.name}</p>
      <p className={styles.salary}>{currencyFormat.format(amount)}</p>
      <div className={styles.stars}>{
        Object.keys(levelDetailsMapper).map((level, index) => (
          <StarInCircleSvg key={level} fill={details.stars - 1 >= index ? colorStarPink : colorStarGray} />
        ))
      }</div>
    </div>
  );
}
