import React, { useState } from 'react';
import axios from 'axios';
import { useBackendUrl } from '../context/BackendUrlContext';

const AddDepositForm = () => {
  const {backendUrl} = useBackendUrl();
  const [userId, setUserId] = useState('');
  const [cashAmount, setCashAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`${backendUrl}/api/user/${userId}/deposit/${cashAmount}`);
      alert('Deposit added successfully!');
    } catch (error) {
      setErrorMessage('Failed to add deposit. Please try again.');
    }
  };

  return (
    <div style={{ marginBottom: '40px' }}>
      <h2>Add Deposit</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block' }}>User ID:</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} style={{ width: '100%', padding: '8px', color: 'black', backgroundColor: '#f4f4f4', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block' }}>Cash Amount:</label>
          <input type="number" value={cashAmount} onChange={(e) => setCashAmount(e.target.value)} style={{ width: '100%', padding: '8px', color: 'black', backgroundColor: '#f4f4f4', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>
        <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add Deposit</button>
      </form>
      {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
    </div>
  );
};

export default AddDepositForm;




