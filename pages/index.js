// pages/index.js
import React from 'react';
import NavBar from '../components/NavBar';
import BuyStockForm from '../components/BuyStockForm';
import AddDepositForm from '../components/AddDepositForm';
import CheckPortfolio from '../components/CheckPortfolio';

const HomePage = () => {
  const backendUrl = "http://localhost:8080"; // Get the backend URL from the configuration
  console.log("Local server started successfully!"); // Log a message to the console

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <NavBar />
      <div id="buy" style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '20px' }}>Buy Stocks</h2>
        <BuyStockForm backendUrl={backendUrl} />
      </div>
      <div id="deposit" style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '20px' }}>Add Deposit</h2>
        <AddDepositForm backendUrl={backendUrl} />
      </div>
      <div id="portfolio">
        <h2 style={{ marginBottom: '20px' }}>Check Portfolio</h2>
        <CheckPortfolio backendUrl={backendUrl} />
      </div>
    </div>
  );
};

export default HomePage;



