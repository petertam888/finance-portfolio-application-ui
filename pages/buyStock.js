// pages/page1.js

import BuyStockForm from '../components/BuyStockForm';

export default function buyStock({backendUrl}) {
    return (
      <div id="buy" style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '20px' }}>Buy Stocks</h2>
        <BuyStockForm backendUrl={backendUrl} />
      </div>
    );
  }