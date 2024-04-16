// pages/index.js
import React from 'react';
import BuyStockForm from '../components/BuyStockForm';
import AddDepositForm from '../components/AddDepositForm';
import CheckPortfolio from '../components/CheckPortfolio';

const HomePage = () => {
  const backendUrl = "http://localhost:8080"; // Get the backend URL from the configuration
  console.log("Local server started successfully!"); // Log a message to the console

  return (
    <div>
      <BuyStockForm backendUrl="{backendUrl}" /> {/* Pass the backend URL to components */}
      <AddDepositForm backendUrl={backendUrl} />
      <CheckPortfolio backendUrl="{backendUrl}" />
    </div>
  );
};

export default HomePage;

