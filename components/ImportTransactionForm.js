import React, { useState } from 'react';
import axios from 'axios';
import { useBackendUrl } from '../context/BackendUrlContext';

const ImportTransactionForm = () => {
  const { backendUrl } = useBackendUrl();
  const [transactionMessage, setTransactionMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const parseTransactionMessage = (message) => {
    const transactions = [];
    const lines = message.trim().split('\n');

    for (let i = 0; i < lines.length; i += 2) {
      const [date, action, quantity, , symbol, , price, total] = lines[i].split('\t');
      transactions.push({
        date,
        action,
        quantity: parseInt(quantity, 10),
        symbol,
        price: parseFloat(price),
        total: parseFloat(total)
      });
    }

    return transactions;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const transactions = parseTransactionMessage(transactionMessage);

      for (const transaction of transactions) {
        await axios.post(`${backendUrl}/api/transaction/1/record`, transaction);
      }

      alert('Transactions imported successfully!');
      setTransactionMessage('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Failed to import transactions. Please try again.');
    }
  };

  return (
    <div style={{ marginBottom: '40px' }}>
      <form onSubmit={handleSubmit}>
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="transactionMessage">
              Transaction Message
            </label>
            <textarea
              id="transactionMessage"
              value={transactionMessage}
              onChange={(e) => setTransactionMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
              placeholder="Paste your transaction message here"
              rows="10"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Import Transactions
          </button>
        </div>
      </form>
      {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
    </div>
  );
};

export default ImportTransactionForm;


