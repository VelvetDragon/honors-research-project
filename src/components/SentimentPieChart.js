// src/components/SentimentPieChart.js
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from '@/styles/SentimentPieChart.module.css';

const COLORS = ['#FFD700', '#ADD8E6', '#FFB6C1'];

const SentimentPieChart = ({ data }) => {
  const pieData = [
    { name: 'Positive 😊', value: data.positive },
    { name: 'Neutral 😐', value: data.neutral },
    { name: 'Negative 😡', value: data.negative },
  ];

  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SentimentPieChart;
