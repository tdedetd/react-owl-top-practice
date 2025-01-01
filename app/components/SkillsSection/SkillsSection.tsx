import { Heading } from '@/components/Heading/Heading';
import { SkillsSectionProps } from './SkillsSection.props';
import styles from './SkillsSection.module.css';
import { Tag } from '@/components/Tag/Tag';

export function SkillsSection({ className, skills }: SkillsSectionProps): JSX.Element {
  return (
    <section className={className}>
      <Heading className={styles.heading} level={3}>Получаемые навыки</Heading>
      <div className={styles.tags}>{
        skills.map((skill, i) => (
          <Tag key={i} color='purple' size='normal'>{skill}</Tag>
        ))
      }</div>
    </section>
  );
}
