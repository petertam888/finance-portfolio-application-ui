import { useState } from 'react';
import axios from 'axios';

const CheckPortfolio = ({ backendUrl }) => {
  const [userId, setUserId] = useState('');
  const [portfolioInfo, setPortfolioInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${backendUrl}/api/user/${userId}/portfolio`); // Use backendUrl to construct the full API endpoint URL
      setPortfolioInfo(response.data);
    } catch (error) {
      setErrorMessage('Failed to fetch portfolio. Please try again.');
    }
  };

  return (
    <div>
      <h2>Check Portfolio</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <button type="submit">Check Portfolio</button>
      </form>
      {portfolioInfo && (
        <div>
          <h3>Portfolio Info</h3>
          <p>Total Account Amount: {portfolioInfo.totalAccountAmount}</p>
          <p>Cash Amount: {portfolioInfo.cashAmount}</p>
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
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default CheckPortfolio;



