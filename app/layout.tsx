import type { Metadata } from 'next';
import './globals.css';
import { Noto_Sans } from 'next/font/google';
import { Title } from '@/components/Title/Title';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import styles from './layout.module.css';

const notoSans = Noto_Sans({
  display: 'swap',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Owl top',
  description: 'Generated by create next app',
  keywords: ['template', 'main page'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang='en'>
      <body className={`${notoSans.className}`}>
        <div className={styles.container}>
          <div className={styles.containerSidebar}>
            <Title></Title>
            <Sidebar></Sidebar>
          </div>
          <main className={styles.containerMain}>{children}</main>
        </div>
        <footer className={styles.footer}>
          <p>OwlTop © 2020 - 2021 Все права защищены</p>
          <div className={styles.right}>
            <p>Пользовательское соглашение</p>
            <p>Политика конфиденциальности</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
