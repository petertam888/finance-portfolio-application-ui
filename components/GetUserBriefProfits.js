import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useBackendUrl } from '../context/BackendUrlContext';

const GetUserBriefProfits = () => {
  const { backendUrl } = useBackendUrl();
  const [profitsInfo, setProfitsInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProfits = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${backendUrl}/api/analysis/1/brief_profits`);
        setProfitsInfo(response.data);
        setErrorMessage('');
      } catch (error) {
        setErrorMessage('Failed to fetch profit information. Please try again.');
      }
      setIsLoading(false);
    };

    fetchProfits();
  }, [backendUrl]);

  return (
    <div className="container mx-auto px-4 py-8">
      {isLoading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <p className="text-red-500 mb-4">{errorMessage}</p>
      ) : profitsInfo ? (
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Profit Information</h2>
          <p className="text-black">
            <span className="font-semibold text-black">YoY:</span> {(profitsInfo.yoy * 100).toFixed(2)} %
          </p>
          <p className="text-black">
            <span className="font-semibold text-black">Account Profit:</span> {(profitsInfo.accountProfit * 100).toFixed(2)} %
          </p>
          <p className="text-black">
            <span className="font-semibold text-black">Estimated QQQ Profit:</span> {(profitsInfo.estimatedQQQProfit * 100).toFixed(2)} %
          </p>
          <p className="text-black">
            <span className="font-semibold text-black">Estimated TQQQ Profit:</span> {(profitsInfo.estimatedTQQQProfit * 100).toFixed(2)} %
          </p>
        </div>
      ) : (
        <p>No profit information found.</p>
      )}
    </div>
  );
};

export default GetUserBriefProfits;


