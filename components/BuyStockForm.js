import React, { useState } from 'react';
import axios from 'axios';
import { useBackendUrl } from '../context/BackendUrlContext';

const BuyStockForm = () => {
  const { backendUrl } = useBackendUrl();
  const [stockCode, setStockCode] = useState('');
  const [shares, setShares] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [stockPrice, setStockPrice] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`${backendUrl}/api/transaction/1/record/${year}_${month}_${day}/${stockCode}/${stockPrice}/${shares}`);
      alert('Stock bought successfully!');
      setStockCode('');
      setShares('');
      setYear('');
      setMonth('');
      setDay('');
      setStockPrice('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Failed to buy stock. Please try again.');
    }
  };

  return (
    <div style={{ marginBottom: '40px' }}>
      <form onSubmit={handleSubmit}>
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="AddStockRecord">Transaction Date</label>
            <div className="flex">
              <input
                id="transactionYear"
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-1/3 mr-1 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
                placeholder="YYYY"
              />
              <input
                id="transactionMonth"
                type="number"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-1/3 mr-1 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
                placeholder="MM"
              />
              <input
                id="transactionDay"
                type="number"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-1/3 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
                placeholder="DD"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="AddStockRecord">Stock Code</label>
            <input
              id="AddStockRecord"
              type="text"
              value={stockCode}
              onChange={(e) => setStockCode(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
              placeholder="Enter stock code"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="AddStockPriceRecord">Stock Price</label>
            <input
              id="AddStockPriceRecord"
              type="number"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
              placeholder="Enter stock price"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="SetStockShares">Shares</label>
            <input
              id="SetStockShares"
              type="number"
              value={shares}
              onChange={(e) => setShares(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
              placeholder="Enter shares"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Add Transaction Record
          </button>
        </div>
      </form>
      {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
    </div>
  );
};

export default BuyStockForm;



