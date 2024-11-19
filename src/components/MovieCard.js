// src/components/MovieCard.js
'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/MovieCard.module.css';
import { motion } from 'framer-motion';

const MovieCard = ({ movie }) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={movie.image}
        alt={`${movie.title} Poster`}
        width={300}
        height={450}
        className={styles.image}
        priority={false}
      />
      <div className={styles.content}>
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <Link href={`/films-analyzed/${movie.slug}`} legacyBehavior>
          <a className={styles.button} aria-label={`View analysis of ${movie.title}`}>
            View Analysis
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default MovieCard;
