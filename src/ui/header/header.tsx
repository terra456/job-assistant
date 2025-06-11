import Link from 'next/link';
import NavBar from '../nav-bar/nav-bar';
import MainMenu from '../main-menu/main-menu';
import LinkBtn from '../components/link-btn';
import styles from "./style.module.scss";
import BtnMenuImg from '../components/btn-menu-img';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <BtnMenuImg text='Специализация' imgClass={''}/>
          </li>
          <li>
            <LinkBtn text={'Вход'} href={'/auth/login'} />
          </li>
        </ul>
      </nav>
      <div className={styles.popup}>
        <NavBar />
        <MainMenu />
      </div>
    </header>
  );
}