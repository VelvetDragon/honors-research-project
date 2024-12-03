// src/app/films-analyzed/page.js
'use client';

import MovieCard from '@/components/MovieCard';
import movies from '@/data/movies.json';
import styles from '@/styles/FilmsAnalyzed.module.css';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

export default function FilmsAnalyzed() {

  const moviesData = [...movies].sort((a, b) => a.year - b.year)

  return (

    <section className={styles.films}>
      <h1>Films Analyzed</h1>
      <AnimatedSection>
        <div className={styles.grid}>
          {moviesData.map((movie) => (
            <MovieCard key={movie.slug} movie={movie} />
          ))}
        </div>
        <Link className={styles.grid} href="/findings-and-analysis" legacyBehavior>
          <a className={styles.nxtPage} aria-label="Next page"> Next page ➡ </a>
        </Link>
      </AnimatedSection>
    </section>




  );
}
