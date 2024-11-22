// src/app/page.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.bannerImage}>
        <Image
          src="/images/disney-hero.jpg"
          alt="Disney Background"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
        />
      </div>
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className={styles.pageTitle}> Unmasking Emotions: Understanding Disney through dialogues </h1>
          {/* <h2 className={styles.pageSubTitle}>Exploring Emotional Expressions Across Cultures and Characters</h2> */}
          <p>
            Welcome to my research project where I dive into the emotional tones conveyed through Disney character dialogues across various films. Using sentiment analysis, this study uncovers patterns that reflect and potentially challenge existing stereotypes.
          </p>
          <Link href="/about" legacyBehavior>
            <a className={styles.ctaButton} aria-label="Explore Films"> Start Exploring </a>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
