import React, { useState } from 'react';
import axios from 'axios';

const CheckPortfolio = ({ backendUrl }) => {
  const [userId, setUserId] = useState('');
  const [portfolioInfo, setPortfolioInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(`${backendUrl}/api/user/${userId}/portfolio`);
      setPortfolioInfo(response.data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Failed to fetch portfolio. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div style={{ marginBottom: '40px' }}>
      <h2>Check Portfolio</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block' }}>User ID:</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} style={{ width: '100%', padding: '8px', color: 'black', backgroundColor: '#f4f4f4', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>
        <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {isLoading ? 'Loading...' : 'Check Portfolio'}
        </button>
      </form>
      {errorMessage && <p style={{ color: 'red', marginBottom: '20px' }}>{errorMessage}</p>}
      {portfolioInfo && (
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
        </div>
      )}
    </div>
  );
};

export default CheckPortfolio;






