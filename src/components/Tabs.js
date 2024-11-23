// src/components/Tabs.js
'use client';
import { useState } from 'react';
import styles from '@/styles/Tabs.module.css';

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabButtons} role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            role="tab"
            aria-selected={activeTab === tab.label}
            aria-controls={`tabpanel-${index}`}
            id={`tab-${index}`}
            className={`${styles.tabButton} ${activeTab === tab.label ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabs.map((tab, index) =>
          activeTab === tab.label ? (
            <div
              key={tab.label}
              role="tabpanel"
              id={`tabpanel-${index}`}
              aria-labelledby={`tab-${index}`}
              className={styles.content}
            >
              {tab.content}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
