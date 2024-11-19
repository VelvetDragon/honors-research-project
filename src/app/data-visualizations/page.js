// src/app/data-visualizations/page.js
'use client';

import styles from '@/styles/DataVisualizations.module.css';
import { useState, useEffect } from 'react';
import DialoguesChart from '@/components/DialoguesChart';
import moviesData from '@/data/movies.json';
import dialoguesData from '@/data/dialoguesData.json';
import AnimatedSection from '@/components/AnimatedSection';

export default function DataVisualizations() {
  const [selectedFilm, setSelectedFilm] = useState('all');
  const [selectedCharacter, setSelectedCharacter] = useState('all');
  const [selectedSentiment, setSelectedSentiment] = useState('all');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let data = [];

    if (selectedFilm === 'all') {
      Object.values(dialoguesData).forEach((filmData) => {
        data = data.concat(filmData);
      });
    } else {
      data = dialoguesData[selectedFilm] || [];
    }

    // Further filter by sentiment
    if (selectedSentiment !== 'all') {
      data = data.map(scene => ({
        ...scene,
        sentiment: selectedSentiment
      }));
    }

    setFilteredData(data);
  }, [selectedFilm, selectedCharacter, selectedSentiment]);

  return (
    <section className={styles.visualizations}>
      <h1>Data Visualizations</h1>
      <AnimatedSection>
        <div className={styles.filters}>
          <label htmlFor="film">Film:</label>
          <select id="film" value={selectedFilm} onChange={(e) => setSelectedFilm(e.target.value)}>
            <option value="all">All</option>
            {moviesData.map((movie) => (
              <option key={movie.slug} value={movie.slug}>{movie.title}</option>
            ))}
          </select>

          <label htmlFor="character">Character:</label>
          <select id="character" value={selectedCharacter} onChange={(e) => setSelectedCharacter(e.target.value)}>
            <option value="all">All</option>
            {/* Dynamically populate characters based on selectedFilm */}
            {selectedFilm !== 'all' && moviesData.find(m => m.slug === selectedFilm)?.characters.map((char) => (
              <option key={char.name} value={char.name}>{char.name}</option>
            ))}
          </select>

          <label htmlFor="sentiment">Sentiment:</label>
          <select id="sentiment" value={selectedSentiment} onChange={(e) => setSelectedSentiment(e.target.value)}>
            <option value="all">All</option>
            <option value="positive">😊 Positive</option>
            <option value="neutral">😐 Neutral</option>
            <option value="negative">😡 Negative</option>
          </select>
        </div>
        <div className={styles.charts}>
          {/* Example Chart */}
          <DialoguesChart data={filteredData} />
          {/* Add more charts as needed */}
        </div>
      </AnimatedSection>
    </section>
  );
}
