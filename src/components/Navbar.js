// src/components/Navbar.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import { usePathname } from 'next/navigation'; 

const Navbar = () => {
  const pathname = usePathname(); 

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src="/images/disney-logo.png" 
            alt='mickey mouse ears'
            width={40}
            height={40}
            priority
          />
        </Link>
        <span className={styles.logoText}>
          <Link href="/">
            Unmasking Emotions
          </Link>
        </span>
      </div>
      <ul className={styles.navLinks}>
        <li className={pathname === '/about' ? styles.active : ''}>
          <Link href="/about">About</Link>
        </li>
        <li className={pathname === '/methodology' ? styles.active : ''}>
          <Link href="/methodology">Methodology</Link>
        </li>
        <li className={pathname === '/films-analyzed' ? styles.active : ''}>
          <Link href="/films-analyzed">Films Analyzed</Link>
        </li>
        {/* <li className={pathname === '/data-visualizations' ? styles.active : ''}>
          <Link href="/data-visualizations">Data Visualizations</Link>
        </li> */}
        <li className={pathname === '/findings-and-analysis' ? styles.active : ''}>
          <Link href="/findings-and-analysis">Findings & Analysis</Link>
        </li>
        <li className={pathname === '/conclusion' ? styles.active : ''}>
          <Link href="/conclusion">Conclusion</Link>
        </li>
        <li className={pathname === '/references' ? styles.active : ''}>
          <Link href="/references">References</Link>
        </li>
        <li className={pathname === '/contact' ? styles.active : ''}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
