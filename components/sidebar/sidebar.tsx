import { Menu } from '../Menu/Menu';
import { Search } from '@/components/Search/Search';
import styles from './Sidebar.module.css';

export function Sidebar(): JSX.Element {
  return (
    <aside>
      <Search className={styles.searchContainer}></Search>
      <Menu></Menu>
    </aside>
  );
}
