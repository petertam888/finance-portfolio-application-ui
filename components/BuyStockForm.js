import { useState } from 'react';
import axios from 'axios';

const BuyStockForm = () => {
  const [userId, setUserId] = useState('');
  const [stockCode, setStockCode] = useState('');
  const [shares, setShares] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`/api/transaction/${userId}/buy/${stockCode}/${shares}`);
      alert('Stock bought successfully!');
    } catch (error) {
      setErrorMessage('Failed to buy stock. Please try again.');
    }
  };

  return (
    <div>
      <h2>Buy Stock</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div>
          <label>Stock Code:</label>
          <input type="text" value={stockCode} onChange={(e) => setStockCode(e.target.value)} />
        </div>
        <div>
          <label>Shares:</label>
          <input type="number" value={shares} onChange={(e) => setShares(e.target.value)} />
        </div>
        <button type="submit">Buy</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default BuyStockForm;
