// src/components/MermaidChart.js
'use client'; 

import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const MermaidChart = ({ chart }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      try {
        mermaid.initialize({ startOnLoad: false });
        mermaid.init(undefined, chartRef.current);
      } catch (error) {
        console.error('Mermaid initialization failed:', error);
      }
    }
  }, [chart]);

  return (
    <div className="mermaid" ref={chartRef}>
      {chart}
    </div>
  );
};

export default MermaidChart;
