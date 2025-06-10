import Link from 'next/link';
import NavBar from '../nav-bar/nav-bar';
import MainMenu from '../main-menu/main-menu';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <button>Специализация</button>
          </li>
          <li>
            <Link href="/auth/login"></Link>
          </li>
        </ul>
      </nav>
      <div>
        <NavBar />
        <MainMenu />
      </div>
    </header>
  );
}