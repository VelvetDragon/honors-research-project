// src/app/methodology/page.js
import styles from '@/styles/Methodology.module.css';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

export default function Methodology() {
  return (
    <div className={styles.methodologyContainer}>
      {/* Background Section */}
      <section className={styles.backgroundSection}>
        <Image
          src="/images/about-background.jpg" // Ensure this image exists in public/images/
          alt="Methodology Background"
          fill
          style={{ objectFit: 'cover', opacity: 0.5 }}
          priority
        />
        <div className={styles.overlay}>
          <h1>Methodology</h1>
          <p>
            This section outlines the research methods employed to analyze emotional expressions in Disney character dialogues. The study leverages sentiment analysis tools to uncover patterns that may reflect or challenge existing stereotypes.
          </p>
        </div>
      </section>

      {/* Data Collection Section */}
      <AnimatedSection>
        <div className={styles.dataCollection}>
          <h2>Data Collection</h2>
          <p>
            Scripts for the selected Disney films were sourced from reliable online databases. Each line of dialogue was tagged with the corresponding character’s identity, detailing gender, race, and cultural background. This meticulous tagging ensures accurate sentiment analysis and demographic comparisons.
          </p>
        </div>
      </AnimatedSection>

      {/* Sentiment Analysis Section */}
      <AnimatedSection>
        <div className={styles.sentimentAnalysis}>
          <h2>Sentiment Analysis</h2>
          <p>
            Sentiment analysis tools such as VADER was employed to evaluate the emotional tones of the dialogues. Emotional expressions were categorized as:
          </p>
          <ul>
            <li><strong>Positive:</strong> Emotions like joy and hope (e.g., 😊)</li>
            <li><strong>Neutral:</strong> Non-emotional, calm statements (e.g., 😐)</li>
            <li><strong>Negative:</strong> Emotions like anger and sadness (e.g., 😡)</li>
          </ul>
          <p>
            Each emotional tone was assigned a numerical value (+1 for positive, 0 for neutral, -1 for negative) or represented with emojis to facilitate comparative analysis and make the project more engaging.
          </p>
        </div>
      </AnimatedSection>

      {/* Data Annotation Section */}
      <AnimatedSection>
        <div className={styles.dataAnnotation}>
          <h2>Data Annotation</h2>
          <p>
            Beyond sentiment scores, the data was enriched with metadata about each character, including gender, race, and cultural background. This enrichment allows for a nuanced analysis of how different demographic groups are portrayed emotionally in Disney dialogues.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
