import React, { useState } from 'react';
import axios from 'axios';
import { useBackendUrl } from '../context/BackendUrlContext';

const ImportTransactionPage = () => {
  const { backendUrl } = useBackendUrl();
  const [transactionMessage, setTransactionMessage] = useState('');
  const [parsedTransactions, setParsedTransactions] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const parseTransactionMessage = (message) => {
    const transactions = [];
    const lines = message.trim().split('\n');

    for (let i = 1; i < lines.length; i += 2) {
      const [date, action, quantity, description] = lines[i].split('\t');
      const [settlementDate, symbol, accountType, price, total] = lines[i + 1].split('\t');

      transactions.push({
        transactionDate: date.trim(),
        symbol: symbol.trim(),
        transactionType: action.trim(),
        price: parseFloat(price.trim()),
        quantity: parseFloat(quantity.trim()),
      });
    }

    return transactions;
  };

  const handlePreview = () => {
    try {
      const transactions = parseTransactionMessage(transactionMessage);
      setParsedTransactions(transactions);
      setIsPreviewVisible(true);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Failed to parse transactions. Please check the format.');
    }
  };

  const handleConfirm = async () => {
    try {
      for (const transaction of parsedTransactions) {
        const { transactionDate, symbol, transactionType, price, quantity } = transaction;
        const [month, day, year] = transactionDate.split('/').map(part => part.padStart(2, '0'));

        const adjustedQuantity = transactionType.toLowerCase() === 'bought' ? Math.abs(quantity) : -Math.abs(quantity);

        await axios.get(`${backendUrl}/api/transaction/1/record/${year}_${month}_${day}/${symbol}/${price}/${adjustedQuantity}`);
      }
      alert('Transactions imported successfully!');
      setTransactionMessage('');
      setParsedTransactions([]);
      setIsPreviewVisible(false);
      setErrorMessage('');
    } catch (error) {
      console.error('Error importing transactions:', error);
      setErrorMessage('Failed to import transactions. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Import Transactions</h1>
      <div className="mb-4">
        <textarea
          value={transactionMessage}
          onChange={(e) => setTransactionMessage(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
          placeholder="Paste your transaction message here"
          rows="10"
        />
      </div>
      <button
        onClick={handlePreview}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mb-4"
      >
        Preview Transactions
      </button>
      {isPreviewVisible && (
        <div className="bg-blue-900 p-4 rounded-lg mb-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-white">Transaction Preview</h2>
          {parsedTransactions.map((transaction, index) => (
            <div key={index} className="mb-2 text-white">
              <p><strong>Transaction Date:</strong> {transaction.transactionDate}</p>
              <p><strong>Symbol:</strong> {transaction.symbol}</p>
              <p><strong>Transaction:</strong> {transaction.transactionType}</p>
              <p><strong>Price:</strong> {transaction.price}</p>
              <p><strong>Quantity:</strong> {transaction.quantity}</p>
            </div>
          ))}
          <button
            onClick={handleConfirm}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-4"
          >
            Confirm and Import
          </button>
        </div>
      )}
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
};

export default ImportTransactionPage; 