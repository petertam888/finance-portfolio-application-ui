import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useBackendUrl } from '../context/BackendUrlContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button"

const CheckUserTransactionRecords = () => {
  const { backendUrl } = useBackendUrl();
  const [transactionsInfo, setTransactionsInfo] = useState(null);
  const [filteredTransactions, setFilteredTransactions] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStock, setSelectedStock] = useState('All');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [uniqueStockCodes, setUniqueStockCodes] = useState([]);
  const [clearTimeScope, setClearTimeScope] = useState(false);


  const router = useRouter();

  const navigateToHome = () => {
    router.push('/');
  };

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

  useEffect(() => {
    // Extract unique stock codes from transactionsInfo
    if (transactionsInfo) {
      const uniqueCodes = [...new Set(transactionsInfo.map(transaction => transaction.stockCode))];
      setUniqueStockCodes(uniqueCodes);
    }
  }, [transactionsInfo]);

  useEffect(() => {
    // Filter transactions based on selected stock code and time scope
    if (transactionsInfo && !clearTimeScope) {
      let filtered = transactionsInfo;

      if (selectedStock !== 'All') {
        filtered = filtered.filter(transaction => transaction.stockCode === selectedStock);
      }

      if (startDate && endDate) {
        filtered = filtered.filter(transaction => {
          const transactionDate = new Date(transaction.time);
          return transactionDate >= startDate && transactionDate <= endDate;
        });
      }

      setFilteredTransactions(filtered);
    } else {
      setFilteredTransactions(transactionsInfo);
    }
  }, [selectedStock, startDate, endDate, transactionsInfo, clearTimeScope]);

  const handleSelectChange = (e) => {
    setSelectedStock(e.target.value);
  };

  const handleClearTimeScopeChange = () => {
    setStartDate(null);
    setEndDate(null);
    setClearTimeScope(!clearTimeScope);
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Page title and Back to Home button */}
      <div className="flex items-center justify-between bg-blue-600 text-white px-4 py-2">
        <h1 className="text-2xl font-bold">Transaction Records</h1>
        <button onClick={navigateToHome} className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
          Back to Home
        </button>
      </div>
      <div className="mb-4">
        <label htmlFor="stockSelect" className="font-semibold mr-2" style={{ color: 'white' }} > Search Scope:</label>
        <select
          id="stockSelect"
          value={selectedStock}
          onChange={handleSelectChange}
          className="py-2 px-4 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:border-blue-500"
        >
          <option value="All">All</option>
          {uniqueStockCodes.map((stockCode, index) => (
            <option key={index} value={stockCode}>{stockCode}</option>
          ))}
        </select>
      </div>
      <div className="mb-4 flex items-center" >
        <div className="mr-2">
        <label className="font-semibold mr-2" style={{ color: 'white' }} > Time Range:</label>
          <label className="font-semibold mr-2">From:</label>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="From"
            dateFormat="yyyy-MM-dd"
            fixedWidth // Fixing the width
            className="text-black" // Improving date visibility
          />
        </div>
        <div>
          <label className="font-semibold mr-2">To:</label>
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            placeholderText="To"
            dateFormat="yyyy-MM-dd"
            fixedWidth // Fixing the width
            className="text-black" // Improving date visibility
            minDate={startDate}
          />
        </div>
        <div className="ml-4">
          <button onClick={handleClearTimeScopeChange} className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mt-4">
            Reset Time Scope
          </button>
        </div>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <p className="text-red-500 mb-4">{errorMessage}</p>
      ) : filteredTransactions && filteredTransactions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTransactions.map((transaction, index) => (
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
        <p>No transaction records found for selected criteria.</p>
      )}
    </div>
  );
};

export default CheckUserTransactionRecords;









