// src/app/methodology/page.js
'use client'; // Declare this file as a client component

import styles from '@/styles/Methodology.module.css';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';
import Link from 'next/link';
import movies from '@/data/movies.js'; // Importing from movies.js
import { useState } from 'react';
import Modal from '@/components/Modal'; // Import the custom Modal component
import Mermaid from '@/components/MermaidChart';

export default function Methodology() {

  const preprocessingFlowchart = `
    graph TD;
      A[Raw Script Data] --> B[Data Cleaning];
      B --> C[Data Normalization];
      C --> D[Expanding Contractions];
      D --> E[Prepared Dataset for Analysis];
  `;


  // Sort movies by year in ascending order
  const sortedMovies = [...movies].sort((a, b) => a.year - b.year);

  // State to manage modal visibility and selected movie
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // State for search within modal
  const [downloadSuccess, setDownloadSuccess] = useState(false); // State for download notification

  // Function to open modal and set the selected movie
  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  // Function to close modal and reset selected movie and search term
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
    setSearchTerm('');
  };

  // Function to handle metadata download using native APIs
  const downloadMetadata = () => {
    if (!selectedMovie || !selectedMovie.character_metadata) return;

    const dataStr = JSON.stringify(selectedMovie.character_metadata, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedMovie.slug}_character_metadata.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Trigger success notification
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000); // Hide after 3 seconds
  };

  // Function to filter metadata based on search term
  const filterMetadata = (metadata) => {
    if (!searchTerm) return metadata;
    const filtered = {};
    Object.keys(metadata).forEach((character) => {
      if (character.toLowerCase().includes(searchTerm.toLowerCase())) {
        filtered[character] = metadata[character];
      }
    });
    return filtered;

  };

  return (
    <div className={styles.methodologyContainer}>
      {/* Background Section */}
      <section className={styles.backgroundSection}>
        <Image
          src="/images/about-background.jpg"
          alt="Abstract representation of research methodology"
          fill
          style={{ objectFit: 'cover', opacity: 0.5 }}
          priority
        />
        <div className={styles.overlay}>
          <h1>Methodology</h1>
          <p>
            This section explains the <span>methods</span> used to study <span>emotional expressions</span> in Disney character dialogues. Using <span>sentiment analysis tools</span>, the research identifies and interprets <span>emotional tones</span> to find patterns that may support or challenge stereotypes. It covers data collection, preprocessing, and analysis.
          </p>
        </div>
      </section>

      {/* Film Selection */}
      <div className={styles.filmSelection}>
        <h2>Film Selection</h2>
        <p>
          A diverse range of Disney films released between 1990 and 2020 were selected to ensure a comprehensive analysis across different eras and cultural contexts. The selection criteria included:
        </p>
        <ul>
          <li>Release Year: 1990 - 2020</li>
          <li>Diversity of Characters: Inclusion of various genders and marginalized statuses</li>
          <li>Genre Variation: Encompassing different genres to capture a wide range of dialogues</li>
        </ul>
        <p>Selected Films:</p>
        <ul className={styles.horizontalList}>
          {sortedMovies.map((movie) => (
            <li key={movie.slug}>
              <a href={movie.url} target="_blank" rel="noopener noreferrer">
                {movie.title} ({movie.year})
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Data Collection Section */}
      <div className={styles.dataCollection}>
        <h2>Data Collection</h2>
        <p>
          Scripts for the selected Disney films were sourced from reliable online databases such as the <a href="https://imsdb.com/" target="_blank" rel="noopener noreferrer"><span>Internet Movie Script Database (IMSDb)</span></a>. The selection criteria included films released between 1990 and 2020, encompassing a diverse range of genres and characters.
        </p>
        <p>
          Each line of dialogue was meticulously extracted and tagged with the corresponding character’s identity, including attributes such as gender and marginalized status. This process was automated using custom Python scripts, ensuring accuracy and efficiency in data collection.
        </p>
      </div>

      {/* Data Preprocessing Section */}
      <AnimatedSection>
        <div className={styles.dataPreprocessing}>
          <h2>Data Preprocessing</h2>
          <p>
            The collected dialogue data underwent a series of preprocessing steps to prepare it for sentiment analysis. This included:
          </p>
          <ul>
            <li><strong>Data Cleaning:</strong> Removal of non-verbal cues, stage directions, and irrelevant annotations to isolate the spoken dialogues.</li>
            <li><strong>Data Normalization:</strong> Standardizing the text by converting all characters to lowercase, removing punctuation, and eliminating stopwords to ensure consistency across the dataset.</li>
            <li><strong>Expanding Contractions:</strong> Converting contractions (e.g., &quot;don&apos;t&quot; to &quot;do not&quot;) to their expanded forms to maintain consistency and improve analysis accuracy.</li>
          </ul>
          <p>
            These preprocessing steps were implemented using Python&apos;s NLTK library, which offers robust tools for natural language processing tasks.
          </p>
          {/* Optional: Flowchart or Diagram */}
          <div className={styles.flowchart}>
            <h3>Preprocessing Flowchart</h3>
            <Mermaid chart={preprocessingFlowchart} />
          </div>
        </div>
      </AnimatedSection>

      {/* Sentiment Analysis Section */}
      <AnimatedSection>
        <div className={styles.sentimentAnalysis}>

          <h2>Sentiment Analysis</h2>
          <p>
            <strong>Sentiment Analysis</strong>, also known as opinion mining, is a natural language processing (NLP) technique used to determine the emotional tone behind a series of words. Sentiment analysis is the extraction of sentiment, opinions, and emotions from text. It aims to identify and categorize opinions expressed in a text, especially to determine the writer's attitude towards a particular topic, product, or context. <strong><sup><a href="/references/#cite5">[5]</a></sup></strong>
          </p>
          <p>
            Originating from the need to analyze customer feedback and social media sentiments, sentiment analysis has evolved with advancements in machine learning and deep learning. Today, it encompasses various approaches, including lexicon-based methods and machine learning models.<strong><sup><a href="/references/#cite1">[1]</a></sup></strong>
          </p>
          <p>
            In this research, sentiment analysis serves as a pivotal tool to dissect and understand the emotional undertones embedded in Disney character dialogues. By quantifying emotions, the study aims to:
          </p>
          <ul>
            <li>Identify prevalent emotional expressions among different characters.</li>
            <li>Compare sentiment distributions across various demographic groups, focusing on gender and marginalized status.</li>
            <li>Uncover patterns that may either reinforce or challenge existing stereotypes in animated storytelling.</li>
          </ul>
          <p>
            Sentiment analysis was conducted using VADER (Valence Aware Dictionary and sEntiment Reasoner). VADER sentiment is a rule-based and lexicon-based framework for sentiment analysis, with support for intensity estimation. The frameworks have performed as well as human raters on Twitter data <strong><sup><a href="/references/#cite4">[4]</a></sup></strong>. Further, VADER sentiment performed better or equally when compared against seven sentiment analysis lexicons.<strong><sup><a href="/references/#cite4">[4]</a></sup></strong> VADER was selected for its effectiveness in handling emoticons, slang, and the informal language often found in animated dialogues.
          </p>
          <p>
            Emotional expressions were categorized as:
          </p>
          <ul>
            <li><strong>Positive:</strong> Emotions like joy and hope (e.g., 😊)</li>
            <li><strong>Neutral:</strong> Non-emotional, calm statements (e.g., 😐)</li>
            <li><strong>Negative:</strong> Emotions like anger and sadness (e.g., 😡)</li>
          </ul>
          <p>
            Each emotional tone was assigned a numerical value (+1 for positive, 0 for neutral, -1 for negative) or represented with emojis to facilitate comparative analysis and make the project more engaging.
          </p>
          <p>
            The VADER tool was integrated into the analysis pipeline using Python&apos;s <code>vaderSentiment</code> library, allowing for efficient and scalable sentiment scoring of extensive dialogue datasets.
          </p>

          <h2>View Sentiment Analysis Code on Github</h2>
          <a href='https://github.com/VelvetDragon/disney-films-emotion-NLP' target='_blank' className='hotlink_about'> <span> Github Link </span></a>

        </div>

      </AnimatedSection>

      {/* Tools Used Section */}
      <AnimatedSection>
        <div className={styles.toolsUsed}>
          <h2>Tools Used</h2>
          <p>
            The following tools were instrumental in executing the research methodology:
          </p>
          <div className={styles.toolsGrid}>
            {/* Python */}
            <div className={styles.toolItem}>
              <Image
                src="/images/python.png" // Ensure this image exists in public/images/
                alt="Python Logo"
                width={80}
                height={80}
                className={styles.toolImage}
              />
              <h3>Python</h3>
              <p>A versatile programming language used for scripting and data manipulation.</p>
            </div>
            {/* pandas */}
            <div className={styles.toolItem}>
              <Image
                src="/images/pandas.png" // Ensure this image exists in public/images/
                alt="pandas Logo"
                width={80}
                height={80}
                className={styles.toolImage}
              />
              <h3>pandas</h3>
              <p>A powerful data analysis and manipulation library for Python.</p>
            </div>
            {/* matplotlib */}
            <div className={styles.toolItem}>
              <Image
                src="/images/matplotlib.png" // Ensure this image exists in public/images/
                alt="matplotlib Logo"
                width={80}
                height={80}
                className={styles.toolImage}
              />
              <h3>matplotlib</h3>
              <p>A plotting library for creating static, animated, and interactive visualizations in Python.</p>
            </div>
            {/* NLTK */}
            <div className={styles.toolItem}>
              <Image
                src="/images/nltk.png" // Using the same image as VADER
                alt="NLTK Logo"
                width={80}
                height={80}
                className={styles.toolImage}
              />
              <h3>NLTK</h3>
              <p>A leading platform for building Python programs to work with human language data.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Data Annotation Section */}
      <AnimatedSection>
        <div className={styles.dataAnnotation}>
          <h2>Data Annotation</h2>
          <p>
            Beyond sentiment scores, the data was enriched with metadata about each character, including gender and marginalized status. This enrichment allows for a nuanced analysis of how different demographic groups are portrayed emotionally in Disney dialogues.
          </p>
          <p>
            The annotation process involved:
          </p>
          <ul>
            <li><strong>Demographic Profiling:</strong> Categorizing characters based on predefined demographic attributes.</li>
            <li><strong>Cultural Contextualization:</strong> Understanding and labeling dialogues that are influenced by cultural nuances or references.</li>
          </ul>

          {/* Character Metadata Display */}
          <div className={styles.characterMetadata}>
            <h2>Character Metadata Dictionary</h2>
            {sortedMovies.map((movie) => (
              <div key={movie.slug} className={styles.movieMetadata}>
                <h3>{movie.title} ({movie.year})</h3>
                {/* Button to open modal */}
                <button onClick={() => openModal(movie)} className={styles.viewMetadataBtn}>
                  View Metadata
                </button>
              </div>
            ))}
          </div>

          {/* Custom Modal */}
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            title={
              selectedMovie
                ? `${selectedMovie.title} (${selectedMovie.year}) - Character Metadata`
                : ''
            }
          >
            {/* Check if character_metadata exists */}
            {selectedMovie && selectedMovie.character_metadata ? (
              <>
                {/* Search Input */}
                <label htmlFor="character-search" className="visually-hidden">
                  Search Characters
                </label>
                <input
                  id="character-search"
                  type="text"
                  placeholder="Search characters..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.modalSearchInput}
                />
                {/* Character Metadata Display in Code Format */}
                <pre className={styles.codeBlock}>
                  <code>
                    {JSON.stringify(filterMetadata(selectedMovie.character_metadata), null, 2)}
                  </code>
                </pre>
                {/* Download Button */}
                <button onClick={downloadMetadata} className={styles.downloadBtn}>
                  Download Metadata
                </button>
              </>
            ) : (
              <p>No character metadata available for this movie.</p>
            )}
          </Modal>

          {/* Download Success Notification */}
          {downloadSuccess && (
            <div className={styles.notification}>
              Metadata download initiated!
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* Analysis Techniques Section */}
      <AnimatedSection>
        <div className={styles.analysisTechniques}>
          <h2>Analysis Techniques</h2>
          <p>
            The annotated data was subjected to various analytical techniques to uncover patterns and insights:
          </p>
          <ul>
            <li><strong>Descriptive Statistics:</strong> Calculating the distribution of sentiment scores across different demographic groups.</li>
            <li><strong>Comparative Analysis:</strong> Comparing sentiment distributions between privileged and marginalized backgrounds to identify disparities or trends.</li>
            <li><strong>Correlation Studies:</strong> Investigating the relationship between character attributes and the emotional tones of their dialogues.</li>
            <li><strong>Visualization:</strong> Creating charts and graphs to visually represent the findings for easier interpretation and presentation.</li>
          </ul>
          <p>
            Python libraries such as Pandas, NumPy, and Matplotlib were instrumental in performing these analyses, providing robust data manipulation and visualization capabilities.
          </p>
          <p>
            The project also draws inspiration from broader sentiment analysis techniques, such as
            those used by Karen Ouyang in her project, <em>"Once Upon A Time: NLP on Disney Movie Scripts & Their Original Stories"</em>. <strong><sup><a href="/references/#cite6">[6]</a></sup></strong>
            Her approach employed Word2Vec and PCA to visualize emotional relationships between characters
            in both Disney movies and their original literary sources. While this analysis focuses solely
            on Disney scripts, incorporating such comparative methodologies highlights how sentiment trends
            are influenced by cultural adaptations and narrative simplifications. This perspective helps
            contextualize findings within broader storytelling patterns, offering a deeper understanding
            of the emotional nuances in Disney narratives.
          </p>
        </div>
      </AnimatedSection>


      {/* Navigation to Next Page */}
      <Link href="/films-analyzed" legacyBehavior>
        <a className={styles.nxtPage} aria-label="Next page"> Next page ➡ </a>
      </Link>
    </div>
  );
}
