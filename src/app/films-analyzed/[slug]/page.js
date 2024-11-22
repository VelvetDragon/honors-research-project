// src/app/films-analyzed/[slug]/page.js

import { notFound } from 'next/navigation';
import Image from 'next/image';
import moviesData from '@/data/movies.json';
import styles from '@/styles/MoviePage.module.css';
import Link from 'next/link';
import Script from '@/components/Script'; 
import AnimatedSection from '@/components/AnimatedSection';


export default function MoviePage({ params }) {
  const { slug } = params;
  const movie = moviesData.find((m) => m.slug === slug);
  
  if (!movie) {
    notFound();
  }

  return (
    <section className={styles.movie}>
      <AnimatedSection>
        <div className={styles.header}>
          <Image
            src={movie.image}
            alt={`${movie.title} Poster`}
            width={300}
            height={450}
            className={styles.poster}
            priority={false}
          />
          <div className={styles.details}>
            <h1>{movie.title}</h1>
            <p><strong>Release Year:</strong> {movie.year}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p>{movie.description}</p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className={styles.analysis}>
          <h2>Sentiment Analysis</h2>
          <p>
            This section delves into the emotional tones conveyed through the dialogues of characters in <strong>{movie.title}</strong>. Using sentiment analysis tools like VADER, I have categorized dialogues into positive, neutral, and negative sentiments to uncover underlying patterns and stereotypes.
          </p>
          <h3>Script Excerpts</h3>
          <Script content={movie.scriptExcerpt} />
          
         
          
          <h3>Emotional Tone Distribution</h3>
          
          {/* Replace DialoguesChart with saved matplotlib image */}
          <Image
            src={`/images/films-analyzed/${slug}/sentiment_distribution.png`}
            alt={`Sentiment Distribution for ${movie.title}`}
            width={800}
            height={600}
            className={styles.visualizationImage}
          />
          
          {/* Example of another visualization image */}
          <h3>Average Sentiment by Character Role</h3>
          <Image
            src={`/images/films-analyzed/${slug}/average_sentiment_by_role.png`}
            alt={`Average Sentiment by Character Role in ${movie.title}`}
            width={800}
            height={600}
            className={styles.visualizationImage}
          />
          
          {/* Add more images as needed */}
          
          <Link href="/films-analyzed" legacyBehavior>
            <a className={styles.backButton} aria-label="Back to Films Analyzed"> ← Back to Films Analyzed</a>
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
