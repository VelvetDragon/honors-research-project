// src/app/about/page.js
import styles from '@/styles/About.module.css';
import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      {/* Background Section */}

      <section className={styles.backgroundSection}>
        <Image
          src="/images/about-background.jpg"
          alt="About Background"
          fill
          style={{ objectFit: 'cover', opacity: 0.5 }}
          priority
        />
        <div className={styles.overlay}>
          <h1>About the Project</h1>
          <p>
            <span className='spans'> Unmasking Emotions: Disney Characters Through Data </span> is part of my sophomore Honors Research Project at the University of Southern Mississippi. This study examines how Disney characters express <span className='spans'>emotions </span> in their dialogues across different films.
            Using <span className='spans'>sentiment analysis </span> tools, this research uncovers patterns in emotional expression, focusing on how gender, race, and cultural background influence these patterns. The goal is to explore whether these portrayals reflect or challenge <span className='spans'>stereotypes </span> in animated storytelling, contributing to a deeper understanding of representation in popular media.
          </p>
        </div>
      </section>


      {/* Background Content */}
      
        <div className={styles.background}>
          <h2>Background</h2>
          <p>
            Disney films are a cornerstone of global entertainment, captivating audiences with their compelling characters and timeless stories. Beyond entertainment, these films influence cultural narratives, shaping societal perceptions of gender, race, and identity. Previous research has explored dialogue imbalances in Disney films, revealing patterns in how different characters are portrayed. However, less attention has been paid to the emotional tones conveyed in character dialogues.
          </p>
          <p>
            This research addresses this gap by analyzing emotional expressions in Disney films through sentiment analysis. By examining emotional tones across characters of varying genders, races, and cultural backgrounds, the study seeks to uncover patterns that either reinforce or challenge societal stereotypes. This exploration is critical in understanding how popular media impacts audience perceptions and reflects cultural norms.
          </p>
        </div>


      {/* Objectives Section */}
      <AnimatedSection>
        <div className={styles.objectives}>
          <h2>Research Objectives</h2>
          <p>
            This research aims to investigate how Disney character dialogues convey emotional tones and whether these tones vary between characters of different genders, racial, and cultural backgrounds using sentiment analysis tools. Specifically, the study seeks to:
          </p>
          <ul>
            <li>Analyze the emotional content of dialogues in selected Disney films.</li>
            <li>Compare sentiment distribution across characters from privileged and marginalized backgrounds.</li>
            <li>Identify patterns that may perpetuate or challenge existing stereotypes.</li>
          </ul>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection>
        <div className={styles.team}>
          <h2>About the Researcher</h2>
          <div className={styles.teamMember}>
            <Image
              src="/images/researcher.jpg" // Replace with your image
              alt="Researcher Photo"
              width={150}
              height={150}
              className={styles.researcherPhoto}
            />
            <div className={styles.researcherInfo}>
              <h3>Suwan Aryal</h3>
              <p>
                Suwan Aryal is a ...
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
