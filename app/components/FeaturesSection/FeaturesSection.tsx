import { Heading } from '@/components/Heading/Heading';
import { FeaturesSectionProps } from './FeaturesSection.props';
import styles from './FeaturesSection.module.css';
import Image from 'next/image';

export function FeaturesSection({ className, technology }: FeaturesSectionProps): JSX.Element {
  return (
    <section className={className}>
      <Heading className={styles.heading} level={3}>Преимущества</Heading>
      <ul>{
        technology.features.map((feature) => (
          <li key={feature.title} className={styles.feature}>
            <Image
              src='/svg/check-in-circle.svg'
              alt='check in circle'
              width={50}
              height={50}
            ></Image>
            <p className={styles.featureTitle}>{feature.title}</p>
            <div className={styles.lineContainer}>
              <div className={styles.line}></div>
            </div>
            <p className={styles.featureDescription}>{feature.description}</p>
          </li>
        ))
      }</ul>
      <p className={styles.technologyDescription}>{technology.description}</p>
    </section>
  );
}
