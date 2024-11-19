// src/app/films-analyzed/[slug]/page.js
'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import moviesData from '@/data/movies.json';
import styles from '@/styles/MoviePage.module.css';
import Link from 'next/link';
import Script from '@/components/Script';
import VideoEmbed from '@/components/VideoEmbed';
import DialoguesChart from '@/components/DialoguesChart';
import dialoguesData from '@/data/dialoguesData.json';
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
            This section delves into the emotional tones conveyed through the dialogues of characters in <strong>{movie.title}</strong>. Using sentiment analysis tools like VADER and BERT, we've categorized dialogues into positive, neutral, and negative sentiments to uncover underlying patterns and stereotypes.
          </p>
          <h3>Script Excerpts</h3>
          <Script content={movie.scriptExcerpt} />
          <h3>Key Scene Video</h3>
          <VideoEmbed videoId={movie.keySceneVideoId} />
          <h3>Emotional Tone Distribution</h3>
          <DialoguesChart data={dialoguesData[movie.slug]} />
          <Link href="/films-analyzed">
            <a className={styles.backButton} aria-label="Back to Films Analyzed">← Back to Films Analyzed</a>
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
