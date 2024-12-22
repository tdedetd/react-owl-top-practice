import { Htitle } from '../Htitle/Htitle';
import { HeaderProps } from './Header.props';
import Logo from '../../../public/vercel.svg';
import styles from './Header.module.css';

export function Header({}: HeaderProps): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles['logo-container']}>
        <Logo />
      </div>
      <Htitle tag='h1'>Text</Htitle>
    </header>
  );
}
