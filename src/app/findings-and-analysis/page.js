'use client';

import Image from 'next/image';
import styles from '@/styles/FindingsAndAnalysis.module.css';
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
      <section className={styles.backgroundSection}>
        <Image
          src="/images/about-background.jpg"
          alt="Abstract representation of research findings and analysis"
          fill
          style={{ objectFit: 'cover', opacity: 0.5 }}
          priority
        />
        <div className={styles.overlay}>
          <h1>Findings and Analysis</h1>
          <p>
            This section dives into the <span>emotional patterns</span> identified in Disney films,
            shedding light on the <span>sentiment trends</span>, their <span>evolution</span> over time,
            and their implications for storytelling and representation.
          </p>
        </div>
      </section>



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
          By examining selected Disney films (<em>Mulan</em>, <em>Pocahontas</em>, <em>Aladdin</em>, <em>Coco</em>, <em>The Princess and the Frog</em>), I observed distinct emotional trends in character dialogues. These patterns highlight how emotional tones contribute to storytelling, character development, and cultural representation.
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
          <strong>Analysis:</strong> The use of neutral sentiment shows a strategy to balance strong emotions with clear, simple dialogues that make the story easier to follow.
        </p>
        <p className={styles.implications}>
          <strong>Implications:</strong> Recognizing neutral sentiment as a structural tool can guide future scriptwriting, ensuring that emotional highlights stand out against a stable narrative foundation.
        </p>

        <h4 className={styles.subSubSectionTitle}>1.2. Protagonists and Positive Sentiment</h4>
        <p className={styles.intro}>
          Protagonists across Disney films consistently show a balance of positive, neutral, and negative sentiments, with a mild positive bias that underscores their roles as moral compasses and aspirational figures.
        </p>
        <p className={styles.intro}>
          <HoverChart
            chartData={{
              labels: ['Positive', 'Neutral', 'Negative'],
              datasets: [
                {
                  data: [33.76, 44.22, 22.02], // Overall averages for protagonist sentiment distribution
                  backgroundColor: ['#a6f2a6', '#79b4ed', '#f1a6a6'],
                  hoverBackgroundColor: ['#66bb6a', '#ffee58', '#e57373'],
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
                legend: { display: "top" },
                title: { display: true, text: 'Overall Protagonist Sentiment Distribution' },
                datalabels: {
                  display: true,
                  color: '#000',
                },
              },
            }}
            chartType="pie"
          >
            Protagonists
          </HoverChart>
          {' '}across films lean towards neutrality (44.2%) and positivity (33.8%), with moderate negative tones (22.0%) to reflect challenges and emotional depth.
        </p>
        <p className={styles.analysis}>
          <strong>Analysis:</strong> The overall trend presents protagonists as balanced and relatable. Neutral tones offer stability and clarity, positive tones build empathy and connection, and negative tones add depth and realism to their journeys.
        </p>
        <p className={styles.implications}>
          <strong>Implications:</strong> These patterns show how protagonists are made to be both inspiring and relatable. Writers create well-rounded characters who connect with audiences while tackling complex challenges. Balancing emotional tones helps strengthen audience engagement and improve storytelling.
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
          In the 1990s, mostly neutral tones (~49.75%) brought stability to stories, using clear dialogues to reinforce traditional roles. By the 2010s, films like <em>Coco </em> used more positive tones (~40%) and less neutrality, focusing on emotional connection and representation. Negative tones (~20%) stayed consistent but became more nuanced, adding depth to villains and complex plots. This change shows Disney’s shift toward blending tradition with modern storytelling to create authentic and uplifting narratives.
        </p>
        <p className={styles.implications}>
          <strong>Implications: </strong>
          Recognizing these shifts provides valuable insights for modern creators. As Eisenhauer notes, Disney's linguistic and tonal choices are not incidental but deliberate, teaching children societal values while subtly reinforcing dominant cultural ideologies <strong><sup><a href="/references/#cite2">[2]</a></sup></strong>.
          <br /><br />
          Modern creators can use these trends to make stories that connect emotionally and promote diversity. Positive tones inspire hope, while thoughtful negative tones add realism and depth. By including cultural perspectives, like Disney has, creators can keep stories relevant and meaningful.
          <br /><br />
          Understanding how language and tone evolve helps creators challenge stereotypes, build empathy, and create stories that reflect human complexity while promoting inclusivity and authenticity.
        </p>
      </section>


      {/* Block 4: Antagonists and Emotional Complexity */}
      <section className={styles.block}>
        <h3 className={styles.blockTitle}>3. Antagonists: More than Just Negative</h3>
        <p className={styles.intro}>
          Antagonists in Disney films show more than just negative sentiment; they also express neutral and positive tones, challenging the stereotype of purely evil villains. On average, they display 29.18% positive sentiment, 38.2% neutral, and 32.6% negative sentiment.
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
                legend: { display: "top" },
                title: { display: false },
                datalabels: { display: true, color: '#000' },
              },
            }}
            chartType="pie"
          >
            Antagonist sentiment
          </HoverChart>
          {" "}reveals a richer emotional palette than stereotypes suggest.
        </p>
        <p className={styles.analysis}>
          <strong>Analysis:</strong> Antagonists in Disney films are more emotionally complex than traditional "villains". For example, 29.18% positive sentiment shows moments of charm, wit, or relatability. The 38.2% neutral sentiment often reflects explanatory dialogue or reflective moments, making these characters feel more realistic and layered.
          This complexity helps audiences understand the motivations and inner conflicts of antagonists, rather than seeing them as one-dimensional villains. It fosters deeper engagement and encourages viewers to think critically about their actions and choices.
        </p>
        <p className={styles.implications}>
          <strong>Implications:</strong> Adding complexity to antagonists can make stories richer and move beyond simple good-versus-evil narratives. By giving antagonists realistic and relatable traits, creators can craft stories that connect with audiences on a deeper level.
          <br /><br />
          This approach aligns with modern storytelling, which aims to humanize "bad" characters, offering fresh perspectives and enriching the story’s moral depth. Such portrayals encourage empathy and critical thinking, making the narrative more meaningful and memorable for viewers of all ages.
        </p>
      </section>


      {/* Block 5: Gender-Based Sentiment Differences */}
      <section className={styles.block}>
        <h3 className={styles.blockTitle}>4. Gender-Based Emotional Patterns</h3>
        <p className={styles.intro}>
          Gender plays an important role in shaping emotional expression in Disney films. Male and female characters demonstrate distinct sentiment patterns, with subtle but meaningful differences. While male characters tend to show higher neutrality, female characters exhibit a broader emotional range, reflecting evolving narratives that embrace multidimensional portrayals.
        </p>
        <p className={styles.intro}>
        <a href='https://link.springer.com/article/10.1007/s11199-011-9930-7' target='_blank' className='hotlink_about'> <span> Research </span></a> indicates that princesses in early Disney films frequently embodied traditionally feminine traits, such as affection and fearfulness, with limited assertiveness typically directed at animals or non-human characters. Over time, however, later princesses, like Mulan and Tiana, began to exhibit traits such as bravery and independence, alongside traditional femininity, reflecting societal shifts in gender expectations.<strong><sup><a href="/references/#cite3">[3]</a></sup></strong>
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
          The data shows subtle but meaningful differences in sentiment between genders. Male characters have higher neutrality (~50.6%), often due to their roles in delivering explanatory or action-focused dialogue. Female characters, on the other hand, display a more balanced emotional range, with lower neutrality (~44.7%) and negativity (~17.9%).These findings echo studies indicating that princesses increasingly incorporate traditionally masculine traits like bravery and athleticism without entirely discarding their feminine qualities.<strong><sup><a href="/references/#cite3">[3]</a></sup></strong>
        </p>
        <p className={styles.implications}>
          <strong>Implications: </strong>
          These findings highlight the importance of emotional variety in character design. Expanding the emotional complexity of female characters allows for more authentic and relatable portrayals that connect with diverse audiences. Similarly, adding emotional depth to male characters can make them more relatable and multidimensional, moving beyond neutral or action-focused roles.
          <br /><br />
          By exploring these patterns, Disney and other storytellers can challenge traditional norms, foster empathy, and reshape cultural expectations for all genders. Balanced emotional representation creates more inclusive and meaningful stories that reflect the complexity of real-life experiences.
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
          Marginalized characters show a balanced emotional distribution, with slightly higher neutrality (~50.68%) and lower positivity (~27.84%). This moderation may reflect narrative tension an effort to add complexity to their roles. <br /><br />
          In contrast, non-marginalized characters show higher positivity (~35.66%) and lower neutrality (~44.66%), often reflecting their narrative privileges or fewer emotional challenges. Their lower negativity (~19.68%) aligns with traditional heroic or aspirational roles.
        </p>
        <p className={styles.implications}>
          <strong>Implications:</strong> Understanding these portrayals helps creators and critics promote fair emotional representation. <br />
          To achieve this, storytellers should give marginalized characters both emotional complexity and higher levels of positivity to highlight empowerment and agency. Similarly, non-marginalized characters should show more emotional vulnerability to make them more relatable and multidimensional.
          <br /><br />
          Balancing emotional expression across characters fosters inclusivity, challenges stereotypes, and creates richer, more authentic stories that connect with diverse audiences.
        </p>
      </section>

      {/* Block 3: Importance of This Research */}
      <section className={styles.block}>
        <h3 className={styles.blockTitle}>6. Importance of This Research</h3>
        <p className={styles.intro}>
        Understanding the emotional tone of Disney dialogues is important because media shapes cultural views on gender, race, and identity. Examining how sentiment aligns with characters’ social identities reveals patterns about who is given emotional freedom, who is shown as hopeful or resilient, and who faces limits on their emotional expressions. These insights help educators, critics, and creators identify areas where representation can improve. They encourage more equitable storytelling that reflects a broader range of human emotions across all demographics.
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
          <strong>Why It Matters:</strong> These patterns are important because films like Disney's shape our ideas of heroism, morality, gender roles, and cultural identity. By examining emotional patterns, we can promote more thoughtful character design, informed critique, and mindful audience engagement. This research shows that sentiment analysis can highlight biases, strengths, and opportunities for improvement in media representation. Understanding these emotional trends helps create more inclusive, meaningful, and impactful stories for audiences worldwide.
        </p>
      </section>
    </div>
  );
}
