// src/app/films-analyzed/page.js
'use client';

import MovieCard from '@/components/MovieCard';
import moviesData from '@/data/movies.json';
import styles from '@/styles/FilmsAnalyzed.module.css';
import AnimatedSection from '@/components/AnimatedSection';

export default function FilmsAnalyzed() {
  return (
    <section className={styles.films}>
      <h1>Films Analyzed</h1>
      <AnimatedSection>
        <div className={styles.grid}>
          {moviesData.map((movie) => (
            <MovieCard key={movie.slug} movie={movie} />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
