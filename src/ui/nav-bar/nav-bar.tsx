'use client';

import { usePathname } from 'next/navigation';
import styles from "./style.module.scss";
import LinkSpec from '../components/link-spec';

export default function NavBar() {
  const pathname = usePathname();
  return (
      <nav>
        <ul className={styles.list}>
            <LinkSpec isAactive={pathname.includes('python')} href="/python" text="Python" />
            <LinkSpec isAactive={pathname.includes('java')} href="/java" text="Java"/>
            <LinkSpec isAactive={pathname.includes('javascript')} href="/javascript" text="JavaScript"/>
            <LinkSpec isAactive={pathname.includes('data-science')} href="/data-science" text="Data Science" />
            <LinkSpec isAactive={pathname.includes('qa')} href="/qa" text="QA" />
            <LinkSpec isAactive={pathname.includes('c')} href="/c" text="C#" />
        </ul>
      </nav>
  );
}