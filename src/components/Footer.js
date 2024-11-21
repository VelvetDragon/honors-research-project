// src/components/Footer.js
'use client';

// src/components/Footer.js
import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Suwan Aryal. All rights reserved.</p>
      <div className={styles.socials}>
        <a href="https://github.com/VelvetDragon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          GitHub
        </a>
        <a href="mailto:suwan.aryal@usm.edu" aria-label="Email">
          Email
        </a>
      </div>
      <div className={styles.legal}>
        <Link href="/privacy-policy">Privacy Policy</Link>
        {' | '}
        <Link href="/terms-of-use">Terms of Use</Link>
      </div>
    </footer>
  );
};

export default Footer;

