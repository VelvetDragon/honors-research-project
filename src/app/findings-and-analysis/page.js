'use client';

import styles from '@/styles/FindingsAndAnalysis.module.css';
import AnimatedSection from '@/components/AnimatedSection';
import HoverChart from '@/components/HoverChart';
import sentimentData from '@/data/sentiment_analysis_data.json';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components and plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

// Helper functions to generate chart data
const generatePieChartData = (distribution) => ({
  labels: ['Positive', 'Neutral', 'Negative'],
  datasets: [
    {
      data: [distribution.Positive, distribution.Neutral, distribution.Negative],
      backgroundColor: ['#a6f2a6', '#79b4ed', '#f1a6a6'],
      hoverBackgroundColor: ['#66bb6a', '#ffee58', '#e57373'],
      datalabels: {
        color: '#000',
        formatter: (value) => `${value}%`,
      },
    },
  ],
});

const generateBarChartData = (distribution) => ({
  labels: ['Positive', 'Neutral', 'Negative'],
  datasets: [
    {
      label: 'Sentiment Score (%)',
      data: [distribution.Positive, distribution.Neutral, distribution.Negative],
      backgroundColor: ['#a6f2a6', '#79b4ed', '#f1a6a6'],
      hoverBackgroundColor: ['#66bb6a', '#ffee58', '#e57373'],
      datalabels: {
        anchor: 'end',
        align: 'top',
        color: '#000',
        formatter: (value) => `${value}%`,
      },
    },
  ],
});

// Example distributions (male/female, marginalized/non-marginalized) remain for illustrative comparisons
const aladdinMaleGenderDist = { Positive: 30, Neutral: 50, Negative: 20 };
const aladdinFemaleGenderDist = { Positive: 27, Neutral: 49, Negative: 24 };
const aladdinMarginalizedDist = { Positive: 22.9, Neutral: 54.3, Negative: 22.9 };
const aladdinNonMarginalizedDist = { Positive: 32.9, Neutral: 46.8, Negative: 20.3 };

const decades = ['1990s', '2000s', '2010s', '2020s'];
const positiveData = [32.75, 30, 40, 34.29];
const neutralData = [49.75, 50, 40, 40];
const negativeData = [17.5, 20, 20, 25.71];

const evolutionData = {
  labels: decades,
  datasets: [
    {
      label: 'Positive',
      data: positiveData,
      backgroundColor: '#a6f2a6',
      hoverBackgroundColor: '#66bb6a',
    },
    {
      label: 'Neutral',
      data: neutralData,
      backgroundColor: '#79b4ed',
      hoverBackgroundColor: '#5c95db',
    },
    {
      label: 'Negative',
      data: negativeData,
      backgroundColor: '#f1a6a6',
      hoverBackgroundColor: '#e57373',
    },
  ],
};

const evolutionOptions = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: { display: false },
    tooltip: {
      callbacks: {
        label: (context) => `${context.dataset.label}: ${context.formattedValue}%`,
      },
    },
  },
  scales: {
    x: {
      stacked: true,
      max: 100,
      ticks: {
        callback: (value) => `${value}%`
      }
    },
    y: {
      stacked: true,
    },
  },
};


export default function FindingsAndAnalysis() {
  return (
    <div className={styles.findingsContainer}>
      <h2 className={styles.mainTitle}>Findings and Analysis</h2>

      {/* Key Observations */}
      <section className={styles.block}>
        <h3 className={styles.blockTitle}>Key Observations</h3>
        <ul className={styles.observationsList}>
          <li>Protagonists often lean towards mild positive sentiment</li>
          <li>Antagonists showcase emotional complexity, not purely negativity</li>
          <li>Supporting characters maintain neutral sentiment, guiding narrative flow</li>
          <li>Gender-based differences are subtle but indicate evolving female portrayals</li>
          <li>Marginalized status correlates with distinct emotional patterns, suggesting nuanced representation</li>
        </ul>
      </section>

      {/* Block 1: Research Discoveries */}
      <section className={styles.block}>
        <h3 className={styles.blockTitle}>1. Research Discoveries</h3>
        <p className={styles.intro}>
          By examining selected Disney films (<em>Mulan</em>, <em>Pocahontas</em>, <em>Aladdin</em>, <em>Coco</em>, <em>The Princess and the Frog</em>), we observed distinct emotional trends in character dialogues. These patterns highlight how emotional tones contribute to storytelling, character development, and cultural representation.
        </p>
        <h4 className={styles.subSubSectionTitle}>1.1. Neutral Sentiment as a Narrative Backbone</h4>
        <p className={styles.intro}>
          Across multiple films, dialogues predominantly exhibited{' '}
          <HoverChart
            chartData={{
              labels: ['Positive', 'Neutral', 'Negative'],
              datasets: [
                {
                  data: [
                    (35.5 + 30 + 30 + 40 + 34.3) / 5, // Average Positive
                    (49.5 + 50 + 50 + 40 + 65.9) / 5, // Average Neutral
                    (15.0 + 20 + 20 + 20 + 24.6) / 5, // Average Negative
                  ],
                  backgroundColor: ['#a6f2a6', '#79b4ed', '#f1a6a6'],
                  hoverBackgroundColor: ['#66bb6a', '#5c95db', '#e57373'],
                  datalabels: {
                    color: '#000',
                    formatter: (value) => `${value.toFixed(1)}%`,
                  },
                },
              ],
            }}
            chartOptions={{
              responsive: true,
              plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Overall Sentiment Distribution' },
                datalabels: {
                  display: true,
                  color: '#000',
                },
              },
            }}
            chartType="pie"
          >
            neutral sentiment
          </HoverChart>
          . Neutral lines serve as the narrative “glue,” providing essential plot information without steering audience emotions too sharply.
        </p>
        <p className={styles.analysis}>
          <strong>Analysis:</strong> The reliance on neutral sentiment suggests a strategic storytelling approach—balancing emotional peaks with stable, expository dialogues that make complex narratives accessible.
        </p>
        <p className={styles.implications}>
          <strong>Implications:</strong> Recognizing neutral sentiment as a structural tool can guide future scriptwriting, ensuring that emotional highlights stand out against a stable narrative foundation.
        </p>

        <h4 className={styles.subSubSectionTitle}>1.2. Protagonists and Positive Sentiment</h4>
        <p className={styles.intro}>
          Protagonists consistently show a mild positive bias, underlining their roles as moral compasses and aspirational figures.
        </p>
        <p className={styles.intro}>
          <HoverChart
            chartData={generatePieChartData(sentimentData.Aladdin['Sentiment Distribution for Roles']['Protagonist'])}
            chartOptions={{
              responsive: true,
              plugins: {
                legend: { display: false },
                title: { display: false },
                datalabels: {
                  display: true,
                  color: '#000',
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,
                  ticks: { callback: (value) => `${value}%` },
                },
              },
            }}
            chartType="bar"
          >
            Protagonists
          </HoverChart>
          {' '}consistently incline towards warmth, optimism, or hope.
        </p>
        <p className={styles.analysis}>
          <strong>Analysis:</strong> This positive skew reinforces audience alignment with protagonists, fostering empathy and moral clarity within complex stories.
        </p>
        <p className={styles.implications}>
          <strong>Implications:</strong> Writers can leverage this insight to craft relatable heroes whose emotional positivity anchors the audience, even amidst challenging narratives.
        </p>
      </section>

      {/* Block 2: Evolution Over Time */}
      <section className={styles.block}>
        <h3 className={styles.blockTitle}>2. Evolution of Emotional Tones Over Time</h3>
        <p className={styles.intro}>
          Over the decades, sentiment distributions have evolved, reflecting shifts in cultural norms and storytelling priorities.
        </p>
        <div className={styles.chartContainer}>
          <Bar data={evolutionData} options={evolutionOptions} />
        </div>
        <p className={styles.analysis}>
          <strong>Analysis:</strong>
          A gradual increase in positive sentiment and a corresponding adjustment in neutral and negative tones highlight Disney’s evolving response to cultural sensitivities and audience expectations.
          <br /><br />
          As Karen Eisenhauer’s research emphasizes, Disney films serve as powerful pedagogical tools, using language, tone, and character archetypes to construct and communicate cultural discourses.<strong><sup><a href="/references/#cite2">[2]</a></sup></strong> These films do not simply reflect societal norms but actively shape them, influencing how audiences—particularly children—understand morality, gender roles, and social dynamics.
          <br /><br />
          In the 1990s, heavily neutral tones (~49.75%) created narrative stability, reinforcing traditional roles through expository dialogues. By the 2010s, films like <em>Coco</em> began to incorporate higher positive tones (~40%) and reduced neutrality, aligning with modern storytelling that emphasizes emotional resonance and representation. Negative tones, while consistent at ~20% across decades, have become increasingly nuanced, allowing for multidimensional antagonists and morally complex plots. This evolution reflects a strategic shift by Disney to engage audiences with uplifting yet authentic narratives, balancing tradition and modernity.
        </p>
        <p className={styles.implications}>
          <strong>Implications: </strong>
          Recognizing these temporal shifts provides valuable insights for modern creators. As Eisenhauer notes, Disney's linguistic and tonal choices are not incidental but deliberate, teaching children societal values while subtly reinforcing dominant cultural ideologies.
          <br /><br />
          To align with current values, creators can draw on these trends to craft narratives that resonate emotionally while promoting inclusivity and diversity. Positive sentiment can be used to inspire hope and resilience, while nuanced negative tones add realism and depth to storytelling. Incorporating cultural discourses thoughtfully, as Disney has done, can ensure that media remains both relevant and impactful across generations.
          <br /><br />
          By understanding how language and sentiment evolve in media, creators have an opportunity to challenge stereotypes, foster empathy, and contribute to a richer cultural discourse—one that reflects the complexity of human experiences and values inclusivity and authenticity.
        </p>


      </section>


      {/* Block 4: Antagonists and Emotional Complexity */}
      <section className={styles.block}>
        <h3 className={styles.blockTitle}>3. Antagonists: More than Just Negative</h3>
        <p className={styles.intro}>
          Antagonists display not solely negative sentiment but a range of neutral and even positive tones, breaking the stereotype of pure villainy.
          Across Disney films, antagonists exhibit an average of 29.18% positive sentiment, 38.2% neutral, and 32.6% negative sentiment.
        </p>
        <p className={styles.intro}>
          <HoverChart
            chartData={{
              labels: ['Positive', 'Neutral', 'Negative'],
              datasets: [
                {
                  label: 'Sentiment (%)',
                  data: [29.18, 38.2, 32.6],
                  backgroundColor: ['#a6f2a6', '#79b4ed', '#f1a6a6'],
                  hoverBackgroundColor: ['#66bb6a', '#5c95db', '#e57373'],
                  datalabels: {
                    anchor: 'end',
                    align: 'top',
                    color: '#000',
                    formatter: (value) => `${value.toFixed(1)}%`,
                  },
                },
              ],
            }}
            chartOptions={{
              responsive: true,
              plugins: {
                legend: { display: false },
                title: { display: false },
                datalabels: { display: true, color: '#000' },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,
                  ticks: { callback: (value) => `${value}%` },
                },
              },
            }}
            chartType="bar"
          >
            Antagonist sentiment
          </HoverChart>
          {" "}reveals a richer emotional palette than stereotypes suggest.
        </p>
        <p className={styles.analysis}>
          <strong>Analysis:</strong> Antagonists in Disney films are portrayed with more emotional nuance than traditional "villains." For example, the presence of 29.18% positive sentiment among antagonists demonstrates how these characters can exhibit moments of charm, wit, or relatability. Meanwhile, the significant neutral sentiment (38.2%) often reflects strategic expository dialogue or moments of reflection, making these characters feel more realistic and multifaceted.
          <br /><br />
          This complexity encourages audiences to explore the motivations and inner conflicts of antagonists, rather than dismissing them as one-dimensional embodiments of evil. Such portrayals foster deeper engagement and moral contemplation, allowing viewers to empathize with or understand antagonists in a more meaningful way.
        </p>
        <p className={styles.implications}>
          <strong>Implications:</strong> Embracing this complexity can enhance narrative depth and challenge simplistic good-versus-evil tropes. By crafting antagonists with multidimensional traits, creators can create more compelling stories that resonate with audiences of all ages.
          <br /><br />
          This approach also aligns with modern storytelling trends that seek to humanize traditionally "bad" characters, offering fresh perspectives and enriching the moral landscape of the narrative. Such nuanced portrayals can inspire critical thinking and empathy in audiences, making stories more impactful and memorable.
        </p>
      </section>


      {/* Block 5: Gender-Based Sentiment Differences */}
      <section className={styles.block}>
        <h3 className={styles.blockTitle}>4. Gender-Based Emotional Patterns</h3>
        <p className={styles.intro}>
          Gender plays an important role in shaping emotional expression in Disney films. Male and female characters demonstrate distinct sentiment patterns, with subtle but meaningful differences. While male characters tend to show higher neutrality, female characters exhibit a broader emotional range, reflecting evolving narratives that embrace multidimensional portrayals.
        </p>
        <p className={styles.intro}>
          Research indicates that princesses in early Disney films frequently embodied traditionally feminine traits, such as affection and fearfulness, with limited assertiveness typically directed at animals or non-human characters. Over time, however, later princesses, like Mulan and Tiana, began to exhibit traits such as bravery and independence, alongside traditional femininity, reflecting societal shifts in gender expectations.<strong><sup><a href="/references/#cite3">[3]</a></sup></strong>
        </p>
        <div className={styles.chartContainer}>
          <div className={styles.pieChartGroup}>
            <div className={styles.pieChart}>
              <HoverChart
                chartData={{
                  labels: ['Positive', 'Neutral', 'Negative'],
                  datasets: [
                    {
                      data: [31.8, 50.6, 26.5],
                      backgroundColor: ['#a6f2a6', '#79b4ed', '#f1a6a6'],
                      hoverBackgroundColor: ['#5c95db', '#e57373', '#66bb6a'],
                      datalabels: {
                        color: '#000',
                        formatter: (value) => `${value.toFixed(1)}%`,
                      },
                    },
                  ],
                }}
                chartOptions={{
                  responsive: true,
                  plugins: {
                    legend: { position: 'top' },
                    title: { display: false },
                    datalabels: {
                      display: true,
                      formatter: (value, context) => `${value.toFixed(1)}%`,
                      color: '#000',
                    },
                  },
                }}
                chartType="pie"
              >
                Male Sentiment Distribution <br /><br />
              </HoverChart>
            </div>
            <div className={styles.pieChart}>
              <HoverChart
                chartData={{
                  labels: ['Positive', 'Neutral', 'Negative'],
                  datasets: [
                    {
                      data: [31.8, 44.7, 17.9],
                      backgroundColor: ['#a6f2a6', '#79b4ed', '#f1a6a6'],
                      hoverBackgroundColor: ['#e57373', '#5c95db', '#66bb6a'],
                      datalabels: {
                        color: '#000',
                        formatter: (value) => `${value.toFixed(1)}%`,
                      },
                    },
                  ],
                }}
                chartOptions={{
                  responsive: true,
                  plugins: {
                    legend: { position: 'top' },
                    title: { display: false },
                    datalabels: {
                      display: true,
                      formatter: (value, context) => `${value.toFixed(1)}%`,
                      color: '#000',
                    },
                  },
                }}
                chartType="pie"
              >
                Female Sentiment Distribution
              </HoverChart>
            </div>
          </div>
        </div>
        <p className={styles.analysis}>
          <strong>Analysis: </strong>
          The data reveals subtle but important differences in sentiment patterns between genders. Male characters show a higher level of neutrality (~50.6%), reflecting their roles in delivering expository or action-driven dialogue. In contrast, female characters exhibit a more balanced emotional range, with lower neutrality (~44.7%) and negativity (~17.9%). These findings echo studies indicating that princesses increasingly incorporate traditionally masculine traits like bravery and athleticism without entirely discarding their feminine qualities.<sup><a href="/references/#cite3">[3]</a></sup>
        </p>
        <p className={styles.implications}>
          <strong>Implications: </strong>
          These findings underscore the importance of emotional diversity in character design. By continuing to expand the emotional complexity of female characters, creators can provide more authentic, relatable portrayals that resonate with diverse audiences. Similarly, introducing more emotional depth for male characters can add layers of relatability and complexity, moving beyond action-driven or neutral expository roles.
          <br /><br />
          As Disney continues to explore these patterns, modern storytelling can challenge traditional norms, fostering empathy and redefining cultural expectations for all genders. The move toward balanced emotional representation paves the way for more inclusive and impactful narratives that reflect the complexity of real-life experiences.
        </p>
      </section>


      {/* Block 6: Marginalized vs. Non-Marginalized Characters */}
      <section className={styles.block}>
        <h3 className={styles.blockTitle}>5. Marginalized Characters and Nuanced Emotions</h3>
        <p className={styles.intro}>
          Marginalized characters often show balanced sentiment distributions, suggesting carefully moderated emotional expressions. <br />
          Meanwhile, non-marginalized characters may display slightly higher positivity, possibly reflecting narrative privileges or fewer emotional constraints.
        </p>
        <div className={styles.chartContainer}>
          <div className={styles.pieChartGroup}>

            <div className={styles.pieChart}>
              <HoverChart
                chartData={{
                  labels: ['Positive', 'Neutral', 'Negative'],
                  datasets: [
                    {
                      data: [27.84, 50.68, 23.06],
                      backgroundColor: ['#a6f2a6', '#79b4ed', '#f1a6a6'],
                      hoverBackgroundColor: ['#66bb6a', '#5c95db', '#e57373'],
                      datalabels: {
                        color: '#000',
                        formatter: (value) => `${value.toFixed(1)}%`,
                      },
                    },
                  ],
                }}
                chartOptions={{
                  responsive: true,
                  plugins: {
                    legend: { position: 'top' },
                    title: { display: false },
                    datalabels: {
                      display: true,
                      formatter: (value, context) => `${value.toFixed(1)}%`,
                      color: '#000',
                    },
                  },
                }}
                chartType="pie"
              >
                Marginalized Characters <br /> <br />
              </HoverChart>
            </div>


            <div className={styles.pieChart}>
              <HoverChart
                chartData={{
                  labels: ['Positive', 'Neutral', 'Negative'],
                  datasets: [
                    {
                      data: [27.3, 49.9, 22.9],
                      backgroundColor: ['#a6f2a6', '#79b4ed', '#f1a6a6'],
                      hoverBackgroundColor: ['#66bb6a', '#5c95db', '#e57373'],
                      datalabels: {
                        color: '#000',
                        formatter: (value) => `${value.toFixed(1)}%`,
                      },
                    },
                  ],
                }}
                chartOptions={{
                  responsive: true,
                  plugins: {
                    legend: { position: 'top' },
                    title: { display: false },
                    datalabels: {
                      display: true,
                      formatter: (value, context) => `${value.toFixed(1)}%`,
                      color: '#000',
                    },
                  },
                }}
                chartType="pie"
              >  Non-Marginalized Characters </HoverChart>
            </div>
          </div>
        </div>
        <p className={styles.analysis}>
          <strong>Analysis:</strong> The data highlights nuanced differences in emotional portrayal between marginalized and non-marginalized characters. <br />
          Marginalized characters show a balanced emotional distribution, with slightly higher neutrality (~50.68%) and lower positivity (~27.84%). This moderation may reflect narrative tension or attempts to grant these characters complexity within their roles. <br /><br />
          Conversely, non-marginalized characters exhibit higher positivity (~35.66%) and lower neutrality (~44.66%), often reflecting narrative privileges or fewer emotional constraints. The lower negativity (~19.68%) for non-marginalized characters further underscores how their roles may align with traditional heroic or aspirational archetypes.
        </p>
        <p className={styles.implications}>
          <strong>Implications:</strong> Understanding these portrayals helps creators and critics advocate for equitable emotional representation. <br />
          To achieve this, storytellers should ensure that marginalized characters are not only depicted with emotional complexity but also granted positive sentiment levels that resonate with empowerment and agency. Likewise, non-marginalized characters should reflect greater emotional vulnerability to create more relatable and multidimensional narratives.
          <br /><br />
          By balancing emotional expression across character identities, creators can foster inclusivity, challenge stereotypes, and deliver richer, more authentic storytelling experiences that resonate with diverse audiences.
        </p>
      </section>

      {/* Block 3: Importance of This Research */}
      <section className={styles.block}>
        <h3 className={styles.blockTitle}>6. Importance of This Research</h3>
        <p className={styles.intro}>
          Understanding the emotional landscape of Disney dialogues matters because media narratives influence cultural perceptions of gender, race, and identity.
        </p>
        <p className={styles.analysis}>
          <strong>Analysis:</strong> By examining how sentiment aligns with characters&apos; social identities, we gain insight into underlying narratives about who is allowed emotional breadth, who is portrayed as hopeful or resilient, and who faces more constraints on their emotional expressions.
        </p>
        <p className={styles.implications}>
          <strong>Implications:</strong> Such insights inform educators, critics, and creators about where representation may be enhanced. They open pathways for more equitable storytelling, reflecting a fuller range of human emotions across all demographics.
        </p>
      </section>


      {/* Synthesis of Findings - Final Reflections */}
      <section className={styles.block}>
        <h3 className={styles.sectionTitle}>Synthesis of Findings</h3>
        <p className={styles.conclusion}>
          <strong>What I Have Learned:</strong> My exploration of Disney films reveals that emotional tones in dialogue are not randomly distributed. Protagonists lean towards positivity, antagonists show unexpected complexity, and supporting roles often remain neutral to stabilize the narrative. Observations of gender and marginalized status highlight that emotional expression is intertwined with cultural and social factors, guiding how audiences perceive character identity.
        </p>
        <p className={styles.conclusion}>
          <strong>What I Can Establish About These Characters:</strong> Characters are more than just their roles; their emotional languages shape their identities. A hopeful protagonist, a multi-layered antagonist, or a marginalized character navigating subtle emotional terrain all contribute to a tapestry of storytelling that both reflects and influences cultural values.
        </p>
        <p className={styles.conclusion}>
          <strong>Why It Matters:</strong> These patterns matter because films—especially those as pervasive as Disney’s—affect how we envision heroism, villainy, femininity, masculinity, and cultural identity. By revealing these emotional patterns, we encourage more intentional character creation, informed critique, and conscious reception. In line with the research proposal, the findings suggest that sentiment analysis can illuminate biases, strengths, and areas of growth in media representation. Ultimately, understanding these emotional undercurrents helps foster more inclusive, resonant, and enriching narratives for global audiences.
        </p>
      </section>
    </div>
  );
}
