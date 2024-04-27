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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Portfolio Detail</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <p className="text-red-500 mb-4">{errorMessage}</p>
      ) : portfolioInfo && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Account Summary</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-black"><span className="font-semibold text-black">Total Account Amount:</span> ${portfolioInfo.totalAccountAmount}</p>
              <p className="text-black"><span className="font-semibold text-black">Cash Amount:</span> ${portfolioInfo.cashAmount}</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Stocks Info</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <ul>
                {portfolioInfo.stocksInfo.map((stock, index) => (
                  <li key={index} className="mb-2">
                    <p className="text-black">
                      <span className="font-semibold text-black">Stock Code:</span> {stock.stockCode} | <span className="font-semibold text-black">Shares:</span> {stock.shares}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-2">
            <PortfolioChart portfolioInfo={portfolioInfo} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckPortfolio;















