// src/app/methodology/page.js
'use client'; // Declare this file as a client component

import styles from '@/styles/Methodology.module.css';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import MermaidChart with SSR disabled
const MermaidChart = dynamic(() => import('@/components/MermaidChart'), { ssr: false });

export default function Methodology() {

  const preprocessingFlowchart = `
    graph TD
        A[Data Collection] --> B[Data Cleaning]
        B --> C[Data Normalization]
        C --> D[Expanding Contractions]
        D --> E[Preprocessed Data]
  `;

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
            This section explains the <span>methods</span> used to study <span>emotional expressions</span> in Disney character dialogues. Using <span>sentiment analysis tools</span>, the research identifies and interprets <span>emotional tones</span> to find patterns that may support or challenge stereotypes. It covers data collection, preprocessing, and analysis. Ethical practices and validation steps are yet to be included.....
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
          <li>Diversity of Characters: Inclusion of various genders, races, and cultural backgrounds</li>
          <li>Genre Variation: Encompassing different genres to capture a wide range of dialogues</li>
        </ul>
        <p>Selected Films:</p>
        <ul>
          <li>Mulan</li>
          <li>Moana</li>
          <li>The Princess and the Frog</li>
          <li>Pocahontas</li>
          <li>Aladdin</li>
          {/* <li>Raya and the Last Dragon</li> */}
          <li>Coco</li>
        </ul>
      </div>

      {/* Data Collection Section */}

      <div className={styles.dataCollection}>
        <h2>Data Collection</h2>
        <p>
          Scripts for the selected Disney films were sourced from reliable online databases such as <a href="https://www.springfieldspringfield.co.uk/" target="_blank" rel="noopener noreferrer">Springfield! Springfield!</a> and <a href="https://imsdb.com/" target="_blank" rel="noopener noreferrer">Internet Movie Script Database (IMSDb)</a>. The selection criteria included films released between 1990 and 2020, encompassing a diverse range of genres and characters.
        </p>
        <p>
          Each line of dialogue was meticulously extracted and tagged with the corresponding character’s identity, including attributes such as gender, race, and cultural background. This process was automated using custom Python scripts, ensuring accuracy and efficiency in data collection.
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
          {/* Flowchart Example */}
          <div className={styles.flowchart}>
            <MermaidChart chart={preprocessingFlowchart} />
          </div>
        </div>
      </AnimatedSection>

      {/* Sentiment Analysis */}
      <AnimatedSection>
        <div className={styles.sentimentAnalysis}>
          <h2>Sentiment Analysis</h2>
          <p>
            <strong>Sentiment Analysis</strong>, also known as opinion mining, is a natural language processing (NLP) technique used to determine the emotional tone behind a series of words. Sentiment analysis is the extraction of sentiment, opinions, and emotions from text. It aims to identify and categorize opinions expressed in a text, especially to determine the writer's attitude towards a particular topic, product, or context. <strong><sup><a href="/references/#cite5">5</a></sup></strong>
          </p>
          <p>
            Originating from the need to analyze customer feedback and social media sentiments, sentiment analysis has evolved with advancements in machine learning and deep learning. Today, it encompasses various approaches, including lexicon-based methods and machine learning models.<strong><sup><a href="/references/#cite1">1</a></sup></strong>
          </p>
          <p>
            In this research, sentiment analysis serves as a pivotal tool to dissect and understand the emotional undertones embedded in Disney character dialogues. By quantifying emotions, the study aims to:
          </p>
          <ul>
            <li>Identify prevalent emotional expressions among different characters.</li>
            <li>Compare sentiment distributions across various demographic groups, such as gender, race, and cultural background.</li>
            <li>Uncover patterns that may either reinforce or challenge existing stereotypes in animated storytelling.</li>
          </ul>
          <p>
            Sentiment analysis was conducted using VADER (Valence Aware Dictionary and sEntiment Reasoner).VADER sentiment is a rule-based and lexicon-based framework for sentiment analysis, with support for intensity estimation. The frameworks have performed as well as human raters on Twitter data <strong><sup><a href="/references/#cite4">4</a></sup></strong>. Further, VADER sentiment performed better or equally when compared against seven sentiment analysis lexicons.<strong><sup><a href="/references/#cite4">4</a></sup></strong> VADER was selected for its effectiveness in handling emoticons, slang, and the informal language often found in animated dialogues.
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
            Beyond sentiment scores, the data was enriched with metadata about each character, including gender, race, and cultural background. This enrichment allows for a nuanced analysis of how different demographic groups are portrayed emotionally in Disney dialogues.
          </p>
          <p>
            The annotation process involved:
          </p>
          <ul>
            <li><strong>Demographic Profiling:</strong> Categorizing characters based on predefined demographic attributes.</li>
            <li><strong>Cultural Contextualization:</strong> Understanding and labeling dialogues that are influenced by cultural nuances or references.</li>
          </ul>
          {/* <p>
            Tools such as <a href="https://www.labelbox.com/" target="_blank" rel="noopener noreferrer">Labelbox</a> were utilized to streamline the annotation process, ensuring consistency and accuracy in labeling.
          </p> */}
        </div>
      </AnimatedSection>

      {/* Analysis Techniques Section */}
      <AnimatedSection>
        <div className={styles.analysisTechniques}>
          <h2>Analysis Techniques</h2>
          <p>
            {/* The annotated data was subjected to various analytical techniques to uncover patterns and insights: */}
            Still needs to be done completely ..... (trying to include things like descriptive statistic, correlation studies, visualizations etc)
          </p>
          {/* <ul>
            <li><strong>Descriptive Statistics:</strong> Calculating the distribution of sentiment scores across different demographic groups.</li>
            <li><strong>Comparative Analysis:</strong> Comparing sentiment distributions between privileged and marginalized backgrounds to identify disparities or trends.</li>
            <li><strong>Correlation Studies:</strong> Investigating the relationship between character attributes and the emotional tones of their dialogues.</li>
            <li><strong>Visualization:</strong> Creating charts and graphs to visually represent the findings for easier interpretation and presentation.</li>
          </ul>
          <p>
            Python libraries such as Pandas, NumPy, and Matplotlib were instrumental in performing these analyses, providing robust data manipulation and visualization capabilities.
          </p> */}
        </div>
      </AnimatedSection>

      {/* Ethical Considerations Section */}
      <AnimatedSection>
        <div className={styles.ethics}>
          <h2>Ethical Considerations</h2>
          <p>
            {/* Ethical guidelines were strictly adhered to throughout the research process. */}
            Key considerations included:.............. (like bias mitigation, transparency etc)
          </p>
          {/* 
          <ul>
            <li><strong>Data Privacy:</strong> Ensuring that all data sourced from scripts did not infringe on intellectual property rights.</li>
            <li><strong>Bias Mitigation:</strong> Actively working to identify and minimize any biases in data collection, annotation, and analysis.</li>
            <li><strong>Transparency:</strong> Maintaining clear documentation of all methodologies and processes to allow for reproducibility and scrutiny.</li>
          </ul>
          <p>
            By prioritizing these ethical standards, the research upholds integrity and fosters trust in the presented findings.
          </p> 
          */}
        </div>
      </AnimatedSection>

      {/* Limitations Section */}
      <AnimatedSection>
        <div className={styles.limitations}>
          <h2>Limitations</h2>
          <p>
            While this study provides valuable insights, it is not without limitations: .......
          </p>
          {/* 
          <ul>
            <li><strong>Scope of Data:</strong> The analysis is confined to scripts of selected Disney films released between 1990 and 2020, which may not represent all narratives or character developments.</li>
            <li><strong>Sentiment Analysis Accuracy:</strong> Automated sentiment analysis tools, despite their sophistication, may misinterpret context-specific nuances or sarcasm inherent in dialogues.</li>
            <li><strong>Demographic Categorization:</strong> The categorization of characters based on gender, race, and cultural background is subject to the accuracy and completeness of available data.</li>
          </ul>
          <p>
            Future research could address these limitations by expanding the dataset, incorporating more advanced sentiment analysis techniques, and exploring additional demographic factors.
          </p> 
          */}
        </div>
      </AnimatedSection>
      <Link href="/films-analyzed" legacyBehavior>
            <a className={styles.nxtPage} aria-label="Next page"> Next page ➡ </a>
      </Link>
    </div>
  );
}
