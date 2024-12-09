// src/components/HoverChart.js

import { useState } from 'react';
import styles from '@/styles/HoverChart.module.css';
import { Bar, Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';

export default function HoverChart({ children, chartData, chartOptions, chartType = 'bar' }) {
  const [isHovered, setIsHovered] = useState(false);

  // Choose the chart component based on the chartType prop
  const ChartComponent = chartType === 'pie' ? Pie : Bar;

  // Register the plugin (if not globally registered)
  Chart.register(ChartDataLabels);

  return (
    <span
      className={styles.hoverChartWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      role="button"
      tabIndex="0"
      aria-haspopup="true"
      aria-expanded={isHovered}
    >
      {children}
      {isHovered && (
        <span className={styles.chartPopover} role="dialog" aria-label="Sentiment Chart">
          <ChartComponent data={chartData} options={chartOptions} />
        </span>
      )}
    </span>
  );
}
