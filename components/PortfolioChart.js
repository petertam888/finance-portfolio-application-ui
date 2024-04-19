import React from 'react';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

// Utility function to generate random colors
const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 0.5)`;
};

const PortfolioChart = ({ portfolioInfo }) => {
  if (!portfolioInfo) {
    return <p>No data available for the portfolio.</p>;
  }

  // Extract data from portfolioInfo
  const stocksInfo = portfolioInfo.stocksInfo;
  const totalAccountAmount = portfolioInfo.totalAccountAmount;
  const cashAmount = portfolioInfo.cashAmount;

  // Calculate the value of each stock
  const stockValues = stocksInfo.map(stock => stock.stockPrice * stock.shares);

  // Calculate the total value of all stocks
  const totalStockValue = stockValues.reduce((total, value) => total + value, 0);

  // Calculate the composition of each stock in the portfolio
  const stockCompositions = stocksInfo.map((stock, index) => {
    const value = stockValues[index];
    return ((value / totalAccountAmount) * 100).toFixed(2);
  });

  // Calculate the composition of cash in the portfolio
  const cashComposition = ((cashAmount / totalAccountAmount) * 100).toFixed(2);

  // Define labels and data for the chart
  const labels = [...stocksInfo.map(stock => stock.stockCode), 'Cash'];
  const compositions = [...stockCompositions, cashComposition];

  // Define colors for stocks and cash
  const colors = labels.map(label => (label === 'Cash' ? 'rgba(128, 128, 128, 0.5)' : generateRandomColor()));

  // Define chart data
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Portfolio Composition',
        data: compositions,
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('0.5', '1')),
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          fontSize: 12 // Increase legend font size
        }
      },
      title: {
        display: true,
        text: 'Portfolio Composition',
      },
    },
  };

  return (
    <div style={{ marginTop: '10px', width: '50%', minWidth: '300px' }}>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PortfolioChart;






















