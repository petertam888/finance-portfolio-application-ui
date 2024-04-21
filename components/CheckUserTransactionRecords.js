import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useBackendUrl } from '../context/BackendUrlContext';

const CheckUserTransactionRecords = () => {
  const { backendUrl } = useBackendUrl();
  const [transactionsInfo, setTransactionsInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${backendUrl}/api/user/1/transaction_records`);
        setTransactionsInfo(response.data);
        setErrorMessage('');
      } catch (error) {
        setErrorMessage('Failed to fetch transaction records. Please try again.');
      }
      setIsLoading(false);
    };

    fetchTransactions();
  }, [backendUrl]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Transaction Records</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <p className="text-red-500 mb-4">{errorMessage}</p>
      ) : transactionsInfo && transactionsInfo.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transactionsInfo.map((transaction, index) => (
            <div key={index}>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-black">
                  <span className="font-semibold text-black">Time:</span> {transaction.time}
                </p>
                <p className="text-black">
                  <span className="font-semibold text-black">Stock Code:</span> {transaction.stockCode}
                </p>
                <p className="text-black">
                  <span className="font-semibold text-black">Stock Price:</span> {transaction.stockPrice}
                </p>
                <p className="text-black">
                  <span className="font-semibold text-black">Shares:</span> {transaction.shares}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No transaction records found.</p>
      )}
    </div>
  );
};

export default CheckUserTransactionRecords;















