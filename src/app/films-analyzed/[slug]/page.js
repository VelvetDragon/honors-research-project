// src/app/films-analyzed/[slug]/page.js

import { notFound } from 'next/navigation';
import Image from 'next/image';
import moviesData from '@/data/movies.json';
import styles from '@/styles/MoviePage.module.css';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import Tabs from '@/components/Tabs'; // Default import
import ImageWithSkeleton from '@/components/ImageWithSkeleton'; // Default import

export default async function MoviePage({ params }) {
  const { slug } = await params;
  const sortedMovies = [...moviesData].sort((a, b) => a.year - b.year);
  const movieIndex = sortedMovies.findIndex((m) => m.slug === slug);
  const movie = sortedMovies[movieIndex];

  //const movie = moviesData.find((m) => m.slug === slug);

  if (!movie) {
    notFound();
  }

  const nextMovieIndex = (movieIndex + 1) % sortedMovies.length;
  const nextMovie = sortedMovies[nextMovieIndex];

  // Define the tabs with their respective content
  const tabs = [
    {
      label: 'Emotional Tone',
      content: (
        <>
          <h3>Emotional Tone Distribution</h3>
          <ImageWithSkeleton
            src={`/images/films-analyzed/${slug}/average_sentiment_distribution.png`}
            alt={`Sentiment Distribution for ${movie.title}`}
            width={500}
            height={500}
            className={styles.visualizationImage}
          />
        </>
      ),
    },
    {
      label: 'Character Roles',
      content: (
        <>
          <h3>Average Sentiment by Character Role</h3>
          <ImageWithSkeleton
            src={`/images/films-analyzed/${slug}/average_sentiment_by_char_role.png`}
            alt={`Average Sentiment by Character Role in ${movie.title}`}
            width={500}
            height={500}
            className={styles.visualizationImage}
          />

          <h3>Sentiment Distribution for Antagonists</h3>
          <ImageWithSkeleton
            src={`/images/films-analyzed/${slug}/sentiment_distribution_for_antagonist.png`}
            alt={`Sentiment Distribution for Antagonists in ${movie.title}`}
            width={500}
            height={500}
            className={styles.visualizationImage}
          />

          <h3>Sentiment Distribution for Protagonists</h3>
          <ImageWithSkeleton
            src={`/images/films-analyzed/${slug}/sentiment_distribution_for_protagonist.png`}
            alt={`Sentiment Distribution for Protagonists in ${movie.title}`}
            width={500}
            height={500}
            className={styles.visualizationImage}
          />

          <h3>Sentiment Distribution for Supporting Roles</h3>
          <ImageWithSkeleton
            src={`/images/films-analyzed/${slug}/sentiment_distribution_for_supporting.png`}
            alt={`Sentiment Distribution for Supporting Roles in ${movie.title}`}
            width={500}
            height={500}
            className={styles.visualizationImage}
          />
        </>
      ),
    },
    {
      label: 'Marginalized Analysis',
      content: (
        <>
          <h3>Sentiment Distribution for Marginalized Characters</h3>
          <Image
            src={`/images/films-analyzed/${slug}/sentiment_distribution_marg_chars.png`}
            alt={`Sentiment Distribution for Marginalized Characters in ${movie.title}`}
            width={500}
            height={500}
            className={styles.visualizationImage}
          />

          <h3>Sentiment Distribution for Non-Marginalized Characters</h3>
          <Image
            src={`/images/films-analyzed/${slug}/sentiment_distribution_non_marg_chars.png`}
            alt={`Sentiment Distribution for Non-Marginalized Characters in ${movie.title}`}
            width={500}
            height={500}
            className={styles.visualizationImage}
          />

          <h3>Sentiment Distribution by Character Role and Marginalized Status</h3>
          <Image
            src={`/images/films-analyzed/${slug}/sentiment_distribution_charrole_and_marg_status.png`}
            alt={`Sentiment Distribution by Character Role and Marginalized Status in ${movie.title}`}
            width={800}
            height={600}
            className={styles.visualizationImage}
          />
        </>
      ),
    },
    {
      label: 'Gender Analysis',
      content: (
        <>

          <h3>Sentiment Distribution by Gender</h3>
          <ImageWithSkeleton
            src={`/images/films-analyzed/${slug}/sentiment_distribution_by_gender.png`}
            alt={`Sentiment Distribution by Gender in ${movie.title}`}
            width={500}
            height={500}
            className={styles.visualizationImage}
          />

          <h3>Sentiment Distribution by Gender and Intersectional Attributes</h3>
          <ImageWithSkeleton
            src={`/images/films-analyzed/${slug}/sentiment_distribution_facetgrid_complete.png`}
            alt={`Sentiment Distribution by Gender and Intersectional Attributes in ${movie.title}`}
            width={800}
            height={600}
            className={styles.visualizationImage}
          />
        </>
      ),
    },
    {
      label: 'Dialogue Distribution',
      content: (
        <>
          <h3>Dialogue Distribution by Gender</h3>
          <ImageWithSkeleton
            src={`/images/films-analyzed/${slug}/dialogue_distribution_by_gender.png`}
            alt={`Dialogue Distribution by Gender in ${movie.title}`}
            width={500}
            height={500}
            className={styles.visualizationImage}
          />

          <h3>Dialogue Distribution by Top Characters </h3>
          <ImageWithSkeleton
            src={`/images/films-analyzed/${slug}/sentiment_distribution_top_characters.png`}
            alt={`Sentiment Distribution by Gender in ${movie.title}`}
            width={500}
            height={500}
            className={styles.visualizationImage}
          />
        </>
      ),
    },
  ];

  

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
            priority={true}
          />
          <div className={styles.details}>
            <h1>{movie.title}</h1>
            <p>
              <strong>Release Year:</strong> {movie.year}
            </p>
            <p>
              <strong>Director:</strong> {movie.director}
            </p>
            <p>{movie.description}</p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className={styles.analysis}>
          <h2>Sentiment Analysis</h2>
          <p>
            This section delves into the emotional tones conveyed through the dialogues of characters in{' '}
            <strong>{movie.title}</strong>. Using sentiment analysis tools like VADER, I have categorized
            dialogues into positive, neutral, and negative sentiments to uncover underlying patterns and
            stereotypes.
          </p>

          {/* Render the Tabs component with defined tabs */}
          <Tabs tabs={tabs} />
        </div>
        <div className={styles.navigationButtons}>
          
          <Link href="/films-analyzed" legacyBehavior>
            <a className={styles.backButton} aria-label="Back to Films Analyzed">
              ← Back to Films Analyzed
            </a>
          </Link>

          <Link href={`/films-analyzed/${nextMovie.slug}`} legacyBehavior>
            <a className={styles.nextButton} aria-label={`Go to next film: ${nextMovie.title}`}>
              Go to Next Film: {nextMovie.title} ({nextMovie.year}) →
            </a>
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
