// src/components/Navbar.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src="/images/disney-logo.png" // Ensure this is the white version
            alt="Disney Logo"
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
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/methodology">Methodology</Link>
        </li>
        <li>
          <Link href="/films-analyzed">Films Analyzed</Link>
        </li>
        <li>
          <Link href="/data-visualizations">Data Visualizations</Link>
        </li>
        <li>
          <Link href="/findings-and-analysis">Findings & Analysis</Link>
        </li>
        <li>
          <Link href="/conclusion">Conclusion</Link>
        </li>
        <li>
          <Link href="/references">References</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
