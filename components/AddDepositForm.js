import React, { useState } from 'react';
import axios from 'axios';
import { useBackendUrl } from '../context/BackendUrlContext';

const AddDepositForm = () => {
  const { backendUrl } = useBackendUrl();
  const [cashAmount, setCashAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`${backendUrl}/api/user/1/deposit/${cashAmount}`);
      alert('Deposit added successfully!');
    } catch (error) {
      setErrorMessage('Failed to add deposit. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="cashAmount">Deposit</label>
          <input
            id="cashAmount"
            type="number"
            value={cashAmount}
            onChange={(e) => setCashAmount(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
            placeholder="Enter deposit amount"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Add Deposit
        </button>
      </form>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
};

export default AddDepositForm;








