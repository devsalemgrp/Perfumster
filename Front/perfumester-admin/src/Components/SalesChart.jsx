// SalesChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const SalesChart = () => {
  // Sample sales data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'white',
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Over Time',
      },
    },
    scales: {
        x: {
          grid: {
            display: false, // Set to false to hide the grid
            color: 'white', // Customize the grid line color
            
          },
        },
        y: {
          grid: {
            display: true, // Set to false to hide the grid
            color: 'white', // Customize the grid line color
          },
        },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesChart;
