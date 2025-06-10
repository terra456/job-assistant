'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  return (
      <nav>
        <ul>
          <li>
            <Link className={pathname ? 'active': ''} href="/python">Python</Link>
          </li>
          <li>
            <Link href="/java">Java</Link>
          </li>
          <li>
            <Link href="/javascript">JavaScript</Link>
          </li>
          <li>
            <Link href="/data-science">Data Science</Link>
          </li>
          <li>
            <Link href="/qa">QA</Link>
          </li>
          <li>
            <Link href="/c">C#</Link>
          </li>
        </ul>
      </nav>
  );
}