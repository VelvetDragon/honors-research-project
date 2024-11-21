// src/components/DialoguesChart.js
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import styles from '@/styles/DialoguesChart.module.css';

const DialoguesChart = ({ data }) => {
  const handleClick = (data, index) => {
    
    alert(`Scene: ${data.scene}\nPositive: ${data.positive}\nNeutral: ${data.neutral}\nNegative: ${data.negative}`);
  };

  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="scene" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="positive" fill="var(--accent-color-1)" name="😊 Positive" onClick={handleClick} />
          <Bar dataKey="neutral" fill="var(--accent-color-2)" name="😐 Neutral" onClick={handleClick} />
          <Bar dataKey="negative" fill="var(--accent-color-3)" name="😡 Negative" onClick={handleClick} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DialoguesChart;
