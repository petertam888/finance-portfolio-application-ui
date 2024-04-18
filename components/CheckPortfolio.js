import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useBackendUrl } from '../context/BackendUrlContext';
import PortfolioChart from './PortfolioChart'; // Import the chart component

const CheckPortfolio = () => {
  const { backendUrl } = useBackendUrl();
  const [portfolioInfo, setPortfolioInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPortfolio = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${backendUrl}/api/user/1/portfolio`);
        setPortfolioInfo(response.data);
        setErrorMessage('');
      } catch (error) {
        setErrorMessage('Failed to fetch portfolio. Please try again.');
      }
      setIsLoading(false);
    };

    fetchPortfolio();
  }, [backendUrl]);

  return (
    <div style={{ marginBottom: '40px' }}>
      {isLoading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <p style={{ color: 'red', marginBottom: '20px' }}>{errorMessage}</p>
      ) : portfolioInfo && (
        <div>
          <h3>Portfolio Info</h3>
          <p>Total Account Amount: ${portfolioInfo.totalAccountAmount}</p>
          <p>Cash Amount: ${portfolioInfo.cashAmount}</p>
          <h4>Stocks Info:</h4>
          <ul>
            {portfolioInfo.stocksInfo.map((stock, index) => (
              <li key={index}>
                Stock Code: {stock.stockCode}, Shares: {stock.shares}
              </li>
            ))}
          </ul>
          {console.log(portfolioInfo)} {/* Log portfolioInfo object */}
          <PortfolioChart portfolioInfo={portfolioInfo} />
        </div>
      )}
    </div>
  );
};

export default CheckPortfolio;









