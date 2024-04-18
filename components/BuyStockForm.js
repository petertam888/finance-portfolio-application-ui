import React, { useState } from 'react';
import axios from 'axios';
import { useBackendUrl } from '../context/BackendUrlContext';
import { useRouter } from 'next/router';


const BuyStockForm = () => {
  const router = useRouter();
  const {backendUrl} = useBackendUrl();
  const [stockCode, setStockCode] = useState('');
  const [shares, setShares] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`${backendUrl}/api/transaction/1/buy/${stockCode}/${shares}`);
      alert('Stock bought successfully!');
      router.push('/'); // Navigate to the home page
    } catch (error) {
      setErrorMessage('Failed to buy stock. Please try again.');
    }
  };

  return (
    <div style={{ marginBottom: '40px' }}>
      <h2>Buy Stock</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block' }}>Stock Code:</label>
          <input type="text" value={stockCode} onChange={(e) => setStockCode(e.target.value)} style={{ width: '100%', padding: '8px', color: 'black', backgroundColor: '#f4f4f4', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block' }}>Shares:</label>
          <input type="number" value={shares} onChange={(e) => setShares(e.target.value)} style={{ width: '100%', padding: '8px', color: 'black', backgroundColor: '#f4f4f4', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>
        <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Buy</button>
      </form>
      {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
    </div>
  );
};

export default BuyStockForm;


